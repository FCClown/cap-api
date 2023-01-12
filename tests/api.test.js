import request from "supertest";
import app from "../app.js";

describe("Test the root path", () => {
  test("It should respond to the GET method", () => {
    request(app)
      .get("/")
      .then((response) => {
        expect(response.statusCode).toBe(200);
      });
  });
});

describe("Contacts API", () => {
  let contacts;

  beforeEach(() => {
    contacts = [
      { id: "1", nom: "Xavier", telephone: "0505050505" },
      { id: "2", nom: "Robert", telephone: "0504030201" },
      { id: "3", nom: "Bertrand", telephone: "0505040302" },
      { id: "4", nom: "Gerard", telephone: "0606060606" }
    ];
  });

  test("GET /contacts", async () => {
    const response = await request(app).get("/api/contacts");
    expect(response.statusCode).toBe(200);
    expect(response.body).toBe(contacts);
  });

  test("POST /contacts", async () => {
    const newContact = { nom: "Brontosaure", telephone: "02I5902582" };
    const response = await request(app).post("/api/contacts").send(newContact);
    expect(response.statusCode).toBe(200);
    expect(response.body).toEqual(newContact);
  });

  test("PUT /contacts/:id", async () => {
    const updateContact = {
      id: "5",
      nom: "Jean",
      telephone: "0505050607"
    };
    const response = await request(app)
      .put("/api/contacts/1")
      .send(updateContact);
    expect(response.statusCode).toBe(200);
    expect(response.body).toEqual(updateContact);
  });

  test("DELETE /contacts/:id", async () => {
    const response = await request(app).delete("/contacts/1");
    expect(response.statusCode).toBe(404);
    expect(response.body).toEqual({});
  });
});
