
//API call

// fetch('https://jsonplaceholder.typicode.com/todos/1')
//   .then(response => response.json())
//   .then(json => console.log(json))



function loaData() {
  fetch('https://jsonplaceholder.typicode.com/todos/1')
  .then(response => response.json())
  .then(json => console.log(json))

}

// User DATA 

function loadUser() {
  fetch('https://jsonplaceholder.typicode.com/users')
  .then(response => response.json())
  .then(data => displayUsers(data))
}

// POSTS DATA 

function loadPosts() {
  fetch('https://jsonplaceholder.typicode.com/posts')
  .then(reja => reja.json())
  .then(data => console.log(data))
}



// USER FUNCTION CALL HERE 

function displayUsers(dataS) {
  console.log(dataS)
}