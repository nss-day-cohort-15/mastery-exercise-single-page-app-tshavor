// Create one global variable (e.g. `CarLot`) and use the IIFE pattern to augment
// it two times in separate JavaScript files.

console.log ('The carLot.js page is good to go!');

var CarLot = (function () {
  var inventory = [];

  return {
    getInventory: function () {

    },
    loadInventory: function (callback) {
      var inventoryLoader = new XMLHttpRequest();
      xhr.open('GET', 'inventory.json')
      inventoryLoader.addEventListener("load", function (event) {
      newInventory= JSON.parse(event.target.responseText).cars
      });

      xhr.send()
    }
  };

    populatePage: function () {
      var container= document.querySelector("#bigContainer")
      newInventory.forEach(function(cars){
      container.innerHTML += `

        <div class="row">
        <div class="col-sm-4">


    </div>`



      })



    }

})();


// var moreSongs = (function () {
//   var loadSongs = [];

//   return {
//     getJSONSongs: function (callback) {
//       var xhr = new XMLHttpRequest()
//       xhr.open('GET', 'songs.json')
//       xhr.addEventListener('load', function (event) {
//         songsJSON = JSON.parse(event.target.responseText).songs
//         callback(songsJSON)
//       })
//       xhr.send()
//     },

    // populatePage: function () {
    //   var container = document.querySelector("#right_side")

////////////// Outputs JSON text string to DOM.  Adds delete button on each song listing.////////////////
      // songsJSON.forEach(function(songs) {
        container.innerHTML += `
          <p>${songs.Song} by
          ${songs.Artist} on the album
          ${songs.Album}  <button type="button" class="deleteButton"  name = "delete" >Delete</button></p>`
      })
    },
  }
