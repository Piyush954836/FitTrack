let selectedGender = null;
let selectedGoal = null;

function selectGender(gender) {
    document.querySelectorAll('.gender-card').forEach(card => card.classList.remove('border-4', 'border-purple-600'));
    selectedGender = gender;
    document.getElementById(gender + 'Card').classList.add('border-4', 'border-purple-600');
    document.getElementById('nextButtonContainer').classList.remove('hidden');
}

function showFitnessGoals() {
    document.getElementById('genderSelection').classList.add('hidden');
    document.getElementById('fitnessGoals').classList.remove('hidden');

    if (selectedGender === 'female') {
        document.getElementById('femaleGoals').classList.remove('hidden');
        document.getElementById('maleGoals').classList.add('hidden');
    } else {
        document.getElementById('maleGoals').classList.remove('hidden');
        document.getElementById('femaleGoals').classList.add('hidden');
    }
}

function selectGoal(goal) {
    selectedGoal = goal;
    document.querySelectorAll('.card').forEach(card => card.classList.remove('border-4', 'border-blue-600'));
    document.querySelector(`[onclick="selectGoal('${goal}')"]`).classList.add('border-4', 'border-blue-600');
    document.getElementById('nextButtonGoal').classList.remove('hidden');
}

function goToNextStep() {
    if (selectedGoal) {
        // Check if the selected goal is "Male Muscle Build"
        if (selectedGoal === 'Male Muscle Build') {
            // Redirect to the new page
            window.location.href = '/views/maleMuscle.ejs';
        }
        if (selectedGoal === 'Female Muscle Build'){
            // Redirect to the new page
            window.location.href = '/views/femaleMuscle.ejs';
        }
        if (selectedGoal === 'Male Weight Loss'){
            // Redirect to the new page
            window.location.href = '/views/maleWeight.ejs';
        }
        if (selectedGoal === 'Female Weight Loss'){
            // Redirect to the new page
            window.location.href = '/views/femaleWeight.ejs';
        } else {
            // Show selected goal on the same page if it's not Male Muscle Build
            document.getElementById('fitnessGoals').classList.add('hidden');
            document.getElementById('selectedGoalSection').classList.remove('hidden');
            document.getElementById('selectedGoalText').innerText = `You chose: ${selectedGoal}`;
        }
    }
}


function restart() {
    document.getElementById('genderSelection').classList.remove('hidden');
    document.getElementById('fitnessGoals').classList.add('hidden');
    document.getElementById('selectedGoalSection').classList.add('hidden');
    document.getElementById('nextButtonContainer').classList.add('hidden');
    selectedGender = selectedGoal = null;
}

feather.replace();
