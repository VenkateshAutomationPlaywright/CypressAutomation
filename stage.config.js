const { defineConfig } = require('cypress')
module.exports = defineConfig({
  video: true,
e2e: {
  baseUrl:"https://opensource-demo.orangehrmlive.com/web/index.php/auth/login"
},env:{
  username:"venkatesh"
}

  });