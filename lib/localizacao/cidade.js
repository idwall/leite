'use strict'

const { sample } = require('underscore')
const cidades = require('./../../helpers/localizacao/cidades')

module.exports = () => sample(cidades)
