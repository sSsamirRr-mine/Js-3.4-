'use strict';

let btn = document.querySelector('#btn');

async function randomUser() {
    const response = await fetch('https://randomuser.me/api/');
    const data = await response.json();

    EditCard(data.results[0]);
}

randomUser();

function EditCard(user) {
    let name = document.querySelector('#name');
    let img = document.querySelector('.user');
    let info = document.querySelector('.info');

    name.innerHTML = `${user.name.first} ${user.name.last}`;
    img.src = `${user.picture.medium}`;

    info.innerHTML = `
        <p class="phone">Phone Number: ${user.phone}</p>
        <p class="home">Address: ${user.location.city}</p>
        <p class="age">Age: ${user.dob.age}</p>
        <p class="mail">Email: ${user.email}</p>
    `;
}

btn.addEventListener('click', randomUser);
