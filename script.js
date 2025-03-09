let a; // Declare 'a' globally to store the interval ID

// Function to generate a random color
const getColor = function() {
    const arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F'];
    let color = "#";
    for (let i = 0; i < 6; i++) { // Generate a 6-character hex color
        color += arr[Math.floor(Math.random() * 16)];
    }
    if(color==='#000000' || color==='#FFFFFF') return getColor();
    return color;
};

// Function to start changing colors
let changeColors = function() {
    if(!a){
        a = setInterval(function() {
            document.body.style.backgroundColor = getColor(); // Change background color
        }, 1000); // Change every second
    }
    
}

// Function to stop changing colors
let stopColors = function() {
    clearInterval(a); // Stop the interval when stop is clicked
    a=null;
};

// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    const start = document.querySelector('#start');
    const stop = document.querySelector('#stop');

    // Add event listener to start button
    start.addEventListener('click', changeColors);

    // Add event listener to stop button
    stop.addEventListener('click', stopColors); // Call stopColors to clear the interval
});
