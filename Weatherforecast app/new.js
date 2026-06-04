var userlocation1= document.getElementById("userlocation")
var converter1 = document.getElementById("converter")
var weathericon1 = document.querySelector(".weathericon")
var temperature1 = document.querySelector(".temperature")
var date1 = document.getElementById("date")
var place1 = document.querySelector(".place")
var hvalue1 = document.querySelector(".hvalue")
var wvalue1 = document.querySelector(".wvalue")
var cvalue1 = document.querySelector(".cvalue")
var pvalue1 = document.querySelector(".pvalue")
var srvalue1 = document.getElementById("srvalue")
var ssvalue1 = document.getElementById("ssvalue")
var img1 = document.getElementById("dimg")
const icon2 = document.getElementById("icon1")
var card1 = document.querySelector("card")
 var api_key = 'cc4010489d1dd0696d3032eae3f95fac';
 var fimg3 =document.querySelector(".img3");
 var fimg4 =document.querySelector(".img4");
 var fimg5 =document.querySelector(".img5");
 var fimg6 =document.querySelector(".img6");
 var fimg7 =document.querySelector(".img7");
 var fimg8 =document.querySelector(".img8");
 var description1 = document.querySelector(".description")
 var next1 = document.querySelector(".next")
 var card2 = document.querySelector(".card")
 var box2 =document.querySelector(".box2")
 var box3 =document.querySelector(".box3")


 var deg1 = document.getElementById("temp1")
 var deg2 = document.getElementById("temp2")
 var deg3 = document.getElementById("temp3")
 var deg4 = document.getElementById("temp4")
 var deg5 = document.getElementById("temp5")
 var deg6 = document.getElementById("temp6")


 var like1 =document.getElementById("feels1")
 var like2 =document.getElementById("feels2")
 var like3 =document.getElementById("feels3")
 var like4 =document.getElementById("feels4")
 var like5 =document.getElementById("feels5")
 var like6 =document.getElementById("feels6")


 var fdate1 = document.getElementById("date1")
 var fdate2 = document.getElementById("date2")
 var fdate3 = document.getElementById("date3")
 var fdate4 = document.getElementById("date4")
 var fdate5 = document.getElementById("date5")
 var fdate6 = document.getElementById("date6")
 var fdate7 = document.getElementById("date7")
 var fdate8 = document.getElementById("date8")
 var fdate9 = document.getElementById("date9")
 var fdate10 = document.getElementById("date10")
 var fdate11 = document.getElementById("date11")
 var fdate12 = document.getElementById("date12")
 var fdate13 = document.getElementById("date13")
 var fdate14 = document.getElementById("date14")

 var calendericon1 = document.getElementById("calendericon")
 var locationicon1 = document.getElementById("locationicon")

 var fimg9 =document.querySelector(".img9");
 var fimg10 =document.querySelector(".img10");
 var fimg11 =document.querySelector(".img11");
 var fimg12 =document.querySelector(".img12");
 var fimg13 =document.querySelector(".img13");
 var fimg14 =document.querySelector(".img14");
 var fimg15 =document.querySelector(".img15");


 var deg7 =document.getElementById("htempvalue1")
 var deg8 =document.getElementById("htempvalue2")
 var deg9 =document.getElementById("htempvalue3")
 var deg10=document.getElementById("htempvalue4")
 var deg11=document.getElementById("htempvalue5")
 var deg12=document.getElementById("htempvalue6")
 var deg13=document.getElementById("htempvalue7")


 var desc1 = document.getElementById("hdescription")
 var desc2 = document.getElementById("hdescription1")
 var desc3 = document.getElementById("hdescription2")
 var desc4 = document.getElementById("hdescription3")
 var desc5 = document.getElementById("hdescription4")
 var desc6 = document.getElementById("hdescription5")
 var desc7 = document.getElementById("hdescription6")
 var lloc1 = document.getElementById("lloc")

 
 


WEATHERAPI_ENDPOINT=`https://api.openweathermap.org/data/2.5/weather?appid=cc4010489d1dd0696d3032eae3f95fac&q=`




