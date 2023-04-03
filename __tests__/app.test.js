const request = require("supertest");
const { app } = require("../app");
// const sorted = require('jest-sorted');
const { runAfter, runBefore, runBeforeEachTest } = require("../utils/utils");

beforeAll(async () => {
  await runBefore();
});

beforeEach(async () => {
  await runBeforeEachTest();
});

afterAll(async () => {
  await runAfter();
});

describe("app", () => {
  describe("404 for invalid path", () => {
    it("responds with a 404 on a incorrect route", () => {
      return request(app)
        .get("/api/not-a-path")
        .expect(404)
        .then(({ body: { msg } }) => {
          expect(msg).toBe("Path Not Found");
        });
    });
  });
  describe("GET-/api/decks", () => {
    it("responds with all the decks in the DB and a 200 status code", () => {
      return request(app)
        .get("/api/decks")
        .expect(200)
        .then(({ body: { decks } }) => {
          expect(decks).toHaveLength(3);
          expect(decks).toBeInstanceOf(Array);
          decks.forEach((deck) => {
            expect(deck).toMatchObject({
              _id: expect.any(String),
              title: expect.any(String),
              description: expect.any(String),
              cards: expect.any(Array),
            });
          });
        });
    });
  });
  describe("GET-/api/users", () => {
    it("responds with all the users in the DB and a 200 status code", () => {
      return request(app)
        .get("/api/users")
        .expect(200)
        .then(({ body: { users } }) => {
          expect(users).toHaveLength(2);
          expect(users).toBeInstanceOf(Array);
          users.forEach((user) => {
            expect(user).toMatchObject({
              _id: expect.any(String),
              username: expect.any(String),
              email: expect.any(String),
              user_decks: expect.any(Array),
            });
          });
        });
    });
  });
  describe("GET-/api/users/:user_id", () => {
    it("responds with all the user info and 200 status code ", () => {
      const user = "c90e5fc8f598188830bbf104";
      return request(app)
        .get(`/api/users/${user}`)
        .expect(200)
        .then(({ body: { user } }) => {
          expect(user[0]).toBeInstanceOf(Object);
          expect(user[0]).toMatchObject({
            _id: "c90e5fc8f598188830bbf104",
            email: "plumber@mushroomkingdom.org",
            username: "Mario",
            user_decks: expect.any(Array),
          });
        });
    });
  });
  describe("POST /api/deck/:user_id", () => {
    test("201 status code: Created a deck", () => {
      const input = {
        title: "Any Deck",
        description: "Trying to be Created",
      };
      const user = "c90e5fc8f598188830bbf104";
      return request(app)
        .post(`/api/decks/${user}`)
        .send(input)
        .expect(201)
        .then(({ body }) => {
          expect(body.createdDeck).toBeInstanceOf(Object);
          expect(body.createdDeck).toEqual(
            expect.objectContaining({
              title: "Any Deck",
              description: "Trying to be Created",
              cards: [],
              _id: expect.any(String),
            })
          );
        });
    });
  });
  describe("POST /api/cards/", () => {
    test("201 status code: Created a card", () => {
      const input = {
        front: "String",
        back: "String",
      };
      return request(app)
        .post(`/api/cards/30540c7891af7f8b720efb8f`)
        .send(input)
        .expect(201)
        .then(({ body }) => {
          expect(body.createdCard).toBeInstanceOf(Object);
          expect(body.createdCard).toEqual(
            expect.objectContaining({
              front: "String",
              back: "String",
              _id: expect.any(String),
            })
          );
        });
    });
  });

  describe("PATCH /api/decks/:deck_id", () => {
    test("200 status code: Updated a deck", () => {
      const input = {
        title: "Replacement String",
        description: "Replacement String",
      };
      return request(app)
        .patch(`/api/decks/30540c7891af7f8b720efb8f`)
        .send(input)
        .expect(200)
        .then(({ body }) => {
          expect(body.updatedDeck).toBeInstanceOf(Object);
          expect(body.updatedDeck).toEqual(
            expect.objectContaining({
              title: "Replacement String",
              description: "Replacement String",
              _id: "30540c7891af7f8b720efb8f",
            })
          );
        });
    });
  });

  describe("GET /api/decks/:deck_id/cards", () => {
    it("responds with the cards for a specific deck", () => {
      const deck_id = "30540c7891af7f8b720efb8f";
      return request(app)
        .get(`/api/decks/${deck_id}/cards`)
        .expect(200)
        .then(({ body: { cards } }) => {
          expect(cards).toHaveLength(5);
          expect(cards).toBeInstanceOf(Array);
        });
    });
  });

  describe("DELETE /api/cards/:card_id", () => {
    it("responds with a 204 code and removes the specified card", () => {
      const card_id = "57725bdf60e7284b66fb3466";
      return request(app).delete(`/api/cards/${card_id}`).expect(204);
    });
  });
  describe("POST /api/cards/", () => {
    test("201 status code: Created a card", () => {
      const input = {
        front: "String",
        back: "String",
      };
      return request(app)
        .post(`/api/cards/30540c7891af7f8b720efb8f`)
        .send(input)
        .expect(201)
        .then(({ body }) => {
          expect(body.createdCard).toBeInstanceOf(Object);
          expect(body.createdCard).toEqual(
            expect.objectContaining({
              front: "String",
              back: "String",
              _id: expect.any(String),
            })
          );
        });
    });
  });

  describe("PATCH /api/cards/:card_id", () => {
    test("200 status code: Updated a card", () => {
      const input = {
        front: "Replacement String",
        back: "Replacement String",
      };
      return request(app)
        .patch(`/api/cards/6147ff219369a989c0f71235`)
        .send(input)
        .expect(200)
        .then(({ body }) => {
          expect(body.updatedCard).toBeInstanceOf(Object);
          expect(body.updatedCard).toEqual(
            expect.objectContaining({
              front: "Replacement String",
              back: "Replacement String",
              _id: "6147ff219369a989c0f71235",
            })
          );
        });
    });
    test("400 status code: Updated a card", () => {
      const input = {
        left: "Replacement String",
        right: "Replacement String",
      };
      return request(app)
        .patch(`/api/cards/6147ff219369a989c0f71235`)
        .send(input)
        .expect(400)
        .then(({ body }) => {
          expect(body.msg).toBe("Invalid Card Format");
        });
    });
    test("200 status code: Updated a card", () => {
      const input = {
        front: "Replacement String",
        right: "Replacement String",
        back: "Replacement String",
      };
      return request(app)
        .patch(`/api/cards/6147ff219369a989c0f71235`)
        .send(input)
        .expect(200);
    });
  });
});
