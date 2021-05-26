import express from "express";
const app = express.Router();

app.get("/keys", (req, res) => {
  res.status(200).send([ /* ARRAY OF KEYS */]);
});

app.get("/keys/:id", (req, res) => {
  res.status(200).send("KEY");
});

app.post("/keys", (req, res) => {
  res.status(201).send("KEY");
});

app.delete("/keys/:id", (req, res) => {
  res.status(204).send();
});

module.exports = app;
