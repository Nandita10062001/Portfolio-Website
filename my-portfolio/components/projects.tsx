// components/Projects.tsx
const Projects = [
    {
      title: 'Forest Fire Detection System',
      description: 'A system for detecting and classifying forest fires using satellite images.',
      technologies: ['Python', 'Keras', 'TensorFlow'],
      link: 'https://github.com/yourprofile/forest-fire-detection'
    },
    {
      title: 'Article Summarizer',
      description: 'An application for summarizing news articles using advanced NLP models.',
      technologies: ['Python', 'T5', 'Transformers'],
      link: 'https://github.com/yourprofile/article-summarizer'
    },
    // Add more projects here
  ];
  
  const projects = () => {
    return (
      <section id="projects" className="p-8 bg-gray-100 dark:bg-gray-900">
        <h2 className="text-3xl font-bold mb-6">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {Projects.map((project, index) => (
            <div key={index} className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold mb-2">{project.title}</h3>
              <p className="text-gray-700 dark:text-gray-300 mb-4">{project.description}</p>
              <div className="flex flex-wrap">
                <span className="font-semibold">Technologies:</span>
                <ul className="list-disc list-inside ml-4 space-y-1">
                  {project.technologies.map((tech, idx) => (
                    <li key={idx} className="text-gray-700 dark:text-gray-300">{tech}</li>
                  ))}
                </ul>
              </div>
              <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-blue-500 mt-4 inline-block">
                View Project
              </a>
            </div>
          ))}
        </div>
      </section>
    );
  };
  
  export default projects;
  