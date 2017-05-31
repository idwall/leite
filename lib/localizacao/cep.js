'use strict'

const { defaults } = require('underscore')
const inteiro = require('./../inteiro')

module.exports = (options = {}) => {
  options = defaults(options, {
    formatado: false
  })

  const cep = `${inteiro({
    min: 1,
    max: 9
  }).toString()}${inteiro({
    min: 1000,
    max: 9999
  }).toString()}-${inteiro({ min: 100, max: 999 }).toString()}`

  return options.formatado ? cep : cep.replace(/\D/g, '')
}
