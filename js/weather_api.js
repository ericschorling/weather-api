const inputButton = document.getElementById("submitButton")
const weatherOutput = document.getElementById('weatherOutput')

const appkey = '4ee353bc9d0b56b1cd722aa8dc4c12a8'

let city = 'Charlottesville'

url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${appkey}`
    
const get = (url) => {
    return fetch(url)
        .then (response => response.json())
        .then (data => data)
};

// function get(url) {
//     return fetch(url)
//       .then(function(response) {
//         return response.json();
//       })
//       .then(function(data) {
//         return data;
//       })
//       .catch(function(error) {
//         return error;
//       });
//   }
// get(apiUrl).then(function(response) {
//     chuckSaysParagraph.innerHTML = response.value;
//   })
const returnInfo = (city) => {
    
};

inputButton.addEventListener('click', (e)=>{
    e.preventDefault()

    get(url).then(function(response) {
        weatherOutput.innerHTML = ((response.main.temp-273.15)*(9/5)+32).toFixed(2)
        console.log(response)
    })
    //console.log(anotherName)
    // console.log(jObject)
    // weatherOutput.innerHTML = jObject
});