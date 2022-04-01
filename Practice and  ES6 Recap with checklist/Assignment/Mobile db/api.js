const searchButton = () => {
  const searchField = document.getElementById("search-field");
  searchText = searchField.value;

//   const emptyMesseges = document.getElementById("empty-Messege");
  //  emptyMesseges.value = '';
  searchField.value = "";
  // emptyMesseges.innerText = "This product is not aviable right now 1.";
//   if (searchText == "") {
//     // emptyMesseges.innerText = "This product is not aviable right now.";
//   } else {
    // emptyMesseges.innerText = "";
   const url = `https://openapi.programming-hero.com/api/phones?search=${searchText}`
    fetch(url)
      .then((res) => res.json())
      .then((datas) => displayData(datas.data))
//   }
}

searchButton();

const displayData = (datas) => {
  const searchResult = document.getElementById("search-result");
  searchResult.innerHTML = ''; 

  console.log(datas)

  datas.forEach(data => {
 
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

<button onclick="detailsButton('${data.slug}', '${data.image}')"
class="btn btn-outline-success px-5" >
Details
</button>
</div>
    </div>
</div>

`;

    searchResult.appendChild(div);
  });
}



const detailsButton = (pSlug) => {

    console.log(pSlug)
const url = `https://openapi.programming-hero.com/api/phone/${pSlug}`;
fetch(url)
.then(rer => rer.json())
.then(dDatas => Pdetails(dDatas.data))


}


const Pdetails = (proDatas) => {
const productResults = document.getElementById('productResult');



productResults.innerHTML = '';

const proDiv = document.createElement('div');
proDiv.classList.add('card');


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
        <small class="text-center mt-2">Release Date:  <span class="text-secondary">${proDatas.releaseDate}</span></small>
      </div>

      `;


productResults.appendChild(proDiv);

}