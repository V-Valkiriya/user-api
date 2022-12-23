function userComponent (user) {
    const container = document.createElement('div');
    container.classList.add('user');


    const nameAndCompany = document.createElement('div');
    nameAndCompany.classList.add('name-company');

    const name = document.createElement('h2')
    name.classList.add('name');
    name.innerText = `Name : ${user.name} `;
    
    const company = document.createElement('h2');
    company.classList.add('company');
    company.innerText = `Company : ${user.company.name}`;

    nameAndCompany.append(name, company);


    const usernameAndWebsite = document.createElement('div');
    usernameAndWebsite.classList.add('username-website');

    const username = document.createElement('h2');
    username.classList.add('username');
    username.innerText = `Username : ${user.username}`;

    const website = document.createElement('h2');
    website.classList.add('website');
    website.innerText = `Website : ${user.website}`;

    usernameAndWebsite.append(username, website);


    const emailAndCity = document.createElement('div');
    emailAndCity.classList.add('email-city');

    const email = document.createElement('h2');
    email.classList.add('email');
    email.innerText = `Email : ${user.email}`;

    const city = document.createElement('h2');
    city.classList.add('city');
    city.innerText = `City : ${user.address.city}`;

    emailAndCity.append(email, city);


    const phoneAndZipcode = document.createElement('div');
    phoneAndZipcode.classList.add('phone-zipcode');

    const phone = document.createElement('h2');
    phone.classList.add('phone');
    phone.innerText = `Phone : ${user.phone}`;

    const zipcode = document.createElement('h2');
    zipcode.classList.add('zipcode');
    zipcode.innerText = `Zipcode : ${user.address.zipcode}`;

    phoneAndZipcode.append(phone, zipcode);


    container.append(nameAndCompany, usernameAndWebsite, emailAndCity, phoneAndZipcode);

    return container;
}

export default userComponent;