// first I selct the html element (grid) that I want to add innerHTML, define width and insert div for each grid width ** 2

let state = 'newGame'// newGame, newLevel, stopped, running, paused, gameOver, life
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
const grid = document.querySelector('div.grid')
const builder = document.querySelector('div.builder')
const showBuilderButton = document.querySelector('button#show-builder')
const addLevelButton = document.querySelector('button.addlevel')
const statusBar = document.querySelector('section#status')
const fruityLife = document.querySelector('section.fruitylife')


function setState(newState) {
  if ((newState === 'newGame' || state === '')) {
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
    if (livesLeft > 0) {
      const lifeDisplay = document.querySelector('div.lifewrap')
      lifeDisplay.removeChild(lifeDisplay.firstChild)
    }
    if (livesLeft <= 0) {
      console.log(Date.now(), `You have ${livesLeft} lives left. your game is over!`)
      return gameOver()
    } else {
      setTimeout(() => {
        console.log(Date.now(), `You have ${livesLeft} lives left. Resetting characters!`)
        resetCharacters()
      }, 3000)
      setTimeout(() => {
        console.log(Date.now(), `You have ${livesLeft} lives left. Setting game back to running!`)

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
  else if (newState === 'You Win') {
    state = newState
  }
  console.log(livesLeft)

}

function gameOver() {
  return console.log('GAME OVER', livesLeft)

}
function setMode(newMode) {
  mode = newMode
  if (newMode === 'energised') {
    //remove all ghost classes from each cell

    //  cellsArray[characters[index].currentCell].classList.remove(characters[index].type)



    for (let index = 1; index < characters.length; index++) {
      cellsArray[characters[index].currentCell].classList.remove(characters[index].type)

      characters[index].type = 'casper'
      console.log(characters[index])
    }
    setTimeout(() => {
      mode = 'standard'
      for (let index = 1; index < characters.length; index++) {
        characters[index].type = 'ghost'
        console.log(characters[index])
      }
      cellsArray.forEach(element => {
        element.classList.remove('casper')
      })

    }, 20000)
  }
  modeStartTime = Date.now()
}




function resetCharacters() {
  for (let index = 0; index < characters.length; index++) {
    cellsArray[characters[index].currentCell].classList.remove(characters[index].name)
    cellsArray[characters[index].currentCell].classList.remove(characters[index].type)
    characters[index].history = []
    characters[index].currentCell = characters[index].startCell
    characters[index].nextCell = characters[index].startCell
    characters[index].ghostRoomEntry = 1
    makeMove(characters[index].name)
  }
}

const gameBtn = document.getElementById('gamebtn')
gameBtn.addEventListener('click', function () {
  setState(nextState)
})

setState('newGame')


const width = 21
let currentLevel = 0
const cellsArray = []
const cellSize = (100 / width)
const mapObjects = ['blank', 'wall', 'teleport', 'ghostDoor', 'food', 'pill', 'fruit', 'ghostroom']
const currentScore = document.querySelector('h2#current-score')
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
  // mapClassArray: ['wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'blank', 'blank', 'blank', 'blank', 'blank', 'blank', 'blank', 'blank', 'blank', 'wall', 'blank', 'blank', 'blank', 'blank', 'blank', 'blank', 'blank', 'blank', 'blank', 'wall', 'wall', 'blank', 'wall', 'wall', 'wall', 'blank', 'wall', 'wall', 'wall', 'blank', 'wall', 'blank', 'wall', 'wall', 'wall', 'blank', 'wall', 'wall', 'wall', 'blank', 'wall', 'wall', 'blank', 'wall', 'wall', 'wall', 'blank', 'blank', 'blank', 'blank', 'blank', 'blank', 'blank', 'blank', 'blank', 'blank', 'blank', 'wall', 'wall', 'wall', 'blank', 'wall', 'wall', 'blank', 'blank', 'blank', 'blank', 'pill', 'wall', 'blank', 'wall', 'wall', 'wall', 'wall', 'wall', 'blank', 'wall', 'pill', 'blank', 'blank', 'blank', 'blank', 'wall', 'wall', 'blank', 'wall', 'wall', 'wall', 'blank', 'wall', 'blank', 'blank', 'blank', 'wall', 'blank', 'blank', 'blank', 'wall', 'blank', 'wall', 'wall', 'wall', 'blank', 'wall', 'wall', 'blank', 'wall', 'wall', 'wall', 'blank', 'wall', 'wall', 'wall', 'blank', 'wall', 'blank', 'wall', 'wall', 'wall', 'blank', 'wall', 'wall', 'wall', 'blank', 'wall', 'wall', 'blank', 'blank', 'blank', 'blank', 'blank', 'wall', 'blank', 'blank', 'blank', 'blank', 'blank', 'blank', 'blank', 'wall', 'blank', 'blank', 'blank', 'blank', 'blank', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'blank', 'wall', 'blank', 'wall', 'wall', 'ghostDoor', 'wall', 'wall', 'blank', 'wall', 'blank', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'blank', 'wall', 'blank', 'wall', 'ghostroom', 'ghostroom', 'ghostroom', 'wall', 'blank', 'wall', 'blank', 'wall', 'wall', 'wall', 'wall', 'wall', 'teleport', 'teleport', 'teleport', 'teleport', 'teleport', 'blank', 'blank', 'blank', 'wall', 'wall', 'wall', 'wall', 'wall', 'blank', 'blank', 'blank', 'teleport', 'teleport', 'teleport', 'teleport', 'teleport', 'wall', 'wall', 'wall', 'wall', 'wall', 'blank', 'wall', 'blank', 'blank', 'blank', 'blank', 'blank', 'blank', 'blank', 'wall', 'blank', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'blank', 'wall', 'blank', 'wall', 'wall', 'wall', 'wall', 'wall', 'blank', 'wall', 'blank', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'blank', 'blank', 'blank', 'blank', 'blank', 'blank', 'blank', 'blank', 'blank', 'wall', 'blank', 'blank', 'blank', 'blank', 'blank', 'blank', 'blank', 'blank', 'blank', 'wall', 'wall', 'blank', 'wall', 'wall', 'wall', 'blank', 'wall', 'wall', 'wall', 'blank', 'wall', 'blank', 'wall', 'wall', 'wall', 'blank', 'wall', 'wall', 'wall', 'blank', 'wall', 'wall', 'blank', 'blank', 'blank', 'wall', 'pill', 'blank', 'blank', 'blank', 'blank', 'blank', 'blank', 'blank', 'blank', 'blank', 'pill', 'wall', 'blank', 'blank', 'blank', 'wall', 'wall', 'wall', 'wall', 'blank', 'wall', 'blank', 'wall', 'blank', 'wall', 'wall', 'wall', 'wall', 'wall', 'blank', 'wall', 'blank', 'wall', 'blank', 'wall', 'wall', 'wall', 'wall', 'blank', 'blank', 'blank', 'blank', 'blank', 'wall', 'blank', 'blank', 'blank', 'wall', 'blank', 'blank', 'blank', 'wall', 'blank', 'blank', 'blank', 'blank', 'blank', 'wall', 'wall', 'blank', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'blank', 'wall', 'blank', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'blank', 'wall', 'wall', 'blank', 'blank', 'blank', 'blank', 'blank', 'blank', 'blank', 'blank', 'blank', 'blank', 'blank', 'blank', 'blank', 'blank', 'blank', 'blank', 'blank', 'blank', 'blank', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall'],
  mapClassArray: ['wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'blank', 'blank', 'blank', 'blank', 'blank', 'blank', 'blank', 'blank', 'blank', 'wall', 'blank', 'blank', 'blank', 'blank', 'blank', 'blank', 'blank', 'blank', 'blank', 'wall', 'wall', 'blank', 'wall', 'wall', 'wall', 'blank', 'wall', 'wall', 'wall', 'blank', 'wall', 'blank', 'wall', 'wall', 'wall', 'blank', 'wall', 'wall', 'wall', 'blank', 'wall', 'wall', 'blank', 'wall', 'wall', 'wall', 'blank', 'blank', 'blank', 'blank', 'blank', 'blank', 'blank', 'blank', 'blank', 'blank', 'blank', 'wall', 'wall', 'wall', 'blank', 'wall', 'wall', 'blank', 'blank', 'blank', 'blank', 'pill', 'wall', 'blank', 'wall', 'wall', 'wall', 'wall', 'wall', 'blank', 'wall', 'pill', 'blank', 'blank', 'blank', 'blank', 'wall', 'wall', 'blank', 'wall', 'wall', 'wall', 'blank', 'wall', 'blank', 'blank', 'blank', 'wall', 'blank', 'blank', 'blank', 'wall', 'blank', 'wall', 'wall', 'wall', 'blank', 'wall', 'wall', 'blank', 'wall', 'wall', 'wall', 'blank', 'wall', 'wall', 'wall', 'blank', 'wall', 'blank', 'wall', 'wall', 'wall', 'blank', 'wall', 'wall', 'wall', 'blank', 'wall', 'wall', 'blank', 'blank', 'blank', 'blank', 'blank', 'wall', 'blank', 'blank', 'blank', 'blank', 'blank', 'blank', 'blank', 'wall', 'blank', 'blank', 'blank', 'blank', 'blank', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'blank', 'wall', 'blank', 'wall', 'wall', 'ghostDoor', 'wall', 'wall', 'blank', 'wall', 'blank', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'blank', 'wall', 'blank', 'wall', 'ghostroom', 'ghostroom', 'ghostroom', 'wall', 'blank', 'wall', 'blank', 'wall', 'wall', 'wall', 'wall', 'wall', 'teleport', 'teleport', 'teleport', 'teleport', 'teleport', 'blank', 'blank', 'blank', 'wall', 'wall', 'wall', 'wall', 'wall', 'blank', 'blank', 'blank', 'teleport', 'teleport', 'teleport', 'teleport', 'teleport', 'wall', 'wall', 'wall', 'wall', 'wall', 'blank', 'wall', 'blank', 'blank', 'blank', 'blank', 'blank', 'blank', 'blank', 'wall', 'blank', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'blank', 'wall', 'blank', 'wall', 'wall', 'wall', 'wall', 'wall', 'blank', 'wall', 'blank', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'blank', 'blank', 'blank', 'blank', 'blank', 'blank', 'blank', 'blank', 'blank', 'wall', 'blank', 'blank', 'blank', 'blank', 'blank', 'blank', 'blank', 'blank', 'blank', 'wall', 'wall', 'blank', 'wall', 'wall', 'wall', 'blank', 'wall', 'wall', 'wall', 'blank', 'wall', 'blank', 'wall', 'wall', 'wall', 'blank', 'wall', 'wall', 'wall', 'blank', 'wall', 'wall', 'blank', 'blank', 'blank', 'wall', 'pill', 'blank', 'blank', 'blank', 'blank', 'blank', 'blank', 'blank', 'blank', 'blank', 'pill', 'wall', 'blank', 'blank', 'blank', 'wall', 'wall', 'wall', 'wall', 'blank', 'wall', 'blank', 'wall', 'blank', 'wall', 'wall', 'wall', 'wall', 'wall', 'blank', 'wall', 'blank', 'wall', 'blank', 'wall', 'wall', 'wall', 'wall', 'blank', 'blank', 'blank', 'blank', 'blank', 'wall', 'blank', 'blank', 'blank', 'wall', 'blank', 'blank', 'blank', 'wall', 'blank', 'blank', 'blank', 'blank', 'blank', 'wall', 'wall', 'blank', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'blank', 'wall', 'blank', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'blank', 'wall', 'wall', 'blank', 'blank', 'blank', 'blank', 'blank', 'blank', 'blank', 'blank', 'blank', 'blank', 'blank', 'blank', 'blank', 'blank', 'blank', 'blank', 'blank', 'blank', 'blank', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall'],
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
  if (div.classList.contains('blank') && index !== 241) { // TODO make the index dynamic depending on the players start position
    div.classList.add('food')
    foodCount++
  }
  if (div.classList.contains('pill')) {
    div.classList.add('blank')
  }
  div.setAttribute('id', index)
  cellsArray.push(div)
}
// * CReate Lives and Fruit Display
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
const characters = [{
  name: 'player',
  type: 'player',
  behaviour: 'manual',
  lives: 3,
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
  ghostRoomEntry: 1,
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
  ghostRoomEntry: 1,
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
  ghostRoomEntry: 1,
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
  ghostRoomEntry: 1,
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
  // if (cellsArray[characters[index].nextCell].classList.contains('wall') || cellsArray[characters[index].nextCell].classList.contains('ghostDoor') && cellsArray[characters[index].ghostRoomEntry] === 0) {
  //   characters[index].nextCell = characters[index].currentCell
  //   //characters[index].nextDirection = characters[index].currentDirection

  // } else {
  // remove character from currentCell
  cellsArray[characters[index].currentCell].classList.remove(characters[index].name)
  cellsArray[characters[index].currentCell].classList.remove(characters[index].type)
  // add character to nextCell
  cellsArray[characters[index].nextCell].classList.add(characters[index].name)
  cellsArray[characters[index].nextCell].classList.add(characters[index].type)
  // update currentCell
  characters[index].currentCell = characters[index].nextCell
  characters[index].currentDirection = characters[index].nextDirection
  evaluateScore(characterName)
  // }
}
makeMove('player')
makeMove('blinky')
makeMove('pinky')
makeMove('funky')
makeMove('kinky')


ghostMakeMove()

function evaluateScore(characterName) {
  cellsArray.forEach(element => {
    if (element.classList.contains('ghost') && element.classList.contains('player')) {
      setState('lifeLost')
    }
    if (element.classList.contains('food') && element.classList.contains('player')) {
      cellsArray[characters[0].currentCell].classList.remove('food')
      foodCount--
      thisLevelScore += 10
      totalScore += 10
      currentScore.innerHTML = totalScore
      if (foodCount <= 0)
        setState('You Win')
    }
    if (element.classList.contains('pill') && element.classList.contains('player')) {
      element.classList.remove('pill')
      setMode('energised')
    }
    if (!element.classList.contains('ghost') && element.classList.contains('player') && element.classList.contains('casper')) {
      element.classList.remove('casper')
      characters.forEach(character => {
        if (element.classList.contains(character.name) && character.type === 'casper') {
          character.type = 'ghost'
          character.nextCell = character.startCell
          makeMove(character.name)

          thisLevelScore += 500
          totalScore += 500
        }
      })
      // characters[index].nextCell = characters[index].startCell
      // makeMove(characters[index].name)
      // characters[index].type = 'ghost'


      // console.log(characters[index].name, 'this index')
    }
  })
  // getIndex(characterName)

  // if (cellsArray[characters[0].currentCell].classList.contains('pill')) {
  //   cellsArray[characters[0].currentCell].classList.remove('pill')
  //   console.log('You hit a pill man')
  //   setMode('energised')
  // }

  // if (cellsArray[characters[index].currentCell].classList.contains('player') && cellsArray[characters[index].currentCell].classList.contains('casper') && characters[index].type === 'casper') {
  //   cellsArray[characters[index].currentCell].classList.remove('casper')
  //   characters[index].nextCell = characters[index].startCell
  //   makeMove(characters[index].name)
  //   characters[index].type = 'ghost'
  //   thisLevelScore += 500
  //   totalScore += 500

  //   console.log(characters[index].name, 'this index')
  // }
  // console.log(thisLevelScore, totalScore)
  statusBar.innerHTML = (`<H3>${state}</H3>`)
}
// setMode('energised') // !
// //console.log(Date.now(), `You have ${livesLeft} lives left. your game is over!`)

// //console.log('PHEEW', livesLeft, cellsArray[characters[0].currentCell])
// ! as it is, the playerMakeMove function is unpredictable as it sends multiple key presses, even with the event
// ! being stored in a let variable
// TODO make pplayer continue moving even after keyup if not a wall
const controller = {
  ArrowUp: { pressed: 'false', direction: 'up', func: checkMove }, //up
  ArrowDown: { pressed: 'false', direction: 'down', func: checkMove }, //ArrowDown
  ArrowLeft: { pressed: 'false', direction: 'left', func: checkMove },
  ArrowRight: { pressed: 'false', direction: 'right', func: checkMove },

}
let lastPressed = ''
document.addEventListener('keydown', (e) => {
  e.preventDefault()
  if (controller[e.key]) {
    controller[e.key].pressed = 'true'
    lastPressed = controller[e.key].direction
    //lastPressed = controller[e.key].direction
  }
  // console.log(e.key)
  //console.log(JSON.stringify(controller))
})
document.addEventListener('keyup', (e) => {
  e.preventDefault()
  if (controller[e.key]) {
    controller[e.key].pressed = 'false'
  }
  //console.log(e.key, JSON.stringify(controller))
})
const executeMoves = () => {
  let keyNum = 0
  Object.keys(controller).forEach(key => {
    if (controller[key].pressed === 'true') {
      controller[key] && controller[key].func('player', controller[key].direction)//controller[key].direction
      keyNum++

    }
  })
  if (keyNum <= 0) {
    console.log(lastPressed)
    checkMove('player', lastPressed)


  }
}
// function checkKeys() {
//   if (Object.keys(controller.ArrowDown[0]).indexOf('pressed') > -1) {
//     console.log('the value ecxists')
//   }
// }
let intNum = 0
setInterval(() => {

  // // checkKeys()  // console.log(JSON.stringify(controller))
  // if (Object.keys(controller.ArrowDown.pressed).indexOf('false') > -1) {
  //   console.log('the value ecxists')
  // }
  if (state === 'running' || state === 'energised' || state === 'paused') {
    //console.log('START INT', intNum)
    executeMoves()
    if (isWall('player') === false) {
      //  console.log('executeMoves is making move to', characters[0].nextCell)
      makeMove('player')
    } else {
      characters[0].nextCell = characters[0].currentCell
      // console.log('checking current direction which is:', characters[0].currentDirection)
      checkMove('player', characters[0].currentDirection)
      if (isWall('player') === false) {
        //  console.log('Current Direction is making move to', characters[0].nextCell)
        makeMove('player')
      } else {
        //  console.log('Changing the next to current as I can not move', characters[0].nextCell, characters[0].nextCell)
        characters[0].nextCell = characters[0].currentCell
      }

      //if(state === 'running'){ console.log(JSON.stringify(characters))}


      //  console.log('FINISHED', intNum)
      intNum++
      // }
    }
  }
}, 200)

// function playerMakeMove() {

// // * Player Controller
// // ? Listen to key presses and move Player
// document.addEventListener('keydown', (event) => {
//   // ? Listen for key press
//   const key = event.key
//   event.preventDefault()
//   let keyPressed
//   if (key === 'ArrowLeft') {
//     keyPressed = 'left'
//     //  checkMove('player', 'left')
//   } else if (key === 'ArrowRight') {
//     keyPressed = 'right'
//     //  checkMove('player', 'right')
//   } else if (key === 'ArrowUp') {
//     keyPressed = 'up'
//     //  checkMove('player', 'up')
//   } else if (key === 'ArrowDown') {
//     keyPressed = 'down'
//     // checkMove('player', 'down')
//   }

//     setInterval(() => {
//       //if (state === 'running') {
//       checkMove('player', keyPressed)
//       makeMove('player')
//       // }
//       console.log(keyPressed)
//     }, 300)



//   })
// }
//playerMakeMove()
function isWall(characterName) {
  getIndex(characterName)
  if (cellsArray[characters[index].nextCell].classList.contains('wall') === true) {
    // console.log('next cell has a wall')
    return true
  } else {
    // console.log('next cell has no wall')
    return false
  }

}

function checkMove(characterName, direction) {
  getIndex(characterName)
  //console.log(getIndex(characterName), 'this is the charcterindecx')
  //console.log(direction, 'checkMoveDirection')
  const currentCell = characters[index].currentCell
  //console.log(currentCell, "currentyCell")
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
    console.log(characters[index].nextCell, 'right should be nextCell')
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
// if (state === 'running') {
setInterval(() => {
  ghostMakeMove()
  //  console.log('GHOST MOVE')
}, 500)
// }

function ghostMakeMove() {
  for (let index = 1; index < characters.length; index++) {
    const characterName = characters[index].name
    const currentCell = characters[index].currentCell
    const straightMoves = characters[index].straightMoves
    const possibleMoves = []
    const directions = []
    const history = []
    // console.log(characterName)
    // console.log(currentCell)
    // console.log(straightMoves)
    // console.log(possibleMoves)
    // console.log(directions)
    // console.log(history)
    let left
    let right
    let down
    let up
    if (currentCell === 157) {
      characters[index].ghostRoomEntry = 0
      // console.log(characters[index].ghostRoomEntry, `${characters[index].name} HAS LOST ENTRY`)
    }
    for (let i = (characters[index].history.length - straightMoves); i < (characters[index].history.length - 1); i++) {
      history.push(characters[index].history[i])
      //console.log(history + 'HISTORY')
    }

    //  console.log(currentCell, 'current')
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

    if (state === 'running') {

      makeMove(characterName)

    }

  }
}

function findpath(ghost, player, array) {
  const start = characters[ghost].currentCell
  const finish = characters[player].currentCell
  const grid = levels.mapClassArray

  console.log('Ghost is at ' + start, 'Player is at ' + finish, 'We are searching: ' + grid)
  const queue = []
  queue.push(start)
  const currentItem = queue[0]
  console.log('Currently Searching: ' + currentItem)


}
console.log(findpath(1, 0, 0))