const
    app = require('./app'),
    yargs = require('yargs')


const flags = yargs.usage('$0: Usage <cmd> [options]')
    .command({
        command: 'search',
        desc: 'search for Star Wars Planets',
        builder: (yargs) => {
            return yargs.option('p', {
                alias: 'planets',
                describe: 'search for planets in star wars'
            })
        },
        handler: (argv) => { app.search(argv.planets) }
    })

    .help('help')
    .argv