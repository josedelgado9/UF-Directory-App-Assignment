'use strict';
/* 
  Import modules/files you may need to correctly run the script. 
  Make sure to save your DB's uri in the config file, then import it with a require statement!
 */
var fs = require('fs'),
    mongoose = require('mongoose'), 
    Schema = mongoose.Schema, 
    Listing = require('./ListingSchema.js'), 
    config = require('./config'),
    jsonData = require('./listings.json');

/* Connect to your database */
mongoose.connect(config.db.uri);
// Get notified if successfully connected to database or error occured
// var dbc = mongoose.connection;
// dbc.on('error', console.error.bind(console, 'connection error:'));
// dbc.once('open', function(){
//   console.log("Database successfully connected");
// });
/* 
  Instantiate a mongoose model for each listing object in the JSON file, 
  and then save it to your Mongo database 
 */

fs.readFile('listings.json', 'utf8', function(err, listingsInfo){
  if(err) throw err;

  //convert JSON data into angular format and save in variable
  var info = JSON.parse(listingsInfo);

  //create objects using information from JSON file and using schema created
  info.entries.forEach(function(info){
    var newListing = new Listing(info);
    newListing.save(function(err){
      if(err) throw err;
      console.log('Succesfully saved');
    });
  });
});

/* 
  Once you've written + run the script, check out your MongoLab database to ensure that 
  it saved everything correctly. 
 */