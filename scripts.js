// Write your JavaScript code here.
// Remember to pay attention to page loading!
window.onload = (event) => {
    const takeoffButton = document.getElementById('takeoff');

    const status = document.getElementById('flightStatus');
    const bg = document.getElementById('shuttleBackground');
    const height = document.getElementById('spaceShuttleHeight');

    const landButton = document.getElementById('landing');
    const abortButton = document.getElementById('missionAbort');
    
    takeoffButton.onclick = takeOffClick;
    landButton.onclick = function(e){
        landClick(e, bg, height, status);
    };

    abortButton.onclick = function(e){
        abortClick(e, bg, height);
    };


    function takeOffClick(e) {
        const userInput = window.confirm(
            "Confirm that the shuttle is ready for takeoff."
        );
        if (userInput) {
            let newHeight = parseInt(height.textContent) + 10000;
            status.textContent = "Shuttle in flight.";
            height.textContent = String(newHeight);
            bg.style.backgroundColor = "blue";
        }
    }

    function abortClick(e) {
        const userInput = window.confirm(
            "Confirm that you want to abort the mission."
        );
        if (userInput) {
            status.textContent = "Mission aborted.";
            height.textContent = "0";
            bg.style.backgroundColor = "green";
        }
    }

}

function landClick(event, bg, height, status) {
    window.alert("The shuttle is landing. Landing gear engaged.");
    status.textContent = "The shuttle is landing. Landing gear engaged.";
    bg.style.backgroundColor = "green";
    height.textContent = "0";
}