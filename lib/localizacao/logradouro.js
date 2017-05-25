'use strict'

const { sample } = require('underscore')
const logradouros = require('./../../helpers/localizacao/logradouros')

module.exports = () => sample(logradouros)
