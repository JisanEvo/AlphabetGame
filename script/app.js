//  function play(){
//    const homeSection= document.getElementById(`home-screen`);
//    homeSection.classList.add(`hidden`);
//    const playgroundSection=document.getElementById(`play-ground`);
// //    console.log(playgroundSection.classList)
// playgroundSection.classList.remove(`hidden`)
//  }

// capture keyboard keypress
function handleKeyboardButtonPress(event) {
    const playerPressed = event.key
    console.log(`Player pressed`, playerPressed)

 if(playerPressed===`Escape`){
    gameOver()
 }



    // get the expexted to press
    const currentAlphabetElement = document.getElementById(`current-alphabet`);
    const currentAlphabet = currentAlphabetElement.innerText;
    const expextedAlphabet = currentAlphabet.toLowerCase()
    console.log(playerPressed, expextedAlphabet)

    // console.log(currentAlphabetElement)


    // check matched or not
    if (playerPressed === expextedAlphabet) {


        const currentScore = getTextElemenValuetById(`current-score`);

        const updatedScore = currentScore + 1;
        setTextElementValueById(`current-score`, updatedScore)

        //     const currentScore=document.getElementById(`current-score`);
        //     const currentScoreText=currentScore.innerText;

        //  const score=parseInt(currentScoreText)

        //     console.log(score)
        //     // set new text
        //     const newScore=score+1;
        //     // 3 show the update element

        // currentScore.innerText=newScore;



        removeBackgroundColorById(expextedAlphabet)
        continueGame()
    }
    else {


        const currentLife = getTextElemenValuetById(`current-life`)

        const updatedLife = currentLife - 1;
        setTextElementValueById(`current-life`, updatedLife)

          if(updatedLife === 0){
            gameOver()
          }








        //     console.log(`you lost your life`)

        //     // step1 get the current life
        // const currentLifeElementById=document.getElementById(`current-life`)
        // const currentlifeText=currentLifeElementById.innerText;
        // const currentLife=parseInt(currentlifeText)
        //     // reduce the current life count
        // const newLife=currentLife-1;
        //     // 3 display the life count
        // currentLifeElementById.innerText=newLife;
    }







}
document.addEventListener(`keyup`, handleKeyboardButtonPress)

function continueGame() {
    const alphabet = getARandomAlphabet();
    console.log(`your random alphabet`, alphabet)
    //  set alphabet display
    const currentAlphabetElement = document.getElementById(`current-alphabet`);
    currentAlphabetElement.innerText = alphabet;

    // set bckground color
    setBackgroundColorById(alphabet)
}





function play() {
    hideElementById(`home-screen`)
    showElementById(`play-ground`);
    hideElementById(`final-score`)
    // reset life
    setTextElementValueById(`current-life`,10)
    setTextElementValueById(`current-score`,0)
    continueGame()
}

function gameOver(){
hideElementById(`play-ground`);
showElementById(`final-score`);
// update score
const lastScore = document.getElementById(`current-score`)
const last=lastScore.innerText;
// const lastScor= getTextElementValueById(`current-score`)
setTextElementValueById(`last-score`,last)
// console.log(last)
// remove highlight color
const currentAlphabet=getElementTextById(`current-alphabet`)
removeBackgroundColorById(currentAlphabet)
}