'use strict'

const path = require('path')

// absolute path
exports.resolve = (...args) => path.posix.join(process.cwd(), ...args)
