import request from "supertest";
import app from "../app.js";

describe("test the root path", () => {
  test("it should respond to the GET method", () => {
    request(app)
      .get("/")
      .then((response) => {
        expect(response.statusCode).toBe(200);
      });
  });
  test("it should respond with 404 to GET /coucou", () => {
    request(app)
      .get("/coucou")
      .then((response) => {
        expect(response.statusCode).toBe(404);
      });
  });
});
describe("test the /api/contacts path", () => {
  test("should return code status 200", () => {
    request(app)
      .get("/api/contacts")
      .then((response) => {
        expect(response.statusCode).toBe(200);
      });
  });
  test("should return nom key in response", () => {
    request(app)
      .get("/api/contacts")
      .then((response) => {
        expect(response.body[0].nom).toBe("Xavier");
      });
  });
});
describe("test the /api/contacts/:id path", () => {
  test("should return code status 200", () => {
    request(app)
      .get("/api/contacts/1")
      .then((response) => {
        expect(response.statusCode).toBe(200);
      });
  });
  test("should return id key in response", () => {
    request(app)
      .get("/api/contacts/1")
      .then((response) => {
        expect(response.body[0].id).toBe("1");
      });
  });
  describe("test the /api/contacts/new path", () => {
    test("should return code status 200", () => {
      request(app)
        .post("/api/contacts/new")
        .then((response) => {
          expect(response.statusCode).toBe(200);
        });
    });
    test("should return nom key in response", () => {
      request(app)
        .post("/api/contacts/new")
        .send({ nom: "patrick" })
        .then((response) => {
          expect(response.body[0].nom).toBe("patrick");
        });
    });
  });
});
