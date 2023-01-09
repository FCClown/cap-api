import { contacts } from "./data.js";

function getContacts(req, res) {
  res.status(200).json(contacts);
}

function getContact(req, res) {
  const id = req.params.id;
  res.status(200).json(find(contacts.find({ id })));
}

export { getContact, getContacts };
