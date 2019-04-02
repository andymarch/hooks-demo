'use strict';

exports.hello = function(req, res){
    res.json({"hello": "world"});
};

exports.token_enrich = function(req, res){
    var structure = {}
    var commands = 'commands'
    structure[commands] = []

    var command = {
        'type': 'com.okta.identity.patch',
        'value': [
            {
              'op': 'add',
              'path': '/claims/marketingOptOut',
              'value': true
            }
        ]
    }
    structure[commands].push(command)
    res.json(structure);
};