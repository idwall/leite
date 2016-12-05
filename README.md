# Leite

[![License MIT](https://img.shields.io/npm/l/express.svg)](http://opensource.org/licenses/MIT)
[![Build Status](https://travis-ci.org/idwall/leite.svg?branch=master)](https://travis-ci.org/idwall/leite)
[![npm](https://img.shields.io/npm/dt/leite.svg?style=flat)](https://www.npmjs.com/package/leite)
[![Coverage Status](https://coveralls.io/repos/github/idwall/leite/badge.svg)](https://coveralls.io/github/idwall/leite)

![Leite](/leite.png)

Gerador de dados brasileiros aleatórios.

IMPORTANTE: Este gerador de dados foi criado para ajudar no processo de teste de aplicações. Não representa informações reais e não devem ser utilizado para cadastros reais.


**Mas por que leite?**

[Leite.](https://youtu.be/YIxzomXm0EQ?t=18)

## PESSOA

### CPF

- `geraDados.pessoa.cpf()`
- `geraDados.pessoa.cpf({formatado: true})`

Gera um CPF aleatório

```
geraDados.pessoa.cpf();
=> 52779225718
```

Gera um CPF aleatório formatado

```
geraDados.pessoa.cpf({formatado: true})`
=> 893.158.068-16
```


### RG

- `geraDados.pessoa.rg()`

Gera um RG aleatório

```
geraDados.pessoa.rg();
=> 28.150.454-1
```


### Email

- `geraDados.pessoa.email()`

Gera um email aleatório

```
geraDados.pessoa.email();
=> jonassouza@gmail.com
```


### Nome de usuário

- `geraDados.pessoa.usuario()`

Gera um nome de usuario aleatório

```
geraDados.pessoa.usuario();
=> hugo_cardoso
```


### Idade

- `geraDados.pessoa.idade()`
- `geraDados.pessoa.idade({min: 1, max: 20})`

Gera uma idade aleatória

```
geraDados.pessoa.idade();
=> 28
```

Gera uma idade aleatória entre 18 e 28

```
geraDados.pessoa.idade({min: 18, max: 28});
=> 24
```

### Data de nascimento

- `geraDados.pessoa.nascimento()`
- `geraDados.pessoa.nascimento({string: true})`
- `geraDados.pessoa.nascimento({formato: "DD/MM/YYYY"})`
- `geraDados.pessoa.nascimento({idade: 10})`


Gera uma data de nascimento

```
geraDados.pessoa.nascimento();
=> Sat Apr 05 1947 18:48:41 GMT-0700 (PDT)
```

Gera uma data de nascimento como string

```
geraDados.pessoa.nascimento({string: true});
=> 28/06/1949
```

Gera uma data de nascimento no formato especificado

```
geraDados.pessoa.nascimento({formato: "MMMM Do YYYY, h:mm:ss a"});
=> December 2nd 2016, 6:52:45 pm
```

Gera uma data de nascimento na idade especificada

```
geraDados.pessoa.nascimento({idade: 20});
=> Sat Apr 05 1996 18:48:41 GMT-0700 (PDT)
```

### Sexo

- `geraDados.pessoa.sexo()`

Gera um sexo aleatório

```
geraDados.pessoa.sexo();
=> Masculino
```


### Nome

- `geraDados.pessoa.nome()`
- `geraDados.pessoa.nome({nome_do_meio: true})`
- `geraDados.pessoa.nome({nome_do_meio_abreviado: true})`
- `geraDados.pessoa.nome({sexo: "Masculino"})`

Gera um nome aleatório

```
geraDados.pessoa.nome();
=> Gustavo Melo
```

Gera um nome aleatório com o nome do meio

```
geraDados.pessoa.nome({nome_do_meio: true});
=> Ana Maria de Carvalho
```

Gera um nome aleatório com o nome do meio abreviado

```
geraDados.pessoa.nome({nome_do_meio_abreviado: true});
=> Paulo C Fernandes
```

Gera um nome aleatório do sexo Feminino

```
geraDados.pessoa.nome({sexo: "Feminino"});
=> Mariana Silva
```


### Primeiro nome

- `geraDados.pessoa.primeiro_nome()`
- `geraDados.pessoa.primeiro_nome({nome_do_meio: true})`
- `geraDados.pessoa.primeiro_nome({nome_do_meio_abreviado: true})`
- `geraDados.pessoa.primeiro_nome({sexo: "Masculino"})`

Gera um primeiro nome aleatório

```
geraDados.pessoa.primeiro_nome();
=> Pereira
```

Gera um primeiro nome aleatório com o nome do meio

```
geraDados.pessoa.primeiro_nome({nome_do_meio: true});
=> Ana Maria
```

Gera um primeiro nome aleatório com o nome do meio abreviado

```
geraDados.pessoa.primeiro_nome({nome_do_meio_abreviado: true});
=> Paulo C
```

Gera um primeiro nome do sexo Feminino

```
geraDados.pessoa.primeiro_nome({sexo: "Feminino"});
=> Mariana
```


### Sobrenome

- `geraDados.pessoa.sobrenome()`

Gera um sobrenome aleatório

```
geraDados.pessoa.sobrenome();
=> Pereira
```


## LOCALIZAÇÃO

### Logradouro

- `geraDados.localizacao.logradouro()`

Gera um logradouro aleatório

```
geraDados.localizacao.logradouro();
=> Avenida Brigadeiro Luís Antônio
```

### Complemento

- `geraDados.localizacao.complemento()`

Gera um complemento aleatório

```
geraDados.localizacao.complemento();
=> Apartamento 405
```

### Bairro

- `geraDados.localizacao.bairro()`

Gera um bairro aleatório

```
geraDados.localizacao.bairro();
=> Grajaú
```

### CEP

- `geraDados.localizacao.cep()`
- `geraDados.localizacao.cep({formatado: true})`

Gera um cep aleatório

```
geraDados.localizacao.cep();
=> 13270000
```

Gera um cep aleatório formatado

```
geraDados.localizacao.cep({formatado: true});
=> 18268-010
```

### Cidade

- `geraDados.localizacao.cidade()`

Gera uma cidade aleatória

```
geraDados.localizacao.cidade();
=> São Paulo
```

### Estado

- `geraDados.localizacao.estado()`

Gera um estado aleatório

```
geraDados.localizacao.estado();
=> MG
```

## VEÍCULO

### Carroceria

- `geraDados.veiculo.carroceria()`

Retorna uma carroceria de veículo

```
geraDados.veiculo.carroceria();
=> FURGÃO
```

### Combustível

- `geraDados.veiculo.combustivel()`

Retorna um combustível de veículo

```
geraDados.veiculo.combustivel();
=> GASOLINA
```

### Placa

- `geraDados.veiculo.placa()`

Gera uma placa de veículo

```
geraDados.veiculo.placa();
=> HJU7829
```

### Categoria

- `geraDados.veiculo.categoria()`

Retorna uma categoria de veículo

```
geraDados.veiculo.categoria();
=> PARTICULAR
```

### Espécie

- `geraDados.veiculo.especie()`

Retorna uma espécie de veículo

```
geraDados.veiculo.especie();
=> CORRIDA
```

### Marca

- `geraDados.veiculo.marca()`

Retorna uma marca de veículo

```
geraDados.veiculo.marca();
=> Chevrolet
```

### Modelo

- `geraDados.veiculo.modelo()`

Retorna um modelo de veículo

```
geraDados.veiculo.modelo();
=> 100 2.8 V6 Avant
```

### Restrição

- `geraDados.veiculo.restricao()`

Retorna uma restrição de veículo

```
geraDados.veiculo.restricao();
=> ALIENAÇÃO FIDUCIÁRIA
```

### Tipo

- `geraDados.veiculo.tipo()`

Retorna um tipo de veículo

```
geraDados.veiculo.tipo();
=> MICROÔNIBUS
```

## EMPRESA

### Cnpj

- `geraDados.empresa.cnpj()`
- `geraDados.empresa.cnpj({formatado: false})`

Gera um CNPJ aleatório

```
geraDados.empresa.cnpj();
=> 56655075000165
```

Gera um CNPJ aleatório formatado

```
geraDados.empresa.cnpj({formatado: true})`
=> 47.846.698/0001-24
```

## CNH

### Número

- `geraDados.cnh_numero()`

Gera um número de CNH aleatório

```
geraDados.cnh_numero();
=> 649980822379
```

### Categoria

- `geraDados.cnh_categoria()`

Retorna uma categoria de CNH

```
geraDados.cnh_categoria();
=>
```

### Data de emissão

- `geraDados.cnh_emissao()`

Retorna uma data de emissão de CNH

```
geraDados.cnh_emissao();
=>
```

### Data de validade

- `geraDados.cnh_validade()`

Gera uma data de validade de CNH

```
geraDados.cnh_validade();
=>
```

### Número de registro

- `geraDados.cnh_registro()`

Gera um número de registro de CNH

```
geraDados.cnh_registro();
=>
```

### Número de segurança

- `geraDados.cnh_seguranca()`

Gera um número de segurança de CNH

```
geraDados.cnh_seguranca();
=>
```

------------------------

## TO-DO
- Otimizar código
- Versão browser
- Gerar CEP válido baseado no estado
- Gerar RG com padrão do estado
- Gerador de Empresas
  - Nome
  - Nome Fantasia
  - Inscrição Estadual
- PIS/PASEP

## Fonte de alguns dos dados mockados

API de Consulta Tabela FIPE
http://fipeapi.appspot.com/

Perfil Sistemas - TABELA DE CÓDIGOS RENAVAM
http://perfilsistemas.blogspot.com/2011/01/tabela-de-codigos-renavam.html
