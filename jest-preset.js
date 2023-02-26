const preset = require('ts-jest/jest-preset');

/** @type {import('jest').Config} */
module.exports = {
  ...preset,
  testEnvironment: 'node',
  clearMocks: true,
  resetMocks: true,
  restoreMocks: true,
  coverageDirectory: '<rootDir>/../coverage',
  coveragePathIgnorePatterns: ['__fixtures__', '__mocks__', 'index.ts', '.d.ts'],
  collectCoverageFrom: ['<rootDir>/**/*.ts'],
  coverageThreshold: {
    global: {
      lines: 100,
      branches: 100,
      functions: 100,
      statements: 100,
    },
  },
};
