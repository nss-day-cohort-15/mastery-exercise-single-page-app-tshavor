// The final IIFE should augment the object with two more functions.



// The function must accept one argument:
    // 1. A car DOM element that was clicked on.
function listeners () {
	var userInput= document.getElementById("userInput");
	var clickListener= document.getElementsByClassName("cards");

	for (var i = 0; i<clickListener.length; i++) {
		var currentCard= clickListener[i];
		// console.log(clickListener[i]);
		currentCard.addEventListener("click", function (event){
			// console.log(event.currentTarget);
			var cardSelected= event.currentTarget;
			userInput.focus();
			userInput.value=("");
	///////call the function "changeLook"////////
	revertLook(clickListener, cardSelected);
	changeLook(clickListener,cardSelected)
		})
	}
	// now that a card is selected, run the function below to alter the look of the card.
}

// The other function changes the thickness
// of the border of a car element, and changes its background color.
function changeLook(clickListener, cardSelected){
    cardSelected.classList.add("changeCard");
    // cardSelected.classList.remove("col-md-3");
  };
	// console.log("function changeLook is ready!")
	// console.log(cardSelected)
// One function resets the border thickness and background color for each car
// element back to the original values.
//////////call the function "revertLook"////////////////////

function revertLook(clickListener, cardSelected){
	// console.log("function revertLook is ready to go!");

	for (var i = 0; i < clickListener.length; i++) {
	  clickListener[i].classList.remove("changeCard");
	  clickListener[i].classList.add("col-md-3")



}
}

{

};







