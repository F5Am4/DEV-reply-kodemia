import express from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import cors from "cors";
import helmet from "helmet";
import dotenv from "dotenv";
import path from "path";
import { fileURLToPath } from "url";
import { generateToken, verifyToken } from "./auth";

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(helmet());
app.use(bodyParser.json());

// Conexión a la base de datos
const dbUser = process.env.DB_USER;
const dbPassword = process.env.DB_PASSWORD;
const dbHost = process.env.DB_HOST;
const dbName = process.env.DB_NAME;

mongoose.connect(`mongodb+srv://${dbUser}:${dbPassword}@${dbHost}/${dbName}`, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Definición del esquema y modelo de usuario
const userSchema = new mongoose.Schema({
  email: String,
  password: String,
});

const User = mongoose.model("User", userSchema);

// Rutas de la API
app.post("/api/signup", async (req, res) => {
  const { email, password } = req.body;
  const newUser = new User({ email, password });
  try {
    await newUser.save();
    res.status(201).send("User created");
  } catch (error) {
    res.status(400).send(error);
  }
});

app.post("/api/login", async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email, password });
    if (user) {
      const token = generateToken(user);
      res.status(200).json({ token });
    } else {
      res.status(401).send("Invalid credentials");
    }
  } catch (error) {
    res.status(500).send(error);
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
});
