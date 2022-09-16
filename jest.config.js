const {defaults: tsjPreset} = require('ts-jest/presets');

module.exports = {
  globals: {
    'ts-jest': {
      tsconfig: 'tsconfig.jest.json',
      diagnostics: false,
    },
  },
  preset: 'ts-jest',
  moduleFileExtensions: ['ts', 'js', 'json'],
  transform: {
    '^.+\\.(ts|tsx)$': 'ts-jest',
    ...tsjPreset.transform,
  },
  testMatch: ['**/tests/**/*.test.(ts|js)'],
  testEnvironment: 'node',
  setupFilesAfterEnv: ['./tests/setup.ts'],
};
