// This is a small program. There are only two sections. This first section is what runs
// as soon as the page loads and is where you should call your functions.
$(document).ready(function(){
    const $display = $('#display');

    // TODO: Call your apply function(s) here
applyFilter(reddify);
applyFilter(decreaseBlue);
applyFilter(increaseGreenByBlue);


    render($display, image);
});

/////////////////////////////////////////////////////////
// "apply" and "filter" functions should go below here //
/////////////////////////////////////////////////////////
function filterFunction () {
}
// TODO 1 & 3: Create the applyFilter function here
function applyFilter (filterFunction) {

for (var i = 0; i < image.length; i++) {
    
    for (var j = 0; j < image[i].length; j++) {
        var rgbString = image[i][j]
        var rgbNumbers =  rgbStringToArray(rgbString);
         filterFunction(rgbNumbers);
        var rgbString = rgbArrayToString(rgbNumbers);
        image[i][j] = rgbString
         
    }
         
}
}
 

 
// TODO 5: Create the applyFilterNoBackground function
var background = image["rgb(150, 150, 150)"]
function applyFilterNoBackground (filterFunction){
    for (var i = 0; i < image.length; i++) {
    
    for (var j = 0; j < image[i].length; j++) {
        if (image[i][j] = background){
        }
        else {applyFilterNoBackground()}
        var rgbString = image[i][j]
        var rgbNumbers =  rgbStringToArray(rgbString);
         filterFunction(rgbNumbers);
        var rgbString = rgbArrayToString(rgbNumbers);
        image[i][j] = rgbString
        
    }
         
}
}
// TODO 2 & 4: Create filter functions

function reddify (array){
console.log(array[RED] = 255);
}
function decreaseBlue (array){
Math.max(0, array[BLUE] = array[BLUE] - 30);
}

function increaseGreenByBlue (array){
Math.min(0, array[GREEN] = array[GREEN] + array[BLUE]);
}
// CHALLENGE code goes below here
