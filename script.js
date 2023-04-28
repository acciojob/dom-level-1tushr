//your JS code here. If required.
// Get the element with ID "level"
var element = document.getElementById("level");

// Initialize the level counter to 0
var level = 0;

// Loop through the parent elements of the element until we reach the top level
while (element.parentNode) {
  element = element.parentNode;
  level++;
}

// Display the level in an alert box
alert("The level of the element is: " + level);
