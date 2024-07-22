// let btn1 = document.querySelector("#btn1");

// btn1.onclick =()=>{
//     comsole.log("btn was clicked")
//     let a = 25
//     a++;
//     comsole.log(a);
// }

// let div = document.querySelector("div");
// div.onmouseover=()=>{
//     console.log("your are inside div");
//     alert("Stay away");
//     let a = 0
//     a++;
//     console.log(a);
// }

// let modeBtn = document.querySelector("#btn1");
// let body = document.querySelector("body");
// let curMode = "Light";
// modeBtn.addEventListener("click",()=>{
//     if(curMode==="Light"){
//         curMode = "Dark";
//         body.classList.add("Dak");
//         body.classList.remove("Lit");
        
//     }else{
//         curMode = "Light";
//         body.classList.add("Lit");
//         body.classList.remove("Dak");
//     } 

//     console.log(curMode);
// });



           // Tict tack toe game 

let boxes = document.querySelectorAll(".box");
let restBtn = document.querySelector("#Reset-btn");
let newGamebtn = document.querySelector("#new-btn");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");

let turnO = true;

const winPatterns = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]

];


const resetGame = () => { 
    let turnO = true;
    enabledBoxes();
    msgContainer.classList.add("hide");


    
}

boxes.forEach((box)=>{
    box.addEventListener("click", () =>{
        console.log("box was clicked");
        if(turnO){
            box.innerText = "0";
            turnO = false;

        } else{
            box.innerText = "X";
            turnO = true;
        }
        box.disabled = true;

        checkwinner();

    });
});

const disabledBoxes =()=>{
    for(let box of boxes){
        box.disabled = true;
    }

};

const enabledBoxes =()=>{
    for(let box of boxes){
        box.disabled = false;
        box.innerText = "";
    }

};

const showWinner =(winner)=>{
    msg.innerText =`Congratulation, Winner is ${winner}`;
    msgContainer.classList.remove("hide");
    disabledBoxes();
}



const checkwinner= () =>{
    for (let pattern of winPatterns){
        
        let pos1val = boxes[pattern[0]].innerText;
        let pos2val = boxes[pattern[1]].innerText;
        let pos3val = boxes[pattern[2]].innerText;
        if(pos1val != "" && pos2val != "" && pos3val !=""){
            if(pos1val===pos2val && pos2val===pos3val){
                console.log("Winner",pos1val);

                showWinner(pos1val);
            }
        }
    }

}

newGamebtn.addEventListener("click",resetGame);
restBtn.addEventListener("click",resetGame);



