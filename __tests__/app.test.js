// const mongoose = require('mongoose');
const seed = require('../db/seed/seed');
const testData = require('../db/data/testdata');
// const request = require('supertest');
// const app = require('../app');
// const sorted = require('jest-sorted');

beforeEach(() => seed(testData))

describe("Test 1", () => {
    it("Test 1", () => {
        expect(1).toBe(1)
    });
});