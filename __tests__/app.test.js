// const mongoose = require('mongoose');
const seed = require("../db/seed/seed");
// const request = require('supertest');
// const app = require('../app');
// const sorted = require('jest-sorted');
const { runAfter } = require("../utils/utils");
const { runBefore } = require("../utils/utils");

beforeEach(async () => {
  await runBefore();
});

// afterAll(async () => {
//   await runAfter();
// });

describe("Test 1", () => {
  it("Test 1", () => {
    expect(1).toBe(1);
  });
  it("Test 2", () => {
    expect(1).toBe(1);
  });
  it("Test 3", () => {
    expect(1).toBe(1);
  });
});
