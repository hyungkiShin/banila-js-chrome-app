const randomForm = document.querySelector('#random-game')
const scopeNumber = document.querySelector('#scope-number')
const guessNumber = document.querySelector('#guess-number')

const showJudge = document.querySelector('#random-game div:nth-child(3)')

const user = document.querySelector('#random-game div:nth-child(3) .userChoice')
const machine = document.querySelector('#random-game div:nth-child(3) .machine')
const resultGameText = document.querySelector('#random-game div:nth-child(3) .judge')

function removeHiddenContainer() {
  showJudge.classList.remove('hidden')
}

function judgeGame() {
  const limitNumber =  scopeNumber.value

  const randomNumber = Math.ceil(Math.random() * limitNumber)
  const userNumber = guessNumber.value

  if (parseInt(userNumber) > parseInt(limitNumber)) return alert(`Please re-enter 0 or ${limitNumber}!`)

  user.innerText = `You chose ${userNumber},`
  machine.innerText = `The machine chose ${randomNumber}`

  randomNumber === parseInt(userNumber) ? resultGameText.innerText = 'You Won !' : resultGameText.innerText = 'You lose'
}

function onPlaySubmit(event) {
  event.preventDefault();

  // hidden remove
  removeHiddenContainer()

  // game result
  judgeGame()
}

randomForm.addEventListener("submit", onPlaySubmit);