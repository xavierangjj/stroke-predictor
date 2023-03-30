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
    window.location.href = 'https://xavierfortee.wixsite.com/strokepredictor'
}

function thingsToDo() {
    window.location.href = "https://xavierfortee.wixsite.com/strokepredictor/what-to-do";
}

function peopleToTalkTo() {
    window.location.href = "https://xavierfortee.wixsite.com/strokepredictor/who-to-talk-to";
}

function goalSetting() {
    window.location.href = "GoalSetting.html";
}

function returnToCalculator() {
    window.location.href = "https://xavierangjj.github.io/stroke-predictor/"
}