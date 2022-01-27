const scraperObject = {
    url: 'https://www.culturaydeporte.gob.es/servicios-al-ciudadano/catalogo/general/20/206519/ficha/206519-2016.html',
    async scraper(browser){
        let page = await browser.newPage();
        console.log(`Navigating to ${this.url}...`);
        await page.goto(this.url);

        await page.waitForSelector('#contenido');
        let urls = await page.$$eval('a', links => {
            links = links.filter(link => link.textContent.includes('aprobados'))
            links = links.map(el => el.href)
            return links;
        });



        // const fs = require('fs');

        // // specify the path to the file, and create a buffer with characters we want to write
        // let path=".\persistence\aprobados.txt";
        // let buffer = new Buffer(urls[0]);
        
        // // open the file in writing mode, adding a callback function where we do the actual writing
        // fs.open(path, 'w', function(err, fd) {
        //     if (err) {
        //         throw 'could not open file: ' + err;
        //     }
        
        //     // write the contents of the buffer, from position 0 to the end, to the file descriptor returned in opening our file
        //     fs.write(fd, buffer, 0, buffer.length, null, function(err) {
        //         if (err) throw 'error writing file: ' + err;
        //         fs.close(fd, function() {
        //             console.log('wrote the file successfully');
        //         });
        //     });
        // });





        console.log(urls);
        return urls;
    }
}

module.exports = scraperObject;