//creates list of all bead elements
var nodeBeads = document.querySelectorAll('.bead');

//convert Node List to array
const beads = Array.from(nodeBeads);

//FINALLY IT WORKED
//use a for each loop to iterate through each bead and add an event listener that adds a class name
//style the class name in css and done!
// beads.forEach(function(element) {
//   element.addEventListener('click', function(e) {
//     element.classList.add('clicked');
//   });
// });

// new method that uses one button to advance along beads
const nextBtn = document.querySelector("#next");

let i = 0;
nextBtn.addEventListener('click', function(e) {
  beads[i].classList.add("clicked");
  i++;
})
