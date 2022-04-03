const searchButton = () => {
  const productDetailDiv = (document.getElementById("productResult").style.display = "none");

 

  const searchField = document.getElementById("search-field");
  const searchText = searchField.value;

  const emptyMesseges = document.getElementById("empty-Messege");
  emptyMesseges.style.display = "block";

  searchField.value = "";

  // saerch button condition

  if (searchText == "") {
    emptyMesseges.innerText = "Please Search Your Products";

    const emptyMesseges11 = document.getElementById("empty-Messege11").style.display = 'none';
  } 
  
  else {

    const emptyMesseges11 = document.getElementById("empty-Messege11").style.display = 'block';
    emptyMesseges.innerText = " ";
    const url = `https://openapi.programming-hero.com/api/phones?search=${searchText}`;
    fetch(url)
      .then((res) => res.json())
      .then((datas) => displayData(datas.data));
  }
};

const displayData = (datas) => {
  const searchResult = document.getElementById("search-result");
  searchResult.innerHTML = "";
  searchResult.value = "";
  console.log(datas);

  const productDetailDiv = (document.getElementById("productResult").style.display = "none");
  const emptyMesseges11 = document.getElementById("empty-Messege11");

  if (datas == "") {
    emptyMesseges11.innerText = "Enter your valid search";
  } 
  
  else {
    emptyMesseges11.innerText = " Search Successfull";

    // try case start here

    try {
      // datas.slice(0,3).forEach((data, inde) =>  2nd away for data slice
      datas.forEach((data, inde) => {
        // index check and break

        console.log(inde);
        if (inde === 50) {
          throw "Break";
        }

        const div = document.createElement("div");
        div.classList.add("col");
        div.innerHTML = `
      <div class="container-fluid card card-color">
      <div class="d-flext">
          <div class="d-flext justify-content-center">
              <img src="${data.image}" class="image-custom card-img-top mt-2" alt="..." />
          </div>
      </div>
  
      <div class="card-body">
          <h4 class="card-title text-center">${data.phone_name}</h4>
          <hr />
          <h5 class="text-center text-secondary">
              Brand name:<span class="px-2 text-primary">${data.brand}</span>
          </h5>
          <hr />
  
  <div id="detaileBtn">
  
  <button onclick="detailsButton('${data.slug}')"
  class="btn btn-outline-success px-5" id="detailsButton12">
  Details
  </button>
  </div>
      </div>
  </div>
  
  `;

        searchResult.appendChild(div);
      });
    } catch (e) {
      // catch Pooerty

      if (e !== "Break") throw e;
    }
  }
};

const detailsButton = (pSlug) => {

  const productDetailDiv = (document.getElementById("productResult").style.display = "block");
  const emptyMesseges11 = (document.getElementById("empty-Messege11").style.display = "none");
  
  console.log(pSlug);
  const url = `https://openapi.programming-hero.com/api/phone/${pSlug}`;
  fetch(url)
    .then((rer) => rer.json())
    .then((dDatas) => Pdetails(dDatas.data));
};

const Pdetails = (proDatas) => {
  const productResults = document.getElementById("productResult");

  productResults.innerHTML = "";

  const proDiv = document.createElement("div");
  proDiv.classList.add("card");

  // release date null condition

  let relesrDate = proDatas.releaseDate;
  if (relesrDate == "") {
    relesrDate = "No date found";
  }

  proDiv.innerHTML = `

<div class="d-flex container-fluid">
<div class="imgCustom col-5">
<img src="${proDatas.image}" class=" img-fluid w-auto h-75" alt="..."  />
</div>
<div class="mx-auto ms-3 ms-md-4 w-50">
<h4 class="text-center text-success my-3"> Features</h4>
  <h6>Storage: <span class="text-secondary">${proDatas.mainFeatures.storage}</span></h6>
  <h6>Display size: <span class="text-secondary">${proDatas.mainFeatures.displaySize}</span></h6>
  <h6>Chipset: <span class="text-secondary">${proDatas.mainFeatures.chipSet}</span></h6>
  <h6>Memory: <span class="text-secondary">${proDatas.mainFeatures.memory}</span></h6>
  <h6>Sensors: <span class="text-secondary">${proDatas.mainFeatures.sensors}</span></h6>
  <h5>Others:</h5>
  <span>
  <small class="text-secondary">WLAN: ${proDatas.others?.WLAN}</small>
  <br>
  <small class="text-secondary">Bluetooth: ${proDatas.others?.Bluetooth}</small>

  <br>
  <small class="text-secondary">GPS: ${proDatas.others?.GPS}</small>
  <br>
  <small class="text-secondary">NFC: ${proDatas.others?.NFC}</small>
  <br>
  <small class="text-secondary">USB: ${proDatas.others?.USB}</small>
  <br>
  <small class="text-secondary">Display port: ${proDatas.others?.DisplayPort}</small>
</span>
</div>
</div>
<hr>
      <div class="card-body">
        <h4 class="card-title text-center  text-primary">${proDatas.name}</h4>
        <small class="text-center mt-2">Release Date:  <span id="dateee1" class="text-secondary"> ${relesrDate}</span></small>
      </div>

      `;

  productResults.appendChild(proDiv);
};
