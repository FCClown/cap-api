//const express = require("express");
import express from "express";
const app = express();

const contacts = [
  {
    nom: "Xavier",
    telephone: "0505050505"
  },
  {
    nom: "Robert",
    telephone: "0606060606"
  }
];

app.get("/", function (req, res) {
  res.send("Hello World");
});

app.get("/api/contacts", function (req, res) {
  res.status(200).json(contacts);
});

//module.exports = app;
//export app;
// ou
export default app;
