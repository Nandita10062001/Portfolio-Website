// pages/index.tsx
import { useEffect } from 'react';

export default function Home() {

  return (
    <section id="landing" className="h-screen flex flex-col items-center justify-center bg-gray-50 dark:bg-gray-800">
      <h1 className="text-5xl font-bold text-gray-900 dark:text-gray-100">Your Name</h1>
      <p className="text-lg text-gray-600 dark:text-gray-300 mt-4">Aspiring ML Engineer | AI/ML Enthusiast</p>
      <div className="mt-6 space-x-4">
        <a href="https://www.linkedin.com/in/yourprofile" target="_blank">LinkedIn</a>
        <a href="https://github.com/yourprofile" target="_blank">GitHub</a>
        <a href="https://www.researchgate.net/profile/yourprofile" target="_blank">ResearchGate</a>
      </div>
    </section>
  );
}