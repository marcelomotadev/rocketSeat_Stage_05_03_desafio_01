import Timer from "./timer.js"
import Sound from './sounds.js'

const playButton = document.querySelector('.play')
const stopButton = document.querySelector('.stop')
const addButton = document.querySelector('.add')
const removeButton = document.querySelector('.remove')

const minutesDisplay = document.querySelector('.minutes')
const secondsDisplay = document.querySelector('.seconds')

const forestCard = document.querySelector('#forest')
const rainCard = document.querySelector('#rain')
const cafeCard = document.querySelector('#cafe')
const indoorCard = document.querySelector('#indoor')



const timer = Timer({
  minutesDisplay,
  secondsDisplay
})

const sound = Sound()



addButton.addEventListener('click', function(){
  addMinutes()
  sound.pressButton()
})
removeButton.addEventListener('click', function(){
  removeMinutes()
  sound.pressButton()
})
playButton.addEventListener('click', function() {
  timer.playTimer()
  sound.pressButton()
})
stopButton.addEventListener('click', function(){
  timer.hold()
  sound.pressButton()
})
forestCard.addEventListener('click', function() {
  forestCard.classList.toggle('playing')
  sound.forestAudio.paused == true ? sound.forestAudio.play() : sound.forestAudio.pause()
  sound.pressButton()
})
rainCard.addEventListener('click', function() {
  rainCard.classList.toggle('playing')
  sound.rainAudio.paused == true ? sound.rainAudio.play() : sound.rainAudio.pause()
  sound.pressButton()
})
cafeCard.addEventListener('click', function() {
  cafeCard.classList.toggle('playing')
  sound.cafeAudio.paused == true ? sound.cafeAudio.play() : sound.cafeAudio.pause()
  sound.pressButton()
})
indoorCard.addEventListener('click', function() {
  indoorCard.classList.toggle('playing')
  sound.indoorAudio.paused == true ? sound.indoorAudio.play() : sound.indoorAudio.pause()
  sound.pressButton()
})


function addMinutes() {
  let minutesHold = Number(minutesDisplay.textContent)
  minutesHold % 5 == 0 ? minutesHold += 5 : minutesHold = 25
  secondsDisplay.textContent = String(0).padStart(2,'0')
  return minutesDisplay.textContent = String(minutesHold).padStart(2, '0')
}

function removeMinutes() {
  let minutesHold = Number(minutesDisplay.textContent)
  minutesHold % 5 == 0 ? minutesHold -= 5 : minutesHold = 25
  if(minutesHold >= 5) {
    secondsDisplay.textContent = String(0).padStart(2,'0')
    return minutesDisplay.textContent = String(minutesHold).padStart(2, '0')
  }
  else {
    secondsDisplay.textContent = String(0).padStart(2,'0')
    return minutesDisplay.textContent = String(25).padStart(2, '0')
  }
}
