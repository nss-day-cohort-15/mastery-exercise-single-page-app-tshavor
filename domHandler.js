// The final IIFE should augment the object with two more functions.



// The function must accept one argument:
    // 1. A car DOM element that was clicked on.
function listeners () {
	var userInput= document.getElementById("userInput");
	var clickListener= document.getElementsByClassName("cards");

	for (var i = 0; i<clickListener.length; i++) {
		var currentCard= clickListener[i];
		console.log(clickListener[i]);
		currentCard.addEventListener("click", function (evt){
			console.log(evt.currentTarget);
			userInput.focus();
			userInput.value=("");
		})
	}
}



// One function resets the border thickness and background color for each car
// element back to the original values.
function changeLook(){



};

function revertLook(){
// The other function changes the thickness
// of the border of a car element, and changes its background color.


};
