'use strict'

const usuario = require('./usuario')

module.exports = (options = {}) => `${usuario(options)}@gmail.com`
