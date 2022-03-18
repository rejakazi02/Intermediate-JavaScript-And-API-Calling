const randomUser = () => {

    fetch('https://randomuser.me/api/?results=50')
        .then(response => response.json())
        .then(data => displayData(data))
}

randomUser();

const displayData = datas => {

    const values = datas.results;

    const ranData = document.getElementById('randomUser');

    for (const value of values) {

        const ptag = document.createElement('div');
        console.log(value)
        ptag.classList.add("myStyle");
        ptag.innerHTML = ` 
 
         <h1> Name : ${value.name.title} ${value.name.first} ${value.name.last}</h1> 
         <p>Gender : ${value.gender}</p>
         <p>Phone : ${value.phone} </p>
         <img src="${value.picture.large} " alt="">
         
         
         `;

        ranData.appendChild(ptag);


    }


}