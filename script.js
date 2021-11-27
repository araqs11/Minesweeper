// Global vars


/*
easy    8  x  8 10 mines 64 tiles
medium  16 x 16 40 mines 256 tiles
hard    22 x 22 99 mines 484 tiles
*/
var field;

function startGame() {
    generateField();
    generateMines();
    generateNumbers();
    generateGrid();

    
}

function create2DArray(size) {
    var outerArray = [];
    for (let i = 0; i < size; i++) {
        var innerArray = [];
        for (let j = 0; j < size; j++) {
            innerArray[j] = 0;
        }
        outerArray[i] = innerArray;
    }
    return outerArray;
}

function generateField() {
    let gameGrid = document.getElementById('gameGrid');
    var input = document.getElementById('difficulty').selectedIndex;
    
    gameGrid.innerHTML = "";

    switch(input) {
        case 0: field = create2DArray(8); break;
        case 1: field = create2DArray(16); break;
        case 2: field = create2DArray(22); break;
        default: console.log("ERROR AT CREATING FIELD");
    }
}


function generateMines() {
    var mines = 0;
    switch (field.length) {
        case 8: mines = 10;break;
        case 16: mines = 40;break;
        case 22: mines = 99;break;
        default: console.log("ERROR AT GENERATING MINES");
    }

    for (let i = 0; i < mines; i++) {
        var minePosX = Math.floor(Math.random()*field.length);
        var minePosY = Math.floor(Math.random()*field.length);

        if(field[minePosX][minePosY] == 9) {
            i--;
        } else {
            field[minePosX][minePosY] = 9;
        }
    }
}

function generateNumbers() {
    for (let i = 0; i < field.length; i++) {
        for (let j = 0; j < field.length; j++) {
            var counter = 0;
            if(field[i][j] == 0) {

                if(j==0 && i==0) {
                    if(field[i][j+1] == 9) {
                        counter++; 
                    }
                    if(field[i+1][j] == 9) {
                        counter++; 
                    }
                    if(field[i+1][j+1] == 9) {
                        counter++; 
                    }
                } else if(j==field.length-1 && i==0) {
                    if(field[i][j-1] == 9) {
                        counter++; 
                    }
                    if(field[i+1][j] == 9) {
                        counter++; 
                    }
                    if(field[i+1][j-1] == 9) {
                        counter++; 
                    }
                } else if(j==0 && i==field.length-1) {
                    if(field[i][j+1] == 9) {
                        counter++; 
                    }
                    if(field[i-1][j] == 9) {
                        counter++; 
                    }
                    if(field[i-1][j+1] == 9) {
                        counter++; 
                    }
                } else if(j==field.length-1 && i==field.length-1) {
                    if(field[i][j-1] == 9) {
                        counter++; 
                    }
                    if(field[i-1][j] == 9) {
                        counter++; 
                    }
                    if(field[i-1][j-1] == 9) {
                        counter++; 
                    }
                } else if(j==0) {
                    if(field[i][j+1] == 9) {
                        counter++; 
                    }
                    if(field[i+1][j] == 9) {
                        counter++; 
                    }
                    if(field[i-1][j] == 9) {
                        counter++; 
                    }
                    if(field[i+1][j+1] == 9) {
                        counter++; 
                    }
                    if(field[i-1][j+1] == 9) {
                        counter++; 
                    }
                } else if(j==field.length-1) {
                    if(field[i][j-1] == 9) {
                        counter++; 
                    }
                    if(field[i+1][j] == 9) {
                        counter++; 
                    }
                    if(field[i-1][j] == 9) {
                        counter++; 
                    }
                    if(field[i+1][j-1] == 9) {
                        counter++; 
                    }
                    if(field[i-1][j-1] == 9) {
                        counter++; 
                    }
                } else if(i==0) {
                    if(field[i][j+1] == 9) {
                        counter++; 
                    }
                    if(field[i][j-1] == 9) {
                        counter++; 
                    }
                    if(field[i+1][j] == 9) {
                        counter++; 
                    }
                    if(field[i+1][j+1] == 9) {
                        counter++; 
                    }
                    if(field[i+1][j-1] == 9) {
                        counter++; 
                    }
                } else if(i==field.length-1) {
                    if(field[i][j+1] == 9) {
                        counter++; 
                    }
                    if(field[i][j-1] == 9) {
                        counter++; 
                    }
                    if(field[i-1][j] == 9) {
                        counter++; 
                    }
                    if(field[i-1][j-1] == 9) {
                        counter++; 
                    }
                    if(field[i-1][j-1] == 9) {
                        counter++; 
                    }
                }
                else {
                    if(field[i][j+1] == 9) {
                        counter++; 
                    }
                    if(field[i][j-1] == 9) {
                        counter++; 
                    }
                    if(field[i+1][j] == 9) {
                        counter++; 
                    }
                    if(field[i-1][j] == 9) {
                        counter++; 
                    }
                    if(field[i+1][j+1] == 9) {
                        counter++; 
                    }
                    if(field[i+1][j-1] == 9) {
                        counter++; 
                    }
                    if(field[i-1][j+1] == 9) {
                        counter++; 
                    }
                    if(field[i-1][j-1] == 9) {
                        counter++; 
                    }
                }
                field[i][j] = counter;
            }
        }        
    }
}

function generateGrid() {
    for (let i = 0; i < field.length; i++) {
        for (let j = -1; j < field.length; j++) {
            var new_element;
            if(j==-1) {
                new_element = document.createElement('tr');
            } else {
                new_element = document.createElement('td');
                if(field[i][j]) {
                } 
                new_element.textContent = field[i][j];
            }
            gameGrid.appendChild(new_element);
        }
    }
}
