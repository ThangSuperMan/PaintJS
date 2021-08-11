// Variables
const canvas = document.getElementById("jsCanvas");
const colors = document.querySelectorAll("#jsColor");
const range = document.getElementById("jsRange");

// get Pixels inside element
const context = canvas.getContext('2d');

var panting = false;

// setting width and height pixels modifier of canvas
canvas.width = 500; 
canvas.height = 500;

// setting color for line
context.strokeStyle = "#2c2c2c";
context.lineWidth = 2.5;

// Functions
function handleRangeChange(event) {
    // width of line
    const size = event.target.value;
    context.lineWidth = size;
}

function handleColorClick(event) {
    const bgColor = event.target.style.backgroundColor;
    context.strokeStyle = bgColor;
}

function startPainting() {
    panting = true;
}

function stopPainting() {
    panting = false;
}

function  onMouseMove(event) {
    const x = event.offsetX;
    const y = event.offsetY;

    if(!panting) {
        context.beginPath();    
    } else {
        context.lineTo(x, y);
        context.stroke();
    }
}

function onMouseDown(event){
    // start painting when the user click mouse down
    startPainting();
}

function onMouseUp(event) {
    stopPainting();
    console.log("mouse up");
}

// Add events

// examine exist
if(canvas) {
    canvas.addEventListener("mousemove", onMouseMove);
    canvas.addEventListener("mousedown", onMouseDown);
    canvas.addEventListener("mouseup", stopPainting);

    // add event stop painting when user leave canvas
    canvas.addEventListener("mouseleave", stopPainting);
}

// Convert Object into array
colors.forEach(color => color.addEventListener("click", handleColorClick));

if(range) {
    range.addEventListener("input", handleRangeChange);
}