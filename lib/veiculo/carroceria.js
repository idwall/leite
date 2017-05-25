'use strict'

const { sample } = require('underscore')
const carroceriasRenavam = require('./../../helpers/veiculo/carrocerias-renavam')

module.exports = () => sample(carroceriasRenavam).nome
