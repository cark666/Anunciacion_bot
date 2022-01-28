const browserObject = require('./browser');
const scraperController = require('./pageController');
var http = require("http");

//Importando la libreria node-telegram-bot-api 
const TelegramBot = require('node-telegram-bot-api');
// Creando nuestra variable que almacenara nuestro token para autenticarnos con el bot creado con BotFather
const token = '5263035686:AAFS7oT6n4o8NtwiqQwG78VocD07X1cpKEQ';
// A continuacion, creamos nuestro bot y configuramos el parametro polling igualandolo a True, Con esto logramos que el bot esté en constante proceso de escucha y procesamiento de datos respecto al token de la API de Telegram.
const bot = new TelegramBot(token, {polling: true});
// A partir de estas tres líneas de código, ya podríamos empezar a crear comandos y eventos para darle funcionalidad a nuestro bot.
//Declaramos la funcion




function enviarMensaje(){

//Start the browser and create a browser instance
let browserInstance = browserObject.startBrowser();

// Pass the browser instance to the scraper controller
var scrap =  scraperController(browserInstance)

scrap.then(
    function(result) { 


      

// A partir de estas tres líneas de código, ya podríamos empezar a crear comandos y eventos para darle funcionalidad a nuestro bot.
//Declaramos la funcion
if(result.length > 0){

  console.log("SI")
  bot.sendMessage(-617448606, "Ya estan las notas: " + result[0]);
  process.exit();

 
}else{
console.log("NO")
  bot.sendMessage(-617448606, "Sigue rascando");
  process.exit();
}



     },
    function(error) { console.log(error) }
  );

}

enviarMensaje();
// setInterval(enviarMensaje,1500000);

// bot.onText(/^\/start/, function(msg){
//     // Imprimimos en consola el mensaje recibido.
//     console.log(msg);
//     // msg.chat.id se encarga de recoger el id del chat donde se está realizando la petición.
//     var chatId = msg.chat.id;
//     // msg.from.username se encarga de recoger el @alias del usuario.
//     var username = msg.from.username;
//     // Enviamos un mensaje indicando el id del chat, y concatenamos el nombre del usuario con nuestro saludo
//     bot.sendMessage(chatId, "Hola, " + username + " Estoy Activo");
//   });

//   //Declaramos la funcion indicando que el evento esperado sera un "message"
// bot.on('message', function(msg){
//     console.log(msg);
//     // msg.chat.id se encarga de recoger el id del chat donde se está realizando la petición.
//     var chatId = msg.chat.id;
//     // Enviamos nuestro mensaje indicando el id del chat. 


  


// });




