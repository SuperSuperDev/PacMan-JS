//* let variables that define the starting game state
let state = 'newGame' // newGame, newLevel, stopped, running, paused, gameOver, life
let nextState = 'running'
let stateStart = ''
let gameStart = ''
let mode = 'standard' // standard, energ
let modeStartTime = ''
let totalScore = 0
let thisLevelScore = 0
let livesLeft = 3
let foodCount = 0
let fruitCount = 2
// *  Define the document querySelectors
const grid = document.querySelector('div.grid')
// const builder = document.querySelector('div.builder')
// const showBuilderButton = document.querySelector('button#show-builder')
// const addLevelButton = document.querySelector('button.addlevel')
const statusBar = document.querySelector('section#status')
const fruityLife = document.querySelector('section.fruitylife')
// * define what to do up change in game state
function setState(newState) {
  if (newState === 'newGame' || state === '') {
    gameStart = Date.now()
    thisLevelScore = 0
    totalScore = 0
    stateStart = Date.now()
    nextState = 'running'
    livesLeft = 3
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
    if (livesLeft > -1) {
      const lifeDisplay = document.querySelector('div.lifewrap')
      lifeDisplay.removeChild(lifeDisplay.firstChild)
    }
    if (livesLeft <= 0) {
      return gameOver()
    }
    setTimeout(() => {
      resetCharacters()
    }, 3000)
    setTimeout(() => {
      return (state = 'running')
    }, 5000)
  } else if (newState === 'You Win') {
    state = newState
  }
}

function gameOver() {
  state = 'Game Over'
}
function setMode(newMode) {
  mode = newMode
  if (newMode === 'energised') {
    // * remove all ghost classes from each cell and replace with energised ghost class (casper) for a limited time
    for (let index = 1; index < characters.length; index++) {
      cellsArray[characters[index].currentCell].classList.remove(
        characters[index].type
      )

      characters[index].type = 'casper'
    }
    setTimeout(() => {
      mode = 'standard'
      for (let index = 1; index < characters.length; index++) {
        characters[index].type = 'ghost'
      }
      cellsArray.forEach((element) => {
        element.classList.remove('casper')
      })
    }, 20000)
  }
  modeStartTime = Date.now()
}

function resetCharacters() {
  for (let index = 0; index < characters.length; index++) {
    cellsArray[characters[index].currentCell].classList.remove(
      characters[index].name
    )
    cellsArray[characters[index].currentCell].classList.remove(
      characters[index].type
    )
    characters[index].history = []
    characters[index].currentCell = characters[index].startCell
    characters[index].nextCell = characters[index].startCell
    characters[index].ghostRoomEntry = 1
    makeMove(characters[index].name)
  }
}

const gameBtn = document.getElementById('gamebtn')
gameBtn.addEventListener('click', () => {
  setState(nextState)
})

setState('newGame')

const width = 21
let currentLevel = 0
const cellsArray = []
const cellSize = 100 / width
const mapObjects = [
  'blank',
  'wall',
  'teleport',
  'ghostDoor',
  'food',
  'pill',
  'fruit',
  'ghostroom',
]
const currentScore = document.querySelector('h2#current-score')

// * Map builder, for use in developement and returns an array of map objects for use in mapClassArray
// TODO: change variable from canBuild to isBuildMode
// let canBuild = false
// showBuilderButton.addEventListener('click', (event) => {
//   event.preventDefault()
//   builder.classList.toggle('hide')
//   canBuild = canBuild === false
//   startBuilder()
// })
// addLevelButton.addEventListener('click', (event) => {
//   event.preventDefault()
//   levels.createLevel()
// })
// let srcClass
// let targetID
// function startBuilder() {
//   if (canBuild === true) {
//     builder.addEventListener('click', (event) => {
//       srcClass = event.path[0].innerHTML
//     })
//     grid.addEventListener('click', (event) => {
//       levels.mapClassArray[targetID] = srcClass
//       cellsArray[targetID].classList.value = `${srcClass}`
//     })

