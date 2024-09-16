// components/WorkExperience.tsx
const Work = [
    {
      title: 'Machine Learning Engineer',
      company: 'Atmos Climate',
      duration: 'June 2023 - Present',
      description: 'Working on climate models and sustainability projects.',
      technologies: ['Python', 'TensorFlow', 'Kubernetes']
    },
    {
      title: 'AI Research Intern',
      company: 'MadScientist',
      duration: 'January 2023 - May 2023',
      description: 'Conducted research on deep learning algorithms and their applications.',
      technologies: ['PyTorch', 'Scikit-Learn', 'Pandas']
    },
    // Add more work experiences here
  ];
  
  const work = () => {
    return (
      <section id="experience" className="p-8 bg-gray-50 dark:bg-gray-800">
        <h2 className="text-3xl font-bold mb-6">Work Experience</h2>
        <div className="space-y-8">
          {Work.map((experience, index) => (
            <div key={index} className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold">{experience.title}</h3>
              <p className="text-lg font-medium text-gray-700 dark:text-gray-300">{experience.company}</p>
              <p className="text-sm text-gray-500 dark:text-gray-400">{experience.duration}</p>
              <p className="mt-4 text-gray-600 dark:text-gray-200">{experience.description}</p>
              <div className="mt-4">
                <span className="font-semibold">Technologies:</span>
                <ul className="list-disc list-inside mt-2 space-y-1">
                  {experience.technologies.map((tech, idx) => (
                    <li key={idx} className="text-gray-700 dark:text-gray-300">{tech}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>
    );
  };
  
  export default work;
  