//const express = require("express");
import bodyParser from "body-parser";
import express from "express";
import * as controller from "./controller.js";

const app = express();
app.use(bodyParser.json());

app.get("/", function (req, res) {
  res.send("Hello World");
});

app.get("/api/contacts", controller.getContacts);

app.get("/api/contacts/:id", controller.getContact);

app.post("/api/contacts/new", controller.addContact);

app.delete("/api/contacts/delete", controller.deleteContact);

//module.exports = app;
//export app;
// ou
export default app;
