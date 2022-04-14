const fs = require('fs');
let path = 'text.txt';





async function readFile() {

    try {
        var data = fs.readFileSync(path, 'utf8');

        return data;
    } catch (e) {
        console.log('Error:', e.stack);
    }


}




module.exports = {
    readFile
};

// fs.open(ruta, 'a', (err, fd) => {
//     if (err) { 
//         console.log(err); 
//     }
//     else {
//         //si tienes ya el fd (file descriptor), usémoslo        
//         fs.appendFile(fd, texto, function (err) {
//             if (err) throw err;
//             //de nuevo, usemos el fd para cerrar el fichero abierto
//             fs.close(fd, function (err) {
//                 if (err) throw err;
//                 console.log('It\'s saved!');
//             });
//         });
//     }