import { contacts } from "./data.js";

function getContacts(req, res) {
  res.status(200).json(contacts);
}

function getContact(req, res) {
  const id = req.params.id;
  const contact = contacts.find((c) => c.id === id);
  if (contact === undefined) {
    res.status(404).send();
  } else {
    res.status(200).json(contact);
  }
}

function addContact(req, res) {
  const newId = contacts.length + 1;
  const newContact = { id: newId, ...rest }; //req.body.nom, req.body.phone };
  contacts.push(newContact);
  res.status(200).json(newContact);
}

function deleteContact(req, res) {
  const id = req.params.id;
  const index = contacts.find((contact) => contact.id === id);
  if (index === -1) {
    return false;
  } else {
    contacts.splice(index, 1);
  }
}

export { getContact, getContacts, addContact, deleteContact };
