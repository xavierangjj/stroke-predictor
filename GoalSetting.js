// Select HTML elements
const addGoalBtn = document.getElementById('add-goal-btn');
const goalsContainer = document.getElementById('goals-container');
const goalFormContainer = document.getElementById('goal-form-container');
const goalForm = document.getElementById('goal-form');
const goalInput = document.getElementById('specify-goal-dropdown');
const quantifyInput = document.getElementById('specify-quantify-dropdown');
const whenInput = document.getElementById('specify-when-dropdown');
const deadlineInput = document.getElementById('deadline-input');
// const specificsInput = document.getElementById('specifics-input');
const cancelBtn = document.getElementById('cancel-btn');

// Initialize goals array
let goals = [];

// Event listener for add goal button
addGoalBtn.addEventListener('click', () => {
  goalFormContainer.style.display = 'block';
});

// Event listener for goal form submit
goalForm.addEventListener('submit', (event) => {
  // Prevent default form submission behavior
  event.preventDefault();

  // Create new goal object with form values
  const goal = {
    goal: goalInput.value,
    quantify: quantifyInput.value,
    when: whenInput.value,
    deadline: deadlineInput.value,
  };

  // Add new goal to goals array and display all goals
  goals.push(goal);
  displayGoals();

  // Hide goal form and reset form inputs
  goalFormContainer.style.display = 'none';
  goalForm.reset();
});

// Event listener for cancel button
cancelBtn.addEventListener('click', () => {
    // Hide goal form and reset form inputs
    goalFormContainer.style.display = 'none';
    goalForm.reset();
  });

// Function to display all goals in goals container
function displayGoals() {
  // Clear goals container
  goalsContainer.innerHTML = '';

  // Create and append goal elements for each goal in goals array
  goals.forEach((goal, index) => {
    const goalElement = document.createElement('div');
    goalElement.classList.add('goal');
    goalElement.innerHTML = `
      <h2>Goal ${index + 1}</h3>
      <h3>In Progress...</h3>
      <p><strong>Goal:</strong> ${goal.goal}</p>
      <p><strong>Quantify:</strong> ${goal.quantify}</p>
      <p><strong>When:</strong> ${goal.when}</p>
      <p><strong>Deadline:</strong> ${goal.deadline}</p>
    `;
    goalsContainer.appendChild(goalElement);
  });
}
