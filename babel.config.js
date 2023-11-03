module.exports = {
    presets: [
      "@babel/preset-env",
      "@babel/preset-react"
    ],
  };

  module.exports = function (api) {
    api.cache(true)
    return {
      plugins: ['macros'],
    }
  }
  