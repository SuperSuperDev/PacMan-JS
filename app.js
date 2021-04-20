// first I selct the html element (grid) that I want to add innerHTML, define width and insert div for each grid width ** 2

let state = 'newGame'// newGame, newLevel, stopped, running, paused, gameOver, life
let nextState = 'running'
let stateStart = ''
let gameStart = ''
let mode = 'standard' // standard, energ
let modeStartTime = ''
let totalScore = 0
let thisLevelScore = 0
let livesLeft = 4

function setState(newState) {
  if ((newState === 'newGame' || state === '')) {
    gameStart = Date.now()
    thisLevelScore = 0
    totalScore = 0
    stateStart = Date.now()
    nextState = 'running'
    livesLeft = 4
    gameBtn.innerHTML = 'Start New Game'
    state = newState
  } else if (newState === 'running') {
    nextState = 'paused'
    gameBtn.innerHTML = 'Pause'
    state = newState
  } else if (newState === 'paused') {
    nextState = 'running'
    gameBtn.innerHTML = 'Resume'
    state = newState
  } else if (newState === 'lifeLost') {
    state = newState
    livesLeft -= 1
    if (livesLeft <= 0) {
      return gameOver()
    } else {
      setTimeout(() => {
        resetCharacters()
      }, 3000)
      setTimeout(() => {
        return state = 'running'
      }, 5000)


      // for (let index = 0; index < characters.length; index++) {
      //   cellsArray[characters[index].currentCell].classList.remove(characters[index].name)
      //   characters[index].history = []
      //   characters[index].currentCell = characters[index].startCell
      //   characters[index].nextCell = characters[index].startCell
      //   makeMove(characters[index].name)
    }

  }
  console.log(livesLeft)
}

function gameOver() {
  return console.log('GAME OVER', livesLeft)

}
function setMode(newMode) {
  mode = newMode
  modeStartTime = Date.now()
}
function resetCharacters() {
  for (let index = 0; index < characters.length; index++) {
    cellsArray[characters[index].currentCell].classList.remove(characters[index].name)
    cellsArray[characters[index].currentCell].classList.remove(characters[index].type)
    characters[index].history = []
    characters[index].currentCell = characters[index].startCell
    characters[index].nextCell = characters[index].startCell
    makeMove(characters[index].name)
  }
}

const gameBtn = document.getElementById('gamebtn')
gameBtn.addEventListener('click', function () {
  setState(nextState)
})

setState('newGame')
const grid = document.querySelector('div.grid')
const builder = document.querySelector('div.builder')
const showBuilderButton = document.querySelector('button#show-builder')
const addLevelButton = document.querySelector('button.addlevel')
const width = 21
let currentLevel = 0
const cellsArray = []
const cellSize = (100 / width)
const mapObjects = ['blank', 'wall', 'teleport', 'ghostDoor', 'food', 'pill', 'fruit', 'ghostroom']

showBuilderButton.addEventListener('click', (event) => {
  event.preventDefault()
  builder.classList.toggle('hide')
})
addLevelButton.addEventListener('click', (event) => {
  event.preventDefault()
  levels.createLevel()
})
let srcClass
let targetID
builder.addEventListener('click', (event) => {
  console.log(event.path[0].innerHTML)
  srcClass = event.path[0].innerHTML

})
grid.addEventListener('click', (event) => {
  console.log(targetID = event.path[0].innerHTML)
  console.log(targetID, srcClass, '(target, src)')
  console.log(levels.mapClassArray[targetID])
  levels.mapClassArray[targetID] = srcClass
  cellsArray[targetID].classList.value = `${srcClass}`
  //const showNewLevel = document.querySelector('.levelarray')
  //showNewLevel.innerHTML = levels.mapClassArray//JSON.stringify()  

})


