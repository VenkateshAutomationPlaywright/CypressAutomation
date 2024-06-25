const { defineConfig } = require('cypress')
module.exports = defineConfig({
  video: true,
e2e: {
  baseUrl:"https://www.facebook.com/"
},env:{
  username:"venkatesh"
}
  });
  