// // JavaScript to toggle between categories
// function showCategory(category, element) {
//   // Hide all categories
//   document.querySelectorAll('.category').forEach(cat => cat.classList.add('hidden'));

//   // Remove underline from all buttons
//   document.querySelectorAll('.category-btn').forEach(btn => btn.classList.remove('text-blue-500', 'border-b-4', 'border-blue-500'));

//   // Show the selected category and add underline style
//   document.getElementById(category).classList.remove('hidden');
//   element.classList.add('text-blue-500', 'border-b-4', 'border-blue-500');
// }

// // Show "Beginner" category by default
// document.getElementById('beginner').classList.remove('hidden');

// Replace 'YOUR_API_KEY' with your actual API key from API Ninjas
const apiKey = 'rWw9HTmeXmB2TibnMyUeww==7VwQ0q63Do4NTZlp';

async function fetchExercises(muscle, difficulty) {
  try {
    const response = await fetch(`https://api.api-ninjas.com/v1/exercises?muscle=${muscle}`, {
      headers: {
        'X-Api-Key': 'rWw9HTmeXmB2TibnMyUeww==7VwQ0q63Do4NTZlp'
      }
    });

    if (!response.ok) {
      throw new Error(`An error occurred: ${response.statusText}`);
    }

    const exercises = await response.json();
    displayExercises(exercises, difficulty);
  } catch (error) {
    console.error('Error fetching exercises:', error);
  }
}

function displayExercises(exercises, category) {
  const categoryContainer = document.getElementById(category);
  const exercisesContainer = document.createElement('div');
  exercisesContainer.className = 'flex flex-wrap justify-center';

  exercises.forEach(exercise => {
    const exerciseCard = document.createElement('div');
    exerciseCard.className = 'h-80 w-60 m-4 relative p-4 rounded-lg shadow-lg cursor-pointer overflow-hidden transition-transform duration-300 hover:shadow-xl transform hover:scale-105';
    exerciseCard.style.backgroundImage = "url('/public/images/Muscles/maleBackB.jpg')";
    exerciseCard.style.backgroundSize = 'cover';
    exerciseCard.style.backgroundPosition = 'center';

    exerciseCard.innerHTML = `
      <div class="absolute inset-x-0 bottom-0 bg-black bg-opacity-50 text-white p-4">
        <h3 class="text-lg font-medium">${exercise.name}</h3>
        <p><strong>Target:</strong> ${exercise.muscle}</p>
        <p><strong>Difficulty:</strong> ${exercise.difficulty}</p>
      </div>
    `;

    exercisesContainer.appendChild(exerciseCard);
  });

  // Clear previous exercises and add new ones
  categoryContainer.innerHTML = ''; 
  categoryContainer.appendChild(exercisesContainer);
}

function showCategory(category, element) {
  // Hide all categories and remove active styling from buttons
  document.querySelectorAll('.category').forEach(cat => cat.classList.add('hidden'));
  document.querySelectorAll('.category-btn').forEach(btn => btn.classList.remove('active-category'));

  // Show selected category
  document.getElementById(category).classList.remove('hidden');
  element.classList.add('active-category');

  // Fetch exercises based on category
  const difficultyMap = {
    beginner: 'beginner',
    intermediate: 'intermediate',
    advanced: 'advanced'
  };
  
  // Fetch and display exercises for the selected category
  fetchExercises('biceps', difficultyMap[category]);
}
