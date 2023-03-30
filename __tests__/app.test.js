// const seed = require("../db/seed/seed");
const request = require("supertest");
const { app } = require("../app");
// const sorted = require('jest-sorted');
const { runAfter, runBefore } = require("../utils/utils");

beforeAll(async () => {
  await runBefore();
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
            email: "user@mushroomkingdom.org",
            username: "Mario",
            user_decks: expect.any(Array),
          });
        });
    });
  });
  describe("POST /api/deck/", () => {
    test("201 status code: Created a deck", () => {
      const input =  {
        title: "Any Deck",
        description: "Trying to be Created"
      }
      return request(app)
        .post(`/api/decks/`)
        .send(input)
        .expect(201)
        .then(({ body }) => {
          expect(body.createdDeck).toBeInstanceOf(Object);
          expect(body.createdDeck).toEqual(
            expect.objectContaining({
              title: "Any Deck",
              description: "Trying to be Created",
              cards: [],
              _id: expect.any(String)
            })
          );
        });
    });
  })

  describe.only("GET /api/decks/:deck_id/cards", () => {
    it("responds with the cards for a specific deck", () => {
      const deck_id = "30540c7891af7f8b720efb8f";
      return request(app)
        .get(`/api/decks/${deck_id}/cards`)
        .expect(200)
        .then(({ body }) => {
          console.log(body);
        });
    });
  });
});