'use strict'

const { sample } = require('underscore')
const categoriasRenavam = require('./../../helpers/veiculo/categorias-renavam')

module.exports = () => sample(categoriasRenavam).nome
