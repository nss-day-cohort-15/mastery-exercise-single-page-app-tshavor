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

// MODAL PLAY HERE.../////////////////////////////////////////////////////
// Get the modal
// var modal = document.getElementById('myModal');

// Get the image and insert it inside the modal - use its "alt" text as a caption
// var img = document.getElementById('myImg');
// var modalImg = document.getElementById("img01");
// var captionText = document.getElementById("caption");
// img.onclick = function(){
//     modal.style.display = "block";
//     modalImg.src = this.src;
//     modalImg.alt = this.alt;
//     captionText.innerHTML = this.alt;
// }

// Get the <span> element that closes the modal
// var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
// span.onclick = function() {
//   modal.style.display = "none";
// }
