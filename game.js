let cross=document.querySelectorAll("#cross");
let reset=document.querySelector("#reset");
let newgame=document.querySelector("#new");
let result=document.querySelector("#result");
let msg=document.querySelector(".message");

let first=true;
let count=0;
let pairing=[[0,1,2],[0,3,6],[0,4,8],[3,4,5],[6,7,8],[1,4,7],[2,5,8],[2,4,6]];
cross.forEach((box)=>{
    box.addEventListener("click",()=>{
    if(first){
        box.innerText="O";
        first=false;
    }
    else{
        box.innerText="X";
        first=true;
    }
    box.disabled=true;
    count++;
    let win=findwinner();
    if(count===9 && !win){
       gamedraw();
    }
    })
});
const gamedraw=()=>{
    result.innerText="it's a tie!try again";
    msg.classList.remove("hide");
    disable();
}
const findwinner=()=>{
    for(let val of pairing){
        let place1value=cross[val[0]].innerText;
        let place2value=cross[val[1]].innerText;
        let place3value=cross[val[2]].innerText;
        if(place1value!=""&&place2value!=""&&place3value!=""){
            if(place1value==place2value&&place2value==place3value){
             showmessage(place1value);
        }
    }
}
};

const showmessage=(wins)=>{
    result.innerText=`${wins} won the match!`;
    msg.classList.remove("hide");
    disable();
};

const disable=()=>{
    cross.forEach((box)=>{
        box.disabled=true;
})
};

const resetGame = () => {
    first = true;
    count = 0;
    enable();
    msg.classList.add("hide");
  };

const enable=()=>{
    cross.forEach((box)=>{
        box.disabled=false;
        box.innerText="";
})
};

reset.addEventListener("click", resetGame);
newgame.addEventListener("click", resetGame);