'use strict'

const { sample } = require('underscore')
const combustivelRenavam = require('./../../helpers/veiculo/combustivel-renavam')

module.exports = () => sample(combustivelRenavam).nome
