module.exports = {
  roots: ['<rootDir>/tests'],
  coverageDirectory: 'coverage',
  testEnvironment: 'node',
  clearMocks: true,
  collectCoverage: true,
  coverageProvider: 'v8',
  transform: {
    '.+\\.ts$': 'ts-jest'
  },
  moduleNameMapper: {
    '@/(.*)': '<rootDir>/src/$1'
  }
}
