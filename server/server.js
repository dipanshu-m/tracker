const express = require('express');
const app = express();

const mysql = require('mysql');

// const db = mysql.createPool({
//     host: 'localhost',
//     user: 'test',
//     password: 'qwerty123',
//     database: 'cruddatabase'
// })

// app.get('/', (req, res) => {
//     const str = "INSERT INTO movie_reviews (movieName, movieReview) VALUES ('Taxi Driver', 'Literally Me');";
//     db.query(str, (err, result) => {
//         console.log(err);
//         res.send("gay");
//     });
// })

app.listen(5000, () => {
    {
        console.log("Server started at 5000");
    }
})