mapObjects.forEach(element => {
  const objectDiv = document.createElement('div')
  builder.appendChild(objectDiv)
  objectDiv.innerHTML = element
  objectDiv.classList.add(element)
})
const levels = {
  levelNumber: [1],
  levelDifficulty: [1],
  width: [21],
  playerStartPosition: [241],
  ghostStartPosition: [157],
  // mapClassArray: ["wall", "wall", "wall", "wall", "wall", "wall", "wall", "wall", "wall", "wall", "wall", "wall", "wall", "wall", "wall", "wall", "wall", "wall", "wall", "wall", "wall", "blank", "blank", "blank", "blank", "blank", "blank", "blank", "blank", "blank", "blank", "blank", "blank", "blank", "blank", "blank", "blank", "blank", "blank", "blank", "blank", "blank", "blank", "blank", "blank", "blank", "blank", "blank", "blank", "blank", "blank", "blank", "blank", "blank", "blank", "blank", "blank", "blank", "blank", "blank", "blank", "blank", "blank", "blank", "blank", "blank", "blank", "blank", "blank", "blank", "blank", "blank", "blank", "blank", "blank", "blank", "blank", "blank", "blank", "blank", "blank", "blank", "blank", "blank", "blank", "blank", "blank", "blank", "blank", "blank", "blank", "blank", "blank", "blank", "blank", "blank", "blank", "blank", "blank", "blank", "blank", "blank", "blank", "blank", "blank", "blank", "blank", "blank", "blank", "blank", "blank", "blank", "blank", "blank", "blank", "blank", "blank", "blank", "blank", "blank", "blank", "blank", "blank", "blank", "blank", "blank", "blank", "blank", "blank", "blank", "blank", "blank", "blank", "blank", "blank", "blank", "blank", "blank", "blank", "blank", "blank", "blank", "blank", "blank", "blank", "blank", "blank", "blank", "blank", "blank", "blank", "blank", "blank", "blank", "blank", "blank", "blank", "blank", "blank", "blank", "blank", "blank", "blank", "blank", "blank", "blank", "blank", "blank", "blank", "blank", "blank", "blank", "blank", "blank", "blank", "blank", "blank", "blank", "blank", "blank", "blank", "blank", "blank", "blank", "blank", "blank", "blank", "blank", "blank", "blank", "blank", "blank", "blank", "blank", "blank", "blank", "blank", "blank", "blank", "blank", "blank", "blank", "blank", "blank", "blank", "blank", "blank", "blank", "blank", "blank", "blank", "blank", "blank", "blank", "blank", "blank", "blank", "blank", "blank", "blank", "blank", "blank", "blank", "blank", "blank", "blank", "blank", "blank", "blank", "blank", "blank", "blank", "blank", "blank", "blank", "blank", "blank", "blank", "blank", "blank", "blank", "blank", "blank", "blank", "blank", "blank", "blank", "blank", "blank", "blank", "blank", "blank", "blank", "blank", "blank", "blank", "blank", "blank", "blank", "blank", "blank", "blank", "blank", "blank", "blank", "blank", "blank", "blank", "blank", "blank", "blank", "blank", "blank", "blank", "blank", "blank", "blank", "blank", "blank", "blank", "blank", "blank", "blank", "blank", "blank", "blank", "blank", "blank", "blank", "blank", "blank", "blank", "blank", "blank", "blank", "blank", "blank", "blank", "blank", "blank", "blank", "blank", "blank", "blank", "blank", "blank", "blank", "blank", "blank", "blank", "blank", "blank", "blank", "blank", "blank", "blank", "blank", "blank", "blank", "blank", "blank", "blank", "blank", "blank", "blank", "blank", "blank", "blank", "blank", "blank", "blank", "blank", "blank", "blank", "blank", "blank", "blank", "blank", "blank", "blank", "blank", "blank", "blank", "blank", "blank", "blank", "blank", "blank", "blank", "blank", "blank", "blank", "blank", "blank", "blank", "blank", "blank", "blank", "blank", "blank", "blank", "blank", "blank", "blank", "blank", "blank", "blank", "blank", "blank", "blank", "blank", "blank", "blank", "blank", "blank", "blank", "blank", "blank", "blank", "blank", "blank", "blank", "blank", "blank", "blank", "blank", "blank", "blank", "blank", "blank", "blank", "blank", "blank", "blank", "blank", "blank", "blank", "blank", "blank", "blank", "blank", "blank", "blank", "blank", "blank", "blank", "blank", "blank", "blank", "blank", "blank", "blank", "blank", "blank", "blank", "blank", "blank", "blank", "blank", "blank", "wall", "wall", "wall", "wall", "wall", "wall", "wall", "wall", "wall", "wall", "wall", "wall", "wall", "wall", "wall", "wall", "wall", "wall", "wall", "wall", "wall"],
  // mapClassArray: ['wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'blank', 'blank', 'blank', 'blank', 'blank', 'blank', 'blank', 'blank', 'blank', 'wall', 'blank', 'blank', 'blank', 'blank', 'blank', 'blank', 'blank', 'blank', 'blank', 'wall', 'wall', 'blank', 'wall', 'wall', 'wall', 'blank', 'wall', 'wall', 'wall', 'blank', 'wall', 'blank', 'wall', 'wall', 'wall', 'blank', 'wall', 'wall', 'wall', 'blank', 'wall', 'wall', 'blank', 'wall', 'wall', 'wall', 'blank', 'blank', 'blank', 'blank', 'blank', 'blank', 'blank', 'blank', 'blank', 'blank', 'blank', 'wall', 'wall', 'wall', 'blank', 'wall', 'wall', 'blank', 'blank', 'blank', 'blank', 'blank', 'wall', 'blank', 'wall', 'wall', 'wall', 'wall', 'wall', 'blank', 'wall', 'blank', 'blank', 'blank', 'blank', 'blank', 'wall', 'wall', 'blank', 'wall', 'wall', 'wall', 'blank', 'wall', 'blank', 'blank', 'blank', 'wall', 'blank', 'blank', 'blank', 'wall', 'blank', 'wall', 'wall', 'wall', 'blank', 'wall', 'wall', 'blank', 'wall', 'wall', 'wall', 'blank', 'wall', 'wall', 'wall', 'blank', 'wall', 'blank', 'wall', 'wall', 'wall', 'blank', 'wall', 'wall', 'wall', 'blank', 'wall', 'wall', 'blank', 'blank', 'blank', 'blank', 'blank', 'wall', 'blank', 'blank', 'blank', 'blank', 'blank', 'blank', 'blank', 'wall', 'blank', 'blank', 'blank', 'blank', 'blank', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'blank', 'wall', 'blank', 'wall', 'wall', 'ghostDoor', 'wall', 'wall', 'blank', 'wall', 'blank', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'blank', 'wall', 'blank', 'wall', 'blank', 'blank', 'blank', 'wall', 'blank', 'wall', 'blank', 'wall', 'wall', 'wall', 'wall', 'wall', 'teleport', 'teleport', 'teleport', 'teleport', 'teleport', 'blank', 'blank', 'blank', 'wall', 'wall', 'wall', 'wall', 'wall', 'blank', 'blank', 'blank', 'teleport', 'teleport', 'teleport', 'teleport', 'teleport', 'wall', 'wall', 'wall', 'wall', 'wall', 'blank', 'wall', 'blank', 'blank', 'blank', 'blank', 'blank', 'blank', 'blank', 'wall', 'blank', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'blank', 'wall', 'blank', 'wall', 'wall', 'wall', 'wall', 'wall', 'blank', 'wall', 'blank', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'blank', 'blank', 'blank', 'blank', 'blank', 'blank', 'blank', 'blank', 'blank', 'wall', 'blank', 'blank', 'blank', 'blank', 'blank', 'blank', 'blank', 'blank', 'blank', 'wall', 'wall', 'blank', 'wall', 'wall', 'wall', 'blank', 'wall', 'wall', 'wall', 'blank', 'wall', 'blank', 'wall', 'wall', 'wall', 'blank', 'wall', 'wall', 'wall', 'blank', 'wall', 'wall', 'blank', 'blank', 'blank', 'wall', 'blank', 'blank', 'blank', 'blank', 'blank', 'blank', 'blank', 'blank', 'blank', 'blank', 'blank', 'wall', 'blank', 'blank', 'blank', 'wall', 'wall', 'wall', 'wall', 'blank', 'wall', 'blank', 'wall', 'blank', 'wall', 'wall', 'wall', 'wall', 'wall', 'blank', 'wall', 'blank', 'wall', 'blank', 'wall', 'wall', 'wall', 'wall', 'blank', 'blank', 'blank', 'blank', 'blank', 'wall', 'blank', 'blank', 'blank', 'wall', 'blank', 'blank', 'blank', 'wall', 'blank', 'blank', 'blank', 'blank', 'blank', 'wall', 'wall', 'blank', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'blank', 'wall', 'blank', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'blank', 'wall', 'wall', 'blank', 'blank', 'blank', 'blank', 'blank', 'blank', 'blank', 'blank', 'blank', 'blank', 'blank', 'blank', 'blank', 'blank', 'blank', 'blank', 'blank', 'blank', 'blank', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall'],
  mapClassArray: ['wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'blank', 'blank', 'blank', 'blank', 'blank', 'blank', 'blank', 'blank', 'blank', 'wall', 'blank', 'blank', 'blank', 'blank', 'blank', 'blank', 'blank', 'blank', 'blank', 'wall', 'wall', 'blank', 'wall', 'wall', 'wall', 'blank', 'wall', 'wall', 'wall', 'blank', 'wall', 'blank', 'wall', 'wall', 'wall', 'blank', 'wall', 'wall', 'wall', 'blank', 'wall', 'wall', 'blank', 'wall', 'wall', 'wall', 'blank', 'blank', 'blank', 'blank', 'blank', 'blank', 'blank', 'blank', 'blank', 'blank', 'blank', 'wall', 'wall', 'wall', 'blank', 'wall', 'wall', 'blank', 'blank', 'blank', 'blank', 'blank', 'wall', 'blank', 'wall', 'wall', 'wall', 'wall', 'wall', 'blank', 'wall', 'blank', 'blank', 'blank', 'blank', 'blank', 'wall', 'wall', 'blank', 'wall', 'wall', 'wall', 'blank', 'wall', 'blank', 'blank', 'blank', 'wall', 'blank', 'blank', 'blank', 'wall', 'blank', 'wall', 'wall', 'wall', 'blank', 'wall', 'wall', 'blank', 'wall', 'wall', 'wall', 'blank', 'wall', 'wall', 'wall', 'blank', 'wall', 'blank', 'wall', 'wall', 'wall', 'blank', 'wall', 'wall', 'wall', 'blank', 'wall', 'wall', 'blank', 'blank', 'blank', 'blank', 'blank', 'wall', 'blank', 'blank', 'blank', 'blank', 'blank', 'blank', 'blank', 'wall', 'blank', 'blank', 'blank', 'blank', 'blank', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'blank', 'wall', 'blank', 'wall', 'wall', 'ghostDoor', 'wall', 'wall', 'blank', 'wall', 'blank', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'blank', 'wall', 'blank', 'wall', 'ghostroom', 'ghostroom', 'ghostroom', 'wall', 'blank', 'wall', 'blank', 'wall', 'wall', 'wall', 'wall', 'wall', 'teleport', 'teleport', 'teleport', 'teleport', 'teleport', 'blank', 'blank', 'blank', 'wall', 'wall', 'wall', 'wall', 'wall', 'blank', 'blank', 'blank', 'teleport', 'teleport', 'teleport', 'teleport', 'teleport', 'wall', 'wall', 'wall', 'wall', 'wall', 'blank', 'wall', 'blank', 'blank', 'blank', 'blank', 'blank', 'blank', 'blank', 'wall', 'blank', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'blank', 'wall', 'blank', 'wall', 'wall', 'wall', 'wall', 'wall', 'blank', 'wall', 'blank', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'blank', 'blank', 'blank', 'blank', 'blank', 'blank', 'blank', 'blank', 'blank', 'wall', 'blank', 'blank', 'blank', 'blank', 'blank', 'blank', 'blank', 'blank', 'blank', 'wall', 'wall', 'blank', 'wall', 'wall', 'wall', 'blank', 'wall', 'wall', 'wall', 'blank', 'wall', 'blank', 'wall', 'wall', 'wall', 'blank', 'wall', 'wall', 'wall', 'blank', 'wall', 'wall', 'blank', 'blank', 'blank', 'wall', 'blank', 'blank', 'blank', 'blank', 'blank', 'blank', 'blank', 'blank', 'blank', 'blank', 'blank', 'wall', 'blank', 'blank', 'blank', 'wall', 'wall', 'wall', 'wall', 'blank', 'wall', 'blank', 'wall', 'blank', 'wall', 'wall', 'wall', 'wall', 'wall', 'blank', 'wall', 'blank', 'wall', 'blank', 'wall', 'wall', 'wall', 'wall', 'blank', 'blank', 'blank', 'blank', 'blank', 'wall', 'blank', 'blank', 'blank', 'wall', 'blank', 'blank', 'blank', 'wall', 'blank', 'blank', 'blank', 'blank', 'blank', 'wall', 'wall', 'blank', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'blank', 'wall', 'blank', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'blank', 'wall', 'wall', 'blank', 'blank', 'blank', 'blank', 'blank', 'blank', 'blank', 'blank', 'blank', 'blank', 'blank', 'blank', 'blank', 'blank', 'blank', 'blank', 'blank', 'blank', 'blank', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall'],
  createLevel() {
    const askWidth = prompt('How many cells wide?')
    this.levelNumber.push(this.levelNumber.length + 1)
    this.levelDifficulty.push(this.levelDifficulty.length + 1)
    this.width.push(askWidth)
    this.ghostStartPosition.push(askWidth * (Math.round((askWidth / 2))))
    this.playerStartPosition.push(askWidth * (Math.round((askWidth / 4) * 3)))
    const newMapClassArray = []
    for (let index = 0; index < askWidth ** 2; index++) {
      if (index < askWidth || index >= (askWidth ** 2) - askWidth) {
        newMapClassArray.push('wall')
      } else {
        newMapClassArray.push('blank')
      }
    }
    this.mapClassArray.push(newMapClassArray)
    currentLevel = this.levelNumber.length + 1
    const showNewLevel = document.querySelector('.levelarray')
    showNewLevel.innerHTML = levels[0]


  },
}

