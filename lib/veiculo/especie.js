'use strict'

const { sample } = require('underscore')
const especiesRenavam = require('./../../helpers/veiculo/especies-renavam')

module.exports = () => sample(especiesRenavam).nome
