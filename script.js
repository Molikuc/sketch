const container = document.querySelector('#container');
let start = 16;
container.style.setProperty('--grid-cols', start);


/* Create a grid with column and row and create a property for getting them in a grid in the css files */

function grid(){
    container.innerHTML = "";
    for(let i=0; i<(start * start); i++){
        let cell = document.createElement('div');
        container.appendChild(cell).className = 'cell';
        cell.addEventListener('mouseover', () =>{
            cell.style.background = 'black';
        });
    }   
}

function newGrid(){
    start = Math.round(parseInt(prompt('Please enter your new grid size (below 100 squares)')));
    if (start < 100){
        container.style.setProperty('--grid-cols', start);
        grid(start, start);
    } else {
        alert('Above 100 squares');
    }
    
}

grid();