// TODO Move create divs to a levels.function or loadLevelBtn
// * Create DIVS in GRID
for (let index = 0; index < width ** 2; index++) {
  const div = document.createElement('div')
  grid.appendChild(div)
  div.innerHTML = index
  div.style.width = `${cellSize}%`
  div.style.height = `${cellSize}%`
  div.classList.add(levels.mapClassArray[index])
  div.setAttribute('id', index)
  cellsArray.push(div)
}
// * Characters
const characters = [{
  name: 'player',
  type: 'player',
  behaviour: 'manual',
  lives: 4,
  speed: 100, // variable depending on game.mode
  standardSpeed: 100,
  energisedSpeed: 200,
  startCell: 241,
  currentCell: 241, // variable
  currentDirection: 'up', // (up, down, left, right)
  nextCell: 241, // based on cellArray
  nextDirection: 'right',
}, {
  name: 'blinky',
  type: 'ghost',
  behaviour: 'basic',
  speed: 100, // variable depending on game.mode
  standardSpeed: 100,
  energisedSpeed: 150,
  startCell: 157,
  currentCell: 157, // variable
  currentDirection: 'up', // (up, down, left, right)
  nextCell: 157, // based on cellArray
  nextDirection: 'right',
  straightMoves: 2,
  history: [],
}, {
  name: 'pinky',
  type: 'ghost',
  behaviour: 'basic',
  speed: 100, // variable depending on game.mode
  standardSpeed: 100,
  energisedSpeed: 150,
  startCell: 198,
  currentCell: 198, // variable
  currentDirection: 'up', // (up, down, left, right)
  nextCell: 198, // based on cellArray
  nextDirection: 'right',
  straightMoves: 5,
  history: [],
}, {
  name: 'funky',
  type: 'ghost',
  behaviour: 'basic',
  speed: 100, // variable depending on game.mode
  standardSpeed: 100,
  energisedSpeed: 150,
  startCell: 199,
  currentCell: 199, // variable
  currentDirection: 'up', // (up, down, left, right)
  nextCell: 199, // based on cellArray
  nextDirection: 'right',
  straightMoves: 10,
  history: [],
}, {
  name: 'kinky',
  type: 'ghost',
  behaviour: 'basic',
  speed: 100, // variable depending on game.mode
  standardSpeed: 100,
  energisedSpeed: 150,
  startCell: 200,
  currentCell: 200, // variable
  currentDirection: 'up', // (up, down, left, right)
  nextCell: 200, // based on cellArray
  nextDirection: 'right',
  straightMoves: 15,
  history: [],
}]
const player = characters[0]
let index
let currentCell


