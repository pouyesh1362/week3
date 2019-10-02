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

const mainTableDiv = `<div class = "mainTable" ></div>`;
$('main').append(`${mainTableDiv}`);

function tableMaker(mainTable ){
    for (let i = 0 ; i <10 ; i ++){
$(`.mainTable`).append( `${mainTable}` );
    }
}
tableMaker(mainTable);

function addIdToRow(){
    for(let i = 0; i <10 ; i++){
    $(`.mainTable`).children().eq(i).attr('id' , `row${i}`);
}
}
addIdToRow();
function addClassTodivs(){

    for (let i = 0 ; i < 10 ; i++){

     $(`section div`).addClass(`class=${i}`);
     
    }
}
addClassTodivs();