'use strict'

const {
  inteiro,
  natural,
  n,
  cnh,
  empresa,
  localizacao,
  pessoa,
  veiculo
} = require('./lib')

module.exports = function () {
  const methods = {}

  methods.inteiro = inteiro
  methods.natural = natural
  methods.n = n
  methods.cnh = {
    categoria: cnh.categoria,
    emissao: cnh.emissao,
    numero: cnh.numero,
    registro: cnh.registro,
    seguranca: cnh.seguranca,
    validade: cnh.validade
  }
  methods.empresa = {
    cnpj: empresa.cnpj
  }
  methods.localizacao = {
    cep: localizacao.cep,
    estado: localizacao.estado,
    cidade: localizacao.cidade,
    bairro: localizacao.bairro,
    logradouro: localizacao.logradouro,
    complemento: localizacao.complemento,
    numero: localizacao.numero
  }
  methods.pessoa = {
    email: pessoa.email,
    idade: pessoa.idade,
    nascimento: pessoa.nascimento,
    nome: pessoa.nome,
    primeiroNome: pessoa.primeiroNome,
    rg: pessoa.rg,
    cpf: pessoa.cpf,
    sexo: pessoa.sexo,
    sobrenome: pessoa.sobrenome,
    usuario: pessoa.usuario
  }
  methods.veiculo = {
    ano: veiculo.ano,
    carroceria: veiculo.carroceria,
    categoria: veiculo.categoria,
    combustivel: veiculo.combustivel,
    cor: veiculo.cor,
    especie: veiculo.especie,
    marca: veiculo.marca,
    modelo: veiculo.modelo,
    placa: veiculo.placa,
    restricao: veiculo.restricao,
    tipo: veiculo.tipo,
    renavam: veiculo.renavam
  }

  return methods
}