// * makeMove Function
function makeMove(characterName) {
  //const index = characters.findIndex(character => character.name === characterName)
  getIndex(characterName)
  // check if nextCell is a wall and if so, pass the currentDirection  to checkMove function
  if (cellsArray[characters[index].nextCell].classList.contains('wall') || cellsArray[characters[index].nextCell].classList.contains('ghostDoor') && characterName === 'player') {
    characters[index].nextCell = characters[index].currentCell
    //characters[index].nextDirection = characters[index].currentDirection

  } else {
    // remove character from currentCell
    cellsArray[characters[index].currentCell].classList.remove(characters[index].name)
    cellsArray[characters[index].currentCell].classList.remove(characters[index].type)
    // add character to nextCell
    cellsArray[characters[index].nextCell].classList.add(characters[index].name)
    cellsArray[characters[index].nextCell].classList.add(characters[index].type)
    // update currentCell
    characters[index].currentCell = characters[index].nextCell
    characters[index].currentDirection = characters[index].nextDirection
    evaluateScore()
  }
}
makeMove('player')
makeMove('blinky')
makeMove('pinky')
makeMove('funky')
makeMove('kinky')


ghostMakeMove()

function evaluateScore() {
  if (cellsArray[characters[0].currentCell].classList.contains('ghost') === true) {
    console.log('you got SPOOKED!')
    setState('lifeLost')
  } else {
    console.log('PHEEW', livesLeft, cellsArray[characters[0].currentCell])
  }
}

