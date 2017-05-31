'use strict'

const {sample} = require('underscore')
const categorias = require('./../../helpers/cnh/categorias')

module.exports = () => sample(categorias)
