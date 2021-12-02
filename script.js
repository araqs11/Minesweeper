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
            innerArray[j] = {value:0,tile:undefined,checked:false};
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

        if(field[minePosX][minePosY].value == 9) {
            i--;
        } else {
            field[minePosX][minePosY].value = 9;
        }
    }
}

function generateNumbers() {
    for (let i = 0; i < field.length; i++) {
        for (let j = 0; j < field.length; j++) {
            var counter = 0;
            if(field[i][j].value == 0) {

                if(j==0 && i==0) {
                    if(field[i][j+1].value == 9) {
                        counter++; 
                    }
                    if(field[i+1][j].value == 9) {
                        counter++; 
                    }
                    if(field[i+1][j+1].value == 9) {
                        counter++; 
                    }
                } else if(j==field.length-1 && i==0) {
                    if(field[i][j-1].value == 9) {
                        counter++; 
                    }
                    if(field[i+1][j].value == 9) {
                        counter++; 
                    }
                    if(field[i+1][j-1].value == 9) {
                        counter++; 
                    }
                } else if(j==0 && i==field.length-1) {
                    if(field[i][j+1].value == 9) {
                        counter++; 
                    }
                    if(field[i-1][j].value == 9) {
                        counter++; 
                    }
                    if(field[i-1][j+1].value == 9) {
                        counter++; 
                    }
                } else if(j==field.length-1 && i==field.length-1) {
                    if(field[i][j-1].value == 9) {
                        counter++; 
                    }
                    if(field[i-1][j].value == 9) {
                        counter++; 
                    }
                    if(field[i-1][j-1].value == 9) {
                        counter++; 
                    }
                } else if(j==0) {
                    if(field[i][j+1].value == 9) {
                        counter++; 
                    }
                    if(field[i+1][j].value == 9) {
                        counter++; 
                    }
                    if(field[i-1][j].value == 9) {
                        counter++; 
                    }
                    if(field[i+1][j+1].value == 9) {
                        counter++; 
                    }
                    if(field[i-1][j+1].value == 9) {
                        counter++; 
                    }
                } else if(j==field.length-1) {
                    if(field[i][j-1].value == 9) {
                        counter++; 
                    }
                    if(field[i+1][j].value == 9) {
                        counter++; 
                    }
                    if(field[i-1][j].value == 9) {
                        counter++; 
                    }
                    if(field[i+1][j-1].value == 9) {
                        counter++; 
                    }
                    if(field[i-1][j-1].value == 9) {
                        counter++; 
                    }
                } else if(i==0) {
                    if(field[i][j+1].value == 9) {
                        counter++; 
                    }
                    if(field[i][j-1].value == 9) {
                        counter++; 
                    }
                    if(field[i+1][j].value == 9) {
                        counter++; 
                    }
                    if(field[i+1][j+1].value == 9) {
                        counter++; 
                    }
                    if(field[i+1][j-1].value == 9) {
                        counter++; 
                    }
                } else if(i==field.length-1) {
                    if(field[i][j+1].value == 9) {
                        counter++; 
                    }
                    if(field[i][j-1].value == 9) {
                        counter++; 
                    }
                    if(field[i-1][j].value == 9) {
                        counter++; 
                    }
                    if(field[i-1][j-1].value == 9) {
                        counter++; 
                    }
                    if(field[i-1][j+1].value == 9) {
                        counter++; 
                    }
                }
                else {
                    if(field[i][j+1].value == 9) {
                        counter++; 
                    }
                    if(field[i][j-1].value == 9) {
                        counter++; 
                    }
                    if(field[i+1][j].value == 9) {
                        counter++; 
                    }
                    if(field[i-1][j].value == 9) {
                        counter++; 
                    }
                    if(field[i+1][j+1].value == 9) {
                        counter++; 
                    }
                    if(field[i+1][j-1].value == 9) {
                        counter++; 
                    }
                    if(field[i-1][j+1].value == 9) {
                        counter++; 
                    }
                    if(field[i-1][j-1].value == 9) {
                        counter++; 
                    }
                }
                field[i][j].value = counter;
            }
        }        
    }
}

function generateGrid() {
    for (let i = 0; i < field.length; i++) {
        for (let j = -1; j < field.length; j++) {
            var tile;
            if(j==-1) {
                tile = document.createElement('tr');
            } else {
                tile = document.createElement('td');
                tile.value = field[i][j].value;
                field[i][j].tile = tile;
                tile.onclick = function() {click(i,j)}
                
            }
            gameGrid.appendChild(tile);
        }
    }
}

function click(i,j) {
    if(field[i][j].value == 9) {
        gameOver();
    }
    else if(field[i][j].value) {
        field[i][j].tile.textContent = field[i][j].value;
        field[i][j].tile.style.backgroundColor = "gray";
    } else {
        emptyFieldCheck(i,j);
    }
    
}

function gameOver() {
    for (let i = 0; i < field.length; i++) {
        for (let j = 0; j < field.length; j++) {
            if(field[i][j].value == 9) {
                field[i][j].tile.style.backgroundColor = "red";
            } else {
                field[i][j].tile.style.backgroundColor = "orange";
            }   
            field[i][j].tile.textContent = field[i][j].value;
            field[i][j].tile.onclick = undefined;
        }
    }
}

function emptyFieldCheck(i,j) {
    for(let x=-1;x<=1;x++) {
        for(let y=-1;y<=1;y++) {
            if(i+x>=0 && i+x<field.length && j+y>=0 && j+y<field.length) {
                if(field[i+x][j+y].value == 0 && !field[i+x][j+y].checked) {
                    field[i+x][j+y].tile.style.backgroundColor = "white";
                    field[i+x][j+y].checked = true;
                    emptyFieldCheck(i+x,j+y);
                } else if(field[i+x][j+y].value != 9 && !field[i+x][j+y].checked) {
                    field[i+x][j+y].tile.textContent = field[i+x][j+y].value;
                    field[i+x][j+y].checked = true;
                    field[i+x][j+y].tile.style.backgroundColor = "gray";
                }
            }
        }
    }
}