// write a function, forEach, that takes
// an array and a function as arguments
// and calls the function on each element
// in the array

function forEach(array, func) {
    for (var i = 0; i < array.length; i++) {
        func(array[i]);
    }
}
