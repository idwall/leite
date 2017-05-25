const GeraDados = require('../index.js')
const expect = require('chai').expect
const _ = require('underscore')

describe('empresa', () => {
  const geraDados = new GeraDados()

  describe('cnpj()', () => {
    let cnpj

    it('deve retornar um CNPJ gerado', () => {
      _(1000).times(() => {
        cnpj = geraDados.empresa.cnpj()
        expect(cnpj).to.be.a('string')
        expect(cnpj).to.have.length(14)
      })
    })

    it('deve retornar um CNPJ gerado e formatado', () => {
      _(1000).times(() => {
        cnpj = geraDados.empresa.cnpj({
          formatado: true
        })
        expect(cnpj).to.be.a('string')
        expect(cnpj).to.match(/^\d{2}.\d{3}.\d{3}\/\d{4}-\d{2}$/m)
        expect(cnpj).to.have.length(18)
      })
    })
  })
})
