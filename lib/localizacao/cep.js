'use strict'

const { defaults } = require('underscore')
const inteiro = require('./../inteiro')

const dicionarioRegiaoPostal = [
  ['sp-g'],
  ['sp'],
  ['rj', 'es'],
  ['mg'],
  ['ba', 'se'],
  ['pe', 'al', 'pb', 'rn'],
  ['ce', 'pi', 'ma', 'pa', 'am', 'ac', 'ap', 'rr'],
  ['go', 'to', 'mt', 'ms', 'ro', 'df'],
  ['pr', 'sc'],
  ['rs']
]

const getNumeroRegiaoPostal = estado => {
  const numero = dicionarioRegiaoPostal.findIndex(item =>
    item.includes(estado.toLowerCase())
  )

  return numero > -1 ? numero : inteiro({ min: 0, max: 9 })
}

module.exports = (options = {}) => {
  options = defaults(options, {
    formatado: false,
    estado: ''
  })

  const numeroRegiaoPostal = getNumeroRegiaoPostal(options.estado)

  const cep = `${numeroRegiaoPostal}${inteiro({
    min: 1000,
    max: 9999
  }).toString()}-${inteiro({ min: 100, max: 999 }).toString()}`

  return options.formatado ? cep : cep.replace(/\D/g, '')
}
