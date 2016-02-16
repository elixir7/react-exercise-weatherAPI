var Fetch = require('whatwg-fetch');
var baseUrl = 'http://api.openweathermap.org/data/2.5/forecast?';
var apiKey = '&appid=f06dae075f128fd55d49a2655d6e1a9a'

var service = {
  get: function(url){
    return fetch(baseUrl + url + apiKey).then(function(response){
      return response.json();
    });
  }
};

module.exports = service;
