document.addEventListener("DOMContentLoaded", () => {
  const recommendations = JSON.parse(localStorage.getItem("careerTopMatches")) || [];
  
  const container = document.getElementById("recommendations");
  if (recommendations.length === 0) {
    container.innerHTML = "<p>No recommendations found. Please take the quiz first.</p>";
    return;
  }

  recommendations.forEach(career => {
    const card = document.createElement("div");
    card.className = "bg-blue-100 p-4 rounded-lg shadow-md cursor-pointer hover:bg-blue-200 transition";
    card.textContent = career;
    card.onclick = () => {
      localStorage.setItem("selectedCareer", career);
      window.location.href = "roadmap.html";
    };
    container.appendChild(card);
  });
});
