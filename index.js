let playercard = document.getElementById("playerimg")
let cpucard = document.getElementById("cpuimg")
let winloss = document.getElementById("winloss")
let choiceBtns = document.getElementById("choice")
let score = document.getElementById("score")
let p_name = document.getElementById("playerid")
let cpu_name = document.getElementById("cpuid")

let win = 0;
let loss = 0;


let winObj = {
    1:2,
    2:3,
    3:1
}

let objName = {
    1:"SNAKE",
    2:"WATER",
    3:"GUN"
}


function start() {
    choiceBtns.style.visibility="visible"
    playercard.style.backgroundImage = "url(q.png)"
    cpucard.style.backgroundImage = "url(q.png)"
    playercard.style.filter = "invert(100%)"
    cpucard.style.filter = "invert(100%)"
    score.innerHTML = `<h1>Win:${win}    Loss:${loss}` 
    p_name.innerHTML = "YOU"   
    cpu_name.innerHTML = "CPU"   
    
}


function num(nums) {
    playercard.style.filter = "invert(0%)"
    cpucard.style.filter = "invert(0%)"
    let cpuChoice = (Math.floor(Math.random()*3)+1)
    if (nums == cpuChoice) {
        winloss.innerHTML = "Draw"
    }
    
    else if (winObj[nums]== cpuChoice) {
        winloss.innerHTML = "Win"
        win++;
    }
    else{
        winloss.innerHTML = "loss"
        loss++;
        
    }
    score.innerHTML = `<h1>Win:${win} Loss:${loss}`    
    
    playercard.style.backgroundImage = "url("+nums+".png)"  
    cpucard.style.backgroundImage = "url("+ cpuChoice+".png)"
    p_name.innerHTML = objName[nums]   
    cpu_name.innerHTML = objName[cpuChoice]
    choiceBtns.style.visibility="hidden"
    setTimeout(() => {
        playercard.style.filter = "invert(100%)"
        cpucard.style.filter = "invert(100%)"
        choiceBtns.style.visibility="visible"
        playercard.style.backgroundImage = "url(q.png)"
        cpucard.style.backgroundImage = "url(q.png)"
        winloss.innerHTML = ""
        p_name.innerHTML = "YOU"   
        cpu_name.innerHTML = "CPU"   
    }, 1000); 
    
}

start()