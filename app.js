// Get input values from the form
const ageInput = document.getElementById('age');
const genderSelect = document.getElementById('gender');
const sbpInput = document.getElementById('sbp');
const tcInput = document.getElementById('tc');
const hdlInput = document.getElementById('hdl');
const smokerCheckbox = document.getElementById('smoker');
const medicationCheckbox = document.getElementById('medication');
const resultDiv = document.getElementById('result');
const riskLevelSpan = document.getElementById('risk-level');

function calculateRiskScore() {
    // Get the input values
    const age = ageInput.value;
    const gender = genderSelect.value;
    const sbp = sbpInput.value;
    const tc = tcInput.value;
    const hdl = hdlInput.value;
    const smoker = smokerCheckbox.checked;
    const medication = medicationCheckbox.checked;

    // Calculate the risk score
    let riskScore = 0;

    if (gender === "male")
    {
        // Risk score calculation soley on age
        if (age <= 34) {
            riskScore -= 9;
        }
        else if (age <= 39) {
            riskScore -= 4;
        }
        else if (age <= 44) {
            riskScore += 0;
        }
        else if (age <= 49) {
            riskScore += 3;
        }
        else if (age <= 54) {
            riskScore += 6;
        }
        else if (age <= 59) {
            riskScore += 8;
        }
        else if (age <= 64) {
            riskScore += 10;
        }
        else if (age <= 69) {
            riskScore += 11;
        }
        else if (age <= 74) {
            riskScore += 12;
        }
        else{
            riskScore += 13;
        }

        // Risk score calculation for Smoker and Total Cholestrol

        if (age <= 39) {
            if (smoker) 
                riskScore += 8;

            if (tc < 4.1 || tc < 160) 
                riskScore += 0;
            else if (tc < 5.1 || tc < 199) 
                riskScore += 4;
            else if (tc < 6.1 || tc < 239) 
                riskScore += 8;
            else if (tc < 7.2 || tc < 279) 
                riskScore += 11;
            else 
                riskScore += 13;
        }
        else if (age <= 49) {
            if (smoker) 
                riskScore += 7;

            if (tc < 4.1 || tc < 160) 
                riskScore += 0;
            else if (tc < 5.1 || tc < 199) 
                riskScore += 3;
            else if (tc < 6.1 || tc < 239) 
                riskScore += 6;
            else if (tc < 7.2 || tc < 279) 
                riskScore += 8;
            else 
                riskScore += 10;
        }
        else if (age <= 59) {
            if (smoker) 
                riskScore += 4;

            if (tc < 4.1 || tc < 160) 
                riskScore += 0;
            else if (tc < 5.1 || tc < 199) 
                riskScore += 2;
            else if (tc < 6.1 || tc < 239) 
                riskScore += 4;
            else if (tc < 7.2 || tc < 279) 
                riskScore += 5;
            else 
                riskScore += 7;
        }
        else if (age <= 69) {
            if (smoker) 
                riskScore += 2;

            if (tc < 4.1 || tc < 160) 
                riskScore += 0;
            else if (tc < 5.1 || tc < 199) 
                riskScore += 1;
            else if (tc < 6.1 || tc < 239) 
                riskScore += 2;
            else if (tc < 7.2 || tc < 279) 
                riskScore += 3;
            else 
                riskScore += 4;
        }
        else {
            if (smoker) 
                riskScore += 1;

            if (tc < 4.1 || tc < 160) 
                riskScore += 0;
            else if (tc < 5.1 || tc < 199) 
                riskScore += 1;
            else if (tc < 6.1 || tc < 239) 
                riskScore += 1;
            else if (tc < 7.2 || tc < 279) 
                riskScore += 2;
            else 
                riskScore += 2;
        }

        if (hdl >= 60)
            riskScore -= 1;
        else if (hdl >= 50)
            riskScore += 0;
        else if (hdl >= 40)
            riskScore += 1;
        else
            riskScore += 2;

        if (sbp < 120)
            riskScore += 0;
        else if (sbp <= 129)
            riskScore += medication ? 3 : 1;
        else if (sbp <= 139)
            riskScore += medication ? 4 : 2;
        else if (sbp <= 159)
            riskScore += medication ? 5 : 3;
        else
            riskScore += medication ? 6 : 4;
    }
    else
    {
        // Risk score calculation soley on age
        if (age <= 34) {
            riskScore -= 7;
        }
        else if (age <= 39) {
            riskScore -= 3;
        }
        else if (age <= 44) {
            riskScore += 0;
        }
        else if (age <= 49) {
            riskScore += 3;
        }
        else if (age <= 54) {
            riskScore += 6;
        }
        else if (age <= 59) {
            riskScore += 8;
        }
        else if (age <= 64) {
            riskScore += 10;
        }
        else if (age <= 69) {
            riskScore += 12;
        }
        else if (age <= 74) {
            riskScore += 14;
        }
        else {
            riskScore += 16;
        }

        // Risk score calculation for Smoker and Total Cholestrol

        if (age <= 39) {
            if (smoker) 
                riskScore += 8;

            if (tc < 4.1 || tc < 160) 
                riskScore += 0;
            else if (tc < 5.1 || tc < 199) 
                riskScore += 4;
            else if (tc < 6.1 || tc < 239) 
                riskScore += 8;
            else if (tc < 7.2 || tc < 279) 
                riskScore += 11;
            else 
                riskScore += 13;
        }
        else if (age <= 49) {
            if (smoker) 
                riskScore += 7;

            if (tc < 4.1 || tc < 160) 
                riskScore += 0;
            else if (tc < 5.1 || tc < 199) 
                riskScore += 3;
            else if (tc < 6.1 || tc < 239) 
                riskScore += 6;
            else if (tc < 7.2 || tc < 279) 
                riskScore += 8;
            else 
                riskScore += 10;
        }
        else if (age <= 59) {
            if (smoker) 
                riskScore += 4;

            if (tc < 4.1 || tc < 160) 
                riskScore += 0;
            else if (tc < 5.1 || tc < 199) 
                riskScore += 2;
            else if (tc < 6.1 || tc < 239) 
                riskScore += 4;
            else if (tc < 7.2 || tc < 279) 
                riskScore += 5;
            else 
                riskScore += 7;
        }
        else if (age <= 69) {
            if (smoker) 
                riskScore += 2;

            if (tc < 4.1 || tc < 160) 
                riskScore += 0;
            else if (tc < 5.1 || tc < 199) 
                riskScore += 1;
            else if (tc < 6.1 || tc < 239) 
                riskScore += 2;
            else if (tc < 7.2 || tc < 279) 
                riskScore += 3;
            else 
                riskScore += 4;
        }
        else {
            if (smoker) 
                riskScore += 1;

            if (tc < 4.1 || tc < 160) 
                riskScore += 0;
            else if (tc < 5.1 || tc < 199) 
                riskScore += 1;
            else if (tc < 6.1 || tc < 239) 
                riskScore += 1;
            else if (tc < 7.2 || tc < 279) 
                riskScore += 2;
            else 
                riskScore += 2;
        }

        if (hdl >= 60)
            riskScore -= 1;
        else if (hdl >= 50)
            riskScore += 0;
        else if (hdl >= 40)
            riskScore += 1;
        else
            riskScore += 2;

        if (sbp < 120)
            riskScore += 0;
        else if (sbp <= 129)
            riskScore += medication ? 3 : 1;
        else if (sbp <= 139)
            riskScore += medication ? 4 : 2;
        else if (sbp <= 159)
            riskScore += medication ? 5 : 3;
        else
            riskScore += medication ? 6 : 4;
    }
    
    console.log("risk score: %d", riskScore);

    // Display the result
    const resultSection = document.getElementById('result');
    resultSection.classList.remove('hidden');

    let riskLevel = "";

    if (riskScore <= 10)
        riskLevel = "Low Risk";
    else if (riskScore <= 17)
        riskLevel = "Moderate Risk";
    else
        riskLevel = "High Risk";

    riskLevelSpan.textContent = riskLevel;
}

// Function to reset the form
function reset() {
  ageInput.value = '';
  genderSelect.selectedIndex = 0;
  sbpInput.value = '';
  tcInput.value = '';
  hdlInput.value = '';
  smokerCheckbox.checked = false;
  resultDiv.classList.add('hidden');
}