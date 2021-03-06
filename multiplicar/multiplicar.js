const fs = require('fs');
var colors = require('colors');


let listarTabla = (base, limite = 10) => {

    console.log('======================================='.yellow);
    console.log(`===========Tabla del ${base}===========`.blue);
    console.log('======================================='.red);


    for (let i = 1; i <= limite; i++) {
        resultado = `${base} * ${i} = ${base*i}`;
        console.log(resultado.rainbow);

    }

}


let crearArchivo = (base, limite = 10) => {
    return new Promise((resolve, reject) => {

        if (!Number(base)) {
            reject(`El valor ingresado ${base} debe ser un número`);
            return;
        }

        data = '';

        for (let i = 1; i <= limite; i++) {
            data += `${base} * ${i} = ${base*i}\n`;
        }

        fs.writeFile(`tablas/tabla-${base}-al-${limite}.txt`, data, (err) => {
            if (err)
                reject(err);
            else
                resolve(`tabla-${base}-al-${limite}.txt`)

        });

    })
}

module.exports = {
    crearArchivo,
    listarTabla
}