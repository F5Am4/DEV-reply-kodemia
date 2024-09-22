const User = require("../models/user");

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
  debugger;
  console.log("Received login request:", { email, password }); // Agregar esta línea
  try {
    const user = await User.findOne({ email, password });
    if (user) {
      res.status(200).json({ message: "Login successful" });
    } else {
      console.log("Login failed: Invalid credentials"); // Agregar esta línea
      res.status(401).send("Invalid credentials");
    }
  } catch (error) {
    console.error("Error during login:", error); // Agregar esta línea
    res.status(500).send(error);
  }
});
