'use strict'

import test from 'ava'
import Leite from './..'

let leite

test.beforeEach(() => {
  leite = new Leite()
})

test('logradouro', t => {
  const expect = leite.localizacao.logradouro()
  t.is(typeof expect, 'string')
})

test('estado', t => {
  const expect = leite.localizacao.estado()
  t.is(typeof expect, 'string')
  t.is(expect.length, 2)
})

test('complemento', t => {
  const expect = leite.localizacao.complemento()
  t.is(typeof expect, 'string')
})

test('cidade', t => {
  const expect = leite.localizacao.cidade()
  t.is(typeof expect, 'string')
})

test('cep', t => {
  const expect = leite.localizacao.cep()
  t.is(typeof expect, 'string')
  t.is(expect.length, 8)
})

test('cep formatado', t => {
  const expect = leite.localizacao.cep({ formatado: true })
  t.is(typeof expect, 'string')
  t.regex(expect, /^\d{5}-\d{3}$/m)
  t.is(expect.length, 9)
})

test('cep por estado', t => {
  const [expectAc] = leite.localizacao.cep({ estado: 'ac' })
  const [expectAl] = leite.localizacao.cep({ estado: 'al' })
  const [expectAp] = leite.localizacao.cep({ estado: 'ap' })
  const [expectAm] = leite.localizacao.cep({ estado: 'am' })
  const [expectBa] = leite.localizacao.cep({ estado: 'ba' })
  const [expectCe] = leite.localizacao.cep({ estado: 'ce' })
  const [expectDf] = leite.localizacao.cep({ estado: 'df' })
  const [expectEs] = leite.localizacao.cep({ estado: 'es' })
  const [expectMa] = leite.localizacao.cep({ estado: 'ma' })
  const [expectMt] = leite.localizacao.cep({ estado: 'mt' })
  const [expectMs] = leite.localizacao.cep({ estado: 'ms' })
  const [expectMg] = leite.localizacao.cep({ estado: 'mg' })
  const [expectPa] = leite.localizacao.cep({ estado: 'pa' })
  const [expectPb] = leite.localizacao.cep({ estado: 'pb' })
  const [expectPr] = leite.localizacao.cep({ estado: 'pr' })
  const [expectPe] = leite.localizacao.cep({ estado: 'pe' })
  const [expectPi] = leite.localizacao.cep({ estado: 'pi' })
  const [expectRr] = leite.localizacao.cep({ estado: 'rr' })
  const [expectRo] = leite.localizacao.cep({ estado: 'ro' })
  const [expectRn] = leite.localizacao.cep({ estado: 'rn' })
  const [expectRj] = leite.localizacao.cep({ estado: 'rj' })
  const [expectRs] = leite.localizacao.cep({ estado: 'rs' })
  const [expectSc] = leite.localizacao.cep({ estado: 'sc' })
  const [expectSp] = leite.localizacao.cep({ estado: 'sp' })
  const [expectSpG] = leite.localizacao.cep({ estado: 'sp-g' })
  const [expectSe] = leite.localizacao.cep({ estado: 'se' })
  const [expectTo] = leite.localizacao.cep({ estado: 'to' })

  t.is(expectAc, '6')
  t.is(expectAl, '5')
  t.is(expectAp, '6')
  t.is(expectAm, '6')
  t.is(expectBa, '4')
  t.is(expectCe, '6')
  t.is(expectDf, '7')
  t.is(expectEs, '2')
  t.is(expectMa, '6')
  t.is(expectMt, '7')
  t.is(expectMs, '7')
  t.is(expectMg, '3')
  t.is(expectPa, '6')
  t.is(expectPb, '5')
  t.is(expectPr, '8')
  t.is(expectPe, '5')
  t.is(expectPi, '6')
  t.is(expectRr, '6')
  t.is(expectRo, '7')
  t.is(expectRn, '5')
  t.is(expectRj, '2')
  t.is(expectRs, '9')
  t.is(expectSc, '8')
  t.is(expectSp, '1')
  t.is(expectSpG, '0')
  t.is(expectSe, '4')
  t.is(expectTo, '7')
})

test('bairro', t => {
  const expect = leite.localizacao.bairro()
  t.is(typeof expect, 'string')
})
