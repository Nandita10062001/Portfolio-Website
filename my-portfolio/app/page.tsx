"use client"; // This directive makes the component a Client Component
import { useEffect } from 'react';
import { initAnimation } from '../components/ThreeJsAnimation';
import NavBar from '../components/navbar';
import Landing from '../components/landing';
import Skills from '../components/skills';
import Projects from '../components/projects';
import WorkExperience from '../components/work';
import Research from '../components/research';
import CaseStudies from '../components/case-studies';
import Education from '../components/education';
import Resume from '../components/resume';
import Contact from '../components/contact';

export default function Home() {
  useEffect(() => {
    initAnimation(); // Call to three.js function to load animations
  }, []);

  return (
    <div>
      {/* Navbar */}
      <NavBar />

      {/* Landing Section */}
      <Landing />

      {/* Skills Section */}
      <section id="skills" className="py-16 px-8 bg-gray-100 dark:bg-gray-900">
        <h2 className="text-3xl font-bold mb-6">Skills</h2>
        <Skills />
      </section>

      {/* Work Experience Section */}
      <section id="work-experience" className="py-16 px-8 bg-gray-100 dark:bg-gray-900">
        <h2 className="text-3xl font-bold mb-6">Work Experience</h2>
        <WorkExperience />
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-16 px-8 bg-gray-100 dark:bg-gray-900">
        <h2 className="text-3xl font-bold mb-6">Projects</h2>
        <Projects />
      </section>

      {/* Research Section (if you have it) */}
      <section id="research" className="py-16 px-8 bg-gray-100 dark:bg-gray-900">
        <h2 className="text-3xl font-bold mb-6">Research</h2>
        <Research />
      </section>

      {/* Case Studies */}
      <section id="case-studies" className="py-16 px-8 bg-gray-100 dark:bg-gray-900">
        <h2 className="text-3xl font-bold mb-6">Case Studies</h2>
        <CaseStudies/>
      </section>

      {/* Education Section */}
      <section id="education" className="py-16 px-8 bg-gray-100 dark:bg-gray-900">
        <h2 className="text-3xl font-bold mb-6">Education</h2>
        <Education />
      </section>

      {/* Resume Section */}
      <section id="resume" className="py-16 px-8 bg-gray-100 dark:bg-gray-900">
        <h2 className="text-3xl font-bold mb-6">Resume</h2>
        <Resume />
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 px-8 bg-gray-100 dark:bg-gray-900">
        <h2 className="text-3xl font-bold mb-6">Contact</h2>
        <Contact />
      </section>

      {/* Footer (optional) */}
      <footer className="py-4 bg-gray-200 dark:bg-gray-700 text-center">
        <p className="text-gray-600 dark:text-gray-300">&copy; {new Date().getFullYear()} Your Name. All rights reserved.</p>
      </footer>
    </div>
  );
}

