const
    config = require('./config'),
    superagent = require('superagent')


exports.fetch = (url) => {
    return superagent.get(url)
        .then(response => response.body)
        .catch(error => error.response.body)
}

exports.search = (name) => {
    return superagent.get(`${config.url}?search=${name}`)
        .then(response => response.body)
        .catch(error => error.response.body)
}

