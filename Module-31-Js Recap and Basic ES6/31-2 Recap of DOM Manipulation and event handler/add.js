document.getElementById('add-border').addEventListener('click', function () {
    const border = document.getElementById('friend-container');
    border.style.border = '5px solid red';
    border.style.padding = '25px';

})


function addBg() {
    const friends = document.getElementsByClassName('friend');
    for (const friend of friends) {
        friend.style.backgroundColor = 'skyblue';
    }
}

// Add friend button work

document.getElementById('add-friend').addEventListener('click', function () {
    const container = document.getElementById('friend-container');
    const friendDiv = document.createElement('div');
    friendDiv.classList.add('friend');
    friendDiv.innerHTML = `
    <h3 class="friend-name">New Friend</h3>
             <p>Odio corrupti quis natus a!</p>
    
    `;
    container.appendChild(friendDiv);
})