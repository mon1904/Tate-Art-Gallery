var express = require('express');
var bodyParser = require("body-parser");
var app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const sqlite3 = require('sqlite3').verbose();

var port = process.env.PORT || 3000;

// open database in memory
let db = new sqlite3.Database('./database.db', (err) => {
    if (err) {
        return console.error(err.message);
    }
    console.log("connected to tate database")
});

app.get('/artist', function(req, res, next){
    res.header("Access-Control-Allow-Origin", "*");


    let sql = 'SELECT * FROM artists';

    db.all(sql, [], (err, rows) => {
        if (err) {
            throw err;
        }
        rows.forEach((row) => {
            console.log(row.name);
        });
        res.send(rows);
    });

});

app.get('/artwork', function(req, res, next){
    res.header("Access-Control-Allow-Origin", "*");


    let sql = 'SELECT * FROM artwork LIMIT 50';

    db.all(sql, [], (err, rows) => {
        if (err) {
            throw err;
        }
        rows.forEach((row) => {
            console.log(row.title);
        });
        res.send(rows);
    });

});


app.get('/artistname', function(req, res, next){
    res.header("Access-Control-Allow-Origin", "*");


    let sql = 'SELECT * FROM artwork Order By artist LIMIT 50';

    db.all(sql, [], (err, rows) => {
        if (err) {
            throw err;
        }
        rows.forEach((row) => {
        console.log(row.title);
        });
        res.send(rows);
    });

});


app.post('/addmore', function(req, res){
    res.header("Access-Control-Allow-Origin", "*");
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');

    console.log(req.body);
    console.log(+ JSON.stringify(req.body));

    var postNewArtist ={
     id: req.body.id,
    name: req.body.name,
    gender: req.body.gender,
    date: req.body.currentDate,
    yearOfBirth: req.body.yearOfBirth,
    yearOfDeath: req.body.yearOfDeath,
    placeOfBirth: req.body.placeOfBirth,
    placeOfDeath: req.body.placeOfDeath,
    url: req.body.url
}
    var values =[
        //toString(req.body.id),
        parseInt(req.body.id),
        req.body.name,
        req.body.gender,
        req.body.currentDate,
        req.body.yearOfBirth,
        req.body.yearOfDeath,
        req.body.placeOfBirth,
        req.body.placeOfDeath,
        req.body.url
    ]
    console.log(typeof req.body.id);
    console.log(typeof req.body.name);
    console.log(typeof req.body.gender);
    console.log(typeof req.body.currentDate);
    console.log(typeof req.body.yearOfBirth);
    console.log(typeof req.body.yearOfDeath);
    console.log(typeof req.body.placeOfBirth);
    console.log(typeof req.body.placeOfDeath);
    console.log(typeof req.body.url);


    console.log("Connected!");
    //let sql = 'INSERT into artists (id, name, gender, date, yearOfBirth, yearOfDeath, placeOfBirth, placeOfDeath ) VALUES ('+ req.body.id + ','+ req.body.name + ',' +req.body.gender+ ',' + req.body.currentDate+ ',' +req.body.yearOfBirth+ ',' + req.body.yearOfDeath +',' + req.body.placeOfBirth+ ',' + req.body.placeOfDeath + ',' + req.body.url + ')';

     let sql = "INSERT into artists (id, name, gender, date, yearOfBirth, yearOfDeath, placeOfBirth, placeOfDeath) VALUES (?,?,?,?,?,?,?,?)";


    db.run(sql,[values], function(err, res) {
        if (err) {
            return console.log(err.message);
        }
        // get the last insert id
        console.log(`A row has been inserted with rowid ${this.lastID}`);
    });

});

app.listen(port);