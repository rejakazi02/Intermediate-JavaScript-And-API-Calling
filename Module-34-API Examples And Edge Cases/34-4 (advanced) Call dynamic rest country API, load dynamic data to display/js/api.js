




const loadCountries = () => {

    fetch('https://restcountries.com/v3.1/all')
        .then(response => response.json())
        .then(data => displayData(data))
}

loadCountries();

const displayData = countryData => {


    // console.log(countryData)

    const countryInfo = document.getElementById('country');
    countryData.forEach(country => {

        const countryDiv = document.createElement('div');
        countryDiv.classList.add('mydivStyle');
        // console.log(country)
        countryDiv.innerHTML = `
    
       <h3>Country Name : ${country.name.common}</h3> 
       <h5>Capital : ${country.capital}</h5>
       <button onclick="loadCountryByName('${country.name.common}')">Details</button>
  
    `;

        countryInfo.appendChild(countryDiv);

    });


}

const loadCountryByName = name => {
 
    const test = `https://restcountries.com/v3.1/name/${name}`;
fetch(test)
.then(res => res.json())
.then(data => displayCountryDetail(data[0]))
  
}


const displayCountryDetail = countrys => {
console.log(countrys)
    const countryDiv = document.getElementById('countryDetails');

    countryDiv.innerHTML =`
    <h3>${countrys.name.common}</h3>
    <img src="${countrys.flags.png} " alt="">

    
    `;

}










