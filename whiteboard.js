//! Sign Off - Fri Lunch

//! WTF - Sat Morning

//! MVP - Monday Evening
// ? Minimum Requirements
// TODO: Create HTML page, Add basic structural elements
  // TODO Place cells into grid.innerHTML
    // TODO: Place structural objects on map
// TODO: 
// TODO: Define Game Objects, non-animated
// TODO: Define Map Objects
// TODO: Define movements and map to keyboard keys
//FOR EACH character
  //IF character.behaviour = 'manual'-  Listen for keyDown - character.nextDirection = Event
  // ELSE character.nextDirection = (use random on directionArray [up, down, left, right])

  // setInterval based on this.character.speed 
      //findNextCell() calculate nextCell from cellArray number based on character.currentCell, direction key pressed, map.cellArray, character.nextCell = cellArray[?] // 
      // IF grid edge, move to the opposite side of grid (teleport)
      // ELSE
          // check content of nextCell (nextCell.classList.get)
              // IF (nextCell.classList.contains === 'ghost' && mode === 'normal) 
                  // lose life function lives--  
                      // IF lives === 0 - mode = 'Game Over' return gameover() // display game over, display reset button // stretch: highScore()
                      // ELSE reset all character positions to character.startPosition
              // ELSE IF (nextCell contains 'ghost' && mode === 'energised') // points += (100 * difficulty)
              // ELSE IF (nextCell contains wall) // character.player stops, return // More advanced in stretch
              // ELSE IF nextCell contains 'food' points += (1 * difficulty), classList.remove('food'), foodCount-- 
                  // IF (foodCount > 0) makeMove()
                  // ELSE levelWin() - resetCharacter (all), difficulty++,  
              // ELSE IF nextCell contains 'fruit' points += (10 * difficulty), makeMove()
              // ELSE makeMove() // remove character class from current cell and place in nextCell using makeMove function
        //TODO pills , time-limit, 
  // nextCell
// ! Characters
const character = [{
  name: 'player',
  behaviour: 'manual',
  lives: 4,
  speed: 100, // variable depending on game.mode
  standardSpeed: 100,
  energisedSpeed: 200,
  currentCell: 1, // variable
  currentDirection: 'up', // (up, down, left, right)
  nextCell: 2, // based on cellArray
  nextDirection: 'right',  
}, {
  name: 'Blinky',
  behaviour: 'Basic',
    speed: 100, // variable depending on game.mode
  standardSpeed: 100,
  energisedSpeed: 150,
  currentCell: 0, // variable
  currentDirection: 'up', // (up, down, left, right)
  nextCell: 0, // based on cellArray
  nextDirection: '',
}] // TODO Add  3 more ghost characters

const directionArray = [up, down, left, right]
const map = {
  Name: 'name',
  Width: 0, // ? Square or rectangular, how does this affect game mechanics/calculations?
  cellArray: ['.', ' ', 'X'],
  // * GamePlay Settings
  Difficulty: 1, // ? 1-10?
  playerStartPosition: 1, //(cellArray[?])
  ghostStartPosition: 5,
  }
  // * Board
// Grid similar to that of Nicks, with a dinamically created board based on width 
// Logic - Grid edge will allow movement from one side of the grid to the other
// Map blocks will need to prevent movement
// Board as an array, (map.cellArray)
// ? Will probably be quicker to create multple maps by building a map builder
// * Map Builder
// Grid Dimensions to add grid to page
// ? force square for easier game logic are allow rectangular?
// click select object, click place start on grid co-ordinates, click place finish to add objects in a straight line between start and finish
// TODO - Map Objects - Define different type of objects
// 
// * HTML Page
// TODO - H1 Title
// TODO - div current score 
// TODO - div high score 
// TODO - div game 
    // TODO --> div grid
    //  grid takes demension from height and width variable, uses flex
    // ? grid could dynamically calculate height and width for cellArray.length but this would limit grid to square
        // TODO --> div cell
        // 


//! Stretch Goals  - Wed Lunch
// Animate Game Objects, add rotation depending on direction
// ? (possible needed for mpv) when moving, if nextCell is 'X' && currentDirection !== nextDirection && moveStatus === moving
//! Polishing - Thu Evening

//! DEMO MORNING - Friday Morning









}
//
//
//
// * Objects
// 



const gameObjects = {
  mapObj: {// * ObjName, isSolid, isEdible, isPermanent, canMove/speed? , color, behaviour, 
    wall: ['X',],
    dot: '.',
    empty: ' ',
    

  },
  bonusObj: {
    fruit: [],
    energigizers: '', // or PowerPellets - 4 placed approx in each corner, 
  },
  ghostObj: {
    name: 'Blinky', // Pinky, Inky, Clyde
    color: 'Red', // pink, cyan, orange
    behaviourType:  'Basic', // Basic is just random movement // will extend after MVP
  },
}
const map = {
  Name: 'name',
  Width: 0, // ? Square or rectangular, how does this affect game mechanics/calculations?
  cellArray: ['.', ' ', 'X'],
  // * GamePlay Settings
  Difficulty: 1, // ? 1-10?
  playerStartPosition: 1, //(cellArray[?])
  ghostStartPosition: 5,
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
// TODO: Define movements and map to keyboard keys
if (gameStage !== 'stopped') {


}
//
//
//
//
//
//
//