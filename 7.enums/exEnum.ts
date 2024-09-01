/**
 * 
 * In Ts Enum means constant that we can set the 
 * value as a constant and use it anywhere in js
 * it does not have any enum method are there
 * it Ts only give that access
 * 
 */


// Create a new enum

enum Direction {
    Up,
    Down,
    Left,
    Right

}

function move(direction) {
    console.log(`Moving ${Direction[direction].toLowerCase()}`);

}

// call the function
move(Direction.Right);