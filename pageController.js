const pageScraper = require('./pageScraper');
async function scrapeAll(browserInstance){
    let browser;
    try{
        browser = await browserInstance;
       var result =await pageScraper.scraper(browser);

    return result;

    }
    catch(err){
        console.log("Could not resolve the browser instance => ", err);
    }
}

module.exports = (browserInstance) => scrapeAll(browserInstance)