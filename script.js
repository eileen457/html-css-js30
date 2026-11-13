//const wContainer=document.getElementById("weather-container");
const pais=document.getElementById("city-select");
const btn=document.getElementById("get-weather-btn");
const weatherContent = document.getElementById("up-weather-content");

function displayWeatherInfo(data){
  document.getElementById("location").textContent=data.name ?? "N/A";
  document.getElementById("main-temperature").textContent=data.main?.temp ?? "N/A";
  document.getElementById("feels-like").textContent=data.main?.feels_like ?? "N/A";
  document.getElementById("humidity").textContent=data.main?.humidity ?? "N/A";
  document.getElementById("wind").textContent=data.wind?.speed ?? "N/A";
  document.getElementById("wind-gust").textContent=data.wind?.gust ?? "N/A";
  document.getElementById("weather-main").textContent=data.weather?.[0]?.main ?? "N/A";
  document.getElementById("weather-icon").src=data.weather?.[0]?.icon ?? "";

  weatherContent.classList.remove("hidden");
}

let getWeather=async(city)=>{
  try{
  const res= await fetch(`https://weather-proxy.freecodecamp.rocks/api/city/${city}`)
  const data=await res.json();
  return data;
  }catch(err){
    console.log(err);
  }
}

let showWeather=async(city)=>{
  const data= await getWeather(city);

  if(!data){
    alert("Something went wrong, please try again later");
    return;
  }

  displayWeatherInfo(data);
}

btn.addEventListener("click",()=>{
  const city=pais.value;

  if(!city)return;
  showWeather(city);
} );

