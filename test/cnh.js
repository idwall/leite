const GeraDados = require('../index.js')
const expect = require('chai').expect
const _ = require('underscore')

describe('cnh', () => {
  const geraDados = new GeraDados()

  describe('categoria()', () => {
    let categoria

    it('deve retornar um número de CNH gerado', () => {
      _(1000).times(() => {
        categoria = geraDados.cnh.categoria()
        expect(categoria).to.be.a('string')
      })
    })
  })

  describe('emissao()', () => {
    let emissao

    it('deve retornar um número de CNH gerado', () => {
      _(1000).times(() => {
        emissao = geraDados.cnh.emissao()
        expect(emissao).to.be.a('Date')
      })
    })
  })

  describe('validade()', () => {
    let validade

    it('deve retornar um número de CNH gerado', () => {
      _(1000).times(() => {
        validade = geraDados.cnh.validade()
        expect(validade).to.be.a('Date')
      })
    })
  })

  describe('registro()', () => {
    let registro

    it('deve retornar um número de CNH gerado', () => {
      _(1000).times(() => {
        registro = geraDados.cnh.registro()
        expect(registro).to.be.a('string')
        expect(registro).to.have.length(11)
      })
    })
  })

  describe('seguranca()', () => {
    let seguranca

    it('deve retornar um número de CNH gerado', () => {
      _(1000).times(() => {
        seguranca = geraDados.cnh.seguranca()
        expect(seguranca).to.be.a('string')
        expect(seguranca).to.have.length(11)
      })
    })
  })

  describe('numero()', () => {
    let numero

    it('deve retornar um número de CNH gerado', () => {
      _(1000).times(() => {
        numero = geraDados.cnh.numero()
        expect(numero).to.be.a('string')
        expect(numero).to.have.length(12)
      })
    })
  })
})
