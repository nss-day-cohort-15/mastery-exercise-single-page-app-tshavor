// here is the beginning of my awesome code!!!
console.log ('Quiz.js page is good to go!')

function populatePage (cars) {
  // Loop over the inventory and populate the page

  var container = document.querySelector("#bigContainer")
  cars.forEach(function (car) {
  container.innerHTML +=

        `
    		 <div class="cards col-md-3 col-md-offset-1" style="border-color:${car.color}">
   			 <p><img src="${car.image}" alt="" height="200" width="250"></p>
         <p><b>Make:</b> ${car.make}</p>
         <p><b>Model:</b> ${car.model}</p>
         <p><b>Year:</b> ${car.year}</p>
         <p><b>Price:</b> ${car.price}</p>
         <p><b>Color:</b> <span>${car.color}</span></p>
         <p><b>Purchased:</b> ${car.purchased}</p>
         <p ><b>Description:</b> <span class="enteredText">${car.description}</span></p>
  			</div>
        `
        // console.log(container);
  })


// The second IIFE should augment the original one with a function that creates all of the `eventHandlers`
// that you need for the application. Name the function `activateEvents`.
  // Now that the DOM is loaded, establish all the event listeners needed

listeners();
}
//////////end of IIFE (populate page)////////////////////////////////

// Load the inventory and send a callback function to be
// invoked after the process is complete
CarLot.loadInventory(populatePage);

