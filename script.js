const quizForm = document.getElementById('quiz-form');

quizForm.addEventListener('submit', (e) => {
  e.preventDefault();

  const formData = new FormData(quizForm);
  const userResponses = {};

  for (const [key, value] of formData.entries()) {
    userResponses[key] = value;
  }

  // Store user responses in local storage
  localStorage.setItem('userResponses', JSON.stringify(userResponses));

  // Redirect to the result page
  window.location.href = '../result/result.html';
});