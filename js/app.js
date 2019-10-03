// console.log('hello');
const MainDiv = `<div class="mainTable"></div>`

const mainTable = `<section>
<div></div>
<div></div>
<div></div>
<div></div>
<div></div>
<div></div>
<div></div>
<div></div>
<div></div>
<div></div>
</section>`;




//made a table 10 *10########################

const mainTableDiv = `<div class = "mainTable" ></div>`;
$('main').append(`${mainTableDiv}`);

function tableMaker(mainTable ){
    for (let i = 1 ; i <=10 ; i ++){
        $(`.mainTable`).append(`<section id = "row-${i}"></section>`);
        //we have added a section on html 

        // add a for loop to create divs individually, adding classes as we go
        for (let j = 1 ; j <=10 ; j ++){
            $(`#row-${i}`).append(`<div class= "square-${j}"></div>`);
            //creating and adding a class  to the element <div></div>

        }
    }
}
tableMaker(mainTable);


////NOTE    ASIDE ADD FORM///////////////////////////////
////////////////////////forme for player name display/////////

const formDisplay = function(event) {
   
const form = `

<form id="form">  <button class='PlayerNameButton1' type="submit">Name</button>
<input  class="playerNameInput1"type="text" placeholder="name of the player"><br><br>
<button class='PlayerNameButton2' type="submit">Name</button>
<input  class="playerNameInput2"type="text" placeholder="name of the player2">


</form>
`
$(`.menueAside`).append(`${form}`);
$(`#start`).hide();
}


///////NOTE Players added   Aside++++++++++
///////////////////////////////addPlayer event  hide the person////
const addPlayerName1 = function(event){
event.preventDefault();
 const valInputName1 = $(`.playerNameInput1`).val();
   
 
const newPlayerForm1 = `
<p id="player1Score">${valInputName1} score :<span class="player1Score"> 0 </span> </p><input class='rolePlayer1' type="image" src="./images/dice.png"><br></input>`
$(`.menueAside`).append(`${newPlayerForm1}`);
$(`.playerNameInput1`).hide();
$(`.PlayerNameButton1`).hide();


 }
///////////////////////////////addPlayer event  hide the person////
 const addPlayerName2 = function(event){
event.preventDefault();{
const valInputName2 = $(`.playerNameInput2`).val();
const newPlayerForm2 =`<p id="player2Score">${valInputName2} score :<span class="player2Score"> 0 </span> </p><input class='rolePlayer2' type="image" src="./images/dice.png"></input><input id='reset' type="image" src="./images/reset.jpg"></input>`
$(`.menueAside`).append(`${newPlayerForm2}`);
$(`.playerNameInput2`).hide();
$(`.PlayerNameButton2`).hide();
    }

 }

//<------------form and reset button  display----------------


// NOTE <-------------diseRoll img random number --------------------




const diceRoll = function(event){
const diceNumber =Math.floor(Math.random() * 6 )+ 1 ;   
$(`.dice`).attr('src' ,'./images/dice-'+diceNumber+'.png');
return diceNumber;
}

const diceRoll1 = function(event){
    const diceNumber =Math.floor(Math.random() * 6 )+ 1 ;
    $(`.dice`).attr('src' ,'./images/green-dice-'+diceNumber+'.png');
    return diceNumber;
    }


///////NOTE Players added   Aside++++++++++
$(`#start`).on('click', formDisplay);
$(`.menueAside`).on('click','.PlayerNameButton1', addPlayerName1 );
$(`.menueAside`).on('click','.PlayerNameButton2', addPlayerName2 );
$(`.menueAside`).on('click', '.rolePlayer1' , diceRoll);
$(`.menueAside`).on('click', '.rolePlayer2' , diceRoll1);
