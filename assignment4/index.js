const knex = require('knex')({
    client: 'mysql',
    connection: {
      host : '127.0.01',
      port : 3306,
      user: 'root',
      password: '',
      database:'webDevData'
    }
  });
  
  var express = require('express');
  // var dataConnection = require('db');
  const port = 8080;
  var app = express();
  app.use(express.json());
  
  //read
  app.get('/read/:city', function(req, res, next) {
     
    knex.select('*').from('city').where('Name',req.params.city)
    .then(data => res.send(data));
  });
  
  //create
  app.post('/create', async (req, res )=>{
  
    let maxID = await knex('city').max('ID', {as : 'max'});
    console.log(maxID[0].max);
  
    let newID = maxID +1;
  
    let result = await knex('city').insert({ID: newID}, {Name: req.body.city},
      {District: req.body.district}, {Population: req.body.population});
  
    knex.select('*').from('city').where('Name',req.body.city)
      .then(data => res.send(data));
  });
  
  //update
  app.get('/update/:city/:population',async(req, res, )=> {
     
    const result = await knex('city').where('Name',req.params.city)
      .update('Population',req.params.population);
  
      knex.select('*').from('city').where('Name',req.params.city)
      .then(data => res.send(data));
  });
  
  //delete
  app.get('/delete/:city', async(req, res)=>{
    let findCity = await knex('city').where('Name', req.params.city);
  
    if(findCity==null){
      res.send(false);
    }else{
      knex.from('city').where('Name', req.params.city)
      .del().then(res.send(true));
    }
  });
  
  app.listen(port, () => console.log(`Port: ${port}`));