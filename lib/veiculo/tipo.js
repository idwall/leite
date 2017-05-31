'use strict'

const { sample } = require('underscore')
const tiposRenavam = require('./../../helpers/veiculo/tipos-renavam')

module.exports = () => sample(tiposRenavam).nome