//     mapObjects.forEach((element) => {
//       const objectDiv = document.createElement('div')
//       builder.appendChild(objectDiv)
//       objectDiv.innerHTML = element
//       objectDiv.classList.add(element)
//     })
//   }
// }
// * define the level layout and other level related options.
const levels = {
  levelNumber: [1],
  levelDifficulty: [1],
  width: [21],
  playerStartPosition: [241],
  ghostStartPosition: [157],
  mapClassArray: [
    'wall',
    'wall',
    'wall',
    'wall',
    'wall',
    'wall',
    'wall',
    'wall',
    'wall',
    'wall',
    'wall',
    'wall',
    'wall',
    'wall',
    'wall',
    'wall',
    'wall',
    'wall',
    'wall',
    'wall',
    'wall',
    'wall',
    'blank',
    'blank',
    'blank',
    'blank',
    'blank',
    'blank',
    'blank',
    'blank',
    'blank',
    'wall',
    'blank',
    'blank',
    'blank',
    'blank',
    'blank',
    'blank',
    'blank',
    'blank',
    'blank',
    'wall',
    'wall',
    'blank',
    'wall',
    'wall',
    'wall',
    'blank',
    'wall',
    'wall',
    'wall',
    'blank',
    'wall',
    'blank',
    'wall',
    'wall',
    'wall',
    'blank',
    'wall',
    'wall',
    'wall',
    'blank',
    'wall',
    'wall',
    'blank',
    'wall',
    'wall',
    'wall',
    'blank',
    'blank',
    'blank',
    'blank',
    'blank',
    'blank',
    'blank',
    'blank',
    'blank',
    'blank',
    'blank',
    'wall',
    'wall',
    'wall',
    'blank',
    'wall',
    'wall',
    'blank',
    'blank',
    'blank',
    'blank',
    'pill',
    'wall',
    'blank',
    'wall',
    'wall',
    'wall',
    'wall',
    'wall',
    'blank',
    'wall',
    'pill',
    'blank',
    'blank',
    'blank',
    'blank',
    'wall',
    'wall',
    'blank',
    'wall',
    'wall',
    'wall',
    'blank',
    'wall',
    'blank',
    'blank',
    'blank',
    'wall',
    'blank',
    'blank',
    'blank',
    'wall',
    'blank',
    'wall',
    'wall',
    'wall',
    'blank',
    'wall',
    'wall',
    'blank',
    'wall',
    'wall',
    'wall',
    'blank',
    'wall',
    'wall',
    'wall',
    'blank',
    'wall',
    'blank',
    'wall',
    'wall',
    'wall',
    'blank',
    'wall',
    'wall',
    'wall',
    'blank',
    'wall',
    'wall',
    'blank',
    'blank',
    'blank',
    'blank',
    'blank',
    'wall',
    'blank',
    'blank',
    'blank',
    'blank',
    'blank',
    'blank',
    'blank',
    'wall',
    'blank',
    'blank',
    'blank',
    'blank',
    'blank',
    'wall',
    'wall',
    'wall',
    'wall',
    'wall',
    'wall',
    'blank',
    'wall',
    'blank',
    'wall',
    'wall',
    'ghostDoor',
    'wall',
    'wall',
    'blank',
    'wall',
    'blank',
    'wall',
    'wall',
    'wall',
    'wall',
    'wall',
    'wall',
    'wall',
    'wall',
    'wall',
    'wall',
    'blank',
    'wall',
    'blank',
    'wall',
    'ghostroom',
    'ghostroom',
    'ghostroom',
    'wall',
    'blank',
    'wall',
    'blank',
    'wall',
    'wall',
    'wall',
    'wall',
    'wall',
    'teleport',
    'teleport',
    'teleport',
    'teleport',
    'teleport',
    'blank',
    'blank',
    'blank',
    'wall',
    'wall',
    'wall',
    'wall',
    'wall',
    'blank',
    'blank',
    'blank',
    'teleport',
    'teleport',
    'teleport',
    'teleport',
    'teleport',
    'wall',
    'wall',
    'wall',
    'wall',
    'wall',
    'blank',
    'wall',
    'blank',
    'blank',
    'blank',
    'blank',
    'blank',
    'blank',
    'blank',
    'wall',
    'blank',
    'wall',
    'wall',
    'wall',
    'wall',
    'wall',
    'wall',
    'wall',
    'wall',
    'wall',
    'wall',
    'blank',
    'wall',
    'blank',
    'wall',
    'wall',
    'wall',
    'wall',
    'wall',
    'blank',
    'wall',
    'blank',
    'wall',
    'wall',
    'wall',
    'wall',
    'wall',
    'wall',
    'blank',
    'blank',
    'blank',
    'blank',
    'blank',
    'blank',
    'blank',
    'blank',
    'blank',
    'wall',
    'blank',
    'blank',
    'blank',
    'blank',
    'blank',
    'blank',
    'blank',
    'blank',
    'blank',
    'wall',
    'wall',
    'blank',
    'wall',
    'wall',
    'wall',
    'blank',
    'wall',
    'wall',
    'wall',
    'blank',
    'wall',
    'blank',
    'wall',
    'wall',
    'wall',
    'blank',
    'wall',
    'wall',
    'wall',
    'blank',
    'wall',
    'wall',
    'blank',
    'blank',
    'blank',
    'wall',
    'pill',
    'blank',
    'blank',
    'blank',
    'blank',
    'blank',
    'blank',
    'blank',
    'blank',
    'blank',
    'pill',
    'wall',
    'blank',
    'blank',
    'blank',
    'wall',
    'wall',
    'wall',
    'wall',
    'blank',
    'wall',
    'blank',
    'wall',
    'blank',
    'wall',
    'wall',
    'wall',
    'wall',
    'wall',
    'blank',
    'wall',
    'blank',
    'wall',
    'blank',
    'wall',
    'wall',
    'wall',
    'wall',
    'blank',
    'blank',
    'blank',
    'blank',
    'blank',
    'wall',
    'blank',
    'blank',
    'blank',
    'wall',
    'blank',
    'blank',
    'blank',
    'wall',
    'blank',
    'blank',
    'blank',
    'blank',
    'blank',
    'wall',
    'wall',
    'blank',
    'wall',
    'wall',
    'wall',
    'wall',
    'wall',
    'wall',
    'wall',
    'blank',
    'wall',
    'blank',
    'wall',
    'wall',
    'wall',
    'wall',
    'wall',
    'wall',
    'wall',
    'blank',
    'wall',
    'wall',
    'blank',
    'blank',
    'blank',
    'blank',
    'blank',
    'blank',
    'blank',
    'blank',
    'blank',
    'blank',
    'blank',
    'blank',
    'blank',
    'blank',
    'blank',
    'blank',
    'blank',
    'blank',
    'blank',
    'wall',
    'wall',
    'wall',
    'wall',
    'wall',
    'wall',
    'wall',
    'wall',
    'wall',
    'wall',
    'wall',
    'wall',
    'wall',
    'wall',
    'wall',
    'wall',
    'wall',
    'wall',
    'wall',
    'wall',
    'wall',
    'wall',
  ],
  createLevel() {
    const askWidth = prompt('How many cells wide?')
    this.levelNumber.push(this.levelNumber.length + 1)
    this.levelDifficulty.push(this.levelDifficulty.length + 1)
    this.width.push(askWidth)
    this.ghostStartPosition.push(askWidth * Math.round(askWidth / 2))
    this.playerStartPosition.push(askWidth * Math.round((askWidth / 4) * 3))
    const newMapClassArray = []
    for (let index = 0; index < askWidth ** 2; index++) {
      if (index < askWidth || index >= askWidth ** 2 - askWidth) {
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
  // * add food/pills to all 'blank' divs except for grid 241 - which is the start position of Pacman
  if (div.classList.contains('blank') && index !== 241) {
    // TODO make the index dynamic depending on the players start position
    div.classList.add('food')
    foodCount++
  }
  // * ensure that squares with pills are also blank, so that they can be travelled across
  if (div.classList.contains('pill')) {
    div.classList.add('blank')
  }
  div.setAttribute('id', index)
  cellsArray.push(div)
}
// * Create Lives and Fruit Display
// * Lives
const lifewrap = document.createElement('div')
fruityLife.appendChild(lifewrap)
lifewrap.classList.add('lifewrap')
for (let index = 0; index < livesLeft; index++) {
  const div = document.createElement('div')
  lifewrap.appendChild(div)
  div.style.width = '40px'
  div.style.height = '40px'
  div.classList.add('player')
  div.setAttribute('id', 'fruit-' + index)
}

// * fruits
const fruitWrap = document.createElement('div')
fruityLife.appendChild(fruitWrap)
fruitWrap.classList.add('fruitwrap')
for (let index = 0; index < fruitCount; index++) {
  const div = document.createElement('div')
  fruitWrap.appendChild(div)
  div.style.width = '40px'
  div.style.height = '40px'
  div.classList.add('fruit')
}

// * Characters
const characters = [
  {
    name: 'player',
    type: 'player',
    behaviour: 'manual',
    lives: 3,
    speed: 100, // TODO: variable depending on game.mode
    standardSpeed: 100,
    energisedSpeed: 200,
    startCell: 241,
    currentCell: 241, // variable
    currentDirection: 'up', // (up, down, left, right)
    nextCell: 241, // based on cellArray
    nextDirection: 'right',
  },
  {
    name: 'blinky',
    type: 'ghost',
    behaviour: 'basic',
    speed: 100, // variable depending on game.mode
    standardSpeed: 100,
    energisedSpeed: 150,
    ghostRoomEntry: 1,
    startCell: 157,
    currentCell: 157, // variable
    currentDirection: 'up', // (up, down, left, right)
    nextCell: 157, // based on cellArray
    nextDirection: 'right',
    straightMoves: 2,
    history: [],
  },
  {
    name: 'pinky',
    type: 'ghost',
    behaviour: 'basic',
    speed: 100, // variable depending on game.mode
    standardSpeed: 100,
    energisedSpeed: 150,
    ghostRoomEntry: 1,
    startCell: 198,
    currentCell: 198, // variable
    currentDirection: 'up', // (up, down, left, right)
    nextCell: 198, // based on cellArray
    nextDirection: 'right',
    straightMoves: 5,
    history: [],
  },
  {
    name: 'funky',
    type: 'ghost',
    behaviour: 'basic',
    speed: 100, // variable depending on game.mode
    standardSpeed: 100,
    energisedSpeed: 150,
    ghostRoomEntry: 1,
    startCell: 199,
    currentCell: 199, // variable
    currentDirection: 'up', // (up, down, left, right)
    nextCell: 199, // based on cellArray
    nextDirection: 'right',
    straightMoves: 10,
    history: [],
  },
  {
    name: 'kinky',
    type: 'ghost',
    behaviour: 'basic',
    speed: 100, // variable depending on game.mode
    standardSpeed: 100,
    energisedSpeed: 150,
    ghostRoomEntry: 1,
    startCell: 200,
    currentCell: 200, // variable
    currentDirection: 'up', // (up, down, left, right)
    nextCell: 200, // based on cellArray
    nextDirection: 'right',
    straightMoves: 15,
    history: [],
  },
]
const player = characters[0]
let index

// * makeMove Function
function makeMove(characterName) {
  getIndex(characterName)

  cellsArray[characters[index].currentCell].classList.remove(
    characters[index].name
  )
  cellsArray[characters[index].currentCell].classList.remove(
    characters[index].type
  )
  // * add character to nextCell
  cellsArray[characters[index].nextCell].classList.add(characters[index].name)
  cellsArray[characters[index].nextCell].classList.add(characters[index].type)
  // * update currentCell
  characters[index].currentCell = characters[index].nextCell
  characters[index].currentDirection = characters[index].nextDirection
  evaluateScore(characterName)
}
makeMove('player')
makeMove('blinky')
makeMove('pinky')
makeMove('funky')
makeMove('kinky')

ghostMakeMove()

function evaluateScore(characterName) {
  cellsArray.forEach((element) => {
    if (
      element.classList.contains('ghost') &&
      element.classList.contains('player')
    ) {
      setState('lifeLost')
    }
    if (
      element.classList.contains('food') &&
      element.classList.contains('player')
    ) {
      cellsArray[characters[0].currentCell].classList.remove('food')
      foodCount--
      thisLevelScore += 10
      totalScore += 10
      currentScore.innerHTML = totalScore
      if (foodCount <= 0) setState('You Win')
    }
    if (
      element.classList.contains('pill') &&
      element.classList.contains('player')
    ) {
      element.classList.remove('pill')
      setMode('energised')
    }
    // * check if ghosts are in energised mode, in which case Pacman can eat them
    if (
      !element.classList.contains('ghost') &&
      element.classList.contains('player') &&
      element.classList.contains('casper')
    ) {
      element.classList.remove('casper')
      characters.forEach((character) => {
        if (
          element.classList.contains(character.name) &&
          character.type === 'casper'
        ) {
          // * change back to ghost and remove energised mode
          // * place ghost in their start cell
          character.type = 'ghost'
          character.nextCell = character.startCell
          makeMove(character.name)
          thisLevelScore += 500
          totalScore += 500
        }
      })
    }
  })
  statusBar.innerHTML = `<H3>${state}</H3>`
}

const controller = {
  ArrowUp: { pressed: 'false', direction: 'up', func: checkMove },
  ArrowDown: { pressed: 'false', direction: 'down', func: checkMove },
  ArrowLeft: { pressed: 'false', direction: 'left', func: checkMove },
  ArrowRight: { pressed: 'false', direction: 'right', func: checkMove },
}
let lastPressed = ''
// * when direction key is pressed...
document.addEventListener('keydown', (e) => {
  e.preventDefault()
  if (controller[e.key]) {
    controller[e.key].pressed = 'true'
    lastPressed = controller[e.key]
  }
})
// * when direction key is released...
document.addEventListener('keyup', (e) => {
  e.preventDefault()
  if (controller[e.key]) {
    controller[e.key].pressed = 'false'
  }
})
// * Execute Pacman's move
const executeMoves = () => {
  if (lastPressed.pressed === 'false') {
    let hasMove = false
    Object.keys(controller).forEach((key) => {
      if (controller[key].pressed === 'true') {
        hasMove = true
        controller[key] &&
          controller[key].func('player', controller[key].direction)
      }
    })
    if (!hasMove) {
      checkMove('player', lastPressed.direction)
    }
  } else {
    checkMove('player', lastPressed.direction)
  }
}
let intNum = 0
setInterval(() => {
  if (['running', 'energised', 'paused'].includes(state)) {
    executeMoves()
    if (isWall('player') === false) {
      makeMove('player')
    } else {
      characters[0].nextCell = characters[0].currentCell
      checkMove('player', characters[0].currentDirection)
      if (isWall('player') === false) {
        makeMove('player')
      } else {
        characters[0].nextCell = characters[0].currentCell
      }
      intNum++
      // }
    }
  }
}, 400)

function isWall(characterName) {
  getIndex(characterName)
  return cellsArray[characters[index].nextCell].classList.contains('wall') ===
    true ||
    cellsArray[characters[index].nextCell].classList.contains('ghostDoor')
    ? true
    : false
}

function checkMove(characterName, direction) {
  // * get characters current position
  getIndex(characterName)
  const currentCell = characters[index].currentCell
  characters[index].nextDirection = direction
  // *  if moving left or right, check if the next cell is outside the grid and if it is (character is in telepot tunnel),
  // * set the next cell to the other side of the grid, else make normal move
  if (direction === 'left') {
    if (currentCell % width === 0) {
      characters[index].nextCell = currentCell + (width - 1)
    } else {
      characters[index].nextCell -= 1
    }
  } else if (direction === 'right') {
    if ((currentCell + 1) % width === 0) {
      characters[index].nextCell = currentCell - width + 1
    } else {
      characters[index].nextCell += 1
    }
  } else if (direction === 'up') {
    if (currentCell < width) {
      characters[index].nextCell = currentCell + (cellsArray.length - width)
    } else {
      characters[index].nextCell = currentCell - width
    }
  } else if (direction === 'down') {
    if (currentCell < cellsArray.length - width) {
      characters[index].nextCell = currentCell + width
    } else {
      characters[index].nextCell = currentCell + width - cellsArray.length
    }
  }
}
function getIndex(characterName) {
  return (index = characters.findIndex(
    (character) => character.name === characterName
  ))
}
setInterval(() => {
  ghostMakeMove()
}, 600)

function ghostMakeMove() {
  for (let index = 1; index < characters.length; index++) {
    const characterName = characters[index].name
    const currentCell = characters[index].currentCell
    const straightMoves = characters[index].straightMoves
    const possibleMoves = []
    const directions = []
    const history = []

    let left
    let right
    let down
    let up

    if (currentCell === 157) {
      characters[index].ghostRoomEntry = 0
    }

    for (
      let i = characters[index].history.length - straightMoves;
      i < characters[index].history.length - 1;
      i++
    ) {
      history.push(characters[index].history[i])
    }

    left =
      currentCell % width === 0 ? currentCell + (width - 1) : currentCell - 1
    directions.push(left)
    right =
      (currentCell + 1) % width === 0
        ? currentCell - width + 1
        : currentCell + 1
    directions.push(right)
    up =
      currentCell < width
        ? currentCell + (cellsArray.length - width)
        : currentCell - width
    directions.push(up)
    down =
      currentCell < cellsArray.length - width
        ? currentCell + width
        : currentCell + width - cellsArray.length
    directions.push(down)
    directions.forEach((direction) => {
      if (
        cellsArray[direction].classList.contains('wall') === false &&
        history.includes(direction) === false
      ) {
        possibleMoves.push(Number(direction))
      } else if (
        cellsArray[direction].classList.contains('wall') === false &&
        (cellsArray[currentCell].classList.contains('ghostroom') ||
          cellsArray[currentCell].classList.contains('ghostDoor'))
      ) {
        possibleMoves.push(Number(direction))
      }
    })
    characters[index].nextCell =
      possibleMoves[Math.floor(Math.random() * possibleMoves.length)]
    characters[index].history.push(Number(characters[index].nextCell))

    if (state === 'running') {
      makeMove(characterName)
    }
  }
}

function findpath(ghost, player, array) {
  const start = characters[ghost].currentCell
  const finish = characters[player].currentCell
  const grid = levels.mapClassArray
  const queue = []
  queue.push(start)
  const currentItem = queue[0]
}
