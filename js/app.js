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
    for (let i = 0 ; i <10 ; i ++){
$(`.mainTable`).append( `${mainTable}` );
    }
}
tableMaker(mainTable);
// add id to each row of the table ######################

function addIdToRow(){
    for(let i = 0; i <10 ; i++){
    $(`.mainTable`).children().eq(i).attr('id' , `row${i}`);
}
}
addIdToRow();

///add classto each <div> element at the row 

function addClassTodivs(){

    for (let i = 0 ; i < 10 ; i++){

     $(`section div`).addClass(`class=${i}`);
     
    }
}
addClassTodivs();






PlayerNameOn = function(event) {



}

$(`#start`).on('subit','click', PlayerNameOn);