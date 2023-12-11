//Skapar en EventListener för knappen btnFetchUsers
document.getElementById("btnFetchUsers").addEventListener('click', async () => {
    //console.log("Knappen har blivit klickad!");

    //Anropa servern, Get /users
    const url = "/users";
    const response = await fetch(url);

    console.log(response);

    //Skriver om response payload, från JSON till Js-Object
    const data = await response.json();

    let output = `Namnet är ${data.username} och åldern är ${data.age}`;

    //Skriv ut string till div-tag
    document.getElementById("usersOutput").innerText = output;
});