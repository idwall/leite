const GeraDados = require('../index.js')
const expect = require('chai').expect
const _ = require('underscore')

describe('veiculo', () => {
  const geraDados = new GeraDados()

  describe('tipo()', () => {
    let tipo

    it('deve retornar um tipo de veículo gerado', () => {
      _(1000).times(() => {
        tipo = geraDados.veiculo.tipo()
        expect(tipo).to.be.a('string')
      })
    })
  })

  describe('restricao()', () => {
    let restricao

    it('deve retornar uma restricao de veículo gerada', () => {
      _(1000).times(() => {
        restricao = geraDados.veiculo.restricao()
        expect(restricao).to.be.a('string')
      })
    })
  })

  describe('renavam()', () => {
    let renavam

    it('deve retornar um renavam de veículo gerado', () => {
      _(1000).times(() => {
        renavam = geraDados.veiculo.renavam()
        expect(renavam).to.be.a('string')
      })
    })
  })

  describe('placa()', () => {
    let placa

    it('deve retornar uma placa de veículo gerada', () => {
      _(1000).times(() => {
        placa = geraDados.veiculo.placa()
        expect(placa).to.be.a('string')
      })
    })
  })

  describe('modelo()', () => {
    let modelo

    it('deve retornar um modelo de veículo gerado', () => {
      _(1000).times(() => {
        modelo = geraDados.veiculo.modelo()
        expect(modelo).to.be.a('string')
      })
    })
  })

  describe('marca()', () => {
    let marca

    it('deve retornar uma marca de veículo gerada', () => {
      _(1000).times(() => {
        marca = geraDados.veiculo.marca()
        expect(marca).to.be.a('string')
      })
    })
  })

  describe('especie()', () => {
    let especie

    it('deve retornar uma espécie de veículo gerada', () => {
      _(1000).times(() => {
        especie = geraDados.veiculo.especie()
        expect(especie).to.be.a('string')
      })
    })
  })

  describe('combustivel()', () => {
    let combustivel

    it('deve retornar um combustível de veículo gerado', () => {
      _(1000).times(() => {
        combustivel = geraDados.veiculo.combustivel()
        expect(combustivel).to.be.a('string')
      })
    })
  })

  describe('categoria()', () => {
    let categoria

    it('deve retornar uma categoria de veículo gerada', () => {
      _(1000).times(() => {
        categoria = geraDados.veiculo.categoria()
        expect(categoria).to.be.a('string')
      })
    })
  })

  describe('carroceria()', () => {
    let carroceria

    it('deve retornar uma carroceria de veículo gerada', () => {
      _(1000).times(() => {
        carroceria = geraDados.veiculo.carroceria()
        expect(carroceria).to.be.a('string')
      })
    })
  })
})
