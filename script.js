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
/*
    //ForEach loop där vi går igenom varje User
    let output = "";
    arrUsers.forEach((user) => {
        console.log(user);
        output += `<p>Namnet är ${user.username} och åldern är ${user.age}</p>`;
    });
*/

    const table = document.createElement("table");

    //Skapa en TableHead rad med th element
    const thtr = document.createElement("tr");
    //Gå igenom User-objekten och skapa en TH row
    for (let x in arrUsers[0]) {
        // x - Namnet på attributet
        // arrUsers[0][x] - Värdet från attributet

        //Skapa en th element och placera attriutets namn i den.
        const tableHead = document.createElement("th");
        tableHead.innerText = x;

        //Spara th element i thtr elementet
        thtr.appendChild(tableHead);
    }

    table.appendChild(thtr);

    //Loopa igenom alla users och skapa en ny rad för varje user
    arrUsers.forEach((user) => {
        //Skapa en tr element för user
        const tr = document.createElement("tr");

        //Skapa en for-in loop för att gå igenom alla attribut i user
        for (let x in user) {
            //Skapa en td element och ålacera atributets värde i den
            let td = document.createElement("td");
            td.innerText = user[x];

            //Placera td element i user-row
            tr.appendChild(td);
        }

        //placera den färdiga user-row i table
        table.appendChild(tr);
    });



    //Skriv ut string till div-tag
    //document.getElementById("usersOutput").innerHTML = output;

    //Placera ut Tablelen till div-tag
    document.getElementById("usersOutput").appendChild(table);
});