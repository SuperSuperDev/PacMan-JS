//! Sign Off - Fri Lunch

//! WTF - Sat Morning

//! MVP - Monday Evening

//! Stretch Goals  - Wed Lunch

//! Polishing - Thu Evening

//! DEMO MORNING - Friday Morning

// * Board
// Grid similar to that of Nicks, with a dinamically creasted board based on width 
// Logic - Grid edge will allow movement from one side of the grid to the other
// Map blocks will need to prevent movement
// Board as an array, empty space stored as '_'
// ? Will probably be quicker to create multple maps by building a map builder
// * Map Builder
// Grid Dimensions to add grid to page
// ? force square for easier game logic are allow rectangular?
// click select object, click place start on grid co-ordinates, click place finish to add objects in a straight line between start and finish
// TODO - Map Objects - Define different type of objects
// 
const gameObjects = {
  mapObj: {// * ObjName, isSolid, isEdible, isPermanent, canMove/speed? , color, behaviour,  
    wall: ['X', ],
    dot: '.',
    empty: ' ',
    fruit: [],
  },
  ghostObj: {
    name: 'Blinky', // Pinky, Inky, Clyde
    color: 'Red', // pink, cyan, orange
    behaviourType:  
  },




}
//
//
//
// * JS Objects
// 
const mapX = {
  id: 1, // must be unique
  mapName: 'name',
  gridWidth: 0, // ? Square or rectangular?
  gridHeight: 0,//
  mapObjArr: ['.', ' ', 'X'],
  // * GamePlay Settings
  mapDifficulty: 1, // ? 1-10?

}
//
//
//
//
//
//
//
//
// * JS FUNCTIONS
// ? Ghost Behaviour Types
// ? Check if can move
// ? check if LoseLife, addPoint, doNothing, 
// ? 
//
//
//
//
//
//
//
//
//