const {crearArchivo} = require('./helpers/multiplicar');
const argv = require('./config/yargs');


console.clear();

crearArchivo (argv.n, argv.l, argv.h)
.then(nombreArchivo => console.log(nombreArchivo, 'creado'))
.catch(err => console.log(err));











/* const [, ,arg3 ='numero=5'] = process.argv;
const[, numero = 5] = arg3.split('='); */

//const numero = 3;
