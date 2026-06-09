import { motion } from 'motion/react';
import { ExternalLink, Github } from 'lucide-react';
import { projects } from '../data/projects';
import SectionTitle from './SectionTitle';

export default function Projects() {
  return (
    <section id="projects" className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle title="Featured Projects" subtitle="A selection of my recent development work." />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
          {projects.map((project, idx) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="group bg-slate-800 border border-slate-700/50 rounded-2xl overflow-hidden flex flex-col shadow-lg hover:border-sky-500/30 hover:shadow-2xl hover:shadow-sky-500/10 transition-all duration-300"
            >
              {/* Thumbnail */}
              <div className="relative h-56 overflow-hidden">
                <div className="absolute inset-0 bg-slate-900/40 group-hover:bg-transparent transition-colors duration-300 z-10" />
                <img 
                  src={project.imageUrl} 
                  alt={project.title} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-sky-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-slate-400 mb-6 flex-grow">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.techStack.map(tech => (
                    <span 
                      key={tech} 
                      className="px-2 py-0.5 bg-sky-500/10 text-sky-400 text-[11px] rounded border border-sky-500/20"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex items-center space-x-4 pt-4 border-t border-slate-700/50 mt-auto">
                  <a 
                    href={project.githubUrl} 
                    target="_blank" 
                    rel="noreferrer"
                    className="flex items-center space-x-2 text-slate-400 hover:text-white transition-colors"
                  >
                    <Github size={20} />
                    <span className="font-medium text-sm">Code</span>
                  </a>
                  {project.demoUrl && (
                    <a 
                      href={project.demoUrl} 
                      target="_blank" 
                      rel="noreferrer"
                      className="flex items-center space-x-2 text-emerald-400 hover:text-emerald-300 transition-colors"
                    >
                      <ExternalLink size={20} />
                      <span className="font-medium text-sm">Live Demo</span>
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
