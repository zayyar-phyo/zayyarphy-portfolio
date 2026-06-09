import { motion } from 'motion/react';
import { Target, Zap, Users, ArrowUpRight } from 'lucide-react';
import SectionTitle from './SectionTitle';

export default function About() {
  const strengths = [
    {
      icon: <Zap className="text-sky-400" size={24} />,
      title: 'Fast Learner',
      description: 'Adapt quickly to new technologies and constantly eager to expand my technical stack.'
    },
    {
      icon: <Target className="text-blue-400" size={24} />,
      title: 'Problem Solver',
      description: 'Analytical mindset approaching bugs and architecture challenges logically.'
    },
    {
      icon: <Users className="text-green-400" size={24} />,
      title: 'Team Collaboration',
      description: 'Effective communicator valuing pair programming and healthy code reviews.'
    },
    {
      icon: <ArrowUpRight className="text-purple-400" size={24} />,
      title: 'Continuous Improvement',
      description: 'Committed to refining code quality and establishing scalable best practices.'
    }
  ];

  return (
    <section id="about" className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle title="About Me" subtitle="Get to know my background and what drives me." />
        
        <div className="grid md:grid-cols-12 gap-12 items-start mt-12">
          
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="md:col-span-5 bg-slate-800 border border-slate-700/50 rounded-2xl p-6 shadow-lg"
          >
            <div className="space-y-6 text-slate-300 leading-relaxed text-lg">
              <p>
                Originally from <strong>Myanmar</strong>, I made the journey to Japan to pursue my passion for technology and software development. 
              </p>
              <p>
                Currently, I am an AI Systems Development student at <strong>Kobe Denshi (神戸電子)</strong>, set to graduate in 2027 (27卒).
              </p>
              <p>
                My core interests revolve around Web Development, AI, and practical software engineering. I am deeply passionate about creating digital solutions that are not only performant but also genuinely useful in real-world scenarios.
              </p>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="md:col-span-7 grid sm:grid-cols-2 gap-6"
          >
            {strengths.map((str, i) => (
              <div 
                key={str.title} 
                className="bg-slate-800 border border-slate-700/50 rounded-2xl p-6 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 shadow-md"
              >
                <div className="w-12 h-12 bg-slate-700/50 rounded-xl flex items-center justify-center mb-4">
                  {str.icon}
                </div>
                <h3 className="text-xl font-bold text-slate-100 mb-2">{str.title}</h3>
                <p className="text-slate-400">{str.description}</p>
              </div>
            ))}
          </motion.div>

        </div>
      </div>
    </section>
  );
}
