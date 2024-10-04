
const apikey="8db62a23f5ae3ccb8ca533b9f278ca6c";
const apiurl="https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const weathericon=document.querySelector(".weather-icon")


function getvalue() {
  // Get the input element
  const input = document.querySelector("#myInput");

  // Get the value of the input
  var value = input.value;

  // Display the value
  checkweather(value);
  // or you can use alert(value) to display it in an alert box
}

async function checkweather(name){
    const response= await fetch(apiurl + name +`&appid=${apikey}`);

    var data =await response.json();
    
    console.log(data);
    
    if(response.status == 404)
    {
        document.querySelector(".error").style.display="block";
        document.querySelector(".weather").style.display="none";
        
    }else
{
    
    document.querySelector(".weather").style.display="block"; 
    document.querySelector(".error").style.display="none";


    document.querySelector('.city').innerHTML=data.name;
    document.querySelector('.temp').innerHTML=Math.round(data.main.temp)+"°C";
    
    document.querySelector('.humidity').innerHTML=data.main.humidity+"%";
    
    document.querySelector('.wind').innerHTML=data.wind.speed + "km/h";

if(data.weather[0].main == "Clouds")
{
    weathericon.src="./images/clouds.png";
}else if(data.weather[0].main == "Clear")
{
    weathericon.src="./images/clear.png";
}else if(data.weather[0].main == "Rain")
{
    weathericon.src="./images/rain.png";
}else if(data.weather[0].main == "Drizzle")
{
    weathericon.src="./images/drizzle.png";
}else if(data.weather[0].main == "Mist")
{
    weathericon.src="./images/mist.png";
}
        // document.querySelector('.error').style.display="none";
        // document.querySelector('.weather').style.display="block";


}

}

















// searchbtn.addEventListener("click" , ()=>{

//     checkweather(searchbox.value)
// })



