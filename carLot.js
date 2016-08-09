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
      inventoryLoader.open('GET', 'inventory.json')
      inventoryLoader.addEventListener("load", function () {
        inventory = JSON.parse(inventoryLoader.responseText).cars
        callback(inventory)
      });
      inventoryLoader.send()
    }


  };

  })();

