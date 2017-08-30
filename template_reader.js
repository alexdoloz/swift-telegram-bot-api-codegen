var fs = require('fs')
var assert = require('assert')
var path = require('path')


function readTemplateSource(mode) {
  var fileNames = {
    "models": "model",
    "methods": "method"
  }
  var appDir = path.dirname(require.main.filename)
  var templateFileName = appDir + "/templates/" + fileNames[mode] + ".handlebars"
  assert.ok(templateFileName, "Template for mode " + mode + " not found.")
  return fs.readFileSync(templateFileName, 'utf8')
}

module.exports = readTemplateSource