'use strict'

import test from 'ava'
import Leite from './..'

let leite

test.beforeEach(() => {
  leite = new Leite()
})

test('cnpj', t => {
  const expect = leite.empresa.cnpj()
  t.is(typeof expect, 'string')
  t.is(expect.length, 14)
})

test('cnpj formatado', t => {
  const expect = leite.empresa.cnpj({ formatado: true })
  t.is(typeof expect, 'string')
  t.regex(expect, /^\d{2}.\d{3}.\d{3}\/\d{4}-\d{2}$/m)
  t.is(expect.length, 18)
})
