const apikey="0fd230cb7ca209019aaa0de2ac5ff0ec";
const apiurl = "https://api.openweathermap.org/data/2.5/weather?q=";

const textbox=document.querySelector(".text");
const searchbtn=document.querySelector(".search");
const temimg=document.querySelector(".temimg");
const weather=document.querySelector(".weather");
const errormsg=document.querySelector(".error");
async function weatherUpdate(city) {

   const respose = await fetch(apiurl + city + `&appid=${apikey}&units=metric`);
   if(respose.status==404){
errormsg.style.display="block";
weather.style.display="none";
   }
   else{
 var data=await respose.json();
    console.log(data);

    const cityname=document.querySelector(".city");
    cityname.innerHTML=data.name;

     const temperture=document.querySelector(".temperture");
   temperture.innerHTML=Math.round(data.main.temp) + " °C ";

     const humdiditypercent=document.querySelector(".humdiditypercent");
  humdiditypercent.innerHTML=data.main.humidity + "%";

     const windspeed=document.querySelector(".windspeed");
   windspeed.innerHTML=data.wind.speed + " Km/h ";
if(data.weather[0].main=='Clear'){
    temimg.src="images/clear.png";
}
else if(data.weather[0].main=='Clouds'){
    temimg.src="images/cloud.png";
}
else if(data.weather[0].main=='Drizzle'){
    temimg.src="images/drizzle.png";
}
else if(data.weather[0].main=='Mist'){
    temimg.src="images/mist.png";
}
else if(data.weather[0].main=='Snow'){
    temimg.src="images/snow.png";
}
else if(data.weather[0].main=='Rain'){
    temimg.src="images/rain.png";
}
weather.style.display="block";
errormsg.style.display="none";
   }
   

}

searchbtn.addEventListener("click",()=>{
weatherUpdate(textbox.value);
})
