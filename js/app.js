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
// add id to each row of the table ######################

// function addIdToRow(){
//     for(let i = 0; i <10 ; i++){
//     $(`.mainTable`).children().eq(i).attr('id' , `row${i}`);
// }
// }
// addIdToRow();

///add classto each <div> element at the row 

// function addClassTodivs(){

//     for (let i = 0 ; i < 10 ; i++){

//      $(`section div`).addClass(`class=${i}`);
     
//     }
// }
// addClassTodivs();






PlayerNameOn = function(event) {



}

$(`#start`).on('subit','click', PlayerNameOn);