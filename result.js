const resultDiv = document.getElementById('result');
const body = document.body;

// Get user responses from local storage
const userResponses = JSON.parse(localStorage.getItem('userResponses'));

// Calculate efficiency score based on user responses
const efficiencyScore = calculateEfficiencyScore(userResponses);

// Display result on the webpage
resultDiv.innerHTML = `<h2>Your Efficiency Score: ${efficiencyScore}%</h2>`;

// Add personalized recommendations based on the efficiency score
const recommendations = getRecommendations(efficiencyScore);
resultDiv.innerHTML += `<h3>Recommendations:</h3><ul>${recommendations.map(rec => `<li>${rec}</li>`).join('')}</ul>`;

// Change background color based on efficiency score
changeBackgroundColor(efficiencyScore);

function calculateEfficiencyScore(responses) {
  let totalScore = 0;
  const numQuestions = Object.keys(responses).length;

  for (const [key, value] of Object.entries(responses)) {
    const parsedValue = parseInt(value);

    if (!isNaN(parsedValue)) {
      totalScore += parsedValue;
    }
  }

  const maxScore = numQuestions * 3; // Assuming each question has a maximum score of 3
  const efficiencyScore = Math.round((totalScore / maxScore) * 100);

  return efficiencyScore;
}

function getRecommendations(score) {
  if (score >= 76) {
    return [
      'Excellent work! Keep up the great habits.',
      'Consider sharing your productivity tips with others.',
      'Look for opportunities to further optimize your workflow.'
    ];
  } else if (score >= 51) {
    return [
      'Good job! You have solid work habits.',
      'Try to identify areas where you can improve further.',
      'Consider using productivity tools or apps to enhance your efficiency.'
    ];
  } else if (score >= 26) {
    return [
      'You have room for improvement in your work habits.',
      'Prioritize time management and organization.',
      'Implement strategies to minimize distractions and procrastination.'
    ];
  } else {
    return [
      'Your work habits need significant improvement.',
      'Start by setting clear goals and a structured schedule.',
      'Find ways to better manage stress and maintain work-life balance.'
    ];
  }
}

function changeBackgroundColor(score) {
  if (score >= 76) {
    body.style.backgroundColor = 'green';
  } else if (score >= 51) {
    body.style.backgroundColor = 'yellowgreen';
  } else if (score >= 26) {
    body.style.backgroundColor = 'yellow';
  } else {
    body.style.backgroundColor = 'red';
  }
}