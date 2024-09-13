const cloudImageMap = {
    "clear sky": "url('https://example.com/clear-sky.jpg')",
    "few clouds": "url('https://example.com/few-clouds.jpg')",
    "scattered clouds": "url('https://example.com/scattered-clouds.jpg')",
    "overcast clouds": "url('https://example.com/overcast-clouds.jpg')",
    "rain": "url('https://example.com/rainy.jpg')",
    // Add other types of clouds with appropriate images
};

let cityName = document.getElementById("city-name")
let cityTemp = document.getElementById("city-temp")
let formContainer = document.getElementById("form-container")
let apiKey = "99a1ca016c6562029b8494c5b058d2ac"
let displayedCities = []

formContainer.addEventListener("submit", (e) => {
    e.preventDefault()
    //console.log(e)
    //console.log("city Name is", cityName.value)
    /*if(cityName.value==""){
        alert("it should not be empty") // a if conditionkay place may required likhay tho hojata 
    }*/ 
// if(displayedCities.includes(cityName.value.toLowerCase())){
//     alert("The city is displaying below")
//     return
//    }
    
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName.value}&appid=${apiKey}&units=metric`
    fetch(url)
        .then((res) => {
            console.log(res)
            return res.json()
        })
        .then((res) => {
            console.log(res)
            if(res.cod==='404'){
                alert("enter a correct name of the city")
                return
            }
            if(displayedCities.includes(res.id)){
                alert("The city is displaying below")
                return
            }
            
            // displayedCities.push(cityName.value.toLowerCase());
            const div = document.createElement("div")
            div.classList.add("city")
            displayedCities.push(res.id)
            const { main, sys, name,weather} = res//Destructuring katho hona hey so data pic karlena
            let result = `
        <div>
        <h>${name}</h>
        <p>
            ${main.temp}<sup>0</sup> <br>
            ${sys.country}
            ${weather[0].description}
        </p>
        </div>
        `
        if(div.value=="overcast clouds"){

        }
            // div.innerHTML = result
            // cityTemp.appendChild(div)
            // if(weather[0].description=="overcast clouds")
            // {
            //     const divCloud=document.createElement(clouds)
            // }
        })
})