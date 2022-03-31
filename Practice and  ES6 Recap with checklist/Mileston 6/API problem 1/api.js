function loadData() {
  fetch("https://jsonplaceholder.typicode.com/photos")
    .then((responce) => responce.json())
    .then((data) => userdata(data));
}

loadData();

function userdata(Udatas) {
    console.log(Udatas)
  const userValue = document.getElementById('UserInfo');

  for (const Udata of Udatas) {
    // console.log(Udata.thumbnailUrl);

    const userDiv = document.createElement('div');
    userDiv.classList.add('col');

    userDiv.innerHTML = `
        <div class="card h-100">
        <div class="card-body">
        <h5 class="card-title">Id is : ${Udata.id}</h5>
     
      </div>
        <img id="imageBTN" src="${Udata.thumbnailUrl}" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">${Udata.title}</h5>
       
        </div>
      </div>
        
        `;

     userValue.appendChild(userDiv);
  }
}