// ! as it is, the playerMakeMove function is unpredictable as it sends multiple key presses, even with the event
// ! being stored in a let variable
// const controller = {
//   ArrowUp: { pressed: false, func: player1.movePaddleUp }, //up
//   ArrowDown: { pressed: false, func: player1.movePaddleDown }, //ArrowDown
//   ArrowLeft: { pressed: false, func: player2.movePaddleUp },
//   ArrowRight: { pressed: false, func: player2.movePaddleDown },
// }

function playerMakeMove() {

  // * Player Controller
  // ? Listen to key presses and move Player
  document.addEventListener('keydown', (event) => {
    // ? Listen for key press
    const key = event.key
    event.preventDefault()
    let keyPressed
    if (key === 'ArrowLeft') {
      keyPressed = 'left'
      //  checkMove('player', 'left')
    } else if (key === 'ArrowRight') {
      keyPressed = 'right'
      //  checkMove('player', 'right')
    } else if (key === 'ArrowUp') {
      keyPressed = 'up'
      //  checkMove('player', 'up')
    } else if (key === 'ArrowDown') {
      keyPressed = 'down'
      // checkMove('player', 'down')
    }

    setInterval(() => {
      //if (state === 'running') {
      checkMove('player', keyPressed)
      makeMove('player')
      // }
      console.log(keyPressed)
    }, 300)



  })
}
playerMakeMove()

