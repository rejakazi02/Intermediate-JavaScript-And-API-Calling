function loadData() {
  fetch("https://jsonplaceholder.typicode.com/photos")
    .then((responce) => responce.json())
    .then((data) => userdata(data));
}

loadData();

function userdata(Udatas) {
  console.log(Udatas);
  const userValue = document.getElementById("UserInfo");

  for (const Udata of Udatas) {
    // console.log(Udata.thumbnailUrl);

    const userDiv = document.createElement("div");
    userDiv.classList.add("col");

    userDiv.innerHTML = `
        <div onclick="loadUserData(${Udata.id})" class="card h-100">
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

const loadUserData = (userId) => {
  console.log(userId);
  fetch("https://jsonplaceholder.typicode.com/photos")
    .then((responce) => responce.json())
    .then((data1) => userDeteles(data1[userId - 1]));
};

const userDeteles = (values) => {
  console.log(values);

  const deteles = document.getElementById("UserInfo1");

  deteles.innerHTML = "";

  const detailsDiv = document.createElement("div");
  detailsDiv.classList.add("col");

  detailsDiv.innerHTML = `
   <div class="card h-100" style="display: flex; align-items: center;">
   <div class="card-body">
   <h5 class="card-title">Id is : ${values.id}</h5>

 </div>
   <img id="imageBTN" src="${values.thumbnailUrl}" class="card-img-top" alt="..." style=" width: 288px;">
   <div class="card-body">
     <h5 class="card-title">${values.title}</h5>
  
   </div>
 </div>
   `;

  deteles.appendChild(detailsDiv);
};
