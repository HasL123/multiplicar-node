const fs = require('fs');
const colors = require('colors');



listarTabla = (base, limite) => {

    console.log('==================='.green);
    console.log('tabla'.green);
    console.log('==================='.green);

    for (let i = 1; i <= limite; i++) {

        console.log(`${ base } * ${ i } = ${ base * i }\n`)

    }
}



// module.exports.crearArchivo = (base) => {
crearArchivo = (base, limite) => {
    return new Promise((resolve, reject) => {


        if (!Number(base)) {
            reject('No es un Número');
            return;
        }

        let data = '';

        for (let i = 1; i <= limite; i++) {

            data += `${ base } * ${ i } = ${ base * i }\n`;

        }

        fs.writeFile(`Tablas/tabla-${ base }.txt`, data, (err) => {

            if (err) reject(err)
            else
                resolve(`tabla - ${ base }.txt `);
        });

    })
}


module.exports = {
    crearArchivo,
    listarTabla
}