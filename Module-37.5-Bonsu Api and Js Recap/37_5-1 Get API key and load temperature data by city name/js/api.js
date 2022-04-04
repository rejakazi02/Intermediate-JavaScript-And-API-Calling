const API_KEY = `e909cfb76a1aa66ca5139ed4fd8417dd`;

const searchBtn = () => {
 const searchFiled = document.getElementById('searchFiled').value;


fetch(`https://api.openweathermap.org/data/2.5/weather?q=${searchFiled}&appid=${API_KEY}&units=metric`)
.then(res => res.json())
.then(data => displayDetails(data))
// .then(data => displayDetails(data))

}


const setInnertext = (id, text) => {

document.getElementById(id).innerText = text;

}





const  displayDetails = temperature => {

setInnertext('city', temperature.name);
setInnertext('temperature', temperature.main.temp);
setInnertext('weather', temperature.weather[0].main);
setInnertext('city', temperature.name);

const url =`http://openweathermap.org/img/wn/${temperature.weather[0].icon}@2x.png`;
const imgIcon = document.getElementById('img');
imgIcon.setAttribute('src', url);

}

// const displayDetails = datas => {


//     const imgg = document.getElementById("imgg");
//    imgg.innerHTML = '';

//     const ing = document.createElement('div');
//     ing.classList.add("wediv");


//     ing.innerHTML = `<img src=" http://openweathermap.org/img/wn/${datas.weather[0].icon}@2x.png" class="imgg image-custom card-img-top mt-2" alt="..."  />
    
//     <h1 id="city">${datas.name}</h1>
//             <h3><span id="temp">${datas.main.temp}</span>&deg;C</h3>
//             <h1 id="weather" class="lead">${datas.weather[0].main}</h1>
    
//     `;
//  imgg.appendChild(ing);


// //  const city = document.getElementById("city");
// //  const temp = document.getElementById("temp");
// //  const weather = document.getElementById("weather");

// //  city.innerHTML = `${datas.name}`;
// //  temp.innerHTML = `${datas.main.temp}`;
// //  weather.innerHTML = `${datas.weather[0].main}`;
//     console.log(datas)
// }