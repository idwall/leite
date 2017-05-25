'use strict'

const { sample } = require('underscore')
const estados = require('./../../helpers/localizacao/estados')

module.exports = () => sample(estados).uf
