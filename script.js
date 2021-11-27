// Global vars


/*
easy    8  x  8 10 mines 64 tiles
medium  16 x 16 40 mines 256 tiles
hard    22 x 22 99 mines 484 tiles
*/
function startGame() {
    generateGrid();
    //generateMines();
    //generateNumbers();
    
}

function generateGrid() {
    let gameGrid = document.getElementById('gameGrid');
    var input = document.getElementById('difficulty').selectedIndex;
    var field;

    gameGrid.innerHTML = "";

    switch(input) {
        case 0: field = createField(8); break;
        case 1: field = createField(16); break;
        case 2: field = createField(22); break;
        default: console.log("ERROR AT CREATING FIELD");
    }

    for (let i = 0; i < field.length; i++) {
        for (let j = -1; j < field.length; j++) {
            var new_element;
            if(j==-1) {
                new_element = document.createElement('tr');
            } else {
                new_element = document.createElement('td');
                //new_element.textContent = field[i][j];
            }
            gameGrid.appendChild(new_element);
        }
    }
}

function createField(size) {
    var field = [];
    for (let i = 0; i < size; i++) {
        var tmp = [];
        for (let j = 0; j < size; j++) {
            tmp[j] = 0;
        }
        field[i] = tmp;
    }
    return field;
}