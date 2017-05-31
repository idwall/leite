'use strict'

const { sample, defaults } = require('underscore')
const sexo = require('./sexo')
const nomesHomem = require('./../../helpers/pessoa/nomes-homem')
const nomesMulher = require('./../../helpers/pessoa/nomes-mulher')

module.exports = (options = {}) => {
  options = defaults(options, {
    sexo: sexo(),
    nomeDoMeio: false,
    nomeDoMeioAbreviado: false
  })

  let primeiroNome
  let nomeDoMeio

  if (options.sexo === 'Feminino') {
    primeiroNome = sample(nomesMulher).split(' ')[0]
    nomeDoMeio = sample(nomesMulher).split(' ')[0]
  } else {
    primeiroNome = sample(nomesHomem).split(' ')[0]
    nomeDoMeio = sample(nomesHomem).split(' ')[0]
  }

  if (options.nomeDoMeioAbreviado) {
    primeiroNome = [primeiroNome, nomeDoMeio.split('')[0]].join(' ')
  } else if (options.nomeDoMeio) {
    primeiroNome = [primeiroNome, nomeDoMeio].join(' ')
  }

  return primeiroNome
}
