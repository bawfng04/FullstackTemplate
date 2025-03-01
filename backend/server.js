require("dotenv").config();
const express = require("express");
const cors = require("cors");
const PORT = process.env.PORT || 8000;

// import routes
const exampleRoute = require("./src/routes/examplesRoute");
const registerRoute = require("./src/routes/registerRoute");

const app = express();
app.use(cors());
app.use(express.json());

// use routes
app.use("/", exampleRoute);
app.use("/", registerRoute);

app.get("/", (req, res) => {
  res.json({ message: "Hello from backend!" });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
