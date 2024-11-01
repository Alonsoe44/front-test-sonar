module.exports = {
  testEnvironment: "node",
  moduleFileExtensions: ["js", "json", "ts"],
  transform: {
    "^.+\\.ts$": "ts-jest",
    "^.+\\.js$": "babel-jest",
  },
  testMatch: [
    "<rootDir>/server/api/**/*.test.ts",
    "<rootDir>/components/**/*.spec.(js|ts)",
  ],
  moduleNameMapper: {
    "^@/(.*)$": "<rootDir>/$1",
  },
  coverageDirectory: "coverage",
  //collectCoverageFrom: ["/**/*.test.ts"],
};
