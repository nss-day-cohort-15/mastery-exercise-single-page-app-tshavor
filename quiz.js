// here is the beginning of my awesome code!!!
console.log ('Quiz.js page is good to go!')

function populatePage (cars) {
  // Loop over the inventory and populate the page

  var container = document.querySelector("#bigContainer")
  cars.forEach(function (car) {
  container.innerHTML +=

        `
    		 <div class="col-md-4">
   			 <p><b>Make:</b> ${car.make}</p>
         <p><b>Model:</b> ${car.model}</p>
         <p><b>Year:</b> ${car.year}</p>
         <p><b>Price:</b> ${car.price}</p>
         <p><b>Color:</b> ${car.color}</p>
         <p><b>Purchased:</b> ${car.purchased}</p>
         <p><b>Description:</b> ${car.description}</p>
  			</div>
  			`
  })

// The second IIFE should augment the original one with a function that creates all of the `eventHandlers`
// that you need for the application. Name the function `activateEvents`.
  // Now that the DOM is loaded, establish all the event listeners needed
  function activateEvents(){
  	var userInput = document.getElementById("userInput");
		var userSubmit = document.getElementById("userSubmit");



  }

  // CarLot.activateEvents();
}
//////////end of IIFE (populate page)////////////////////////////////

// Load the inventory and send a callback function to be
// invoked after the process is complete
CarLot.loadInventory(populatePage);


