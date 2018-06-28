let canvas = documment.getElementById("pixel_canvas");
let height = document.getElementById("input_height");
let width = document.getElementById("input_width");
let sizePicker = document.getElementById("sizePicker");
let color = document.getElementById("colorPicker");

color.addEventListener("click", function () { });
sizePicker.onsubmit = function (event) {
    event.preventDefault();
    clearGrid();
    makeGrid();
};
// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()

function makeGrid() {

    // Your code goes here!
    for (let r = 0; r < height.value; r++) {
        const row = canvas.insertRow(r);
        for (c = 0; c < width.value; c++) {
            const cell = row.insertCell(c);
            cell.addEventListener("click", fillSquare);

        }
    }

}
function clearGrid(){
    while (canvas.firstChild){
        canvas.removeChild(canvas.firstChild);
    }
}
function fillSquare(){
    this.setAttribute("style", 'background-color: ${color.value}');
}