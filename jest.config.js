module.exports = {
    transform: {
      "^.+\\.js$": "babel-jest"
    },
    transformIgnorePatterns: [
      "/node_modules/(?!my-module)/"
    ]
  };
  