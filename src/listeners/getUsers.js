import usersHandler from "../handlers/getUsers.js";

const usersButton = document.getElementById('get-users');

usersButton.addEventListener('click', function() {
    usersHandler();
});