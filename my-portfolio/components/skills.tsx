// components/Skills.tsx
const skills = () => {
    const skills = ['Machine Learning', 'Deep Learning', 'Python', 'TensorFlow', 'React', 'Next.js', 'Tailwind CSS'];
  
    return (
      <section id="skills" className="p-8 bg-gray-100 dark:bg-gray-800">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-4">
          {skills.map((skill, index) => (
            <div key={index} className="bg-gray-200 dark:bg-gray-700 p-4 rounded-lg text-center">
              {skill}
            </div>
          ))}
        </div>
      </section>
    );
  };
  
  export default skills;
  