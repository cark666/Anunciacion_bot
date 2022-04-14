const browserObject = require('./browser');
const scraperController = require('./pageController');
const files = require('./filesReader');
var http = require("https");


function sendNotification(mensaje) {
    return new Promise((resolve, reject) => {
        var bot_token = '5263035686:AAFS7oT6n4o8NtwiqQwG78VocD07X1cpKEQ'
            //  var bot_chatID = '-617448606'
        var bot_chatID = '-1001482805662'

        var msg = mensaje
        var send_text = 'https://api.telegram.org/bot' + bot_token + '/sendMessage?chat_id=' + bot_chatID + '&parse_mode=Markdown&text=' + msg
        http.get(send_text, (resp) => {
            let data = '';

            // Un fragmento de datos ha sido recibido.
            resp.on('data', (chunk) => {
                data += chunk;
            });

            // Toda la respuesta ha sido recibida. Imprimir el resultado.
            resp.on('end', () => {
                console.log(JSON.parse(data));
                resolve(data)
            });

        }).on("error", (err) => {
            console.log("Error: " + err.message);
            reject(err);
        })

    });


}

function enviarMensaje() {

    //Start the browser and create a browser instance
    let browserInstance = browserObject.startBrowser();

    // Pass the browser instance to the scraper controller
    var scrap = scraperController(browserInstance)

    scrap.then(
        function(result) {




            // A partir de estas tres líneas de código, ya podríamos empezar a crear comandos y eventos para darle funcionalidad a nuestro bot.
            //Declaramos la funcion
            if (result.length > 0) {

                files.readFile().then(function(response) {
                    var text = response
                    console.log('SI')
                    var filter = result.filter(function(element) {
                        return !text.includes(element)
                    });

                    if (filter.length > 0) {
                        var notiification = sendNotification('Ya estan las notas: ' + filter[0]);

                        notiification.then(
                            function(result) { process.exit(); },
                            function(error) {
                                console.log(error)
                                process.exit();
                            }

                        )
                    } else {
                        console.log('Sigue rascando')
                        process.exit();



                    }

                });

            } else {
                console.log('Sigue rascando')
                process.exit();



            }



        },
        function(error) { console.log(error) }
    );

}

enviarMensaje();



// setInterval(enviarMensaje,1500000);