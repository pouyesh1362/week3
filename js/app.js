console.log('hello');
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
    for (let i = 10 ; i >= 1 ; i --){
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

// const MainDiv = `<div class="mainTable"></div>`

// const mainTable = `
// <div></div>
// <div></div>
// <div></div>
// <div></div>
// <div></div>
// <div></div>
// <div></div>
// <div></div>
// <div></div>
// <div></div>
// `;

// const mainTableDiv = `<div class = "mainTable" ></div>`;

// function tableMaker(mainTable ){
//     $('main').append(`${mainTableDiv}`);

//         // add a for loop to create divs individually, adding classes as we go
//         for (let j = 100 ; j >0 ; j--){
//             $(`.mainTable`).append(`<div class= "square-${j}"></div>`);
//             //creating and adding a class  to the element <div></div>

//         }
//     }

// tableMaker(mainTable);



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
///////////////////addPlayer event  hide the person////
////  added condition for name input cant't be empty 
const addPlayerName1 = function(event){
event.preventDefault();
 const valInputName1 = $(`.playerNameInput1`).val();

 const newPlayerForm1 = `
<p id="player1Score">${valInputName1} score :<span class="player1Score"> 0 </span> </p><input class='ready1' type="image" src="./images/ready.png">`

   
 if(valInputName1 === "")
 {
     alert("please enter a valid name!")
 }else {
    $(`.menueAside`).append(`${newPlayerForm1}`);
    $(`.playerNameInput1`).hide();
    $(`.PlayerNameButton1`).hide();
 }
 }
/////////////addPlayer event  hide the person////
 const addPlayerName2 = function(event){
event.preventDefault();{
const valInputName2 = $(`.playerNameInput2`).val();
const newPlayerForm2 =`
<p id="player2Score">${valInputName2} score :<span class="player2Score"> 0 </span> </p><input class='ready2' type="image" src="./images/ready.png">`

if(valInputName2 === ""){
     alert("please enter a valid name!")
 }else {
$(`.menueAside`).append(`${newPlayerForm2}`);
$(`.playerNameInput2`).hide();
$(`.PlayerNameButton2`).hide();

    }
 }
}

//////////////////////////////Ready on click//////////////////

const diceShow1 = function(event){
    
        $(`.ready1`).hide();
    const dices1 = `<div class= 'diceDisplay'><input class='rolePlayer1' type="image" src="./images/dice.png"></input></div>`;

    $(`.menueAside`).append(`${dices1}`);

    

}
const diceShow2 = function(event){
    
$(`.ready2`).hide();
const dices2 = `<div class= 'diceDisplay'><input class='rolePlayer2' type="image" src="./images/dice.png"></input></div><input id='reset' type="image" src="./images/reset.jpg"></input></div<input>`;

$(`.menueAside`).append(`${dices2}`);


    
}




//<------------form and reset button  display----------------


// NOTE <-------------//diseRoll img random number  --------------------//changing round for players 
 


const diceRandom = function(){
    return Math.floor(Math.random() * 6 )+ 1 ;  
    
} 


const diceRoll = function(event){
const diceNumber1 = diceRandom(); 


$(`.dice`).attr('src' ,'./images/dice-'+diceNumber1+'.png');
$(`.rolePlayer1`).css('display' , 'none');
$(`.rolePlayer2`).css('display' , 'initial');
return diceNumber1;
}

const diceRoll1 = function(event){
    const diceNumber2 = diceRandom();
    

    $(`.dice`).attr('src' ,'./images/green-dice-'+diceNumber2+'.png');
    $(`.rolePlayer2`).css('display' , 'none');
    $(`.rolePlayer1`).css('display' , 'initial');
    return diceNumber2;
    }
    

    /////////////////////Game logic ////////////
    ///fist start to rolea dice for start


const player1Start =function (){
    console.log("player1Start")
    const $p1Object =`<span id ="Pla1"><img class="pla1" src="./images/pla1.png" ></span>`;
    $(`#row-1 .square-1`).append(`${$p1Object}`);
    
}

const player2Start = function(){
    const $p2Object  = `<span id ="Pla2"><img class="pla2" src="./images/pla2.png" ></span>`;
    $(`#row-1 .square-1`).append(`${$p2Object}`);

}



const startGameDise1 = function(event){
   

            if(diceRoll() !== 6){
                diceRoll();
           }else{
           diceShow1();
            player1Start();
        }
    }
    


const startGameDice2 = function(event){
   

    if(diceRoll1() !== 6){
        diceRoll1();
    }else{
    diceShow2();
    console.log('11111');
    player2Start();
    console.log('2222');
    }
}


////////////////////////GAME start positioning the player if they have 6 





  










///////NOTE Players added   Aside++++++++++



///creat the table and in JQ
//Creat form and input by cliking the start button;

$(`#start`).on('click', formDisplay);


///creating P and span for saving the input;
///creating ready button and
$(`.menueAside`).on('click','.PlayerNameButton1', addPlayerName1 );
$(`.menueAside`).on('click','.PlayerNameButton2', addPlayerName2 );

//cliking ready and have it to show start game dice 
//starrt gamedice have to run startGame function ;

//
$(`.menueAside`).on('click', '.ready1', startGameDise1);
$(`.menueAside`).on('click', '.ready2', startGameDice2);

// start happend have to re create the dice for continue;


// $(`.menueAside`).on('click', '.rolePlayer1' , diceRoll);
// $(`.menueAside`).on('click', '.rolePlayer2' , diceRoll1);
