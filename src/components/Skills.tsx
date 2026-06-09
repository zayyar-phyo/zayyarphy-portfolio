import { motion } from 'motion/react';
import { skills } from '../data/skills';
import SectionTitle from './SectionTitle';

export default function Skills() {
  const categories = ['Frontend', 'Backend', 'Database', 'Tools'] as const;

  return (
    <section id="skills" className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle title="Technical Skills" subtitle="Technologies and tools I work with to build robust applications." />

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">
          {categories.map((category, catIdx) => (
            <motion.div 
              key={category}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: catIdx * 0.1 }}
              className="bg-slate-800 border border-slate-700/50 rounded-2xl p-6 shadow-lg"
            >
              <h3 className="text-xl font-semibold text-white mb-6 flex items-center">
                <span className="w-8 h-8 rounded-lg bg-sky-500/20 text-sky-400 flex items-center justify-center mr-3 text-sm">
                  {category.charAt(0)}
                </span>
                {category}
              </h3>

              <div className="space-y-5">
                {skills.filter(s => s.category === category).map((skill, i) => (
                  <div key={skill.name} className="p-3 bg-slate-900/50 rounded-xl border border-slate-700/30 group">
                    <div className="flex justify-between items-center mb-3">
                      <span className="font-medium text-slate-300 group-hover:text-sky-400 transition-colors">{skill.name}</span>
                    </div>
                    <div className="h-2 w-full bg-slate-700/50 rounded-full overflow-hidden">
                      <motion.div 
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 + (i * 0.1), duration: 1, ease: "easeOut" }}
                        className="h-full bg-gradient-to-r from-sky-400 to-blue-500 rounded-full"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
