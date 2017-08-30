var fs = require('fs')
var yaml = require('js-yaml');


function parseContext(yamlFileName) {
    var doc = yaml.load(fs.readFileSync(yamlFileName, 'utf8'))
    var contexts = []
    for (var modelName in doc) {
        var model = doc[modelName]
        var protocols = model['$protocols']
        var contextProtocols = typeof protocols == "string" ? [protocols] : protocols
        var context = {
            '$name': modelName,
            'protocols': contextProtocols,
            'props': {}
        }
        for (var propName in model) {
            if (/\$/i.test(propName)) { continue }
            var propValue = model[propName]
            var contextPropValue = {}
            if (typeof propValue == "string") {
                contextPropValue.type = propValue
            } else {
                contextPropValue = propValue
            }
            context.props[propName] = contextPropValue
        }
        contexts.push(context)
    }
    return contexts
}

module.exports = parseContext