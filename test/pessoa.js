const GeraDados = require('../index.js')
const expect = require('chai').expect
const _ = require('underscore')
const should = require('should')

describe('pessoa', () => {
  const geraDados = new GeraDados()

  describe('cpf()', () => {
    let cpf

    it('deve retornar um CPF gerado', () => {
      _(1000).times(() => {
        cpf = geraDados.pessoa.cpf()
        expect(cpf).to.be.a('string')
        expect(cpf).to.have.length(11)
      })
    })

    it('deve retornar um CPF gerado e formatado', () => {
      _(1000).times(() => {
        cpf = geraDados.pessoa.cpf({
          formatado: true
        })
        expect(cpf).to.be.a('string')
        expect(cpf).to.match(/^\d{3}.\d{3}.\d{3}-\d{2}$/m)
        expect(cpf).to.have.length(14)
      })
    })
  })

  describe('idade()', () => {
    let idade

    it('deve retornar uma idade gerada', () => {
      _(1000).times(() => {
        idade = geraDados.pessoa.idade()
        expect(idade).to.be.a('number')
        expect(idade).to.be.at.most(100)
        expect(idade).to.be.at.least(1)
      })
    })

    it('deve retornar uma idade gerada entre X e Y', () => {
      _(1000).times(() => {
        const x = 1 + geraDados.natural({max: 100})
        const y = x + geraDados.natural({max: 100})

        idade = geraDados.pessoa.idade({
          min: x, max: y
        })
        expect(idade).to.be.a('number')
        expect(idade).to.be.at.least(x)
        expect(idade).to.be.at.most(y)
      })
    })
  })

  describe('nascimento()', () => {
    let nascimento

    it('deve retornar um data de nascimento gerada', () => {
      _(1000).times(() => {
        nascimento = geraDados.pessoa.nascimento()
        expect(nascimento).to.be.a('Date')
      })
    })

    it('deve retornar um data de nascimento gerada como string', () => {
      _(1000).times(() => {
        nascimento = geraDados.pessoa.nascimento({
          string: true
        })
        expect(nascimento).to.be.a('string')
      })
    })

    it('deve retornar um data de nascimento gerada no format DD-MM-YYYY', () => {
      _(1000).times(() => {
        nascimento = geraDados.pessoa.nascimento({
          formato: 'DD-MM-YYYY'
        })
        expect(nascimento).to.be.a('string')
        expect(nascimento).to.match(/^\d{2}-\d{2}-\d{4}$/m)
      })
    })

    it('deve retornar uma data de nascimento para idade X', () => {
      function _calculateAge(birthday) { // Birthday is a date
        const ageDifMs = Date.now() - birthday.getTime()
        const ageDate = new Date(ageDifMs) // Miliseconds from epoch
        return Math.abs(ageDate.getUTCFullYear() - 1970)
      }

      _(1000).times(() => {
        const x = 1 + geraDados.natural({max: 100})

        nascimento = geraDados.pessoa.nascimento({
          idade: x
        })

        expect(nascimento).to.be.a('Date')
        should(_calculateAge(nascimento)).be.exactly(x)
      })
    })
  })

  describe('nome()', () => {
    let nome

    it('deve retornar um nome gerado', () => {
      _(1000).times(() => {
        nome = geraDados.pessoa.nome()
        expect(nome).to.be.a('string')
        expect(nome.split(' ')).to.have.length.above(1)
      })
    })

    it('deve retornar um nome com nome do meio', () => {
      _(1000).times(() => {
        nome = geraDados.pessoa.nome({
          nome_do_meio: true
        })
        expect(nome).to.be.a('string')
        expect(nome.split(' ')).to.have.length.above(2)
      })
    })

    it('deve retornar um nome com nome do meio abreviado', () => {
      _(1000).times(() => {
        nome = geraDados.pessoa.nome({
          nome_do_meio_abreviado: true
        })
        expect(nome).to.be.a('string')
        expect(nome.split(' ')).to.have.length.above(2)
        expect(nome.split(' ')[1]).to.have.length(1)
      })
    })

    it('deve retornar um nome com sexo feminino', () => {
      _(1000).times(() => {
        nome = geraDados.pessoa.nome({
          sexo: 'Feminino'
        })
        expect(nome).to.be.a('string')
        expect(nome.split(' ')).to.have.length.above(1)
      })
    })

    it('deve retornar um nome com sexo específico', () => {
      _(1000).times(() => {
        nome = geraDados.pessoa.nome({
          sexo: geraDados.pessoa.sexo()
        })
        expect(nome).to.be.a('string')
        expect(nome.split(' ')).to.have.length.above(1)
      })
    })
  })

  describe('primeiro_nome()', () => {
    let primeiro_nome

    it('deve retornar um primeiro nome gerado', () => {
      _(1000).times(() => {
        primeiro_nome = geraDados.pessoa.primeiro_nome()
        expect(primeiro_nome).to.be.a('string')
        expect(primeiro_nome.split(' ')).to.have.length(1)
      })
    })

    it('deve retornar um primeiro nome com nome do meio', () => {
      _(1000).times(() => {
        primeiro_nome = geraDados.pessoa.primeiro_nome({
          nome_do_meio: true
        })
        expect(primeiro_nome).to.be.a('string')
        expect(primeiro_nome.split(' ')).to.have.length(2)
      })
    })

    it('deve retornar um primeiro nome com nome do meio abreviado', () => {
      _(1000).times(() => {
        primeiro_nome = geraDados.pessoa.primeiro_nome({
          nome_do_meio_abreviado: true
        })
        expect(primeiro_nome).to.be.a('string')
        expect(primeiro_nome.split(' ')).to.have.length(2)
        expect(primeiro_nome.split(' ')[1]).to.have.length(1)
      })
    })

    it('deve retornar um primeiro nome do sexo feminino', () => {
      _(1000).times(() => {
        primeiro_nome = geraDados.pessoa.primeiro_nome({
          sexo: 'Feminino'
        })
        expect(primeiro_nome).to.be.a('string')
        expect(primeiro_nome.split(' ')).to.have.length(1)
      })
    })

    it('deve retornar um primeiro nome com sexo específico', () => {
      _(1000).times(() => {
        primeiro_nome = geraDados.pessoa.primeiro_nome({
          sexo: geraDados.pessoa.sexo()
        })
        expect(primeiro_nome).to.be.a('string')
        expect(primeiro_nome.split(' ')).to.have.length(1)
      })
    })
  })

  describe('rg()', () => {
    let rg

    it('deve retornar um CPF gerado', () => {
      _(1000).times(() => {
        rg = geraDados.pessoa.rg()
        expect(rg).to.be.a('string')
        expect(rg).to.have.length(12)
      })
    })
  })

  describe('sexo()', () => {
    let sexo
    it('deve retornar um sexo gerado', () => {
      _(1000).times(() => {
        sexo = geraDados.pessoa.sexo()
        expect(sexo).to.be.a('string')
        expect(sexo).to.have.length.above(1)
      })
    })
  })

  describe('sobrenome()', () => {
    let sobrenome

    it('deve retornar um sobrenome gerado', () => {
      _(1000).times(() => {
        sobrenome = geraDados.pessoa.sobrenome()
        expect(sobrenome).to.be.a('string')
        expect(sobrenome.split(' ')).to.have.length.above(0)
      })
    })
  })

  describe('usuario()', () => {
    let usuario

    it('deve retornar um nome de usuário gerado', () => {
      _(1000).times(() => {
        usuario = geraDados.pessoa.usuario()
        expect(usuario).to.be.a('string')
        expect(usuario.split(' ')).to.have.length.above(0)
      })
    })
  })

  describe('email()', () => {
    let email

    it('deve retornar um email de usuário gerado', () => {
      _(1000).times(() => {
        email = geraDados.pessoa.email()
        expect(email).to.be.a('string')
      })
    })
  })
})
