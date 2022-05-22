"use strict";

const areaXO = document.querySelectorAll(".area");
let currentText = document.getElementById("current-move");
let winner = document.getElementById("who-win");
let restart = document.getElementById("restart");


let currentItem,previousItem;
let whoStart = Math.floor(Math.random()*2);


let moves;
let isEnded=false;

if(whoStart===0){
    currentItem="X";
    currentText.innerText=currentItem;
    console.log("Zaczyna X")
    document.body.style.background = "rgb(237, 201, 201)";
    moves = 1;
}else{
    currentItem="O";
    currentText.innerText=currentItem;
    document.body.style.background = "rgb(204, 204, 255)";
    console.log("Zaczyna O")
    moves=0;
}

const placingXO = (where) =>{
    //---Swap system---
    if(moves%2){
        //O
        where.innerHTML = currentItem;
        currentItem = "X";
        currentText.innerText=currentItem;
    }else{
        //X
        where.innerHTML = currentItem;
        currentItem = "O";
        currentText.innerText=currentItem;
    }
}


const winningPattern = () =>{
    //Horizontal for X
    if(areaXO[0].textContent.includes('X')&&areaXO[1].textContent.includes('X')&&areaXO[2].textContent.includes('X')){
        winner.innerText = "X Win!";
        isEnded=true;
    }
    if(areaXO[3].textContent.includes('X')&&areaXO[4].textContent.includes('X')&&areaXO[5].textContent.includes('X')){
        winner.innerText = "X Win!";
        isEnded=true;
    }
    if(areaXO[6].textContent.includes('X')&&areaXO[7].textContent.includes('X')&&areaXO[8].textContent.includes('X')){
        winner.innerText = "X Win!";
        isEnded=true;
    }
    //Horizontal for O
    if(areaXO[0].textContent.includes('O')&&areaXO[1].textContent.includes('O')&&areaXO[2].textContent.includes('O')){
        winner.innerText = "O Win!";
        isEnded=true;
    }
    if(areaXO[3].textContent.includes('O')&&areaXO[4].textContent.includes('O')&&areaXO[5].textContent.includes('O')){
        winner.innerText = "O Win!";
        isEnded=true;
    }
    if(areaXO[6].textContent.includes('O')&&areaXO[7].textContent.includes('O')&&areaXO[8].textContent.includes('O')){
        winner.innerText = "O Win!";
        isEnded=true;
    }

    //Vertical for X
    if(areaXO[0].textContent.includes('X')&&areaXO[3].textContent.includes('X')&&areaXO[6].textContent.includes('X')){
        winner.innerText = "X Win!";
        isEnded=true;
    }
    if(areaXO[1].textContent.includes('X')&&areaXO[4].textContent.includes('X')&&areaXO[7].textContent.includes('X')){
        winner.innerText = "X Win!";
        isEnded=true;
    }
    if(areaXO[2].textContent.includes('X')&&areaXO[5].textContent.includes('X')&&areaXO[8].textContent.includes('X')){
        winner.innerText = "X Win!";
        isEnded=true;
    }
    //Vertical for O
    if(areaXO[0].textContent.includes('O')&&areaXO[3].textContent.includes('O')&&areaXO[6].textContent.includes('O')){
        winner.innerText = "O Win!";
        isEnded=true;
    }
    if(areaXO[1].textContent.includes('O')&&areaXO[4].textContent.includes('O')&&areaXO[7].textContent.includes('O')){
        winner.innerText = "O Win!";
        isEnded=true;
    }
    if(areaXO[2].textContent.includes('O')&&areaXO[5].textContent.includes('O')&&areaXO[8].textContent.includes('O')){
        winner.innerText = "O Win!";
        isEnded=true;
    }

    //Skew for X
    if(areaXO[0].textContent.includes('X')&&areaXO[4].textContent.includes('X')&&areaXO[8].textContent.includes('X')){
        winner.innerText = "X Win!";
        isEnded=true;
    }
    if(areaXO[2].textContent.includes('X')&&areaXO[4].textContent.includes('X')&&areaXO[6].textContent.includes('X')){
        winner.innerText = "X Win!";
        isEnded=true;
    }
    //Skew for O
    if(areaXO[0].textContent.includes('O')&&areaXO[4].textContent.includes('O')&&areaXO[8].textContent.includes('O')){
        winner.innerText = "O Win!";
        isEnded=true;
    }
    if(areaXO[2].textContent.includes('O')&&areaXO[4].textContent.includes('O')&&areaXO[6].textContent.includes('O')){
        winner.innerText = "O Win!";
        isEnded=true;
    }

    //Draw

    if((areaXO[0].textContent.includes('O')||areaXO[0].textContent.includes('X'))&&(areaXO[1].textContent.includes('O')||areaXO[1].textContent.includes('X'))&&(areaXO[2].textContent.includes('O')||areaXO[2].textContent.includes('X'))&&(areaXO[3].textContent.includes('O')||areaXO[3].textContent.includes('X'))&&(areaXO[4].textContent.includes('O')||areaXO[4].textContent.includes('X'))&&(areaXO[5].textContent.includes('O')||areaXO[5].textContent.includes('X'))&&(areaXO[6].textContent.includes('O')||areaXO[6].textContent.includes('X'))&&(areaXO[7].textContent.includes('O')||areaXO[7].textContent.includes('X'))&&(areaXO[8].textContent.includes('O')||areaXO[8].textContent.includes('X'))){
        winner.innerText = "Draw!";
        isEnded=true;
    }

}



for(let area of areaXO){
    area.addEventListener('click', () =>{
        if(!isEnded){
            if(area.textContent.includes('X')||area.textContent.includes('O'))return;
            ++moves;
            if(currentItem=="X"){
                area.style.color = "red";
                area.style.background = "rgb(237, 201, 201)";
                document.body.style.background = "rgb(204, 204, 255)";
                document.body.style.transition = "background 0.3s ease-in-out";
            }else{
                area.style.color = "blue";
                area.style.background = "rgb(204, 204, 255)";
                document.body.style.background = "rgb(237, 201, 201)";
                document.body.style.transition = "background 0.3s ease-in-out";
            }
            placingXO(area);
            winningPattern()
            console.log("Gramy dalej? "+isEnded);
        }
    else{
        return;
    }
    });
    
    
}

restart.addEventListener('click', () =>{
    window.location.reload(true);
});

