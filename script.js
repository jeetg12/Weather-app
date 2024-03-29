
const API_KEY = `f6feb773d218a9bf5c812fbbb94ceb8f`
const form = document.querySelector("form");
const search = document.querySelector("#search");
const searchbutton = document.querySelector("#searchbutton ");
const reset = document.querySelector("#reset");
const sun = document.querySelector(".sun")

const weather = async (city)=>{
	const api =`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
	const response = await fetch(api)
	let data =  await response.json();
	console.log(data);
	let temperature = data.main.temp;
	// temperature = kelvinToCelsius(temperature)
	console.log(temperature+"°C");
	// const sunrisetime = new Date(data.sys.sunrise * 1000); 
    // console.log(sunrisetime.getHours() +"hour"+" " +sunrisetime.getMinutes()+"minutes"+ " "+sunrisetime.getSeconds()+"seconds");
	
	// const sunsettime = new Date(data.sys.sunset * 1000); 
    // console.log(sunsettime.getHours() +"hour"+" " +sunsettime.getMinutes()+"minutes"+ " "+sunsettime.getSeconds()+"seconds");
	 
	console.log(data.weather[0].icon);
	console.log(data.main.feel_like);
	console.log(data.weather[0].main);
	 return showweather(data);
	
	
	
	
}
	
	searchbutton.addEventListener("click",(event)=>{
	console.log(search.value)
	weather(search.value)
	event.preventDefault();

	
	
})


//  const kelvinToCelsius  = (kelvin)=>{
// 	celcius = kelvin-273;
// 	return celcius;


//  }
 const showweather = function(data,sunrisetime){
	console.log(data)
	 sun.innerHTML =`
	 <div class="sun">
	 <h2>Temperature : ${data.main.temp}</h2>
	 <h2>Feel like temp :${data.main.feels_like}</h2>
	 <h3>${data.weather[0].main}</h3>
	 <img src="https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png" >
   </div>
	
	 `
 }
