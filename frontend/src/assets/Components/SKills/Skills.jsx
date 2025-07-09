import React, { useContext, useState } from 'react';
import { CheckCircle, Code, Database, Settings, Layers } from 'lucide-react';
import { MyContext } from '../../Context/MyAppContext';

const categories = [
  { name: 'Frontend', icon: <Code />, skills: [
    { name: 'HTML5', level: 90 },
    { name: 'CSS3 / Tailwind', level: 85 },
    { name: 'JavaScript', level: 80 },
    { name: 'React.js', level: 75 },
    { name: 'React Native', level: 75 },
    { name: 'Bootstrap', level: 70 }
  ]},
  { name: 'Backend', icon: <Database />, skills: [
    { name: 'Node.js', level: 70 },
    { name: 'Express.js', level: 65 },
    { name: 'REST APIs', level: 75 },
    { name: 'Nest.js', level: 75 },
    { name: 'Django', level: 75 },
  ]},
  { name: 'Tools', icon: <Settings />, skills: [
    { name: 'Git & GitHub', level: 80 },
    { name: 'VS Code', level: 90 },
    { name: 'Postman', level: 75 }
  ]},
  { name: 'Other', icon: <Layers />, skills: [
    { name: 'Debugging', level: 80 },
    { name: 'Deployment (Vercel/Netlify)', level: 70 }
  ]}
];

const Skills = () => {
  const [activeTab, setActiveTab] = useState('Frontend');
  const {theme} = useContext(MyContext)

  return (
    <section className={`${theme === 'light' ? 'bg-light text-dark' : 'bg-black text-white' } d-flex pb-5 pt-5 justify-content-center py-16 px-6 `}  id="skills">
      <div className={`max-w-6xl mx-auto ${theme === 'light' ? 'bg-light text-dark' : 'bg-dark text-white' }`}>
        <h2 className={`text-4xl font-bold mb-10 text-center ${theme === 'light' ? 'bg-light text-dark' : 'bg-dark text-white' }`}>My Skillset</h2>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          {categories.map(({ name, icon }) => (
            <button
              key={name}
              onClick={() => setActiveTab(name)}
              className={`flex items-center gap-2 px-5 py-2 rounded-full border ${
                activeTab === name
                  ? 'bg-black text-white border-black'
                  : 'bg-white text-gray-600 border-gray-300 hover:border-black hover:text-black'
              } transition-all duration-300`}
            >
              {icon}
              {name}
            </button>
          ))}
        </div>

        {/* Skills */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
          {categories
            .find((cat) => cat.name === activeTab)
            .skills.map((skill, i) => (
              <div key={i} className="p-4 border rounded-xl shadow-sm hover:shadow-md transition">
                <div className="flex justify-between mb-1">
                  <span className="font-medium">{skill.name}</span>
                  <span className="text-sm text-gray-500">{skill.level}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2.5">
                  <div
                    className="bg-gradient-to-r from-green-400 to-blue-500 h-2.5 rounded-full"
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
