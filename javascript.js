const computerChoiceDisplay = document.getElementById('pc-choice')
const finalResultDisplay = document.getElementById('final-result')
const textDisplay = document.getElementById('text')
const possibleChoices = document.querySelectorAll('button')
var computerChoiceImg = document.getElementById('img-pc-choice')
var resultImg = document.getElementById('img-final-choice')
var userCounter = document.getElementById('win')
var drawCounter = document.getElementById('draw')
var pcCounter = document.getElementById('lose')
let userChoice
let userChoiceCap
let computerChoice
let userValue = 0
let drawValue = 0
let pcValue = 0


possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener('click', (e) => {
  userChoice = e.target.id
  userChoiceCap = userChoice[0].toUpperCase() + userChoice.substr(1) //Deixando a primeira letra da escolha do usuário maiúscula
  generateComputerChoice()
  result()
  finalCounter()
}))

function generateComputerChoice() {
  const randomChoice = Math.floor(Math.random() * 3) + 1 //ou possibleChoices.length
  
  if (randomChoice===1) {
    computerChoice='Pedra'
    computerChoiceImg.src = 'pedra.png'
  } else if (randomChoice==2) {
    computerChoice='Papel'
    computerChoiceImg.src = 'papel.png'
  } else {
    computerChoice='Tesoura'
    computerChoiceImg.src = 'tesoura.png'
  }
}

 function result() {
   if (userChoiceCap===computerChoice) {
    finalResultDisplay.innerHTML = `Empatou!`
    textDisplay.innerHTML = `A escolha foi a mesma`
    resultImg.src = 'empatou.png'
    drawValue++
   }

   if (userChoiceCap==='Pedra' && computerChoice==='Papel') {
    finalResultDisplay.innerHTML = `Derrota!`
    textDisplay.innerHTML = `Pedra perde para Papel`
    resultImg.src = 'perdeu.png'
    pcValue++
   }

   if (userChoiceCap==='Pedra' && computerChoice==='Tesoura') {
    finalResultDisplay.innerHTML = `Vitória!`
    textDisplay.innerHTML = `Pedra vence Tesoura`
    resultImg.src = 'ganhou.png'
    userValue++
   }

   if (userChoiceCap==='Papel' && computerChoice==='Tesoura') {
    finalResultDisplay.innerHTML = `Derrota!`
    textDisplay.innerHTML = `Papel perde para Tesoura`
    resultImg.src = 'perdeu.png'
    pcValue++
   }

   if (userChoiceCap==='Papel' && computerChoice==='Pedra') {
    finalResultDisplay.innerHTML = `Vitória!`
    textDisplay.innerHTML = `Papel vence Pedra`
    resultImg.src = 'ganhou.png'
    userValue++
   }

   if (userChoiceCap==='Tesoura' && computerChoice==='Pedra') {
    finalResultDisplay.innerHTML = `Derrota!`
    textDisplay.innerHTML = `Tesoura perde para Pedra`
    resultImg.src = 'perdeu.png'
    pcValue++
   }

   if (userChoiceCap==='Tesoura' && computerChoice==='Papel') {
    finalResultDisplay.innerHTML = `Vitória!`
    textDisplay.innerHTML = `Tesoura vence Papel`
    resultImg.src = 'ganhou.png'
    userValue++
   }
 }

 function finalCounter() {
    userCounter.innerHTML = `Vitórias: ${userValue}`
    drawCounter.innerHTML = `Empates: ${drawValue}`
    pcCounter.innerHTML = `Derrotas: ${pcValue}`
 }