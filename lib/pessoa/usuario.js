'use strict'

const { defaults } = require('underscore')

const nome = require('./nome')
const removeAcentos = require('./../remove-acentos')

module.exports = (options = {}) => {
  options = defaults(options, {
    nome: nome(options)
  })

  return removeAcentos(options.nome.replace(' ', '_')).toLowerCase()
}
