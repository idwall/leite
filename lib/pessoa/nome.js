'use strict'

const { defaults } = require('underscore')

const sexo = require('./sexo')
const sobrenome = require('./sobrenome')
const primeiroNome = require('./primeiro-nome')

module.exports = (options = {}) => {
  options = defaults(options, {
    sexo: sexo(),
    sobrenome: sobrenome()
  })

  return [primeiroNome(options), options.sobrenome].join(' ')
}
