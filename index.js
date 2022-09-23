let cells = document.querySelectorAll(".box")
cells = Array.from(cells)
currentPlayer = "X"
let over = false;

let winning= [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6],
]
function check (){
    winning.forEach(function(combination){
        let result = combination.every(idx  => cells[idx].innerText == currentPlayer)
        if(result){
           over = true;
           highlightx(combination)
        let win = document.querySelector(".info").innerText = "Player "+currentPlayer+" Wins!"
        let gi = document.querySelector("#ong")
        gi.classList.add("gif2")
        setTimeout(function(){
            gi.classList.remove("gif2")
        },5000)
        }
        
    })
}

function highlightx(combination){
    combination.forEach(function (idx) { cells[idx].classList.add("highlight")
    
})
}

cells.forEach(
    function(cell){
        cell.addEventListener("click", function(){
            if(cell.innerText != "") return
            cell.innerText = currentPlayer
            check()
            currentPlayer = currentPlayer == "X" ? "O" : "X"
            if(!over){
            document.querySelector(".info").innerText = "Turn for " + currentPlayer}
            
        })
    }
)