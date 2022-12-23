import userHandler from "../handlers/getUser.js";

const userButton = document.getElementById('get-user');
const userIdInput = document.getElementById('userId');

userButton.addEventListener('click', function() {

    const userId = userIdInput.value;
    userHandler(userId);
});