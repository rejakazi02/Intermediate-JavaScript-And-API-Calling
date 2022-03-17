




function loadPost() {

    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => response.json())
        .then(data => displayPosts(data))
}

// FUNCTION RETURN HERE FOR AUTO DISPLAY OUR HOHE PAGE
 
loadPost();

function displayPosts(posts) {

    console.log(posts)

    const PostData = document.getElementById('post');

    for (const post of posts) {
      
        const divPost = document.createElement('div');
        // divPost.style.backgroundColor='skyblue';

        // CREATE A DIV CLASS 

        divPost.classList.add("Postclass");

        divPost.innerHTML = `
    <h5>ID : ${post.id}</h5>
    <h1>Post title : ${post.title}</h1>
    <p>Description : ${post.body}</p>
    `;
        PostData.appendChild(divPost);


    }





}






