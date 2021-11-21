const knex = require('knex')({
    client: 'mysql',
    connection: {
      host : 'localhost',
      port : 8080,
      user: 'root',
      password: '',
      database:'webDevData'
    }
});


var express = require('express');
var router = express.Router();
// var dataConnection = require('db');
const port = 8080;
const app = express();

app.get('/', function(req, res, next) {
     
    console.log("hi");
    knex.from('city').select("*")
    .then((rows) => {
        for (row of rows) {
            res.send(`${row['ID']}`);
        }
    }).catch((err) => { console.log( err); throw err })
    .finally(() => {
        knex.destroy();
    });


    // dbConn.query('SELECT * FROM books ORDER BY id desc',function(err,rows)     {
 
    //     if(err) {
    //         req.flash('error', err);
    //         // render to views/books/index.ejs
    //         res.render('books',{data:''});   
    //     } else {
    //         // render to views/books/index.ejs
    //         res.render('books',{data:rows});
    //     }
    // });
});


app.listen(port, () => console.log(`listening on port: ${port}`));
