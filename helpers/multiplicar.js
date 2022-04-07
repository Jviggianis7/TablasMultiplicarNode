const fs = require('fs');
const { number } = require('yargs');
const crearArchivo = async (base = 5, listar = false, hasta = 10) => {

const colors = require('colors/safe');
    
    try {
        let salida = '';

        for (let i = 1; i <= hasta; i++) {
            salida += (`${base} X ${i} = ${base * i} \n`);
        }

        if (listar) {
            console.log('============');
            console.log(`Tabla de multiplicar ${base}`);
            console.log('============');
            console.log(colors.rainbow(salida));
        }

        fs.writeFileSync(`./salida/tabla-${base}.txt`, salida);


        return (`tabla-${base}.txt`);

    } catch (err) {
        throw err;

    }

}
module.exports = {
    crearArchivo
}