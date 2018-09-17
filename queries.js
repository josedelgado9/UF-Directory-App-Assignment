/* Fill out these functions using Mongoose queries*/
var fs = require('fs'),
    mongoose = require('mongoose'), 
    Schema = mongoose.Schema,
    Listing = require('./ListingSchema.js'), 
    config = require('./config');

//stablish connection to database
mongoose.connect(config.db.uri);

var findLibraryWest = function() {
  /* 
    Find the document that contains data corresponding to Library West,
    then log it to the console. 
   */
  Listing.findOne({name: 'Library West'}, function (err, listingsInfo ) {
    if (err) throw err;
    console.log('Object Found:\n')
    console.log(listingsInfo);
  });

};

var removeCable = function() {
  /*
    Find the document with the code 'CABL'. This cooresponds with courses that can only be viewed 
    on cable TV. Since we live in the 21st century and most courses are now web based, go ahead
    and remove this listing from your database and log the document to the console. 
   */
  Listing.findOneAndRemove({code: 'CABL'}, function (err) {
    if (err) throw err;
    console.log('Removed successfully\n');
  });

};

var updatePhelpsLab = function() {
  /*
    Phelps Laboratory's address is incorrect. Find the listing, update it, and then 
    log the updated document to the console. 
   */
  Listing.findOneAndUpdate({name: 'Phelps Laboratory'}, {address: '1953 Museum Rd, Gainesville, FL 32603'}, function (err, listingsInfo ) {
    if (err) throw err;
    console.log('Successfully updated\n');
    console.log(listingsInfo);
  });

};

var retrieveAllListings = function() {
  /* 
    Retrieve all listings in the database, and log them to the console. 
   */
  Listing.find({}, function (err, listingsInfo ) {
    if (err) throw err;
    console.log(listingsInfo);
  });

};

findLibraryWest();
removeCable();
updatePhelpsLab();
retrieveAllListings();
