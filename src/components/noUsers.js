function noUsersComponent () {

    const container = document.createElement('div');
    container.classList.add('no-user');

    const message = document.createElement('p');
    message.innerText = 'No users to show';

    container.append(message);

    return container;
}

export default noUsersComponent;