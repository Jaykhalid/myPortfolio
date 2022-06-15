// Declare a new function called getUsers

async function getUsers() {
    let url = "https://jsonplaceholder.typicode.com/users";
    
    try {
        let res = await fetch(url); 
        return await res.json(); 
    } 
    catch (error) {
        console.log(error);
    }
}

async function renderUsers() {
    let users = await getUsers(); // getUsers() returns a promise
    let html  = ''; 

    users.forEach(user => {
        let htmlSegment = `<div id="apiUserData">
                                <h3>${user.name}</h3>
                                <p>${user.email}</p>
                            </div>`;
        html += htmlSegment;  
    });

    let container = document.querySelector('#apiUserData');
    container.innerHTML = html;
}

renderUsers();