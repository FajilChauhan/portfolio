import {
  ArrowUpRight,
  Code2,
  Database,
  Download,
  Github,
  Mail,
  MapPin,
  MessageCircle,
  Menu,
  Phone,
  Server,
  Trophy,
  X,
} from "lucide-react";
import { useState } from "react";
import {
  codingProfiles,
  education,
  experience,
  profile,
  projects,
  skills,
  stats,
  summary,
} from "./data/portfolioData.js";

const navItems = ["Projects", "Skills", "Coding", "Experience", "Education", "Contact"];

function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <header className="nav-shell">
      <a className="brand" href="#top" aria-label="Fajil Chauhan home">
        <span>FC</span>
        <strong>Fajil Chauhan</strong>
      </a>
      <nav className="desktop-nav" aria-label="Primary navigation">
        {navItems.map((item) => (
          <a key={item} href={`#${item.toLowerCase()}`}>
            {item}
          </a>
        ))}
      </nav>
      <div className="nav-actions">
        <a className="icon-btn" href={profile.github} aria-label="GitHub" target="_blank" rel="noreferrer">
          <Github size={18} />
        </a>
        <a className="nav-cv" href={profile.cv} download>
          <Download size={17} />
          CV
        </a>
        <button className="icon-btn mobile-toggle" onClick={() => setOpen((value) => !value)} aria-label="Open menu">
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>
      {open && (
        <nav className="mobile-nav" aria-label="Mobile navigation">
          {navItems.map((item) => (
            <a key={item} href={`#${item.toLowerCase()}`} onClick={() => setOpen(false)}>
              {item}
            </a>
          ))}
        </nav>
      )}
    </header>
  );
}

