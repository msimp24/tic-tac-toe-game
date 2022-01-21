var selections = [];
const grid = document.querySelector(".grid");
var currSelection = 0;
var count = 0;

const xImg = "/images/x.png";
const oImg = "/images/o.png";

const img = document.createElement('img');
const newGameBtn = document.querySelector(".newGame");
const winnerHeader = document.querySelector("#winner");
img.src = xImg;



newGame();

newGameBtn.addEventListener('click', newGame);

function createGrid(){
    for(let i=0; i<9; i++){
        grid.style.pointerEvents = "auto";
        var box = document.createElement('div');
        box.setAttribute("class", "box");
        box.setAttribute("id", i);
        box.addEventListener('click', makeSelection);

        if(box.id % 3 == 0){
            box.style.borderRight = "solid black 1.5px";
            if(box.id < 4){
                box.style.borderBottom="solid black 1.5px";
            }
        }
        if(box.id % 3 == 1){
            box.style.borderRight = "solid black 1.5px";
            if(box.id < 5){
                box.style.borderBottom = "solid black 1.5px";
            }
        }
        if(box.id % 3 == 2){
            if(box.id < 8){
                box.style.borderBottom ="solid black 1.5px";
            }
        }
        
        grid.append(box);
    }
}

function makeSelection(){
    const val = this.id;
    count++;
    if(val == selections[val]){
        return;
    }
    else{
        var choiceImg = document.createElement('img');
        selections[val] = currSelection;
        if(currSelection == 0){
            choiceImg.src = xImg;
        }
        else{
            choiceImg.src = oImg;
        }
        this.append(choiceImg);
        this.removeEventListener('click', makeSelection);

        switchXOs();
        if(checkWinner()){
            if(currSelection == 1){
                winnerHeader.textContent = "X is the WINNER!!";
                grid.style.pointerEvents = "none";
                return;
            }
            else{
                winnerHeader.textContent = "O Player is the WINNER!!";
                grid.style.pointerEvents = "none";
                return;
            }

        }
        if(count == 9){
            winnerHeader.textContent = "Tie game";
        }

    }
    
}   
function switchXOs(){
    if(currSelection == 0){
        currSelection = 1
    }
    else{
        currSelection = 0;
    }
}


function checkWinner(){
    var result = false;

    if(selections[0] == 0 && selections[1] == 0 && selections[2] == 0){
        result = true;
    }
    if(selections[0] == 1 && selections[1] == 1 && selections[2] == 1){
        result = true;
    }
    if(selections[0] == 0 && selections[3] == 0 && selections[6] == 0){
        result = true;
    }
    if(selections[0] == 1 && selections[3] == 1 && selections[6] == 1){
        result = true;
    }
    if(selections[0] == 0 && selections[4] == 0 && selections[8] == 0){
        result = true;
    }
    if(selections[0] == 1 && selections[4] == 1 && selections[8] == 1){
        result = true;
    }
    if(selections[3] == 0 && selections[4] == 0 && selections[5] == 0){
        result = true;
    }
    if(selections[3] == 1 && selections[4] == 1 && selections[5] == 1){
        result = true;
    }
    if(selections[6] == 0 && selections[7] == 0 && selections[8] == 0){
        result = true;
    }
    if(selections[6] == 1 && selections[7] == 1 && selections[8] == 1){
        result = true;
    }
    if(selections[1] == 0 && selections[4] == 0 && selections[7] == 0){
        result = true;
    }    
    if(selections[1] == 1 && selections[4] == 1 && selections[7] == 1){
        result = true;
    }   
    if(selections[2] == 0 && selections[5] == 0 && selections[8] == 0){
        result = true;
    }   
    if(selections[2] == 1 && selections[5] == 1 && selections[8] == 1){
        result = true;
    }
    if(selections[2] == 1 && selections[4] == 1 && selections[6] == 1){
        result = true;
    }
    if(selections[2] == 0 && selections[4] == 0 && selections[6] == 0){
        result = true;
    }
    return result;
}

function newGame(){
    selections = [];
    currSelection = 0;
    count = 0;
    winnerHeader.textContent = "";
    console.log(selections)
    while (grid.firstChild) {
        grid.removeChild(grid.firstChild);
    }
    createGrid();
}