import nextJest from 'next/jest.js';

const createJestConfig = nextJest({
  dir: './',
});

const customJestConfig = {
}

module.exports = createJestConfig({
  preset: 'ts-jest',
  rootDir: "./",
  moduleDirectories: ['node_modules', '<rootDir>'],
  testEnvironment: "jsdom",
  setupFilesAfterEnv: ["<rootDir>/jest.setup.ts"],
});