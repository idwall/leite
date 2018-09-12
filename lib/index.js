'use strict'

const n = require('./n')
const inteiro = require('./inteiro')
const natural = require('./natural')

const cnhCategoria = require('./cnh/categoria')
const emissao = require('./cnh/emissao')
const cnhNumero = require('./cnh/numero')
const registro = require('./cnh/registro')
const validade = require('./cnh/validade')

const cnpj = require('./empresa/cnpj')

const bairro = require('./localizacao/bairro')
const cep = require('./localizacao/cep')
const cidade = require('./localizacao/cidade')
const complemento = require('./localizacao/complemento')
const estado = require('./localizacao/estado')
const logradouro = require('./localizacao/logradouro')
const numero = require('./localizacao/numero')

const email = require('./pessoa/email')
const idade = require('./pessoa/idade')
const nascimento = require('./pessoa/nascimento')
const nome = require('./pessoa/nome')
const primeiroNome = require('./pessoa/primeiro-nome')
const rg = require('./pessoa/rg')
const cpf = require('./pessoa/cpf')
const sexo = require('./pessoa/sexo')
const sobrenome = require('./pessoa/sobrenome')
const usuario = require('./pessoa/usuario')

const ano = require('./veiculo/ano')
const carroceria = require('./veiculo/carroceria')
const categoria = require('./veiculo/categoria')
const combustivel = require('./veiculo/combustivel')
const cor = require('./veiculo/cor')
const especie = require('./veiculo/especie')
const marca = require('./veiculo/marca')
const modelo = require('./veiculo/modelo')
const placa = require('./veiculo/placa')
const restricao = require('./veiculo/restricao')
const tipo = require('./veiculo/tipo')
const renavam = require('./veiculo/renavam')

module.exports = {
  n,
  inteiro,
  natural,
  cnh: {
    categoria: cnhCategoria,
    emissao,
    numero: cnhNumero,
    registro,
    seguranca: registro,
    validade
  },
  empresa: {
    cnpj
  },
  localizacao: {
    bairro,
    cep,
    cidade,
    complemento,
    estado,
    logradouro,
    numero
  },
  pessoa: {
    email,
    idade,
    nascimento,
    nome,
    primeiroNome,
    rg,
    cpf,
    sexo,
    sobrenome,
    usuario
  },
  veiculo: {
    ano,
    carroceria,
    categoria,
    combustivel,
    cor,
    especie,
    marca,
    modelo,
    placa,
    restricao,
    tipo,
    renavam
  }
}