function Hero() {
  return (
    <section id="top" className="hero section">
      <div className="hero-copy">
        <h1>{profile.name}</h1>
        <p className="hero-role">{profile.role}</p>
        <p className="hero-text">
          I build full-stack products with real backend depth: live scoring, booking engines, role-based access,
          PostgreSQL data models, Redis caching, and production API workflows.
        </p>
        <div className="hero-actions">
          <a className="primary-btn" href="#projects">
            View projects
            <ArrowUpRight size={18} />
          </a>
          <a className="secondary-btn" href={profile.cv} download>
            <Download size={18} />
            Download CV
          </a>
          <a className="whatsapp-btn" href={profile.whatsapp} target="_blank" rel="noreferrer">
            <MessageCircle size={18} />
            WhatsApp Me
          </a>
        </div>
        <div className="contact-strip">
          <a href={`mailto:${profile.email}`}>
            <Mail size={16} />
            {profile.email}
          </a>
          <a href={`tel:${profile.phone.replaceAll(" ", "")}`}>
            <Phone size={16} />
            {profile.phone}
          </a>
          <span>
            <MapPin size={16} />
            Gandhinagar, Gujarat
          </span>
          <a href={profile.leetcode} target="_blank" rel="noreferrer">
            <Code2 size={16} />
            LeetCode
          </a>
          <a href={profile.codeforces} target="_blank" rel="noreferrer">
            <Trophy size={16} />
            Codeforces
          </a>
        </div>
      </div>
      <div className="hero-panel" aria-label="Profile summary">
        <div className="terminal-top">
          <span />
          <span />
          <span />
          <strong>recruiter-overview.json</strong>
        </div>
        <div className="terminal-body">
          {summary.map((item) => (
            <p key={item}>
              <span>const</span> {item}
            </p>
          ))}
        </div>
        <div className="stat-grid">
          {stats.map((item) => (
            <div key={item.label}>
              <strong>{item.value}</strong>
              <span>{item.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Projects() {
  return (
    <section id="projects" className="section">
      <SectionTitle kicker="Selected work" title="Two deployed projects with real product surface area" />
      <div className="project-list">
        {projects.map((project, index) => (
          <article className="project-card" key={project.name}>
            <div className="project-media">
              <img src={project.image} alt={`${project.name} application preview`} />
            </div>
            <div className="project-content">
              <span className="project-index">0{index + 1}</span>
              <h3>{project.name}</h3>
              <p className="tagline">{project.tagline}</p>
              <p>{project.description}</p>
              <div className="link-row">
                <a href={project.live} target="_blank" rel="noreferrer">
                  Live demo <ArrowUpRight size={16} />
                </a>
                <a href={project.github} target="_blank" rel="noreferrer">
                  GitHub <Github size={16} />
                </a>
              </div>
              <div className="stack-row">
                {project.stack.map((item) => (
                  <span key={item}>{item}</span>
                ))}
              </div>
              <ul className="check-list">
                {project.highlights.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

function Skills() {
  const icons = [Code2, Server, Database];
  return (
    <section id="skills" className="section compact-section">
      <SectionTitle kicker="Technical stack" title="Skills grouped for quick recruiter scanning" />
      <div className="skills-grid">
        {Object.entries(skills).map(([group, items], index) => {
          const Icon = icons[index % icons.length];
          return (
            <article className="skill-card" key={group}>
              <div className="skill-heading">
                <Icon size={18} />
                <h3>{group}</h3>
              </div>
              <div className="skill-tags">
                {items.map((item) => (
                  <span key={item}>{item}</span>
                ))}
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}

function CodingProfiles() {
  return (
    <section id="coding" className="section compact-section">
      <SectionTitle kicker="Coding profiles" title="Problem solving signals recruiters can verify" />
      <div className="coding-grid">
        {codingProfiles.map((profileItem) => (
          <a className="coding-card" href={profileItem.url} key={profileItem.name} target="_blank" rel="noreferrer">
            <div className="coding-icon">{profileItem.name === "LeetCode" ? <Code2 size={24} /> : <Trophy size={24} />}</div>
            <div>
              <span>{profileItem.name}</span>
              <h3>{profileItem.handle}</h3>
              <p>{profileItem.focus}</p>
            </div>
            <ArrowUpRight size={18} />
          </a>
        ))}
      </div>
    </section>
  );
}

function Timeline({ items }) {
  return (
    <div className="timeline">
      {items.map((item) => (
        <article className="timeline-item" key={`${item.role || item.degree}-${item.period}`}>
          <div>
            <span>{item.period}</span>
            <h3>{item.role || item.degree}</h3>
            <p>{item.company || item.school}</p>
            {item.location && <small>{item.location}</small>}
            {item.result && <small>{item.result}</small>}
          </div>
          {item.points && (
            <ul className="check-list">
              {item.points.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>
          )}
        </article>
      ))}
    </div>
  );
}

function Contact() {
  return (
    <section id="contact" className="section contact-section">
      <div>
        <SectionTitle kicker="Contact" title="Available for jobs and freelance projects" />
        <p className="contact-copy">
          Message me for full-stack development, backend APIs, dashboards, booking systems, real-time apps, portfolio
          sites, or software engineering roles.
        </p>
        <div className="message-preview">
          <span>Quick WhatsApp message</span>
          <p>
            Hi Fajil, I visited your portfolio and would like to connect with you about a job or freelance opportunity.
          </p>
        </div>
      </div>
      <div className="contact-card">
        <a className="whatsapp-card" href={profile.whatsapp} target="_blank" rel="noreferrer">
          <MessageCircle size={18} />
          Connect on WhatsApp
        </a>
        <a href={`mailto:${profile.email}`}>
          <Mail size={18} />
          {profile.email}
        </a>
        <a href={`tel:${profile.phone.replaceAll(" ", "")}`}>
          <Phone size={18} />
          {profile.phone}
        </a>
        <a href={profile.github} target="_blank" rel="noreferrer">
          <Github size={18} />
          github.com/FajilChauhan
        </a>
        <a href={profile.leetcode} target="_blank" rel="noreferrer">
          <Code2 size={18} />
          leetcode.com/u/Fajil_Chauhan
        </a>
        <a href={profile.codeforces} target="_blank" rel="noreferrer">
          <Trophy size={18} />
          codeforces.com/profile/Fajil_Chauhan
        </a>
        <a className="primary-btn full" href={profile.cv} download>
          <Download size={18} />
          Download Fajil's CV
        </a>
      </div>
    </section>
  );
}

function BottomConnect() {
  return (
    <section className="bottom-connect" aria-label="Connect with Fajil Chauhan">
      <div>
        <span>Freelance or job opportunity?</span>
        <h2>Let's build reliable web products together.</h2>
        <p>
          I am open to full-stack roles, backend engineering work, and freelance projects for APIs, dashboards,
          booking systems, and real-time applications.
        </p>
      </div>
      <a className="bottom-whatsapp" href={profile.whatsapp} target="_blank" rel="noreferrer">
        <MessageCircle size={20} />
        Message on WhatsApp
      </a>
    </section>
  );
}

function SectionTitle({ kicker, title }) {
  return (
    <div className="section-title">
      <span>{kicker}</span>
      <h2>{title}</h2>
    </div>
  );
}

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Projects />
        <Skills />
        <CodingProfiles />
        <section id="experience" className="section split-section">
          <SectionTitle kicker="Experience" title="Backend internship with production module exposure" />
          <Timeline items={experience} />
        </section>
        <section id="education" className="section split-section">
          <SectionTitle kicker="Education" title="ICT foundation from Dhirubhai Ambani University" />
          <Timeline items={education} />
        </section>
        <Contact />
        <BottomConnect />
      </main>
      <footer>
        <span>Fajil Chauhan</span>
        <span>Full Stack Developer | Backend Engineer</span>
      </footer>
    </>
  );
}

export default App;
