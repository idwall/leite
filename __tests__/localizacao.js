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

test('bairro', t => {
  const expect = leite.localizacao.bairro()
  t.is(typeof expect, 'string')
})
