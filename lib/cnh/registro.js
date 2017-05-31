'use strict'

const { sample } = require('underscore')
const n = require('./../n')

module.exports = () => {
  return (
    sample('123456789') +
    n(() => {
      return sample('0123456789')
    }, 10).join('')
  )
}
