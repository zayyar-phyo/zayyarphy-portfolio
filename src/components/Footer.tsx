import { Github, Linkedin, Mail } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-slate-800 bg-slate-900 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center">
        
        <div className="mb-6 md:mb-0 text-center md:text-left">
          <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-sky-400 to-blue-500">
            ZYP.
          </span>
          <p className="text-slate-500 mt-2 text-[11px]">
            &copy; {currentYear} Zay Yar Phyo. Built with Excellence.
          </p>
        </div>

        <nav className="flex items-center space-x-6 mb-6 md:mb-0">
          <a href="#home" className="text-[11px] font-bold uppercase tracking-widest text-slate-500 hover:text-sky-400 transition-colors">Home</a>
          <a href="#about" className="text-[11px] font-bold uppercase tracking-widest text-slate-500 hover:text-sky-400 transition-colors">About</a>
          <a href="#skills" className="text-[11px] font-bold uppercase tracking-widest text-slate-500 hover:text-sky-400 transition-colors">Skills</a>
          <a href="#projects" className="text-[11px] font-bold uppercase tracking-widest text-slate-500 hover:text-sky-400 transition-colors">Projects</a>
        </nav>

        <div className="flex items-center space-x-4">
          <a href="https://github.com/ZayYarPhyo" target="_blank" rel="noreferrer" aria-label="GitHub" className="text-slate-400 hover:text-white transition-colors">
            <Github size={20} />
          </a>
          <a href="https://linkedin.com/in/zayyarphyo" target="_blank" rel="noreferrer" aria-label="LinkedIn" className="text-slate-400 hover:text-white transition-colors">
            <Linkedin size={20} />
          </a>
          <a href="mailto:zyp.yar.phy@gmail.com" aria-label="Email" className="text-slate-400 hover:text-white transition-colors">
            <Mail size={20} />
          </a>
        </div>

      </div>
    </footer>
  );
}
