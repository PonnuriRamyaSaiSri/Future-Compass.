const CareerRoadmaps = {
    "Doctor": `
  graph LR;
    A[Foundation] --> A1[Biology]
    A --> A2[Physics]
    A --> A3[Chemistry]

    B[Entrance Exams] --> B1[NEET]
    B --> B2[State Entrance Exams]
    B --> B3[AIIMS]

    C[Medical Education] --> C1[MBBS]
    C --> C2[Clinical Rotations]
    C --> C3[Internship]

    D[Specialization] --> D1[MD]
    D --> D2[MS]
    D --> D3[Diploma Courses]

    E[Practice] --> E1[Resident Doctor]
    E --> E2[Private Clinic]
    E --> E3[Government Hospital]
`,

  
    "Dentist": `
      graph LR;
        A[Foundation] --> A1[Biology]
        A --> A2[Chemistry]
        A --> A3[Physics]
  
        B[Entrance Exams] --> B1[NEET]
        B --> B2[State Exams]
        B --> B3[Dental College Test]
  
        C[Dental Education] --> C1[BDS]
        C --> C2[Internship]
        C --> C3[Clinical Practice]
  
        D[Specialization] --> D1[MDS]
        D --> D2[Orthodontics]
        D --> D3[Prosthodontics]
  
        E[Practice] --> E1[Dental Clinic]
        E --> E2[Hospital Dentist]
        E --> E3[Teaching Faculty]
    `,
  
    "Agricultural Scientist": `
      graph LR;
        A[Foundation] --> A1[Biology]
        A --> A2[Chemistry]
        A --> A3[Agricultural Science Basics]
  
        B[Entrance Exams] --> B1[ICAR AIEEA]
        B --> B2[State Agri Exams]
        B --> B3[University Entrance]
  
        C[Undergraduate Studies] --> C1[B.Sc Agriculture]
        C --> C2[Internships]
        C --> C3[Field Research]
  
        D[Specialization] --> D1[M.Sc Agriculture]
        D --> D2[Soil Science]
        D --> D3[Plant Breeding]
  
        E[Career Roles] --> E1[Research Labs]
        E --> E2[Govt. Agriculture Dept]
        E --> E3[Agritech Startups]
    `,
  
    "Biotechnologist": `
      graph LR;
        A[Foundation] --> A1[Biology]
        A --> A2[Genetics]
        A --> A3[Chemistry]
  
        B[Entrance Exams] --> B1[University Entrance]
        B --> B2[CUET]
        B --> B3[State Tests]
  
        C[UG Studies] --> C1[B.Sc Biotechnology]
        C --> C2[Lab Training]
        C --> C3[Project Work]
  
        D[Advanced Studies] --> D1[M.Sc Biotechnology]
        D --> D2[Molecular Biology]
        D --> D3[Genetic Engineering]
  
        E[Careers] --> E1[Research Scientist]
        E --> E2[Biotech Firms]
        E --> E3[Pharma R&D]
    `,
  
    "Nutritionist": `
      graph LR;
        A[Foundation] --> A1[Biology]
        A --> A2[Chemistry]
        A --> A3[Food Science]
  
        B[Entrance Exams] --> B1[University Test]
        B --> B2[CUET]
        B --> B3[Direct Admission]
  
        C[Education] --> C1[B.Sc Nutrition]
        C --> C2[Clinical Internship]
        C --> C3[Diet Planning Projects]
  
        D[PG Courses] --> D1[M.Sc Nutrition]
        D --> D2[Public Health]
        D --> D3[Sports Nutrition]
  
        E[Career Paths] --> E1[Hospital Nutritionist]
        E --> E2[Diet Clinic]
        E --> E3[Food Companies]
    `,
  
    "Environmental Scientist": `
      graph LR;
        A[Foundation] --> A1[Biology]
        A --> A2[Geography]
        A --> A3[Environmental Science]
  
        B[Entrance Exams] --> B1[University Exam]
        B --> B2[CUET]
        B --> B3[State Test]
  
        C[Education] --> C1[B.Sc Environmental Science]
        C --> C2[Field Work]
        C --> C3[Internships]
  
        D[Advanced Studies] --> D1[M.Sc Environmental Science]
        D --> D2[Climate Change]
        D --> D3[Pollution Control]
  
        E[Career Roles] --> E1[Govt Environment Dept]
        E --> E2[NGOs]
        E --> E3[Research Institutes]
    `,
  
    "Psychologist": `
      graph LR;
        A[Foundation] --> A1[Psychology]
        A --> A2[Biology]
        A --> A3[Sociology]
  
        B[Entrance Exams] --> B1[CUET]
        B --> B2[University Test]
        B --> B3[College Admission]
  
        C[UG Degree] --> C1[BA/B.Sc Psychology]
        C --> C2[Case Studies]
        C --> C3[Field Work]
  
        D[PG Degree] --> D1[M.A/M.Sc Psychology]
        D --> D2[Clinical Psychology]
        D --> D3[Counseling Psychology]
  
        E[Careers] --> E1[School Counselor]
        E --> E2[Clinical Psychologist]
        E --> E3[Researcher]
    `,

    "Veterinarian": `
  graph LR;
    A[Foundation] --> A1[Biology]
    A --> A2[Zoology]
    A --> A3[Chemistry]

    B[Entrance Exams] --> B1[NEET]
    B --> B2[State Veterinary Exams]
    B --> B3[University-Specific Exams]

    C[UG Degree] --> C1[BVSc & AH]
    C --> C2[Animal Nutrition]
    C --> C3[Veterinary Pathology]

    D[PG Degree] --> D1[MVSc]
    D --> D2[Surgery & Radiology]
    D --> D3[Veterinary Medicine]

    E[Careers] --> E1[Private Vet Practice]
    E --> E2[Animal Hospital Vet]
    E --> E3[Government Vet Officer]
`
  };

  function loadRoadmap() {
    const container = document.getElementById("roadmap-container");
    const career = localStorage.getItem("selectedCareer");
  
    if (!career || !CareerRoadmaps[career]) {
      container.innerHTML = `
        <div class="error">
          <h2>Roadmap Not Available</h2>
          <p>We couldn't find the requested career path.</p>
          <a href="results.html">← Back to Results</a>
          <p>Technical details: ${career ? career + " not found" : "No career selected"}</p>
        </div>
      `;
      return;
    }
  
    container.innerHTML = `
      <h2>${career} Roadmap</h2>
      <div class="mermaid">
        ${CareerRoadmaps[career]}
      </div>
      <button onclick="window.history.back()">← Back</button>
    `;
  
    if (typeof mermaid !== 'undefined') {
      mermaid.init(undefined, document.querySelectorAll('.mermaid'));
    } else {
      console.error("Mermaid.js not loaded!");
    }
  }
  
  document.addEventListener("DOMContentLoaded", loadRoadmap);