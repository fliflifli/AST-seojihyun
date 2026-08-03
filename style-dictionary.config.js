export default {
  source: ["tokens/tokens.json"],

  platforms: {
    css: {
      transformGroup: "css",
      buildPath: "build/css/",
      files: [
        {
          destination: "variables.css",
          format: "css/variables"
        }
      ]
    }
  }
};