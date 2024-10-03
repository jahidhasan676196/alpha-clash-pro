function hideDisplay(elementID){
    const addClass =document.getElementById(elementID)
    addClass.classList.add('hidden')
}
function showDisplay(elementID){
    const removeClass =document.getElementById(elementID)
    removeClass.classList.remove('hidden')
}

function createRandomAlphabet(){
    const alphabets='abcdefghijklmnopqrstuvwxyz';
    const alphabetElements=alphabets.split('')
    const randomnumber=Math.random()*25;
    const number =Math.round(randomnumber);
    const alphabet =alphabetElements[number]
    return alphabet;
}


function setBackroundimageBYId(elementID){
   const element = document.getElementById(elementID);
   element.classList.add('bg-orange-400')

}
