// const getUsers = () => {
//     fetch('https://jsonplaceholder.typicode.com/users')
//     .then(users => console.log(users))
//     .catch(err => console.error(err));
// };

// getUsers();

// export default getUsers;


function getUsers ()
{
    const users =  fetch("https://jsonplaceholder.typicode.com/users")
    .then( res => 
    {
        if ( res.status === 200)
        {
            return res.json();
        }
        else
        {
            return false;
        }        
    })
    .catch( err => console.error(err));

    return users;
}


export default getUsers;