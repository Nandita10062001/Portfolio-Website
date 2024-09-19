import React from 'react';

const CaseStudies = () => {
  // Sample case studies data
  const caseStudyItems = [
    {
      title: 'Case Study 1',
      description: 'A brief overview of the case study, including key challenges, solutions, and results.',
      link: 'https://linktothecasestudy1.com',
    },
    {
      title: 'Case Study 2',
      description: 'A brief overview of the case study, including key challenges, solutions, and results.',
      link: 'https://linktothecasestudy2.com',
    },
    // Add more case study items as needed
  ];

  return (
    <div className="container mx-auto px-4">
      <h2 className="text-3xl font-bold mb-6">Case Studies</h2>
      <div className="space-y-8">
        {caseStudyItems.map((item, index) => (
          <div key={index} className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-gray-100">{item.title}</h3>
            <p className="text-gray-600 dark:text-gray-300 mt-2">{item.description}</p>
            <a href={item.link} target="_blank" rel="noopener noreferrer" className="text-blue-500 dark:text-blue-300 mt-4 block">
              Read more
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CaseStudies;
