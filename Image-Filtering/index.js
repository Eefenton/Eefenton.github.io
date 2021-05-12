// This is a small program. There are only two sections. This first section is what runs
// as soon as the page loads and is where you should call your functions.
$(document).ready(function(){
    const $display = $('#display');

    // TODO: Call your apply function(s) here
// applyFilter(reddify);
applyFilter(decreaseBlue);
// applyFilter(increaseGreenByBlue);


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


// TODO 2 & 4: Create filter functions

function reddify (array){
console.log(array[RED] = 255);
}
function decreaseBlue (array){
console.log(array[BLUE] - 30);
}

function increaseGreenByBlue (array){
    console.log(array[GREEN] + array[BLUE]);
    Math.min(array[GREEN] <= 255)
}
// CHALLENGE code goes below here
