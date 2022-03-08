const express = require("express");
const app = express();

app.use(express.json());

app.use((req, res, next) => {
  console.log("Request received");
  next();
});

const students = [
  {
    name: "Mbappe",
  },
  {
    name: "Presnel",
  },
  {
    name: "Lionel",
  },
  {
    name: "Neymar",
  },
];

app.get("/students", (req, res) => {
  res.send(students);
});

app.post("/students", (req, res) => {
  students.push({
    name: req.name,
  });
  res.send(students);
});

app.listen(8000, () => {
  console.log("Listening on port 8000");
});