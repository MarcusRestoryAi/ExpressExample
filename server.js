/*
var - Bör ej användas. Gammal. Har ingen Scope.

let - Kan ändra värden efter deklaraion
const - Konstant värde.
- Båda har Scope
*/

const express = require('express');
const app = new express();
const portNr = 8080;
app.use(express.json());
const fs = require('fs');
const usersFilePath = "./users.json";

app.listen(portNr, () => {
    //För att srkiva ut till konsol, använd console.log()
    console.log("Servern lyssnar nu på port nr 8080");
})

//Skapar en GET metod för index/start
app.get("/", (req, res) => {
    res.status(200).send("Välkommen idag till våran server!");
});

//Skapa en POST metod som tar emot en Payload
app.post("/users", (req, res) => {
    //Hämta payload från Request
    const data = req.body;

    //Spara data till en users.json fil
    const jsonData = JSON.stringify(data, null, 2);
    fs.writeFile(usersFilePath, jsonData, (err) => {
        if (err) console.log(err.message);
    })

    //Returnera svar till user
    res.status(200).send(`Data sparad: ${jsonData}`);
})

app.get("/users", (req, res) => {
    //hämta data från fil
    fs.readFile(usersFilePath, "utf8", (err, data) => {
        if (err) {
            res.status(500).send("Något har gått fel");
            return;


        }

        res.status(200).send(data);
    })
})