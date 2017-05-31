'use strict'

const { defaults } = require('underscore')
const nascimento = require('./nascimento')

module.exports = (options = {}) => {
  options = defaults(options, {
    nascimento: nascimento(),
    min: 1,
    max: 100
  })

  const todayDate = new Date()
  const todayYear = todayDate.getFullYear()
  const todayMonth = todayDate.getMonth()
  const todayDay = todayDate.getDate()

  const birthYear = options.nascimento.getFullYear()
  const birthMonth = options.nascimento.getMonth()
  const birthDay = options.nascimento.getDate()

  let age = todayYear - birthYear

  if (todayMonth < birthMonth - 1) {
    age--
  }
  if (birthMonth - 1 === todayMonth && todayDay < birthDay) {
    age--
  }

  if (age > options.max) {
    age = options.max
  } else if (age < options.min) {
    age = options.min
  }

  return age
}
