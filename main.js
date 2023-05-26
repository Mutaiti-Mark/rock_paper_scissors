let btn = document.querySelectorAll(".btn")

btn.forEach(btn=>{
    btn.addEventListener("click", function (e) { 
    let x = e.target.innerHTML
    let y = getComputerChoice()

    let playerSelect= document.querySelector("#pSelect")
    playerSelect.textContent=x

    let compSelect = document.querySelector("#cSelect")
    compSelect.textContent=y.toUpperCase()
    
    result = playRound(x,y)
    let finalSelect = document.querySelector(".result")
    finalSelect.textContent="YOU " + result
    })
})

function getComputerChoice(){
    let choiceList=["rock","paper","scissors"]
    let randomIndex=Math.floor(Math.random()*3)
    let choice=choiceList[randomIndex]
    return choice
}

function playRound(playerSelection, computerSelection){
    playerSelection = playerSelection.toLowerCase()

    if (playerSelection == "rock" && computerSelection == "scissors"){
        return "WIN"
    }
    else if (playerSelection == "paper" && computerSelection == "rock"){
        return "WIN"
    }
    else if (playerSelection == "scissors" && computerSelection == "paper"){
        return "WIN"
    }
    else if (playerSelection == "scissors" && computerSelection == "rock"){
        return "LOSE"
    }
    else if (playerSelection == "rock" && computerSelection == "paper"){
        return "LOSE"
    }
    else if (playerSelection == "paper" && computerSelection == "scissors"){
        return "LOSE"
    }
    else if (playerSelection == computerSelection){
        return "TIE!!"
    }
    else {
        return "You chose"+" "+playerSelection+ "| Comp chose" +" "+computerSelection
    }
}

