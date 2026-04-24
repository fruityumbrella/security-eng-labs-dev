module.exports = {
  testEnvironment: 'node',
  roots: ['<rootDir>/apps', '<rootDir>/packages'],
  testMatch: ['**/*.test.ts', '**/*.spec.ts'],
  transform: {
    '^.+\\.ts$': 'ts-jest'
  },
  collectCoverageFrom: [
    'apps/*/src/**/*.ts',
    'packages/*/src/**/*.ts',
    '!**/*.d.ts'
  ]
};