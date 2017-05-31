'use strict'

const { sample } = require('underscore')
const { ABC } = require('./../constants')
const inteiro = require('./../../lib/inteiro')

module.exports = [
  `Apartamento ${inteiro({ min: 1, max: 999 })}`,
  'Aeroporto',
  'Anexo',
  `Andar ${inteiro({ min: 1, max: 20 })}`,
  `Bloco ${sample(ABC)}`,
  `Conjunto ${inteiro({ min: 1, max: 999 })}`,
  'Cobertura',
  `Casa ${inteiro({ min: 1, max: 10 })}`,
  'Fazenda',
  'Fundos',
  'Galeria',
  `Galpão ${sample(ABC)}`,
  `Lote ${inteiro({ min: 1, max: 999 })}`,
  `Loja ${inteiro({ min: 1, max: 999 })}`,
  `Portão ${sample(ABC)}`,
  `Quadra ${sample(ABC)}`,
  `Sala ${inteiro({ min: 1, max: 999 })}`,
  `Sobreloja ${inteiro({ min: 1, max: 999 })}`,
  'Subsolo',
  'Terreo'
]