function checkMove(characterName, direction) {
  getIndex(characterName)
  const currentCell = characters[index].currentCell
  characters[index].nextDirection = direction
  if (direction === 'left') {
    if (currentCell % width === 0) {
      characters[index].nextCell = (currentCell + (width - 1))
    } else {
      characters[index].nextCell -= 1
    }
  } else if (direction === 'right') {
    if ((currentCell + 1) % width === 0) {
      characters[index].nextCell = (currentCell - width + 1)
    } else {
      characters[index].nextCell += 1
    }
  } else if (direction === 'up') {
    if (currentCell < width) {
      characters[index].nextCell = (currentCell + (cellsArray.length - width))
    } else {
      characters[index].nextCell = (currentCell - width)
    }
  } else if (direction === 'down') {
    if (currentCell < (cellsArray.length - width)) {
      characters[index].nextCell = (currentCell + width)
    } else {
      characters[index].nextCell = (currentCell + width) - cellsArray.length
    }
  }
  //return makeMove(characterName)
}
function getIndex(characterName) {
  return index = characters.findIndex(character => character.name === characterName)
}
// setInterval(() => {
//   console.log(JSON.stringify(characters[1]))
// }, 500)
setInterval(() => {
  ghostMakeMove()
}, 300)
function ghostMakeMove() {
  for (let index = 1; index < characters.length; index++) {
    const characterName = characters[index].name
    const currentCell = characters[index].currentCell
    const straightMoves = characters[index].straightMoves
    const possibleMoves = []
    const directions = []
    const history = []
    for (let i = (characters[index].history.length - straightMoves); i < (characters[index].history.length - 1); i++) {
      history.push(characters[index].history[i])
      //console.log(history + 'HISTORY')
    }

    // console.log(currentCell, 'current')
    if (currentCell % width === 0) {
      left = (currentCell + (width - 1))
    } else {
      left = (currentCell - 1)
    }
    directions.push(left)
    // console.log(left)
    if ((currentCell + 1) % width === 0) {
      right = (currentCell - width + 1)
    } else {
      right = currentCell + 1
    }
    directions.push(right)
    //console.log(right)
    if (currentCell < width) {
      up = (currentCell + (cellsArray.length - width))
    } else {
      up = (currentCell - width)
    }
    directions.push(up)
    //console.log(up)
    if (currentCell < (cellsArray.length - width)) {
      down = (currentCell + width)
    } else {
      down = (currentCell + width) - cellsArray.length
    }
    //console.log(down)
    directions.push(down)
    //console.log(directions)
    directions.forEach((direction) => {
      if (cellsArray[direction].classList.contains('wall') === false && history.includes(direction) === false) {
        possibleMoves.push(Number(direction))
        // console.log(possibleMoves, characterName + '(character)')
      } else if (cellsArray[direction].classList.contains('wall') === false && (cellsArray[currentCell].classList.contains('ghostroom') || cellsArray[currentCell].classList.contains('ghostDoor'))) {
        possibleMoves.push(Number(direction))
      }
    })
    characters[index].nextCell = possibleMoves[Math.floor(Math.random() * possibleMoves.length)]
    characters[index].history.push(Number(characters[index].nextCell))
    //console.log(history + 'history2')
    if (state === 'running') {

      makeMove(characterName)

    }

  }
}
