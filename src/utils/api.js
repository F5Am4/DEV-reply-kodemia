const User = require("./models/User");

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
      res.status(200).json({ token: "fake-jwt-token" });
    } else {
      res.status(401).send("Invalid credentials");
    }
  } catch (error) {
    res.status(500).send(error);
  }
});
