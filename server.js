const express = require("express");
const connectDB = require("./config/db");
const app = express();
const PORT = process.env.PORT || 8080;

// Connect Database
connectDB();
app.use(express.json({ extended: false }));

app.get("/", (req, res) => {
  res.send("The API is working!");
});

// Define Routes
app.use("/api/auth", require("./routes/api/auth"));
app.use("/api/posts", require("./routes/api/posts"));
app.use("/api/profile", require("./routes/api/profile"));
app.use("/api/users", require("./routes/api/users"));

app.listen(PORT, () => {
  console.log(`Server started on ${PORT}`);
});
