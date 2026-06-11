import React, { useState, FormEvent } from 'react';
import { motion } from 'motion/react';
import { Mail, Github, Linkedin, Send, CheckCircle2 } from 'lucide-react';
import SectionTitle from './SectionTitle';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
      
      setTimeout(() => setIsSuccess(false), 5000);
    }, 1500);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section id="contact" className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle 
          title="Get In Touch" 
          subtitle="I'm currently seeking opportunities in software engineering and web development." 
        />

        <div className="mt-16 grid md:grid-cols-12 gap-12">
          
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="md:col-span-5 space-y-8"
          >
            <div className="bg-slate-800 border border-slate-700/50 p-6 rounded-2xl shadow-lg">
              <h3 className="text-2xl font-bold text-white mb-6">Let's Connect</h3>
              <p className="text-slate-400 mb-8 leading-relaxed">
                Whether you have a question, a project idea, or just want to say hi, my inbox is always open. I'll try my best to get back to you!
              </p>
              
              <div className="space-y-6">
                <a href="mailto:kd1425172@st.kobedenshi.ac.jp" className="flex items-center space-x-4 text-slate-300 hover:text-sky-400 transition-colors group">
                  <div className="w-12 h-12 bg-slate-700/50 rounded-xl flex items-center justify-center group-hover:bg-sky-500/10 transition-colors">
                    <Mail size={20} />
                  </div>
                  <div>
                    <span className="block text-sm text-slate-500 font-medium">Email</span>
                    <span className="font-medium">kd1425172@st.kobedenshi.ac.jp </span>
                  </div>
                </a>
                
                <a href="https://github.com/zayyar-phyo" target="_blank" rel="noreferrer" className="flex items-center space-x-4 text-slate-300 hover:text-sky-400 transition-colors group">
                  <div className="w-12 h-12 bg-slate-700/50 rounded-xl flex items-center justify-center group-hover:bg-sky-500/10 transition-colors">
                    <Github size={20} />
                  </div>
                  <div>
                    <span className="block text-sm text-slate-500 font-medium">GitHub</span>
                    <span className="font-medium">github.com/zayyar-phyo</span>
                  </div>
                </a>
                
                <a href="https://www.linkedin.com/in/zay-yar-phyo-77b7541a3/" target="_blank" rel="noreferrer" className="flex items-center space-x-4 text-slate-300 hover:text-sky-400 transition-colors group">
                  <div className="w-12 h-12 bg-slate-700/50 rounded-xl flex items-center justify-center group-hover:bg-sky-500/10 transition-colors">
                    <Linkedin size={20} />
                  </div>
                  <div>
                    <span className="block text-sm text-slate-500 font-medium">LinkedIn</span>
                    <span className="font-medium">linkedin.com/in/zayyarphyo</span>
                  </div>
                </a>
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="md:col-span-7 bg-slate-800 border border-slate-700/50 rounded-2xl p-6 shadow-lg"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium text-slate-300">Name</label>
                  <input 
                    type="text" 
                    id="name" 
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full bg-slate-900/50 border border-slate-700/50 rounded-xl px-4 py-3 text-slate-100 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-sky-500/50 focus:border-sky-500 transition-all shadow-inner"
                    placeholder="John Doe"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium text-slate-300">Email</label>
                  <input 
                    type="email" 
                    id="email" 
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full bg-slate-900/50 border border-slate-700/50 rounded-xl px-4 py-3 text-slate-100 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-sky-500/50 focus:border-sky-500 transition-all shadow-inner"
                    placeholder="john@example.com"
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <label htmlFor="subject" className="text-sm font-medium text-slate-300">Subject</label>
                <input 
                  type="text" 
                  id="subject" 
                  name="subject"
                  required
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full bg-slate-900/50 border border-slate-700/50 rounded-xl px-4 py-3 text-slate-100 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-sky-500/50 focus:border-sky-500 transition-all shadow-inner"
                  placeholder="Job Opportunity"
                />
              </div>
              
              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium text-slate-300">Message</label>
                <textarea 
                  id="message" 
                  name="message"
                  required
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full bg-slate-900/50 border border-slate-700/50 rounded-xl px-4 py-3 text-slate-100 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-sky-500/50 focus:border-sky-500 transition-all shadow-inner resize-none"
                  placeholder="Your message..."
                />
              </div>

              <button 
                type="submit" 
                disabled={isSubmitting}
                className={`w-full flex items-center justify-center space-x-2 py-4 rounded-xl font-medium transition-all ${
                  isSuccess 
                    ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/50' 
                    : 'bg-sky-500 hover:bg-sky-400 text-slate-950 font-bold shadow-lg shadow-sky-500/20'
                }`}
              >
                {isSubmitting ? (
                  <span className="w-6 h-6 border-2 border-white/20 border-t-white rounded-full animate-spin" />
                ) : isSuccess ? (
                  <>
                    <CheckCircle2 size={20} />
                    <span>Message Sent!</span>
                  </>
                ) : (
                  <>
                    <Send size={20} />
                    <span>Send Message</span>
                  </>
                )}
              </button>
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
