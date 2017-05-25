'use strict'

const { sample } = require('underscore')
const restricoesRenavam = require('./../../helpers/veiculo/restricoes-renavam')

module.exports = () => sample(restricoesRenavam).nome
