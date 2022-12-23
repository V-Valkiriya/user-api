function noUserComponent (id) {

    const container = document.createElement('div');
    container.classList.add('no-user');

    const message = document.createElement('p');
    message.innerText = `No user with id ${id}`;

    container.append(message);

    return container;
}

export default noUserComponent;