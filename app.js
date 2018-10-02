// const fs = require('fs');
// const fs = require('express');
// const fs = require('../fs');

const argv = require('./config/yargs').argv;
const colors = require('colors');


const { crearArchivo, listarTabla } = require('./Multiplicar/multiplicar');

let comando = argv._[0];

switch (comando) {
    case 'listar':
        listarTabla(argv.base, argv.limite)
            .catch(e => console.log(e));

        break;
    case 'crear':

        crearArchivo(argv.base, argv.limite)
            .then(archivo => console.log(`Archivo Creado ${ archivo }`))
            .catch(e => console.log(e));

        break;

    default:
        break;
}
// console.log(process.argv);
// let parametro = argv[2];
// let base = parametro.split('=')[1]


















// let data = '';

// for (let i = 1; i <= 10; i++) {

//     data += `${ base } * ${ i } = ${ base * i }\n`;

// }

// fs.writeFile(`Tablas/tabla-${ base }.txt`, data, (err) => {
//     if (err) throw err;

//     console.log(`El archivo tabla ${ base } ha sido creado`);
// });