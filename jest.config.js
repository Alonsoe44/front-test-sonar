module.exports = {
  testEnvironment: "node", // Default to Node.js environment
  moduleFileExtensions: ["js", "json", "ts"],
  transform: {
    "^.+\\.ts$": "ts-jest", // Use ts-jest for TypeScript files
    "^.+\\.js$": "babel-jest", // Use Babel for JavaScript files if needed
  },
  testMatch: [
    "<rootDir>/server/api/**/*.test.ts", // Match tests in server/api folder
    "<rootDir>/components/**/*.spec.(js|ts)", // Match tests in components folder
  ],
  moduleNameMapper: {
    "^@/(.*)$": "<rootDir>/$1",
  },
};
