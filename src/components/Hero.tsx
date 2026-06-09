import { motion } from 'motion/react';
import { ArrowRight, Mail } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Background gradients */}
      <div className="absolute top-1/4 -left-64 w-96 h-96 bg-sky-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 -right-64 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 grid md:grid-cols-2 gap-12 items-center">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-6"
        >
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-slate-800/50 border border-slate-700 backdrop-blur-sm">
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
            <span className="text-sm text-slate-300">Available for Opportunities</span>
          </div>
          
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white">
            Hi, I'm <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-blue-500">
              Zay Yar Phyo
            </span>
          </h1>
          
          <h2 className="text-2xl md:text-3xl font-medium text-slate-400">
            Aspiring Software Engineer
          </h2>
          
          <p className="text-lg text-slate-300 max-w-lg leading-relaxed">
            Passionate software engineering student based in Japan, focused on Web Development, AI Systems, and IoT solutions. I enjoy building practical applications that solve real-world problems.
          </p>
          
          <div className="flex flex-wrap items-center gap-4 pt-4">
            <a 
              href="#projects"
              className="inline-flex items-center space-x-2 bg-sky-500 hover:bg-sky-400 text-slate-950 px-6 py-3 rounded-xl transition-all font-bold shadow-lg shadow-sky-500/20"
            >
              <span>View Projects</span>
              <ArrowRight size={18} />
            </a>
            <a 
              href="#contact"
              className="inline-flex items-center space-x-2 bg-slate-800 hover:bg-slate-700 text-white px-6 py-3 rounded-xl transition-all border border-slate-700 font-bold"
            >
              <Mail size={18} />
              <span>Contact Me</span>
            </a>
          </div>

          <div className="flex flex-wrap items-center gap-3 pt-6">
            <span className="px-3 py-1 bg-slate-800 border border-slate-700/50 rounded-full text-xs text-slate-300">27卒 神戸電子 AIシステム開発</span>
            <span className="px-3 py-1 bg-slate-800 border border-slate-700/50 rounded-full text-xs text-slate-300">JLPT N2</span>
            <span className="px-3 py-1 bg-slate-800 border border-slate-700/50 rounded-full text-xs text-slate-300">Myanmar → Japan</span>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative hidden md:block"
        >
          <div className="aspect-square max-w-md mx-auto relative group rounded-2xl overflow-hidden glass-panel border border-slate-700/50 shadow-2xl">
             <div className="absolute inset-0 bg-gradient-to-tr from-sky-500/20 to-transparent z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
             <img 
               src="/profile.png" 
               alt="Zay Yar Phyo" 
               className="object-cover w-full h-full rounded-2xl ring-1 ring-white/10"
             />
          </div>
          
          {/* Decorative elements */}
          <div className="absolute -top-6 -right-6 p-4 bg-slate-800/80 backdrop-blur-md rounded-2xl border border-slate-700 shadow-xl animate-bounce" style={{ animationDuration: '3s' }}>
             <span className="font-mono text-sky-400 font-bold">{'</>'}</span>
          </div>
          <div className="absolute -bottom-6 -left-6 p-4 bg-slate-800/80 backdrop-blur-md rounded-2xl border border-slate-700 shadow-xl animate-bounce" style={{ animationDuration: '4s' }}>
             <span className="font-mono text-blue-400 font-bold">{'{}'}</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
