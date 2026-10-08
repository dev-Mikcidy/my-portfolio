import './App.css'
import profilePhoto from "./assets/profile.jpg";

function App() {
  return (
    <div className="portfolio">
      {/* Navigation */}
      <nav className="navbar">
        <div className="nav-container">
          <a href="#home" className="logo">
            Michael
          </a>

          <div className="nav-links">
            <a href="#about">About</a>
            <a href="#skills">Skills</a>
            <a href="#projects">Projects</a>
            <a href="#education">Education</a>
            <a href="#contact">Contact</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <main>
        <section id="home" className="hero-section">
          <div className="hero-content">
            <div className="hero-text">
              <p className="hero-intro">Hello, I'm</p>

              <h1>Michael Agunbiade</h1>

              <h2>Software Development Student</h2>

              <p className="hero-description">
                I build full-stack web applications and Android applications
                using React, Node.js, Kotlin and Jetpack Compose.
              </p>

              <p className="availability">
                ● Currently looking for a Software Development Internship
              </p>

              <div className="hero-buttons">
                <a href="#projects" className="btn btn-primary">
                  View My Projects
                </a>

                <a href="#contact" className="btn btn-secondary">
                  Contact Me
                </a>

                <a
                  href="/Michael_Agunbiade_CV.pdf"
                  download
                  className="btn btn-secondary"
                >
                  Download CV
                </a>
              </div>
            </div>

            <div className="hero-photo">
              <img
                src={profilePhoto}
                alt="Michael Agunbiade"
                className="profile-photo"
              />
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="section">
          <div className="section-container">
            <div className="section-header">
              <span className="section-label">ABOUT ME</span>
              <h2>Who I Am</h2>
            </div>

            <div className="about-content">
              <div className="about-text">
                <p>
                  I’m a third-year Software Development student at Kristianstad
                  University with a strong interest in building practical software
                  and continuously improving my development skills.
                </p>

                <p>
                  Throughout my studies, I have gained experience developing web,
                  mobile and desktop applications. I have worked with JavaScript,
                  Python, Java and Kotlin, and have built projects using technologies
                  such as React, Node.js, Express.js, Jetpack Compose, PyQt5 and
                  scikit-learn.
                </p>

                <p>
                  I enjoy learning by building real applications and solving
                  practical problems. I have worked both independently and as part
                  of development teams, using Git and GitHub for version control
                  and collaboration.
                </p>

                <p>
                  I’m currently looking for a software development internship where
                  I can apply my skills in a professional environment, learn from
                  experienced developers and contribute to real-world projects.
                </p>
              </div>

              <div className="about-highlights">
                <div className="highlight-card">
                  <h3>Web Development</h3>
                  <p>React, Node.js, Express.js and MongoDB</p>
                </div>

                <div className="highlight-card">
                  <h3>Android Development</h3>
                  <p>Kotlin, Jetpack Compose, Retrofit and MVVM</p>
                </div>

                <div className="highlight-card">
                  <h3>Software Development</h3>
                  <p>Programming, APIs, databases, Git and GitHub</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="section">
          <div className="section-container">

            <p className="section-label">TECHNICAL SKILLS</p>

            <h2>Skills & Technologies</h2>

            <p className="section-intro">
              Technologies and tools I have worked with through university projects,
              team development and personal projects.
            </p>

            <div className="skills-grid">

              {/* Programming Languages */}
              <div className="skill-category">
                <div className="skill-icon">01</div>

                <h3>Programming & Web</h3>

                <div className="skill-list">
                  <span>JavaScript</span>
                  <span>Python</span>
                  <span>Kotlin</span>
                  <span>Java</span>
                  <span>HTML</span>
                  <span>CSS</span>
                </div>
              </div>

              {/* Frontend */}
              <div className="skill-category">
                <div className="skill-icon">02</div>

                <h3>Frontend Development</h3>

                <div className="skill-list">
                  <span>React</span>
                  <span>Vite</span>
                  <span>React Router</span>
                  <span>Axios</span>
                  <span>Bootstrap</span>
                </div>
              </div>

              {/* Backend */}
              <div className="skill-category">
                <div className="skill-icon">03</div>

                <h3>Backend & APIs</h3>

                <div className="skill-list">
                  <span>Node.js</span>
                  <span>Express.js</span>
                  <span>MongoDB</span>
                  <span>Mongoose</span>
                  <span>REST APIs</span>
                  <span>JWT</span>
                </div>
              </div>

              {/* Mobile & Tools */}
              <div className="skill-category">
                <div className="skill-icon">04</div>

                <h3>Mobile & Tools</h3>

                <div className="skill-list">
                  <span>Android</span>
                  <span>Jetpack Compose</span>
                  <span>Retrofit</span>
                  <span>Kotlin Coroutines</span>
                  <span>Git</span>
                  <span>GitHub</span>
                  <span>Firebase</span>
                  <span>PyQt5</span>
                  <span>scikit-learn</span>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="section">
          <div className="section-container">
            <p className="section-label">MY WORK</p>

            <h2>Featured Projects</h2>

            <p className="section-intro">
              A selection of projects I have worked on during my studies and personal
              development, covering web, mobile and desktop application development.
            </p>

            <div className="projects-grid">

              {/* SmartHomeGitOps */}
              <article className="project-card">
                <div className="project-content">
                  <p className="project-type">ANDROID APPLICATION</p>

                  <h3>SmartHomeGitOps</h3>

                  <p>
                    Android application built with Kotlin and Jetpack Compose that
                    communicates with the GitHub REST API to monitor repository
                    activity and identify potentially suspicious Pull Request
                    comments.
                  </p>

                  <div className="project-technologies">
                    <span>Kotlin</span>
                    <span>Android</span>
                    <span>Jetpack Compose</span>
                    <span>MVVM</span>
                    <span>Retrofit</span>
                  </div>

                  <div className="project-links">
                    <a
                      href="https://github.com/dev-Mikcidy/smart-home-gitops"
                      target="_blank"
                      rel="noreferrer"
                      className="project-link"
                    >
                      GitHub →
                    </a>
                  </div>
                </div>
              </article>

              {/* Hair Salon */}
              <article className="project-card">
                <div className="project-content">
                  <p className="project-type">FULL-STACK WEB APPLICATION</p>

                  <h3>Hair Salon Booking System</h3>

                  <p className="project-description">
                    Personal full-stack salon booking application with customer bookings,
                    authentication, email notifications and an admin dashboard for managing
                    services, customers and bookings.
                  </p>

                  <div className="project-technologies">
                    <span>React</span>
                    <span>Node.js</span>
                    <span>Express</span>
                    <span>MongoDB</span>
                    <span>JWT</span>
                  </div>

                  <div className="project-links">
                    <a
                      href="https://github.com/dev-Mikcidy/hairsalon-booking"
                      target="_blank"
                      rel="noreferrer"
                      className="project-link"
                    >
                      GitHub →
                    </a>
                  </div>
                </div>
              </article>

              {/* Electronics Store */}
              <article className="project-card">
                <div className="project-content">
                  <p className="project-type">FULL-STACK E-COMMERCE • TEAM PROJECT</p>

                  <h3>Electronics Online Store</h3>

                  <p>
                    Full-stack e-commerce application developed as a team project,
                    featuring product browsing, user accounts, shopping cart
                    management, Stripe payments and an admin dashboard for product
                    and order management.
                  </p>

                  <div className="project-technologies">
                    <span>React</span>
                    <span>Node.js</span>
                    <span>MongoDB</span>
                    <span>JWT</span>
                    <span>Stripe</span>
                  </div>

                  <div className="project-links">
                    <a
                      href="https://github.com/dev-Mikcidy/Online-store"
                      target="_blank"
                      rel="noreferrer"
                      className="project-link"
                    >
                      GitHub →
                    </a>

                    <a
                      href="https://online-store-theta-rose.vercel.app/"
                      target="_blank"
                      rel="noreferrer"
                      className="project-link"
                    >
                      Live Demo →
                    </a>
                  </div>
                </div>
              </article>

              {/* SoulSync */}
              <article className="project-card">
                <div className="project-content">
                  <p className="project-type">DESKTOP APPLICATION • TEAM PROJECT</p>

                  <h3>SoulSync</h3>

                  <p>
                    Desktop application developed as a team project using Python and PyQt5.
                    The application allows users to track mood and stress, maintain a journal
                    and receive personalized tips and feedback.
                  </p>

                  <div className="project-technologies">
                    <span>Python</span>
                    <span>PyQt5</span>
                    <span>Firebase</span>
                    <span>Jira</span>
                    <span>OOP</span>
                  </div>

                  <div className="project-links">
                    <a
                      href="https://github.com/LungoweA/SoulSync"
                      target="_blank"
                      rel="noreferrer"
                      className="project-link"
                    >
                      GitHub →
                    </a>
                  </div>
                </div>
              </article>

            </div>
          </div>
        </section>

        {/* Education Section */}
        <section id="education" className="section">
          <div className="section-container">
            <p className="section-label">EDUCATION</p>

            <h2>Education</h2>

            <div className="education-card">
              <div className="education-header">
                <div>
                  <h3>Kristianstad University</h3>
                  <p className="education-degree">
                    Software Development
                  </p>
                  <p className="education-period">
                    2024 – 2027
                  </p>
                </div>

                <span className="education-status">
                  Current Student
                </span>
              </div>

              <p className="education-field">
                Computer Science
              </p>

              <p>
                Studying Software Development with a focus on programming,
                software engineering, web development, mobile development,
                databases and application development.
              </p>

              <p>
                Throughout my studies, I have developed individual and
                team-based applications using JavaScript, Python, Java and
                Kotlin, while working with technologies such as React,
                Node.js, Express.js, Jetpack Compose, MongoDB and Git.
              </p>

              <div className="education-focus">
                <span>Software Development</span>
                <span>Web Development</span>
                <span>Mobile Development</span>
                <span>Databases</span>
                <span>Software Engineering</span>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="section contact-section">
          <div className="section-container">
            <p className="section-label">GET IN TOUCH</p>

            <h2>Let's Connect</h2>

            <p>
              I’m currently looking for a software development internship and would
              be happy to connect. If you have an opportunity or would like to
              discuss a project, feel free to reach out.
            </p>

            <div className="contact-links">
              <a href="mailto:Agunbiademichael2017@gmail.com">
                Email
              </a>

              <a
                href="https://www.linkedin.com/in/michael-agunbiade-dev/"
                target="_blank"
                rel="noreferrer"
              >
                LinkedIn
              </a>

              <a
                href="https://github.com/dev-Mikcidy"
                target="_blank"
                rel="noreferrer"
              >
                GitHub
              </a>

              <a
                href="/Michael_Agunbiade_CV.pdf"
                download
                className="contact-button"
              >
                Download CV
              </a>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer>
        <p>© 2026 Michael Agunbiade. All rights reserved.</p>
      </footer>
    </div>
  )
}

export default App