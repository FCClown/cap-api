//const express = require("express");
import express from "express";
import * as controller from "./controller.js";

const app = express();

app.get("/", function (req, res) {
  res.send("Hello World");
});

app.get("/api/contacts", controller.getContacts);

app.get("/api/contacts/:id", controller.getContact);

/*app.get("/api/contacts/update", function (req, res) {
  const id = req.params.id;
  res.status(200).json(id);
});

app.get("/api/contacts/delete", function (req, res) {
  const id = req.params.id;
  res.status(200).json(id);
});*/

//module.exports = app;
//export app;
// ou
export default app;
