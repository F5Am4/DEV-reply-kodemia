import express from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import cors from "cors";
import helmet from "helmet";
import dotenv from "dotenv";
import path from "path";
import { fileURLToPath } from "url";
import cookieParser from "cookie-parser";

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express(express.static(path.join(__dirname, "public")));
const port = process.env.PORT || 5000;

//Middlewares
app.use(
  cors({
    origin: "*",
  })
);
app.use(helmet());
app.use(bodyParser.json());
app.use(cookieParser());

// Conexión a la base de datos
const dbUser = process.env.DB_USER;
const dbPassword = process.env.DB_PASSWORD;
const dbHost = process.env.DB_HOST;
const dbName = process.env.DB_NAME;

mongoose
  .connect(`mongodb+srv://${dbUser}:${dbPassword}@${dbHost}/${dbName}`, {
    // useNewUrlParser: true,
    // useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.error("MongoDB connection error:", err);
  });

const userSchema = new mongoose.Schema({
  email: String,
  password: String,
  username: String,
});

const postSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  postText: {
    type: String,
    required: true,
  },
  tags: {
    type: [String],
    required: true,
  },
  username: {
    type: String,
    required: true,
  },
  creationDate: {
    type: Date,
    default: Date.now, // Establece la fecha y hora actuales por defecto
  },
});

const User = mongoose.model("User", userSchema);

// Rutas de la API
app.post("/api/signup", async (req, res) => {
  const { email, password } = req.body;
  const username = email.split("@")[0];
  const newUser = new User({ email, password, username });
  try {
    await newUser.save();
    res.cookie(
      "auth",
      JSON.stringify({ authenticated: true, email: email, username: username }),
      { httpOnly: true, maxAge: 3600000 }
    ); // 1 hora
    res.status(201).send("User created");
  } catch (error) {
    res.status(400).send(error);
  }
});

app.post("/api/login", async (req, res) => {
  const { email, password } = req.body;
  try {
    const username = email.split("@")[0];
    const user = await User.findOne({ email, password, username });
    if (user) {
      // Creación de cookie, objeto que tiene los datos de la sesión y permite la consulta de los mismos mientras esté viva
      // Establecer una cookie para la sesión con el correo del usuario
      res.cookie(
        "auth",
        JSON.stringify({
          authenticated: true,
          email: user.email,
          username: user.username,
        }),
        { httpOnly: true, maxAge: 3600000 }
      ); // 1 hora
      res.status(200).json({ message: "Login successful" });
    } else {
      res.status(401).send("Invalid credentials");
    }
  } catch (error) {
    res.status(500).send(error);
  }
});

//Método que elimina la cookie de sesión
app.post("/api/logout", (req, res) => {
  res.clearCookie("auth");
  res.status(200).send("Logged out");
});

//Metodo que valida la existencia de una cookie de sesión válida
app.get("/api/checkAuth", (req, res) => {
  const authCookie = req.cookies.auth;
  if (authCookie) {
    try {
      const { email } = JSON.parse(authCookie);
      res.status(200).json({ email });
    } catch (error) {
      res.status(401).send("Not authenticated");
    }
  } else {
    res.status(401).send("Not authenticated");
  }
});

const Post = mongoose.model("Post", postSchema);

// Endpoint para crear una publicación
app.post("/api/createPost", async (req, res) => {
  const { title, postText, tags } = req.body;
  const authCookie = req.cookies.auth; // Obtén la cookie de la solicitud

  if (!title || !postText || !tags) {
    return res.status(400).json({ error: "Missing required fields" });
  }

  //Valida una cookie existente para obtener el username y lo agrega al post
  if (authCookie) {
    try {
      const { username } = JSON.parse(authCookie);
      const newPost = new Post({ title, postText, tags, username: username });
      await newPost.save();
      res.status(201).json({ message: "Post created" });
    } catch (error) {
      console.log("Error al crear el post:", error);
      res.status(400).json({ error: error.message });
    }
  } else {
    res.status(401).json({ error: "Not authenticated" });
  }
});

// Endpoint para obtener todos los posts
app.get("/api/getPosts", async (req, res) => {
  try {
    const posts = await Post.find({});
    res.status(200).json(posts);
  } catch (error) {
    console.error("Error al obtener los posts:", error);
    res.status(500).json({ error: error.message });
  }
});

// Middleware para servir archivos estáticos
app.use(express.static(path.join(__dirname, "public")));

// Rutas para servir la aplicación React
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

// Iniciar el servidor
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
  console.error(`mongodb+srv://${dbUser}:${dbPassword}@${dbHost}/${dbName}`);
});
