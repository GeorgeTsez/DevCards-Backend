const seed = require("../db/seed/seed");
const request = require("supertest");
const app = require("../app");
// const sorted = require('jest-sorted');
const { runAfter } = require("../utils/utils");
const { runBefore } = require("../utils/utils");

beforeEach(async () => {
  await runBefore();
});

afterAll(async () => {
  await runAfter();
});

describe("app", () => {
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
});
