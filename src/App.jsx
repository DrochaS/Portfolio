import {
  FiArrowDownRight,
  FiArrowUpRight,
  FiCode,
  FiExternalLink,
  FiGithub,
  FiLinkedin,
  FiMail,
  FiMapPin,
  FiPhone,
  FiServer,
  FiTool,
} from 'react-icons/fi'
import './App.css'

const projects = [
  {
    number: '01',
    name: 'HavenKey',
    type: 'PROPERTY MANAGEMENT · FULL STACK',
    description:
      'A modular property and access management platform, built with a decoupled React client and Flask API.',
    stack: ['React', 'Flask', 'PostgreSQL', 'SQLAlchemy'],
    result: 'Optimized database queries by 30%',
    link: 'https://haven-key-t4bo.vercel.app',
    featured: true,
  },
  {
    number: '02',
    name: 'My Duka',
    type: 'MICRO-RETAIL · FULL STACK',
    description:
      'A dual-interface inventory and sales system helping small retailers manage stock, POS records and orders.',
    stack: ['React', 'Redux', 'Flask', 'PostgreSQL'],
    result: 'Reduced API response payloads by 25%',
    link: 'https://myduka-frontend-2c4t.vercel.app/login',
  },
  {
    number: '03',
    name: 'CLI Project Manager',
    type: 'DEVELOPER TOOLING · BACKEND',
    description:
      'A modular command-line tool for managing users, projects and tasks with persistent local JSON data.',
    stack: ['Python', 'Argparse', 'Rich', 'JSON'],
    result: '90%+ test coverage across core commands',
    link: 'https://github.com/DrochaS',
  },
  {
    number: '04',
    name: 'Interactive Portfolio',
    type: 'DESIGN TO CODE · FRONTEND',
    description:
      'Accessible, responsive web interfaces translated from visual concepts into carefully crafted frontend code.',
    stack: ['HTML', 'CSS', 'JavaScript', 'Git'],
    result: 'Pixel-conscious, cross-device experiences',
    link: 'https://github.com/DrochaS',
  },
]

const skillGroups = [
  {
    icon: <FiCode aria-hidden="true" />,
    title: 'Frontend',
    skills: ['JavaScript ES6+', 'React.js', 'Redux', 'HTML5', 'CSS3', 'Bootstrap', 'Responsive UI'],
  },
  {
    icon: <FiServer aria-hidden="true" />,
    title: 'Backend & data',
    skills: ['Python 3', 'Flask', 'REST APIs', 'PostgreSQL', 'SQLite', 'MySQL', 'SQLAlchemy'],
  },
  {
    icon: <FiTool aria-hidden="true" />,
    title: 'Tools & systems',
    skills: ['Git & GitHub', 'Postman', 'Linux', 'Windows', 'LAN/WAN', 'Hardware support', 'Automated testing'],
  },
]

