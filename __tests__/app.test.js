// const mongoose = require('mongoose');
const seed = require("../db/seed/seed");
// const testData = require('../db/data/testdata');
// const request = require('supertest');
// const app = require('../app');
// const sorted = require('jest-sorted');
const { runAfter } = require("../utils/utils");
// import runBefore from "../utils/utils";

// beforeEach(async () => {
//   await runBefore();
// });

// beforeEach(async () => {
//   await seed();
// });

beforeAll(async () => {
  await seed();
});

afterAll(async () => {
  await runAfter();
});

describe("Test 1", () => {
  it("Test 1", () => {
    expect(1).toBe(1);
  });
});
