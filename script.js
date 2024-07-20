let boxes= document.querySelectorAll(".box");
let reset= document.querySelector("#reset");
let msgContainer= document.querySelector(".msg-container");
let msg= document.querySelector("#msg");
let record = 0;

let turnO=true; // Turn of Player 1 ='O'

const winPatterns= [    
    [0 ,1, 2],  
    [3, 4, 5],
    [6, 7, 8],
    [0, 4 ,8],
    [2, 4 ,6],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8]
];

const resetGame= () =>{
    turnO = true;
    newGame();
    msgContainer.classList.add("hide");
}

boxes.forEach((box)=>{
    box.addEventListener("click", () =>{    //To click the box ---get input
        if (turnO ==true) {
            box.innerText ="O";
            turnO = false;  //switching turns
        }
        else {
            box.innerText ="X";
            turnO = true;   //switching turns
        }
        box.disabled = true;

        winCheck();
    });
});

const endGame =() =>{       //To stop the game
    for(let box of boxes){
        box.disabled = true;
    }
}

const newGame =() =>{        //To restart the game
    for(let box of boxes){
        box.disabled = false;
        box.innerText ="";
    }
}


const showWinner = (winner) => {        // To Check winner
    msg.innerText =  `Congratulation, Winner is ${winner}`;
    msgContainer.classList.remove("hide");
    endGame();
}   

const winCheck = () => {
    for( pattern of winPatterns){
        let pos1Val= boxes [pattern [0] ].innerText;
        let pos2Val= boxes [pattern [1] ].innerText;
        let pos3Val= boxes [pattern [2] ].innerText;

        if (pos1Val !="" && pos2Val != "" && pos3Val !=""){
            if(pos1Val == pos2Val && pos2Val == pos3Val){
                showWinner(pos1Val);
            }
        }
    } 
}



reset.addEventListener("click", resetGame);     //To trigger the reset button

