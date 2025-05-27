import React, { useState } from 'react';

const TAB_DATA = {
  FCS: {
    title: "FCS: Foundations of Computer Science",
    color: "#ffd80b",
    description: `// This 9-week course covers Introduction to Coding (Basics of Python,
Functions, Recursion, Sorting and Searching Algorithms, Object Oriented
Programming) and Introduction to Web Development (HTML, CSS, JavaScript, PHP,
and SQL) The course includes online video materials, assignments, and
instructor-led sessions.`,
    date: "May 5, 2025"
  },
  FSE: {
    title: "FSE: Full-Stack Software Engineer",
    color: "#2de386",
    description: `// Our 12-week bootcamp is designed to equip aspiring developers with the
technical and interpersonal skills needed to become professional software
engineers. Participants will learn essential software engineering and
development concepts such as Software Development LifeCycle, Computer
Architecture, SOLID Principles, Design Patterns, Advanced SQL and Database
topic, Dependency Management, modern Web/Mobile Frameworks, UI/UX for both
websites and mobile applications, and AWS. The program also includes a soft-
skills curriculum covering Communication & Interpersonal Skills, Professional
Writing, Technical Presentations, Negotiation, and Interviewing, which will be
taught through lectures, weekly projects, tech talks, and a final project to
showcase their learning.`,
    date: "June, 2025"
  },
  FSD: {
    title: "FSD: Full-Stack Web Development",
    color:  "#9864da",
    description: `// SE Factory's 12-week Full-Stack Data course offers robust training in data analysis and engineering. Participants learn to handle large data sets with Python and use libraries like Pandas, NumPy, and Matplotlib for data manipulation and visualization. The course also delves into cloud orchestration, distributed computing, relational databases, and SQL basics. Hands-on projects provide real-world data analysis experience. Upon completion, students gain proficiency in Python for analytics, understand data warehousing, and can effectively visualize and present data insights..`,
    date: "July, 2025"
  },
  UIX: {
    title: "UIX: UI/UX Design",
    color: "#fb508e",
    description: `// SE Factory's 9-week UI/UX course offers immersive learning in UI/UX design. It encompasses the essentials of UI/UX, from mastering Figma, color psychology, typography to UX heuristics, prototyping and WCAG guidelines. Learners work on projects, transforming wireframes into mockups, and creating responsive interfaces. The course culminates in a final project, enabling students to conduct a thorough UX audit, revamp a website, and create a well-documented case study. Graduates leave equipped with a polished portfolio and market-ready skills in UI/UX design.

`,
    date: "August, 2025"
  }
};

function Sec4() {
  const [activeTab, setActiveTab] = useState('FSE');
  const [bgColor, setBgColor] = useState(TAB_DATA.FSE.color);

  const handleTabClick = (tab) => {
    setActiveTab(tab);
    setBgColor(TAB_DATA[tab].color);
  };

  return (
    <section className="sec4" style={{ background: bgColor }}>
      <div className="sec4-container">      <div className="sec4-header-wrapper">
          <div className="sec4-header">
            <span className="prompt">&gt;</span>
            Programs
          </div>
          <div className="sec4-dots">
            <span className="dot dark"></span>
            <span className="dot light"></span>
            <span className="dot green"></span>
          </div>
        </div>
          <div className="sec4-nav">
          {Object.keys(TAB_DATA).map(tab => (          <button
            key={tab}
            className={`sec4-tab ${activeTab === tab ? 'active' : ''}`}
            onClick={() => handleTabClick(tab)}
            data-program={tab}
          >
            {tab}
          </button>
          ))}
        </div>

        <div className="sec4-details">
          <div className="details-content">
            <h2><span className="prompt">&gt;</span> {TAB_DATA[activeTab].title}</h2>            
            <p className="description">
              {TAB_DATA[activeTab].description}
            </p>
            <div className="details-footer">
              <div className="course-date">next course date | {TAB_DATA[activeTab].date}</div>
              <button className="learn-more">LEARN MORE &gt;</button>
            </div>
          </div>
          <div className="details-image">
            <img 
              src="https://cdn.prod.website-files.com/63e3828f575098222357ad70/641b4c900878f534cf0d3f17_Untitled%20design%20(11).png"
              alt="Students coding"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Sec4;