function finduserlocation(){
    fetch(WEATHERAPI_ENDPOINT+ userlocation1.value)
    .then((response) => response.json())
    .then((data) => {
       if(data.cod != '' && data.cod!= 200){
        alert(data.message)
    return;
       }
       console.log(data)
       place1.innerHTML = data.name+ " ,"+ data.sys.country;
       img1.src = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`  
       const temp1 = (data.main.temp - 273.15).toFixed(1);
        temperature1.innerHTML = Math.round(temp1)+"°C"
        description1.innerHTML = data.weather[0].description
        hvalue1.innerHTML = Math.round(data.main.humidity)+"<span>%</span>"
        wvalue1.innerHTML = Math.round(data.wind.speed)+"<span>m/s</span>"
        cvalue1.innerHTML =Math.round(data.clouds.all)+"<span>%</span>"
       
        pvalue1.innerHTML=Math.round(data.main.pressure)+"<span>hpa</span>"

        const weatherdata = {
            sunrise:data.sys.sunrise,
            sunset:data.sys.sunset

        }

        function convertUTCToLocal(utcTimestamp) {
            // Convert seconds to milliseconds
            const utcDate = new Date(utcTimestamp * 1000);
            const options = { hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: false };
           return utcDate.toLocaleTimeString([], options);
        }

        const localSunrise = convertUTCToLocal(weatherdata.sunrise);
        const localSunset = convertUTCToLocal(weatherdata.sunset);

       srvalue1.innerHTML = localSunrise;
       ssvalue1.innerHTML = localSunset;


       function time(){
        const now = new Date();
        var hours = now.getHours();
        const miridiem = hours >= 12 ? "PM" : "AM";
        hours = hours % 12 || 12;
        hours = hours.toString().padStart(2,0);
      
        const daysOfWeek = [
            "Sunday",
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
            "Saturday",
          ];
          const currentday = daysOfWeek[now.getDay()]
          const day2 = now.getDate();
          const year1 = now.getFullYear()
          const month1 = now.toLocaleString('default', { month:"long"});
          const time3 =   `${currentday} , ${day2} ${month1} ${year1}`
          date1.textContent = time3
      
      
      }
      time()    

      forsecast_api_url=`https://api.openweathermap.org/data/2.5/forecast?lat=${data.coord.lat}&lon=${data.coord.lon}&appid=${api_key}`;
      fetch(forsecast_api_url)
    .then((response) => response.json())
    .then((data) => {
       if(data.cod != '' && data.cod!= 200){
        alert(data.message)
    return;
       }
       console.log(data)  

  fimg3.src=`https://openweathermap.org/img/wn/${data.list[1].weather[0].icon}@2x.png` 
  fimg4.src=`https://openweathermap.org/img/wn/${data.list[4].weather[0].icon}@2x.png` 
  fimg5.src=`https://openweathermap.org/img/wn/${data.list[12].weather[0].icon}@2x.png` 
  fimg6.src=`https://openweathermap.org/img/wn/${data.list[20].weather[0].icon}@2x.png` 
  fimg7.src=`https://openweathermap.org/img/wn/${data.list[28].weather[0].icon}@2x.png` 
  fimg8.src=`https://openweathermap.org/img/wn/${data.list[36].weather[0].icon}@2x.png` 



    const temper1 = (data.list[1].main.temp - 273.15).toFixed(1);
        deg1.innerHTML = temper1+"°C"
    const temper2 = (data.list[4].main.temp - 273.15).toFixed(1);
        deg2.innerHTML = temper2+"°C"   
    const temper3 = (data.list[12].main.temp - 273.15).toFixed(1);
        deg3.innerHTML = temper3+"°C"
    const temper4 = (data.list[20].main.temp - 273.15).toFixed(1);
        deg4.innerHTML = temper4+"°C"
     const temper5 = (data.list[28].main.temp - 273.15).toFixed(1);
        deg5.innerHTML = temper5+"°C"
    const temper6= (data.list[36].main.temp - 273.15).toFixed(1);
        deg6.innerHTML = temper6+"°C"
  
  

     like1.innerHTML = data.list[1].weather[0].description;   
     like2.innerHTML = data.list[4].weather[0].description;  
     like3.innerHTML = data.list[12].weather[0].description;  
     like4.innerHTML = data.list[20].weather[0].description;  
     like5.innerHTML = data.list[28].weather[0].description;  
     like6.innerHTML = data.list[36].weather[0].description;  
  


    fdate1.innerHTML =data.list[1].dt_txt.slice(0,10);
    fdate2.innerHTML =data.list[4].dt_txt.slice(0,10);
    fdate3.innerHTML =data.list[12].dt_txt.slice(0,10);
    fdate4.innerHTML =data.list[20].dt_txt.slice(0,10);
    fdate5.innerHTML =data.list[28].dt_txt.slice(0,10);
    fdate6.innerHTML =data.list[36].dt_txt.slice(0,10);




    fimg9.src =`https://openweathermap.org/img/wn/${data.list[4].weather[0].icon}@2x.png`
    fimg10.src =`https://openweathermap.org/img/wn/${data.list[5].weather[0].icon}@2x.png`
    fimg11.src =`https://openweathermap.org/img/wn/${data.list[6].weather[0].icon}@2x.png`
    fimg12.src =`https://openweathermap.org/img/wn/${data.list[7].weather[0].icon}@2x.png`
    fimg13.src =`https://openweathermap.org/img/wn/${data.list[8].weather[0].icon}@2x.png`
    fimg14.src =`https://openweathermap.org/img/wn/${data.list[9].weather[0].icon}@2x.png`
    fimg15.src =`https://openweathermap.org/img/wn/${data.list[10].weather[0].icon}@2x.png`
   
    

    const temper7 = (data.list[4].main.temp - 273.15).toFixed(1);
    deg7.innerHTML = temper7+"°C";
const temper8 = (data.list[5].main.temp - 273.15).toFixed(1);
    deg8.innerHTML = temper8+"°C";   
const temper9 = (data.list[6].main.temp - 273.15).toFixed(1);
    deg9.innerHTML = temper9+"°C";
const temper10 = (data.list[7].main.temp - 273.15).toFixed(1);
    deg10.innerHTML = temper10+"°C";
 const temper11 = (data.list[8].main.temp - 273.15).toFixed(1);
    deg11.innerHTML = temper11+"°C";
const temper12= (data.list[9].main.temp - 273.15).toFixed(1);
    deg12.innerHTML = temper12+"°C";
    const temper13= (data.list[9].main.temp - 273.15).toFixed(1);
    deg13.innerHTML = temper13+"°C";
  


    desc1.innerHTML = data.list[4].weather[0].description
    desc2.innerHTML = data.list[5].weather[0].description
    desc3.innerHTML = data.list[6].weather[0].description
    desc4.innerHTML = data.list[7].weather[0].description
    desc5.innerHTML = data.list[8].weather[0].description
    desc6.innerHTML = data.list[9].weather[0].description
    desc7.innerHTML = data.list[10].weather[0].description
  

    fdate7.innerHTML =data.list[4].dt_txt.slice(10);
    fdate8.innerHTML =data.list[5].dt_txt.slice(10);
    fdate9.innerHTML =data.list[6].dt_txt.slice(10);
    fdate10.innerHTML =data.list[7].dt_txt.slice(10);
    fdate11.innerHTML =data.list[8].dt_txt.slice(10);
    fdate12.innerHTML =data.list[9].dt_txt.slice(10);
    fdate13.innerHTML =data.list[10].dt_txt.slice(10);

 
        
    });
}

    )}


  icon2.addEventListener("click" , () =>{
     next1.style.display = "block"
  })  
  icon2.addEventListener("click" ,() =>{
    card2.style.display="block"
  })
  icon2.addEventListener("click", () =>{
    box2.style.display="block"
  })
  icon2.addEventListener("click", () =>{
    box3.style.display="block"
  })

  




   
  
