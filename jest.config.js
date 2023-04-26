module.exports  =   {
  preset: 'jest-preset-angular', // load the adapater
  setupFilesAfterEnv: [
    "<rootDir>/src/setup.jest.ts"
  ],
  testPathIgnorePatterns: [
    "<rootDir>/node_modules/",
    "<rootDir>/dist/"
  ],
  collectCoverage: true
};
