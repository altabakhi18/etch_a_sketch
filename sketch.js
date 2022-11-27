const grid = document.querySelector('#container');
let msg = 0;

for(let i = 0; i < 16 * 16; i++){

    const divs = document.createElement('div');
    divs.classList.add('one');
    divs.style.cssText = "width: 40px; height: 40px; border: 1px solid black;"
    divs.addEventListener('mouseover', function(event){
        event.target.style.backgroundColor = 'black';
    });

    grid.appendChild(divs);

    }

    

    function changeGrid(){
         msg = prompt("Enter a number 1 - 100");

        if(msg > 100){
            alert("Error! Number must be lower than 100");
        }
        else {
            removeGrid(grid);

        for(let i = 0; i < msg * msg; i++){
            const divs = document.createElement('div');
            divs.classList.add('one');
            divs.style.cssText = "width: 40px; height: 40px; border: 1px solid black;"
            divs.addEventListener('mouseover', function(event){
            event.target.style.backgroundColor = 'black';
        });

            grid.appendChild(divs);

        }
    }
    }

    function removeGrid(node){
        while(node.firstChild){
            node.removeChild(node.firstChild);
        }
    }




