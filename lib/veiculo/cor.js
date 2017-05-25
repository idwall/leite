'use strict'

const { sample } = require('underscore')
const coresRenavam = require('./../../helpers/veiculo/cores-renavam')

module.exports = () => sample(coresRenavam).nome
