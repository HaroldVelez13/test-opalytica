
const withCSS = require('@zeit/next-css')

module.exports = withCSS({
  env: {
    URL_API: "http://backend:8000/api/v1"
  }
});