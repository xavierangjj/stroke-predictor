const urlParams = new URLSearchParams(window.location.search);
const riskLevel = urlParams.get('risk');

const riskLevelElement = document.getElementById('risk-level');

const resultElement = document.getElementById('result');

switch (riskLevel) {
    case 'low':
        console.log("enter low")
        riskLevelElement.textContent = 'Your risk level is low';
        riskLevelElement.classList.add("low");
        break;
    case 'moderate':
        console.log("entered moderate");
        riskLevelElement.textContent = 'Your risk level is moderate';
        riskLevelElement.classList.add("moderate");
        break;
    case 'high':
        console.log("enter high")
        riskLevelElement.textContent = 'Your risk level is high';
        riskLevelElement.classList.add("high");
        break;
    default:
        riskLevelElement.textContent = 'Invalid risk level';
        break;
}

function thingsToEat() {
    window.location.href = 'ThingsToEat.html'
}

function thingsToDo() {
    window.location.href = "ThingsToDo.html";
}

function peopleToTalkTo() {
    window.location.href = "PeopleToTalkTo.html";
}

function goalSetting() {
    window.location.href = "GoalSetting.html";
}