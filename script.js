const container = document.querySelector('#container');



/* Create a grid with column and row and create a property for getting them in a grid in the css files */

function grid(rows, cols){
    container.style.setProperty('--grid-rows', rows);
    container.style.setProperty('--grid-cols', cols);
    for(let i=0; i<(rows * cols); i++){
        let cell = document.createElement('div');
        container.appendChild(cell).className = 'cell';
        cell.addEventListener('mouseover', () =>{
            cell.style.background = 'black';
        });
    }   
}

grid(16,16);