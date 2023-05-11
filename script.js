let turn = "X";
let gameover = false;
//Function to change the turn
const changeTurn = () =>{
    return turn === "X"? "0":"X";

}

//function to check for win
const checkWin =() =>{
    let boxtexts = document.getElementsByClassName('boxtext');
    let win = [
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6],
    ]
    win.forEach(e =>{
        if((boxtexts[e[0]].innerText === boxtexts[e[1]].innerText) && (boxtexts[e[2]].innerText === boxtexts[e[1]].innerText) && (boxtexts[e[0]].innerText !== "")){
            document.querySelector(".info").innerText = boxtexts[e[0]].innerText + " wins" + " CONGRATULATIONS!"
            gameover = true;
        }
    })
}

// Game Logic
let boxes = document.getElementsByClassName("box")
Array.from(boxes).forEach(element =>{
    let boxtext = element.querySelector('.boxtext');
    element.addEventListener('click', ()=>{
        if(boxtext.innerText === ''){
            boxtext.innerText = turn;
             turn = changeTurn();
            checkWin();
            if(!gameover){
                document.getElementsByClassName("info")[0].innerText = turn + "'s turn"
            }
            
        }
    })

    
})

// add on click listener to reset button

reset.addEventListener('click' , ()=>{
    let boxtext = document.querySelectorAll(".boxtext");
    Array.from(boxtext).forEach(element =>{
        element.innerText = ""
    })
    turn = "X"
    gameover = false;
    document.getElementsByClassName("info")[0].innerText = turn + "'s turn"
})

