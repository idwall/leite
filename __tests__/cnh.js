'use strict'

import test from 'ava'
import Leite from './..'

let leite

test.beforeEach(() => {
  leite = new Leite()
})

test('categoria', t => {
  const expect = leite.cnh.categoria()
  t.is(typeof expect, 'string')
})

test('emissao', t => {
  const expect = leite.cnh.emissao()
  t.is(typeof expect, 'object')
})

test('validade', t => {
  const expect = leite.cnh.validade()
  t.is(typeof expect, 'object')
})

test('registro', t => {
  const expect = leite.cnh.registro()
  t.is(typeof expect, 'string')
  t.is(expect.length, 11)
})

test('seguranca', t => {
  const expect = leite.cnh.seguranca()
  t.is(typeof expect, 'string')
  t.is(expect.length, 11)
})

test('numero', t => {
  const expect = leite.cnh.numero()
  t.is(typeof expect, 'string')
  t.is(expect.length, 12)
})
