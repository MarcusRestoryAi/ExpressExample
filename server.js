/*
var - Bör ej användas. Gammal. Har ingen Scope.

let - Kan ändra värden efter deklaraion
const - Konstant värde.
- Båda har Scope
*/

const express = require('express');
const app = new express();
const portNr = 8080;
const fs = require('fs');
const usersFilePath = "./users.json";

const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.listen(portNr, () => {
    //För att srkiva ut till konsol, använd console.log()
    console.log("Servern lyssnar nu på port nr 8080");
})

//Skapar en GET metod för index/start, index.html
app.get("/", (req, res) => {
    //res.status(200).send("Välkommen idag till våran server!");
    res.status(200).sendFile("./index.html", {root: __dirname});
});

//Skapa en Get enpoint för /About
app.get("/about", (req, res) => {
    res.status(200).sendFile("./about.html", {root: __dirname});
})

//Skapa en Get enpoint för /script
app.get("/script", (req, res) => {
    res.sendFile("./script.js", {root: __dirname});
})

//Skapa en Get enpoint för /script
app.get("/style", (req, res) => {
    res.sendFile("./style.css", {root: __dirname});
})

//Skapa en POST metod som tar emot en Payload
app.post("/users", (req, res) => {
    //Hämta payload från Request
    const reqData = req.body;

    //console.log(data);

    //Hämta befintlig data från users.json
    fs.readFile(usersFilePath, "utf8", (err, fileData) => {

        //Konvertera data från JSON till js-array, med JSON-klassen
        let arrUsers = JSON.parse(fileData)

        //Lägg till nytt element till array
        arrUsers.push(reqData)

        //Spara data till en users.json fil
        const jsonData = JSON.stringify(arrUsers, null, 2);
        fs.writeFile(usersFilePath, jsonData, (err) => {
            if (err) console.log(err.message);
        })

    })

    //Returnera svar till user
    res.redirect("/");
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