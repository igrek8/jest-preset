const preset = require('ts-jest/jest-preset');

/** @type {import('jest').Config} */
module.exports = {
  ...preset,
  clearMocks: true,
  resetMocks: true,
  restoreMocks: true,
  roots: ['src'],
  coverageDirectory: 'coverage',
  coveragePathIgnorePatterns: ['node_modules', '__fixtures__', '__mocks__', 'index.ts', '.d.ts'],
  coverageProvider: 'v8',
  coverageThreshold: {
    global: {
      lines: 100,
      branches: 100,
      functions: 100,
      statements: 100,
    },
  },
};
