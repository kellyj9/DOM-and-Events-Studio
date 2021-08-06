// Write your JavaScript code here.
// Remember to pay attention to page loading!
window.onload = (event) => {
    const takeoffButton = document.getElementById('takeoff');

    const status = document.getElementById('flightStatus');
    const bg = document.getElementById('shuttleBackground');
    const height = document.getElementById('spaceShuttleHeight');

    const landButton = document.getElementById('landing');

    takeoffButton.onclick = takeOffClick;
    landButton.onclick = function(e){
        landClick(e, bg);
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
}



function landClick(event, bg) {
    window.alert("We're landing or w/e");
    bg.style.backgroundColor = "green";
}