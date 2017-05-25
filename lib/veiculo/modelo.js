'use strict'

const { sample } = require('underscore')
const veiculosFipe = require('./../../helpers/veiculo/veiculos-fipe')

module.exports = () => sample(veiculosFipe).name
