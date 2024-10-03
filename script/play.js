function startGame(){
    // const playStart=document.getElementById('play-start');
    // playStart.classList.add('hidden');
    // const playground =document.getElementById('playground')
    // playground.classList.remove('hidden')

    hideDisplay('play-start');
    showDisplay('playground');
    continueGame()

}

function continueGame(){
   const alphabet= createRandomAlphabet()
   document.getElementById('display-alphabet').innerText=alphabet;
   setBackroundimageBYId(alphabet)


}

