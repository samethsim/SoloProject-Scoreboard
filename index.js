let scoreHome = getEl("score-home");
let scoreGuest = getEl("score-guest");

//score
let homeScore=0;
let guestScore=0;

// Event listener
getEl("home-1-btn").addEventListener("click", ()=>{
    addScore(scoreHome,1)
})

getEl("home-2-btn").addEventListener("click", ()=>{
    addScore(scoreHome,2)
})
getEl("home-3-btn").addEventListener("click", ()=>{
    addScore(scoreHome,3)
})

getEl("guest-1-btn").addEventListener("click", ()=>{
    addScore(scoreGuest,1)
})
getEl("guest-2-btn").addEventListener("click", ()=>{
    addScore(scoreGuest,2)
})
getEl("guest-3-btn").addEventListener("click", ()=>{
    addScore(scoreGuest,3)
})

// functions
function getEl(id) {
    return document.getElementById(`${id}`);
}

function addScore(elementId,points) {
    if (elementId.getAttribute("id")==="score-home"){
        homeScore += points;
        elementId.textContent = homeScore;
    }
    else {
        guestScore += points;
        elementId.textContent = guestScore;
    }
}