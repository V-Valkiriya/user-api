import userComponent from "../components/user.js";
import noUserComponent from "../components/noUser.js";
import checkUserId from "../logic/checkUserId.js";
import getUser from "../../API/getUser.js";

const usersDom = document.getElementById('users');
const error = document.getElementById('error');

function userHandler (id) {
    const userId = checkUserId(id);

    if (!userId) {
        error.innerText = 'Please, enter a number id more than 0';
        error.classList.add('show-error');

        return;
    } else {
        error.innerText = '';
        error.classList.remove('show-error');
    }

    getUser(id)
    .then(user => {
        if (user) {
            const userInfo = userComponent(user);
            usersDom.innerHTML = '';
            users.append(userInfo);
        } else {
            usersDom.innerHTML = '';
            if (Number(id) > 0) {
                usersDom.append(noUserComponent(id));
            }
        }
    })
    .catch(err => console.error(err));
}

export default userHandler;
