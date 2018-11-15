var express = require('express');
var fs      = require('fs');
var request = require('request');
var cheerio = require('cheerio');
var app     = express();

app.get('/scrape', function(req, res){

  url = 'https://coinmarketcap.com/currencies/bitcoin/historical-data/?start=20130428&end=20181104';

  request(url, function(error, response, html){
    if(!error){
      var $ = cheerio.load(html);

      var title;
      var json = { title : [""]};

      $('.table-responsive').filter(function(){
        var data = $(this);
        title = data.text().trim();
        json.title = title;
      })
    }

    fs.writeFile('output.json', JSON.stringify(json, null, 4), function(err){
      console.log('File successfully written! - Check your project directory for the output.json file');
    })

    res.send('Check your console!')
  })
})

app.listen('8081')
console.log('Magic happens on port 8081 localhost:8081/scrape');
exports = module.exports = app;


