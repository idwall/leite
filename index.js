const lib = require('./lib')

module.exports = function () {
  const methods = {}

  methods.inteiro = lib.inteiro

  methods.natural = lib.natural

  methods.n = lib.n

  methods.empresa = {
    cnpj: lib.cnpj
  }

  methods.cnh = {
    categoria: lib.cnh.categoria,
    emissao: lib.cnh.emissao,
    numero: lib.cnh.numero,
    registro: lib.cnh.registro,
    seguranca: lib.cnh.seguranca,
    validade: lib.cnh.validade
  }

  methods.pessoa = {
    sexo: lib.sexo,
    rg: lib.rg,
    cpf: lib.cpf,
    idade: lib.idade,
    nome: lib.nome,
    sobrenome: lib.sobrenome,
    primeiro_nome: lib.primeiro_nome,
    nascimento: lib.nascimento,
    email: lib.email,
    usuario: lib.usuario
  }

  methods.localizacao = {
    logradouro: lib.localizacao.logradouro,
    bairro: lib.localizacao.bairro,
    cidade: lib.localizacao.cidade,
    complemento: lib.localizacao.complemento,
    estado: lib.localizacao.estado,
    cep: lib.localizacao.cep
  }

  methods.veiculo = {
    renavam: lib.renavam,
    marca: lib.veiculo.marca,
    modelo: lib.veiculo.modelo,
    placa: lib.veiculo.placa,
    tipo: lib.veiculo.tipo,
    combustivel: lib.veiculo.combustivel,
    carroceria: lib.veiculo.carroceria,
    especie: lib.veiculo.especie,
    restricao: lib.veiculo.restricao,
    categoria: lib.veiculo.categoria
  }

  return methods
}
