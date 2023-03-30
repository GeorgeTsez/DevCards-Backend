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
});
