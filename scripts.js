// Write your JavaScript code here.
// Remember to pay attention to page loading!
window.onload = (event) => {
    const status = document.getElementById('flightStatus');
    const bg = document.getElementById('shuttleBackground');
    const height = document.getElementById('spaceShuttleHeight');
    const takeoffButton = document.getElementById('takeoff');
    const landButton = document.getElementById('landing');

    takeoffButton.onclick = (e)=>takeOffClick(e,status,height, bg);
    landButton.onclick = landClick;
}

function takeOffClick(e,status, height,bg) {
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

function landClick(event) {

}