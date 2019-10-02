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



////////////////////////forme for player name display/////////

formDisplay = function(event) {
    console.log('hello');
const form = `

<form id="form">  <button class='PlayerNameButton' type="submit">Name</button>
<input  class="playerNameInput"type="text" placeholder="name of the player">
<input class='rolePlayer1' type="image" src="./images/dice.png"><br></input><button class='PlayerNameButton' type="submit">Name</button>
<input  class="playerNameInput"type="text" placeholder="name of the player2">
<input class='rolePlayer2' type="image" src="./images/dice.png"></input><input id='reset' type="image" src="./images/reset.jpg"></input>

</form>
`
$(`.menueAside`).append(`${form}`);
$(`#start`).hide();

}
$(`#start`).on('click', formDisplay);

