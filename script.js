const quizForm = document.getElementById('quiz-form');

quizForm.addEventListener('submit', (e) => {
  e.preventDefault();

  const formData = new FormData(quizForm);
  const userResponses = {};

  for (const [key, value] of formData.entries()) {
    userResponses[key] = value;
  }

  // store user response!!!! researched in try to use jason
  localStorage.setItem('userResponses', JSON.stringify(userResponses));

  // redirect to result
  window.location.href = 'result.html';
});