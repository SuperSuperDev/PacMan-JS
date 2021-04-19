// first I selct the html element (grid) that I want to add innerHTML, define width and insert div for each grid width ** 2
const grid = document.querySelector('div.grid')
const builder = document.querySelector('div.builder')
const loadLevelBtn = document.querySelector('button#load-level')
const showBuilderButton = document.querySelector('button#show-builder')
const addLevelButton = document.querySelector('button.addlevel')
const width = 21
let currentLevel = 0
const cellsArray = []
const cellSize = (100 / width)
const mapObjects = ['blank', 'wall', 'teleport', 'ghostDoor', 'food', 'pill', 'fruit']

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
  const showNewLevel = document.querySelector('.levelarray')
  showNewLevel.innerHTML = levels.mapClassArray//JSON.stringify()  

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
  //mapClassArray: ["wall", "wall", "wall", "wall", "wall", "wall", "wall", "wall", "wall", "wall", "wall", "wall", "wall", "wall", "wall", "wall", "wall", "wall", "wall", "wall", "wall", "blank", "blank", "blank", "blank", "blank", "blank", "blank", "blank", "blank", "blank", "blank", "blank", "blank", "blank", "blank", "blank", "blank", "blank", "blank", "blank", "blank", "blank", "blank", "blank", "blank", "blank", "blank", "blank", "blank", "blank", "blank", "blank", "blank", "blank", "blank", "blank", "blank", "blank", "blank", "blank", "blank", "blank", "blank", "blank", "blank", "blank", "blank", "blank", "blank", "blank", "blank", "blank", "blank", "blank", "blank", "blank", "blank", "blank", "blank", "blank", "blank", "blank", "blank", "blank", "blank", "blank", "blank", "blank", "blank", "blank", "blank", "blank", "blank", "blank", "blank", "blank", "blank", "blank", "blank", "blank", "blank", "blank", "blank", "blank", "blank", "blank", "blank", "blank", "blank", "blank", "blank", "blank", "blank", "blank", "blank", "blank", "blank", "blank", "blank", "blank", "blank", "blank", "blank", "blank", "blank", "blank", "blank", "blank", "blank", "blank", "blank", "blank", "blank", "blank", "blank", "blank", "blank", "blank", "blank", "blank", "blank", "blank", "blank", "blank", "blank", "blank", "blank", "blank", "blank", "blank", "blank", "blank", "blank", "blank", "blank", "blank", "blank", "blank", "blank", "blank", "blank", "blank", "blank", "blank", "blank", "blank", "blank", "blank", "blank", "blank", "blank", "blank", "blank", "blank", "blank", "blank", "blank", "blank", "blank", "blank", "blank", "blank", "blank", "blank", "blank", "blank", "blank", "blank", "blank", "blank", "blank", "blank", "blank", "blank", "blank", "blank", "blank", "blank", "blank", "blank", "blank", "blank", "blank", "blank", "blank", "blank", "blank", "blank", "blank", "blank", "blank", "blank", "blank", "blank", "blank", "blank", "blank", "blank", "blank", "blank", "blank", "blank", "blank", "blank", "blank", "blank", "blank", "blank", "blank", "blank", "blank", "blank", "blank", "blank", "blank", "blank", "blank", "blank", "blank", "blank", "blank", "blank", "blank", "blank", "blank", "blank", "blank", "blank", "blank", "blank", "blank", "blank", "blank", "blank", "blank", "blank", "blank", "blank", "blank", "blank", "blank", "blank", "blank", "blank", "blank", "blank", "blank", "blank", "blank", "blank", "blank", "blank", "blank", "blank", "blank", "blank", "blank", "blank", "blank", "blank", "blank", "blank", "blank", "blank", "blank", "blank", "blank", "blank", "blank", "blank", "blank", "blank", "blank", "blank", "blank", "blank", "blank", "blank", "blank", "blank", "blank", "blank", "blank", "blank", "blank", "blank", "blank", "blank", "blank", "blank", "blank", "blank", "blank", "blank", "blank", "blank", "blank", "blank", "blank", "blank", "blank", "blank", "blank", "blank", "blank", "blank", "blank", "blank", "blank", "blank", "blank", "blank", "blank", "blank", "blank", "blank", "blank", "blank", "blank", "blank", "blank", "blank", "blank", "blank", "blank", "blank", "blank", "blank", "blank", "blank", "blank", "blank", "blank", "blank", "blank", "blank", "blank", "blank", "blank", "blank", "blank", "blank", "blank", "blank", "blank", "blank", "blank", "blank", "blank", "blank", "blank", "blank", "blank", "blank", "blank", "blank", "blank", "blank", "blank", "blank", "blank", "blank", "blank", "blank", "blank", "blank", "blank", "blank", "blank", "blank", "blank", "blank", "blank", "blank", "blank", "blank", "blank", "blank", "blank", "blank", "blank", "blank", "blank", "blank", "blank", "blank", "blank", "blank", "blank", "blank", "blank", "blank", "blank", "blank", "blank", "blank", "blank", "blank", "blank", "wall", "wall", "wall", "wall", "wall", "wall", "wall", "wall", "wall", "wall", "wall", "wall", "wall", "wall", "wall", "wall", "wall", "wall", "wall", "wall", "wall"],
  mapClassArray: ['wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'blank', 'blank', 'blank', 'blank', 'blank', 'blank', 'blank', 'blank', 'blank', 'wall', 'blank', 'blank', 'blank', 'blank', 'blank', 'blank', 'blank', 'blank', 'blank', 'wall', 'wall', 'blank', 'wall', 'wall', 'wall', 'blank', 'wall', 'wall', 'wall', 'blank', 'wall', 'blank', 'wall', 'wall', 'wall', 'blank', 'wall', 'wall', 'wall', 'blank', 'wall', 'wall', 'blank', 'wall', 'wall', 'wall', 'blank', 'blank', 'blank', 'blank', 'blank', 'blank', 'blank', 'blank', 'blank', 'blank', 'blank', 'wall', 'wall', 'wall', 'blank', 'wall', 'wall', 'blank', 'blank', 'blank', 'blank', 'blank', 'wall', 'blank', 'wall', 'wall', 'wall', 'wall', 'wall', 'blank', 'wall', 'blank', 'blank', 'blank', 'blank', 'blank', 'wall', 'wall', 'blank', 'wall', 'wall', 'wall', 'blank', 'wall', 'blank', 'blank', 'blank', 'wall', 'blank', 'blank', 'blank', 'wall', 'blank', 'wall', 'wall', 'wall', 'blank', 'wall', 'wall', 'blank', 'wall', 'wall', 'wall', 'blank', 'wall', 'wall', 'wall', 'blank', 'wall', 'blank', 'wall', 'wall', 'wall', 'blank', 'wall', 'wall', 'wall', 'blank', 'wall', 'wall', 'blank', 'blank', 'blank', 'blank', 'blank', 'wall', 'blank', 'blank', 'blank', 'blank', 'blank', 'blank', 'blank', 'wall', 'blank', 'blank', 'blank', 'blank', 'blank', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'blank', 'wall', 'blank', 'wall', 'wall', 'ghostDoor', 'wall', 'wall', 'blank', 'wall', 'blank', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'blank', 'wall', 'blank', 'wall', 'blank', 'blank', 'blank', 'wall', 'blank', 'wall', 'blank', 'wall', 'wall', 'wall', 'wall', 'wall', 'teleport', 'teleport', 'teleport', 'teleport', 'teleport', 'blank', 'blank', 'blank', 'wall', 'wall', 'wall', 'wall', 'wall', 'blank', 'blank', 'blank', 'teleport', 'teleport', 'teleport', 'teleport', 'teleport', 'wall', 'wall', 'wall', 'wall', 'wall', 'blank', 'wall', 'blank', 'blank', 'blank', 'blank', 'blank', 'blank', 'blank', 'wall', 'blank', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'blank', 'wall', 'blank', 'wall', 'wall', 'wall', 'wall', 'wall', 'blank', 'wall', 'blank', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'blank', 'blank', 'blank', 'blank', 'blank', 'blank', 'blank', 'blank', 'blank', 'wall', 'blank', 'blank', 'blank', 'blank', 'blank', 'blank', 'blank', 'blank', 'blank', 'wall', 'wall', 'blank', 'wall', 'wall', 'wall', 'blank', 'wall', 'wall', 'wall', 'blank', 'wall', 'blank', 'wall', 'wall', 'wall', 'blank', 'wall', 'wall', 'wall', 'blank', 'wall', 'wall', 'blank', 'blank', 'blank', 'wall', 'blank', 'blank', 'blank', 'blank', 'blank', 'blank', 'blank', 'blank', 'blank', 'blank', 'blank', 'wall', 'blank', 'blank', 'blank', 'wall', 'wall', 'wall', 'wall', 'blank', 'wall', 'blank', 'wall', 'blank', 'wall', 'wall', 'wall', 'wall', 'wall', 'blank', 'wall', 'blank', 'wall', 'blank', 'wall', 'wall', 'wall', 'wall', 'blank', 'blank', 'blank', 'blank', 'blank', 'wall', 'blank', 'blank', 'blank', 'wall', 'blank', 'blank', 'blank', 'wall', 'blank', 'blank', 'blank', 'blank', 'blank', 'wall', 'wall', 'blank', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'blank', 'wall', 'blank', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'blank', 'wall', 'wall', 'blank', 'blank', 'blank', 'blank', 'blank', 'blank', 'blank', 'blank', 'blank', 'blank', 'blank', 'blank', 'blank', 'blank', 'blank', 'blank', 'blank', 'blank', 'blank', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall'],
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
  behaviour: 'manual',
  lives: 4,
  speed: 100, // variable depending on game.mode
  standardSpeed: 100,
  energisedSpeed: 200,
  currentCell: 241, // variable
  currentDirection: 'up', // (up, down, left, right)
  nextCell: 241, // based on cellArray
  nextDirection: 'right',
}, {
  name: 'blinky',
  behaviour: 'basic',
  speed: 100, // variable depending on game.mode
  standardSpeed: 100,
  energisedSpeed: 150,
  currentCell: 157, // variable
  currentDirection: 'up', // (up, down, left, right)
  nextCell: 157, // based on cellArray
  nextDirection: 'right',
  history: [],
}] // TODO Add  3 more ghost characters
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
    // add character to nextCell
    cellsArray[characters[index].nextCell].classList.add(characters[index].name)
    // update currentCell
    characters[index].currentCell = characters[index].nextCell
    characters[index].currentDirection = characters[index].nextDirection
  }
}
makeMove('player')
makeMove('blinky')



playerMakeMove()
ghostMakeMove()
function playerMakeMove() {

  // * Player Controller
  // ? Listen to key presses and move Player
  document.addEventListener('keydown', (event) => {
    // ? Listen for key press
    const key = event.key
    event.preventDefault()
    if (key === 'ArrowLeft') {
      checkMove('player', 'left')
    } else if (key === 'ArrowRight') {
      checkMove('player', 'right')
    } else if (key === 'ArrowUp') {
      checkMove('player', 'up')
    } else if (key === 'ArrowDown') {
      checkMove('player', 'down')
    }

    setTimeout(() => {
      makeMove('player')
    }, 1000)

  })
}

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

function ghostMakeMove() {
  for (let index = 1; index < characters.length; index++) {
    const characterName = characters[index].name
    const currentCell = characters[index].currentCell
    const possibleMoves = []
    const directions = []
    const history = []
    for (let i = (characters[index].history.length - 10); i < (characters[index].history.length - 1); i++) {
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
        console.log(possibleMoves)
      }
    })
    characters[index].nextCell = possibleMoves[Math.floor(Math.random() * possibleMoves.length)]
    characters[index].history.push(Number(characters[index].nextCell))
    //console.log(history + 'history2')
    makeMove(characterName)
  }
}
