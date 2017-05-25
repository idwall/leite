'use strict'

module.exports = str => {
  return str.replace(/[^0-9a-z]/gi, '')
}
