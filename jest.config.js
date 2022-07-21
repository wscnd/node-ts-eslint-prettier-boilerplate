/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */

const { pathsToModuleNameMapper } = require('ts-jest')
const { compilerOptions } = require('./tsconfig')

const config = {
  snapshotFormat: {
    printBasicPrototype: false
  },
  verbose: true,
  testEnvironment: 'node',
  resetModules: true,
  preset: 'ts-jest/presets/js-with-babel-esm',
  moduleNameMapper: pathsToModuleNameMapper(compilerOptions.paths, {
    prefix: '<rootDir>/'
  }),
  globals: {
    'ts-jest': {
      useESM: true,
      tsconfig: 'tsconfig.test.json'
    }
  },
  // modulePathIgnorePatterns: ['<rootDir>/src/ignorepaths'],
  // NOTE: Simplify jest console output, only shows errors
  reporters: ['<rootDir>/jest.reporter.js']
  // NOTE: Shows coverage on jest tests
  // mapCoverage: true,
  // collectCoverage: true,
}

module.exports = config
