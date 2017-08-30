var fs = require('fs')
var Handlebars = require('handlebars')

var registerHelpers = require('./helpers')
var parseContext = require('./context_parser')
var readTemplateSource = require('./template_reader')

registerHelpers(Handlebars)

var source = readTemplateSource('methods')
var template = Handlebars.compile(source)

var context = {
    "getMe": {
        "input": "Nothing",
        "output": "User"
    },
    "sendMessage": {
        "input": "OutgoingMessage",
        "output": "Message"
    }
}
console.log(template(context))
//var contexts = parseContext('yaml/models.yml')

// node codegen.js --models <file.yml> --output <output_dir>
// node codegen.js --methods <file.yml> --output <output_dir>
//  {
//     "$name": "User",
//     "protocols": ["Encodable"],
//     "props": {
//         "id": {
//             "type": "Int"
//         },
//         "is_bot": {
//             "type": "Bool" 
//         },
//         "all_members_are_administrators": {
//             "type": "Bool",
//             "name": "areAllMembersAdministrators"
//         }
//     }
// }
/*
contexts.forEach(function(context) {
    console.log(template(context))
})
*/
//console.log(template(context))