function App() {
  return (
    <>
      <header className="site-header">
        <a className="wordmark" href="#home" aria-label="Andrew Macharia home">
          AK<span>.</span>
        </a>
        <nav className="main-nav" aria-label="Main navigation">
          <a href="#about">About</a>
          <a href="#work">Work</a>
          <a href="#experience">Experience</a>
        </nav>
        <a className="header-contact" href="mailto:karochaandy9@gmail.com">
          Let’s talk <FiArrowUpRight aria-hidden="true" />
        </a>
      </header>

      <main>
        <section className="hero section-wrap" id="home">
          <div className="hero-copy">
            <p className="eyebrow"><span className="status-dot" /> FULL-STACK ENGINEER <span className="eyebrow-divider">/</span> NAIROBI, KENYA</p>
            <h1>Building useful<br />things for the <span>web.</span></h1>
            <p className="hero-intro">
              I’m Andrew Karocha Macharia — a full-stack and frontend engineer who turns thoughtful ideas into reliable, human-friendly digital experiences.
            </p>
            <div className="hero-actions">
              <a className="button button-primary" href="#work">Explore my work <FiArrowDownRight aria-hidden="true" /></a>
              <a className="text-link" href="mailto:karochaandy9@gmail.com">Get in touch <FiArrowUpRight aria-hidden="true" /></a>
            </div>
            <div className="hero-socials" aria-label="Social links">
              <a href="https://github.com/DrochaS" target="_blank" rel="noreferrer" aria-label="GitHub"><FiGithub /></a>
              <a href="https://linkedin.com/in/andrew-karocha" target="_blank" rel="noreferrer" aria-label="LinkedIn"><FiLinkedin /></a>
              <a href="mailto:karochaandy9@gmail.com" aria-label="Email"><FiMail /></a>
            </div>
          </div>
          <div className="hero-art" aria-label="Full-stack engineer, frontend developer, and ICT specialist">
            <div className="art-orbit orbit-one" />
            <div className="art-orbit orbit-two" />
            <div className="art-cross cross-one">+</div>
            <div className="art-cross cross-two">+</div>
            <div className="code-card">
              <div className="code-top"><span /><span /><span /><small>andrew.js</small></div>
              <pre><span className="code-muted">01</span> <span className="code-purple">const</span> <span className="code-blue">developer</span> = {'{'}
<span className="code-muted">02</span>   name: <span className="code-green">'Andrew'</span>,
<span className="code-muted">03</span>   builds: <span className="code-green">'for people'</span>,
<span className="code-muted">04</span>   basedIn: <span className="code-green">'Nairobi, KE'</span>,
<span className="code-muted">05</span>   learning: <span className="code-purple">always</span>
<span className="code-muted">06</span> {'}'}</pre>
              <div className="code-footer"><span><i /> OPEN TO WORK</span><span>● 01:24:08</span></div>
            </div>
            <div className="art-note note-top"><span>01</span><div><b>Full-stack</b><small>from UI to API</small></div></div>
            <div className="art-note note-bottom"><span>02</span><div><b>People-first</b><small>by design</small></div></div>
            <div className="art-caption">A little code, a lot of curiosity.</div>
          </div>
          <div className="hero-bottom"><span>SCROLL TO EXPLORE</span><span className="scroll-line" /><span>01 — 04</span></div>
        </section>

        <section className="quick-facts" aria-label="Career highlights">
          <div><strong>30<span>%</span></strong><small>faster database queries</small></div>
          <div><strong>25<span>%</span></strong><small>smaller API payloads</small></div>
          <div><strong>15<span>+</span></strong><small>support tickets resolved daily</small></div>
          <div><strong>95<span>%</span></strong><small>first-contact resolution</small></div>
        </section>

        <section className="about section-wrap" id="about">
          <div className="section-heading">
            <p className="eyebrow">01 / A LITTLE ABOUT ME</p>
            <h2>Curious by nature.<br /><span>Engineer by choice.</span></h2>
          </div>
          <div className="about-content">
            <p className="about-lead">I like making technology feel a little less complicated — whether that means a smoother interface, a well-structured API, or a computer lab that simply works.</p>
            <p>My background brings together software engineering and practical ICT support. I work across the stack with React, Python and Flask, and I care about what happens beyond the code: reliability, accessibility, maintainability and the people using what I build.</p>
            <div className="location-line"><FiMapPin aria-hidden="true" /> Based in Nairobi, Kenya <span>·</span> Working across the full stack</div>
          </div>
        </section>

        <section className="skills section-wrap">
          <div className="section-heading compact-heading">
            <p className="eyebrow">02 / WHAT I BRING</p>
            <h2>Tools for the <span>whole picture.</span></h2>
          </div>
          <div className="skill-grid">
            {skillGroups.map((group) => (
              <article className="skill-card" key={group.title}>
                <div className="skill-icon">{group.icon}</div>
                <h3>{group.title}</h3>
                <ul>{group.skills.map((skill) => <li key={skill}>{skill}</li>)}</ul>
              </article>
            ))}
          </div>
        </section>

        <section className="work-section" id="work">
          <div className="section-wrap">
            <div className="work-heading">
              <div className="section-heading compact-heading">
                <p className="eyebrow">03 / SELECTED WORK</p>
                <h2>Good work, <span>built with care.</span></h2>
              </div>
              <a className="text-link" href="https://github.com/DrochaS" target="_blank" rel="noreferrer">More on GitHub <FiArrowUpRight aria-hidden="true" /></a>
            </div>
            <div className="project-list">
              {projects.map((project) => (
                <article className={`project-card${project.featured ? ' featured-project' : ''}`} key={project.number}>
                  <div className="project-number">{project.number}</div>
                  <div className="project-main">
                    <p className="project-type">{project.type}</p>
                    <h3>{project.name}</h3>
                    <p className="project-description">{project.description}</p>
                    <ul className="tag-list">{project.stack.map((item) => <li key={item}>{item}</li>)}</ul>
                  </div>
                  <div className="project-result"><span>HIGHLIGHT</span><strong>{project.result}</strong></div>
                  <a className="project-link" href={project.link} target="_blank" rel="noreferrer" aria-label={`View ${project.name}`}><FiExternalLink /></a>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="experience section-wrap" id="experience">
          <div className="section-heading compact-heading">
            <p className="eyebrow">04 / THE JOURNEY SO FAR</p>
            <h2>Built on <span>real-world experience.</span></h2>
          </div>
          <div className="journey-grid">
            <div className="journey-column">
              <p className="column-label">EXPERIENCE</p>
              <article className="timeline-item">
                <span className="timeline-dot" />
                <div className="timeline-top"><span>JUN — AUG 2025</span><span>NAIROBI, KE</span></div>
                <h3>ICT Technician / ICT Assistant</h3>
                <p className="timeline-org">NIBS Technical College</p>
                <p>Supported digital infrastructure serving 500+ students and staff. Resolved 15+ daily support tickets, helped sustain 95%+ uptime, and worked on deployment standards that cut workstation setup from 45 to 15 minutes.</p>
                <div className="timeline-tags"><span>IT Support</span><span>Systems</span><span>Networking</span></div>
              </article>
            </div>
            <div className="journey-column education-column">
              <p className="column-label">EDUCATION & CERTIFICATIONS</p>
              <article className="timeline-item">
                <span className="timeline-dot" />
                <div className="timeline-top"><span>FEB — AUG 2026</span><span>NAIROBI, KE</span></div>
                <h3>Software Engineering Certification</h3>
                <p className="timeline-org">Moringa School</p>
                <p>800+ hours of practical full-stack development, covering React, Flask, PostgreSQL, algorithms and Agile methodologies.</p>
              </article>
              <article className="timeline-item">
                <span className="timeline-dot" />
                <div className="timeline-top"><span>ICT & SYSTEMS</span><span>NAIROBI, KE</span></div>
                <h3>Information & Communication Technology</h3>
                <p className="timeline-org">Institute of Advanced Technology (IAT)</p>
                <p>Training in systems maintenance, network infrastructure, database administration and hardware troubleshooting.</p>
              </article>
              <div className="cert-list"><span>ALSO CERTIFIED IN</span><p>Data Analytics · ICT Authority, Kenya</p><p>Graphic Design · Digital Marketing</p></div>
            </div>
          </div>
        </section>

        <section className="contact-section">
          <div className="contact-inner section-wrap">
            <div>
              <p className="eyebrow">HAVE A PROJECT IN MIND?</p>
              <h2>Let’s build<br /><span>something good.</span></h2>
              <p className="contact-copy">Open to thoughtful projects, new opportunities and good conversations about technology.</p>
            </div>
            <div className="contact-details">
              <a className="contact-email" href="mailto:karochaandy9@gmail.com">karochaandy9@gmail.com <FiArrowUpRight aria-hidden="true" /></a>
              <a href="tel:+254748756096"><FiPhone aria-hidden="true" /> +254 748 756 096</a>
              <a href="https://linkedin.com/in/andrew-karocha" target="_blank" rel="noreferrer"><FiLinkedin aria-hidden="true" /> Connect on LinkedIn <FiArrowUpRight aria-hidden="true" /></a>
              <a href="https://github.com/DrochaS" target="_blank" rel="noreferrer"><FiGithub aria-hidden="true" /> Explore GitHub <FiArrowUpRight aria-hidden="true" /></a>
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer section-wrap">
        <a className="wordmark" href="#home">AK<span>.</span></a>
        <span>Designed & built with care by Andrew Macharia</span>
        <a href="#home">BACK TO TOP ↑</a>
      </footer>
    </>
  )
}

export default App
