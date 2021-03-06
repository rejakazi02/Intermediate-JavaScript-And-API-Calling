




const loadCountries = () => {

    fetch('https://restcountries.com/v3.1/all')
        .then(response => response.json())
        .then(data => displayData(data))
}

loadCountries();

const displayData = countryData => {


    console.log(countryData)

    const countryInfo = document.getElementById('country');
    countryData.forEach(country => {

        const countryDiv = document.createElement('div');
        countryDiv.classList.add('mydivStyle');
        console.log(country)
        countryDiv.innerHTML = `
    
       <h1>Country Name : ${country.name.common}</h1> 
       <h5>Capital : ${country.capital}</h5>
       <p>Languages : ${country.languages.spa}</p>
       <p>Timezones : ${country.timezones} </p>
       <p>Region : ${country.region}</p>
       <p>Continents : ${country.continents}</p>
       <img src="${country.flags.png} " alt="">
    `;

        countryInfo.appendChild(countryDiv);

    });


}





