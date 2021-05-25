import express from "express";
const app = express.Router();

app.get("/users", (req, res) => {
  res.status(200).send({
    success: true,
    users: []
  });
});

app.get("/users/:id", (req, res) => {
  res.status(200).send({
    success: true,
    user: {}
  });
});

app.post("/users", (req, res) => {
  res.status(201).send({
    // created user data
  });
});

app.delete("/users/:id", (req, res) => {
  res.status(204).send();
});

module.exports = app;
