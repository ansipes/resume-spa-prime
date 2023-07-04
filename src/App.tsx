import "./App.css";

function App() {
  const data = {
    header: {
      firstName: "Andrew",
      lastName: "Sipes",
      phone: "704-929-9067",
      location: "Durham, NC",
      email: "andrew.n.sipes@gmail.com",
    },
    experience: [
      {
        id: "6f82dce2-1a8a-11ee-be56-0242ac120002",
        title: "Senior Software Engineer",
        company: {
          name: "Swarm Interactive, Inc.",
          location: "Chapel Hill, NC",
        },
        tenure: "Apr. 2022 – Present",
        highlights: [
          "Develop, maintain, and ensure availability of Swarm Interactive's software and services.",
          "Expanded internationalization of content by integrating a translation contractor into production workflow.",
          "Improved user experience by leading efforts to make applications more mobile-friendly and accessible.",
          "Improved availability and incident recovery by implementing uptime monitors and escalation policies.",
          "Migrated multiple applications from monolithic infrastructure to globally distributed infrastructure.",
          "Mentored and managed a small engineering and support team while fostering a culture of growth and development.",
          "Established a culture of documentation resulting in 50+ articles on previously undocumented business processes.",
          "Ensured accurate and efficient development by creating acceptance criteria for tickets.",
        ],
      },
      {
        id: "7bbb3806-1a8a-11ee-be56-0242ac120002",
        title: "Software Engineer",
        company: {
          name: "Swarm Interactive, Inc.",
          location: "Chapel Hill, NC",
        },
        tenure: "Jan. 2018 – Apr. 2022",
        highlights: [
          "Developed web applications using front-end and back-end frameworks.",
          "Wrote comprehensive unit and integration tests (Vitest | PHPUnit) as well as E2E tests (Cypress) for critical user flows.",
          "Contributed to CI/CD pipeline that increased release velocity and confidence.",
          "Prioritized bug reports and feature requests using GitHub Projects to ensure timely delivery of enhancements.",
          "Generated reports at various technical levels to demonstrate the impact of enhancements to our website and applications.",
          "Authored documentation and example code to help third-parties integrate with our products.",
        ],
      },
      {
        id: "82633dd4-1a8a-11ee-be56-0242ac120002",
        title: "Adjunct Instructor | UI/UX Development",
        company: {
          name: "UNC Hussman School of Journalism and Media",
          location: "Chapel Hill, NC",
        },
        tenure: "Aug. 2018 – Apr. 2022",
        highlights: [
          "Taught design methodologies and patterns focused on creating the best user experience.",
          "Communicated technical topics to aspiring UI/UX developers, including HTML, CSS, JS, and accessibility compliance.",
          "Critiqued websites and web applications and delivered feedback so students could improve their work.",
          "Created educational material and assignments to teach web development.",
        ],
      },
      {
        id: "89db234c-1a8a-11ee-be56-0242ac120002",
        title: "Web Developer Intern",
        company: {
          name: "Swarm Interactive, Inc.",
          location: "Chapel Hill, NC",
        },
        tenure: "May 2016 – Jan. 2018",
        highlights: [
          "Implemented stakeholder requirements and specifications into responsive, accessible medical websites.",
          "Designed wireframes and prototypes for websites using Adobe Creative Suite.",
        ],
      },
    ],
    education: [
      {
        id: "9050134a-1a8a-11ee-be56-0242ac120002",
        institution: "The University of North Carolina at Chapel Hill",
        studyType: "Bachelor of Arts",
        area: "Computer Science",
      },
    ],
    certifications: [
      {
        id: "9c20b792-1a8a-11ee-be56-0242ac120002",
        institution: "CompTIA",
        area: "Security+",
      },
    ],
    skills: [
      "TypeScript",
      "JavaScript",
      "Vue",
      "React",
      "JSON",
      "HTML",
      "CSS",
      "Node.js",
      "Next.js",
      "Laravel",
      "PHP",
      "MySQL",
      "Cypress",
      "Git",
    ],
  };

  return (
    <article>
      <header>
        <h1>
          {data.header.firstName} {data.header.lastName}
        </h1>
        <address>
          <span>{data.header.phone}</span>
          <span>{data.header.location}</span>
          <span>{data.header.email}</span>
        </address>
      </header>
      <section>
        <h2>Experience</h2>

        <ul>
          {data.experience.map((e) => (
            <li key={e.id}>
              <h3>{e.title}</h3>
              <p>
                {e.company.name} | {e.company.location}
              </p>
              <ul>
                {e.highlights.map((e) => (
                  <li key={e}>{e}</li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </section>
      <section>
        <h2>Education</h2>
        <ul>
          {data.education.map((e) => (
            <li key={e.id}>
              <strong>{e.institution}</strong> | {e.studyType} in {e.area}
            </li>
          ))}
        </ul>
      </section>
      <section>
        <h2>Certifications</h2>
        <ul>
          {data.certifications.map((e) => (
            <li key={e.id}>
              {e.institution} {e.area}
            </li>
          ))}
        </ul>
      </section>
      <section>
        <h2>Skills</h2>
        <ul>
          {data.skills.map((e) => (
            <li key={e}>{e}</li>
          ))}
        </ul>
      </section>
    </article>
  );
}

export default App;
