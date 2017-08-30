var camelCase = require('camelcase')

function registerHelpers(Handlebars) {
    console.log("register helpers")

    Handlebars.registerHelper('nameMap', function(string, custom) {
        if (custom) { return custom }
        return camelCase(string)
    })
    
    Handlebars.registerHelper('protocols', function(protocols) {
        if (!protocols || protocols.length == 0) { return "" }
        return ": " + protocols.join(", ")
    })

    Handlebars.registerHelper('initParam', function(propName, prop) {
        var nameType = propName + ": " + prop.type
        var defaultValue
        if (prop.type.endsWith('?')) { defaultValue = 'nil' }
        if (prop.default) { defaultValue = prop.default }
        if (defaultValue) {
            nameType += (" = " + defaultValue)
        }
        return nameType
    })

    Handlebars.registerHelper('currentDate', function() {
        return (new Date()).toUTCString()
    })
}

module.exports = registerHelpers