// here is the beginning of my awesome code!!!
console.log ('Quiz.js page is good to go!')

function populatePage (cars) {
  // Loop over the inventory and populate the page

  var container = document.querySelector("#bigContainer")
  cars.forEach(function (car) {
  container.innerHTML +=

        `
    		 <div class="cards col-md-3 col-md-offset-1">
   			 <p><b>Make:</b> ${car.make}</p>
         <p><b>Model:</b> ${car.model}</p>
         <p><b>Year:</b> ${car.year}</p>
         <p><b>Price:</b> ${car.price}</p>
         <p><b>Color:</b> <span class="color">${car.color}</span></p>
         <p><b>Purchased:</b> ${car.purchased}</p>
         <p ><b>Description:</b> <span class= "description">${car.description}</span></p>
  			</div>
        `
        // console.log(container);
  })



  // ( Note, in "Description: section: The <span> tag provides a way to add a hook to a part of a
  // text or a part of a document.


// Tip: When a text is hooked in a <span> element, you can style it with CSS,
// or manipulate it with JavaScript.

// The second IIFE should augment the original one with a function that creates all of the `eventHandlers`
// that you need for the application. Name the function `activateEvents`.
  // Now that the DOM is loaded, establish all the event listeners needed


    // userSubmit.addEventListener("???", function (){
////////load a funny animation here!///////////////////
    // }

  // CarLot.activateEvents();
listeners();
}
//////////end of IIFE (populate page)////////////////////////////////

// Load the inventory and send a callback function to be
// invoked after the process is complete
CarLot.loadInventory(populatePage);

