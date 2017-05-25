'use strict'

const { sample } = require('underscore')
const bairros = require('./../../helpers/localizacao/bairros')

module.exports = () => sample(bairros)
