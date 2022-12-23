import userComponent from "../components/user.js";
import noUsersComponent from "../components/noUsers.js";
import getUsers from "../../API/getUsers.js";

const usersDom = document.getElementById('users');
const error = document.getElementById('error');

function usersHandler () {
    getUsers() 
    .then(users => { 
        usersDom.innerHTML = "";  
        
        if(error.innerText !== "") {
            error.innerText = "";
            error.classList.remove("show-error");
        }
        if( users)
        {
            users.forEach(user => {
            const UserInfo = userComponent(user);         
            usersDom.append(UserInfo);  
        });
    } else {
        usersDom.append(noUsersComponent());
    }
})
    .catch(err => console.error(err));  
    
}

export default usersHandler;