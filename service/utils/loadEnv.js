'use strict'

const path = require('path')
const dotenv = require('dotenv')
const dotenvExpand = require('dotenv-expand')

module.exports = function loadEnv(mode) {
  const basePath = path.resolve(process.cwd(), `./environment/.env${mode ? `.${mode}` : ''}`)
  const localPath = `${basePath}.local`

  const load = (envPath) => {
    const config = dotenv.config({ path: envPath })

    if (config.error) {
      // only ignore error if file is not found
      if (config.error.toString().indexOf('ENOENT') < 0) {
        console.error(config.error)
      }
    } else {
      dotenvExpand(config.parsed)
    }
  }

  load(localPath)
  load(basePath)

  /**
   * by default, NODE_ENV and BABEL_ENV are set to "development" unless mode
   * is production or test. However the value in .env files will take higher
   * priority
   */
  if (mode) {
    const defaultNodeEnv = mode === 'production' || mode === 'test' ? mode : 'development'
    if (process.env.NODE_ENV == null) {
      process.env.NODE_ENV = defaultNodeEnv
    }
    if (process.env.BABEL_ENV == null) {
      process.env.BABEL_ENV = defaultNodeEnv
    }
  }
}
