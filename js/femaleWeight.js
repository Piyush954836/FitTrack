// JavaScript to toggle between categories
function showCategory(category, element) {
  // Hide all categories
  document.querySelectorAll('.category').forEach(cat => cat.classList.add('hidden'));

  // Remove underline from all buttons
  document.querySelectorAll('.category-btn').forEach(btn => btn.classList.remove('text-blue-500', 'border-b-4', 'border-blue-500'));

  // Show the selected category and add underline style
  document.getElementById(category).classList.remove('hidden');
  element.classList.add('text-blue-500', 'border-b-4', 'border-blue-500');
}

// Show "Beginner" category by default
document.getElementById('beginner').classList.remove('hidden');