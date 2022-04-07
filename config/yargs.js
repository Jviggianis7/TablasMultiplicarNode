const { describe } = require('yargs');

const argv = require('yargs')
    .option('n', {
        alias: 'numero',
        type: 'number',
        demandOption: true,
        describe:'Es el número de la tabla de multiplicar'
    })
    .option('l', {
        alias: 'listar',
        type: 'boolean',
        default: false,
        describe:'Muestra la tabla en consola'
    })
    .option('h', {
        alias: 'hasta',
        type: 'number',
        default: 10,
        describe:'número hasta donde quieres la tabla'
    })
    .check((argv, options) => {
        if (isNaN(argv.n)) {
            throw 'La base tiene que ser un número!!!'
        }
        return true;
    })
    .argv;

    module.exports= argv;