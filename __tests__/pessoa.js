'use strict'

import test from 'ava'
import Leite from './..'

let leite

test.beforeEach(() => {
  leite = new Leite()
})

test('cpf', t => {
  const expect = leite.pessoa.cpf()

  t.is(typeof expect, 'string')
  t.regex(expect, /^\d{11}$/m)
})

test('cpf formatado', t => {
  const expect = leite.pessoa.cpf({ formatado: true })

  t.is(typeof expect, 'string')
  t.regex(expect, /^\d{3}.\d{3}.\d{3}-\d{2}$/m)
})

test('email', t => {
  const expect = leite.pessoa.email()
  t.is(typeof expect, 'string')
})

test('idade', t => {
  const expect = leite.pessoa.idade()

  t.is(typeof expect, 'number')
  t.true(expect >= 0 && expect <= 100)
})

test('idade custom', t => {
  const min = 1 + leite.natural({ max: 100 })
  const max = min + leite.natural({ max: 100 })
  const expect = leite.pessoa.idade({ min, max })

  t.is(typeof expect, 'number')
  t.true(expect >= min && expect <= max)
})

test('nascimento', t => {
  const expect = leite.pessoa.nascimento()

  t.is(typeof expect, 'object')
})

test('nascimento como string', t => {
  const expect = leite.pessoa.nascimento({ string: true })

  t.is(typeof expect, 'string')
})

test('nascimento formato DD-MM-YYYY', t => {
  const expect = leite.pessoa.nascimento({ formato: 'DD-MM-YYYY' })

  t.is(typeof expect, 'string')
  t.regex(expect, /^\d{2}-\d{2}-\d{4}$/m)
})

test('nascimento pela idade', t => {
  const calculateAge = bday => {
    const ageDifMs = Date.now() - bday.getTime()
    const ageDate = new Date(ageDifMs)

    return Math.abs(ageDate.getUTCFullYear() - 1970)
  }

  const idade = 1 + leite.natural({ max: 100 })
  const expect = leite.pessoa.nascimento({ idade })

  t.is(typeof expect, 'object')
  t.is(calculateAge(expect), idade)
})

test('nome', t => {
  const expect = leite.pessoa.nome()

  t.is(typeof expect, 'string')
  t.true(expect.split(' ').length > 1)
})

test('nome com nome do meio', t => {
  const expect = leite.pessoa.nome({ nomeDoMeio: true })

  t.is(typeof expect, 'string')
  t.true(expect.split(' ').length >= 2)
  t.true(expect.split(' ')[1].length >= 1)
})

test('nome com nome do meio abreviado', t => {
  const expect = leite.pessoa.nome({ nomeDoMeioAbreviado: true })

  t.is(typeof expect, 'string')
  t.true(expect.split(' ').length >= 2)
  t.true(expect.split(' ')[1].length === 1)
})

test('nome com sexo feminino', t => {
  const expect = leite.pessoa.nome({ sexo: 'Feminino' })

  t.is(typeof expect, 'string')
  t.true(expect.split(' ').length > 1)
})

test('nome com sexo masculino', t => {
  const expect = leite.pessoa.nome({ sexo: 'Masculino' })

  t.is(typeof expect, 'string')
  t.true(expect.split(' ').length > 1)
})

test('primeiro nome', t => {
  const expect = leite.pessoa.nome()

  t.is(typeof expect, 'string')
  t.true(expect.split(' ').length > 1)
})

test('primeiro nome com nome do meio', t => {
  const expect = leite.pessoa.nome({ nomeDoMeio: true })

  t.is(typeof expect, 'string')
  t.true(expect.split(' ').length > 2)
})

test('primeiro nome com nome do meio abreviado', t => {
  const expect = leite.pessoa.nome({ nomeDoMeioAbreviado: true })

  t.is(typeof expect, 'string')
  t.true(expect.split(' ').length >= 2)
  t.true(expect.split(' ')[1].length === 1)
})

test('primeiro nome com sexo feminino', t => {
  const expect = leite.pessoa.nome({ sexo: 'feminino' })

  t.is(typeof expect, 'string')
  t.true(expect.split(' ').length > 1)
})

test('primeiro nome com sexo masculino', t => {
  const expect = leite.pessoa.nome({ sexo: 'masculino' })

  t.is(typeof expect, 'string')
  t.true(expect.split(' ').length > 1)
})

test('rg', t => {
  const expect = leite.pessoa.rg()
  t.is(typeof expect, 'string')
  t.true(expect.length === 12)
})

test('sexo', t => {
  const expect = leite.pessoa.sexo()
  t.is(typeof expect, 'string')
  t.true(expect.length > 1)
})

test('sobrenome', t => {
  const expect = leite.pessoa.sobrenome()
  t.is(typeof expect, 'string')
  t.true(expect.split(' ').length >= 1)
})

test('usuario', t => {
  const expect = leite.pessoa.usuario()
  t.is(typeof expect, 'string')
  t.true(expect.split(' ').length >= 1)
})
