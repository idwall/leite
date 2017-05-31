'use strict'

const { sample } = require('underscore')
const sobrenomes = require('./../../helpers/pessoa/sobrenomes')

module.exports = () => sample(sobrenomes)
