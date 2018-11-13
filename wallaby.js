module.exports = function(wallaby) {
  return {
    files: ["./**/*.ts", "!./**/*.spec.ts", "!./**/*.d.ts", "!**/node_modules/**"],

    tests: ["./**/*.spec.ts",  "!**/node_modules/**"],
    transform: {
      "^.+\\.tsx?$": "ts-jest"
    },
    env: {
      type: "node",
      runner: "node"
    },
    testFramework: "jest"
  };
};