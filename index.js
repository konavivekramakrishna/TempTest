const express = require("express");
const app = express();
const port = 3000;

// Middleware to parse form data
app.use(express.urlencoded({ extended: true }));

// Set EJS as the templating engine
app.set("view engine", "ejs");

// Route to display the form
app.get("/", (req, res) => {
  res.render("index");
});

// Route to handle form submission
app.post("/submit", (req, res) => {
  const name = req.body.name;
  res.render("index", { name: name });
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
