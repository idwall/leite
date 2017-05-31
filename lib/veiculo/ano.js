'use strict'

const inteiro = require('./../inteiro')

module.exports = () => inteiro({ min: 1990, max: new Date().getFullYear() })
