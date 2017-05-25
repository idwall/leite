const GeraDados = require('../index.js')
const expect = require('chai').expect
const _ = require('underscore')

describe('localizacao', () => {
  const geraDados = new GeraDados()

  describe('logradouro()', () => {
    let logradouro

    it('deve retornar um logradouro gerado', () => {
      _(1000).times(() => {
        logradouro = geraDados.localizacao.logradouro()
        expect(logradouro).to.be.a('string')
      })
    })
  })

  describe('estado()', () => {
    let estado

    it('deve retornar um estado gerado', () => {
      _(1000).times(() => {
        estado = geraDados.localizacao.estado()
        expect(estado).to.be.a('string')
        expect(estado).to.have.length(2)
      })
    })
  })

  describe('complemento()', () => {
    let complemento

    it('deve retornar um complemento gerado', () => {
      _(1000).times(() => {
        complemento = geraDados.localizacao.complemento()
        expect(complemento).to.be.a('string')
      })
    })
  })

  describe('cidade()', () => {
    let cidade

    it('deve retornar um cidade gerado', () => {
      _(1000).times(() => {
        cidade = geraDados.localizacao.cidade()
        expect(cidade).to.be.a('string')
      })
    })
  })

  describe('cep()', () => {
    let cep

    it('deve retornar um cep gerado', () => {
      _(1000).times(() => {
        cep = geraDados.localizacao.cep()
        expect(cep).to.be.a('string')
        expect(cep).to.have.length(8)
      })
    })

    it('deve retornar um cep gerado e formatado', () => {
      _(1000).times(() => {
        cep = geraDados.localizacao.cep({
          formatado: true
        })
        expect(cep).to.be.a('string')
        expect(cep).to.match(/^\d{5}-\d{3}$/m)
        expect(cep).to.have.length(9)
      })
    })
  })

  describe('bairro()', () => {
    let bairro

    it('deve retornar um bairro gerado', () => {
      _(1000).times(() => {
        bairro = geraDados.localizacao.bairro()
        expect(bairro).to.be.a('string')
      })
    })
  })
})
