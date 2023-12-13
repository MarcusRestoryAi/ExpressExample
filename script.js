//Skapar en EventListener för knappen btnFetchUsers
document.getElementById("btnFetchUsers").addEventListener('click', async () => {
    //console.log("Knappen har blivit klickad!");

    //Anropa servern, Get /users
    const url = "/users";
    const response = await fetch(url);

    console.log(response);

    //Skriver om response payload, från JSON till Js-Object
    const arrUsers = await response.json();

    console.log(arrUsers);

    //ForEach loop där vi går igenom varje User
    let output = "";
    arrUsers.forEach((user) => {
        console.log(user);
        output += `<p>Namnet är ${user.username} och åldern är ${user.age}</p>`;
    });

    //Skriv ut string till div-tag
    document.getElementById("usersOutput").innerHTML = output;
});