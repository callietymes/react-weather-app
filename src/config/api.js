const axios = require('axios');


const apiKey = 'a8932f2cba9bbae35a5e00e297de5021';


module.exports = {
    getTodaysWeather: function (cityName) {
        return axios.get('http://api.openweathermap.org/data/2.5/weather?q=' + cityName + '&type=accurate&APPID=' + apiKey)
            .then((response) => {
                return response.data.main;
            });

    },

    getFiveDayForecast: function (cityName) {
        return axios.get('http://api.openweathermap.org/data/2.5/forecast/daily?q=' + cityName + '&type=accurate&APPID=' + apiKey + '&cnt=5')
            .then((response) => {
                return response.data.list;
            });
    }

};
