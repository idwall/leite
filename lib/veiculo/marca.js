'use strict'

const { sample } = require('underscore')
const marcasFipe = require('./../../helpers/veiculo/veiculos-fipe')

module.exports = () => sample(marcasFipe).marca
