const mainBody = document.querySelector('#body');
handleScreenResize()

function handleScreenResize() {
  let screenPercent = window.innerWidth / window.screen.availWidth * 100;

  console.log(screenPercent)
  if (screenPercent >= 80) {
    mainBody.className = 'yellow'
  } else if (screenPercent < 80 && screenPercent > 31) {
    mainBody.className = 'purple'
  } else if (screenPercent < 30) {
    mainBody.className = 'blue'
  }
}

function handler() {
  console.log('작동하나요 ?')
}

window.addEventListener('resize', handleScreenResize)
mainBody.addEventListener('click', handler())