// Displaying current day at top of page....
var today = dayjs().format('dddd, MMM D, YYYY');
var currentDate = document.getElementById("currentDay");

currentDate.textContent = today;

var hour = dayjs().hour();
var timeBlock = document.getElementsByClassName("time-block");

var hour9 = document.getElementById("hour-9");
var hour10 = document.getElementById("hour-10");
var hour11 = document.getElementById("hour-11");
var hour12 = document.getElementById("hour-12");
var hour13 = document.getElementById("hour-13");
var hour14 = document.getElementById("hour-14");
var hour15 = document.getElementById("hour-15");

console.log(today);
console.log(hour);

if (hour9.classList[2] < hour) {
  console.log("poop");
  hour9.classList.add("past");
} else if (hour9.classList[2] == hour) {
  console.log("pee");
  hour9.classList.add("present");
} else {
  console.log("fart");
  hour9.classList.add("future");
}

if (hour10.classList[2] < hour) {
  console.log("poop");
  hour10.classList.add("past");
} else if (hour10.classList[2] == hour) {
  console.log("pee");
  hour10.classList.add("present");
} else {
  console.log("fart");
  hour10.classList.add("future");
}

if (hour11.classList[2] < hour) {
  console.log("poop");
  hour11.classList.add("past");
} else if (hour11.classList[2] == hour) {
  console.log("pee");
  hour11.classList.add("present");
} else {
  console.log("fart");
  hour11.classList.add("future");
}

if (hour12.classList[2] < hour) {
  console.log("poop");
  hour12.classList.add("past");
} else if (hour12.classList[2] == hour) {
  console.log("pee");
  hour12.classList.add("present");
} else {
  console.log("fart");
  hour12.classList.add("future");
}

if (hour13.classList[2] < hour) {
  console.log("poop");
  hour13.classList.add("past");
} else if (hour13.classList[2] == hour) {
  console.log("pee");
  hour13.classList.add("present");
} else {
  console.log("fart");
  hour13.classList.add("future");
}

if (hour14.classList[2] < hour) {
  console.log("poop");
  hour14.classList.add("past");
} else if (hour14.classList[2] == hour) {
  console.log("pee");
  hour14.classList.add("present");
} else {
  console.log("fart");
  hour14.classList.add("future");
}

if (hour15.classList[2] < hour) {
  console.log("poop");
  hour15.classList.add("past");
} else if (hour15.classList[2] == hour) {
  console.log("pee");
  hour15.classList.add("present");
} else {
  console.log("fart");
  hour15.classList.add("future");
}



// function label() {
//   if (timeBlock.textContent == hour) {
//     timeBlock.classList.add("present");
//   } else if (timeBlock.textContent > )
// }

// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
$(function () {
  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  //
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
  // TODO: Add code to display the current date in the header of the page.
});
