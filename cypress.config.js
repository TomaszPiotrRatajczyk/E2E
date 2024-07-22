const { defineConfig } = require('cypress')

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {

      const version = config.env.VERSION || 'prod'

      const urls = {
        prod: 'https://testnet.binancefuture.com/en/futures/BTCUSDT'
      }

      config.baseUrl = urls[version]

      return config
    },
  },
})