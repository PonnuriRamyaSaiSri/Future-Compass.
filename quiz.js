const questions = [
  {
    question: "Which subject do you enjoy the most?",
    options: ["Biology", "Chemistry", "Psychology", "Environmental Science", "Nutrition"]
  },
  {
    question: "Which field excites you the most?",
    options: ["Medical", "Animal Care", "Research", "Agriculture", "Mental Health"]
  },
  {
    question: "Where would you like to work in the future?",
    options: ["Hospital", "Vet Clinic", "Research Lab", "Farm", "Clinic"]
  },
  {
    question: "Which entrance exam are you preparing for?",
    options: ["NEET", "ICAR", "CUET", "BSc Entrance", "AIIMS"]
  },
  {
    question: "What motivates you the most?",
    options: ["Saving lives", "Helping animals", "Discovering new things", "Feeding the nation", "Helping people mentally"]
  },
  {
    question: "Which topic do you find most interesting?",
    options: ["Human Anatomy", "Zoology", "Genetics", "Soil Science", "Psychology"]
  },
  {
    question: "Which lab would you prefer?",
    options: ["Biology Lab", "Zoology Lab", "Microbiology Lab", "Psych Lab", "Agricultural Lab"]
  },
  {
    question: "What skill defines you best?",
    options: ["Empathy", "Analytical Thinking", "Curiosity", "Patience", "Observation"]
  },
  {
    question: "Which career inspires you?",
    options: ["Doctor", "Veterinarian", "Psychologist", "Environmental Scientist", "Dentist"]
  },
  {
    question: "Which of these sounds exciting?",
    options: ["Surgery", "Animal Rescue", "DNA Analysis", "Farming Innovation", "Therapy"]
  },
  {
    question: "Which subject would you choose as an elective?",
    options: ["Pharmacology", "Animal Science", "Biotech", "Nutrition Science", "Behavioral Science"]
  },
  {
    question: "How do you prefer to help society?",
    options: ["Treating diseases", "Caring for animals", "Solving scientific problems", "Improving food systems", "Improving mental health"]
  },
  {
    question: "What kind of job do you prefer?",
    options: ["Hospital-based", "Field-based", "Lab-based", "Office-based", "Clinic-based"]
  },
  {
    question: "Which real-world issue interests you?",
    options: ["Diseases", "Animal Extinction", "Pollution", "Food Security", "Mental Illness"]
  },
  {
    question: "What club would you join?",
    options: ["Health Club", "Pet Club", "Science Club", "Eco Club", "Counseling Club"]
  }
];

const careerMap = {
  "Doctor": ["Biology", "Medical", "Hospital", "NEET", "Saving lives", "Human Anatomy", "Biology Lab", "Empathy", "Doctor", "Surgery", "Pharmacology", "Treating diseases", "Hospital-based", "Diseases", "Health Club"],
  "Veterinarian": ["Zoology", "Animal Care", "Vet Clinic", "Animal Rescue", "Animal Science", "Helping animals", "Zoology Lab", "Veterinarian", "Pet Club", "Animal Extinction"],
  "Psychologist": ["Psychology", "Mental Health", "Clinic", "Helping people mentally", "Psych Lab", "Behavioral Science", "Psychologist", "Counseling Club", "Mental Illness"],
  "Environmental Scientist": ["Environmental Science", "Pollution", "Eco Club", "Farming Innovation", "Improving food systems", "Agricultural Lab", "Environmental Scientist"],
  "Dentist": ["Dentist", "Surgery", "Saving lives", "Clinic-based", "NEET", "Human Anatomy"],
  "Nutritionist": ["Nutrition", "Food Security", "Nutrition Science", "Helping people mentally", "Improving food systems", "Treating diseases"],
  "Biotechnologist": ["Genetics", "DNA Analysis", "Microbiology Lab", "Biotech", "Solving scientific problems", "Science Club"],
  "Agricultural Scientist": ["Soil Science", "Agriculture", "ICAR", "Farm", "Food Security", "Farming Innovation", "Agricultural Lab"]
};

function displayAllQuestions() {
  const quizContainer = document.getElementById("quiz");
  quizContainer.innerHTML = `
    <form id="quizForm">
      ${questions.map((q, i) => `
        <div style="margin-bottom: 20px;">
          <h4>${i + 1}. ${q.question}</h4>
          ${q.options.map(opt => `
            <label style="display: block; margin: 5px 0;">
              <input type="radio" name="q${i}" value="${opt}" required> ${opt}
            </label>
          `).join("")}
        </div>
      `).join("")}
      <button type="submit" style="padding: 10px 20px; background: #00b4d8; color: white; border: none; border-radius: 6px; cursor: pointer;">
        Submit Quiz
      </button>
    </form>
  `;

  // Add event listener for form submission
  document.getElementById("quizForm").addEventListener("submit", handleQuizSubmit);
}


function handleQuizSubmit(e) {
  e.preventDefault();

  const formData = new FormData(e.target);
  const selectedAnswers = [];
  for (let i = 0; i < questions.length; i++) {
    const answer = formData.get(`q${i}`);
    if (answer) selectedAnswers.push(answer);
  }

  // Count matches for each career
  const scores = {};
  for (const career in careerMap) {
    scores[career] = selectedAnswers.filter(ans => careerMap[career].includes(ans)).length;
  }

  // Sort by score descending and take top 3
  const top3 = Object.entries(scores)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 3)
    .map(entry => entry[0]);

  if (top3.length === 0) {
    alert("We couldn’t match your answers to a career path. Please try again.");
    return;
  }

  localStorage.setItem("careerTopMatches", JSON.stringify(top3));
  window.location.href = "results.html";
}

window.addEventListener("DOMContentLoaded", displayAllQuestions);
