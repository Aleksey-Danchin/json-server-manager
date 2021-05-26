import express from "express";
const app = express.Router();

app.get("/users", (req, res) => {
  res.status(200).send([ /* ARRAY OF USERS */ ]);
});

app.get("/users/:id", (req, res) => {
  res.status(200).send({ /* USER DATA */ });
});

app.patch("/users/:id", (res, res) => {
  res.status(200).send({ /* UPDATED USER DATA */ });
});

app.post("/users", (req, res) => {
  res.status(201).send({ /* CREATED USER DATA */ });
});

app.delete("/users/:id", (req, res) => {
  res.status(204).send();
});

module.exports = app;
