/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { 
  Search,
  GitBranch,
  Monitor,
  Calculator, 
  BarChart3, 
  ShieldCheck, 
  Database, 
  Mail, 
  Phone, 
  MapPin, 
  ChevronRight,
  CheckCircle2,
  Menu,
  X,
  Layers,
  Box,
  FileText,
  ArrowRightLeft
} from "lucide-react";
import { useState } from "react";

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const methodology = [
    {
      phase: "1. The Diagnostic Phase",
      title: "The Clean Slate",
      description: "We begin by listening to your data. We perform a forensic review to identify 'Technical Debt'—those small errors that have compounded over time. We don't just fix the entries; we resolve the underlying logic.",
      points: [
        { name: "COA Harmonization", desc: "Creating a unified Chart of Accounts that speaks one language across your entire organization." },
        { name: "Master Data Sanitization", desc: "Standardizing your Item and Vendor masters to eliminate the 'duplicates' that distort your true margins." }
      ],
      icon: <Search className="w-8 h-8 text-brand-emerald" />,
    },
    {
      phase: "2. The Synthesis of Complexity",
      title: "Consolidation Protocol",
      description: "For organizations managing multiple units, the burden of consolidation can be overwhelming. We act as your specialized consolidation partner, weaving together disparate data streams into a single, high-fidelity financial narrative.",
      points: [
        { name: "Multi Unit Consolidation Protocol", desc: "A proven framework for merging complex, decentralized units into one 'Audit-Ready' master file." },
        { name: "Inter-Unit Symmetry", desc: "Ensuring that internal transactions cancel out perfectly, leaving only the truth of your group’s performance." }
      ],
      icon: <GitBranch className="w-8 h-8 text-brand-emerald" />,
    },
    {
      phase: "3. The Output",
      title: "Clarity as a Service",
      description: "Our final deliverable is not just a report; it is certainty. We provide automated, logic-driven insights that tell you exactly where you stand, formatted for immediate executive review.",
      points: [
        { name: "Bespoke MIS Dashboards", desc: "Automated insights formatted for immediate executive review." },
        { name: "Software-Agnostic Stability", desc: "Whether your journey takes you through Tally, Zoho, or Xero, our accounting logic remains your constant anchor." }
      ],
      icon: <Monitor className="w-8 h-8 text-brand-emerald" />,
    },
  ];

  const comparisons = [
    { challenge: "Data Fragmentation", resolution: "We provide a single, unified version of financial truth." },
    { challenge: "Reporting Delays", resolution: "We engineer automated logic to turn weeks of work into hours." },
    { challenge: "Audit Anxiety", resolution: "We build 'Audit-Ready' systems that stand up to the highest scrutiny." }
  ];

  const softwareSpecialists = [
    { name: "Xero", color: "text-sky-500" },
    { name: "Tally Prime", color: "text-amber-600" },
    { name: "Zoho", color: "text-red-600" }
  ];

  const features = [
    "Small Business Experts",
    "Individual Professional Services",
    "Startup Financial Scaling",
    "Medium Enterprise Solutions",
    "High-Complexity Cleanup",
    "Global Financial Architecture"
  ];

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900 selection:bg-emerald-100 selection:text-emerald-900">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/90 backdrop-blur-md border-b border-slate-200 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-20 items-center">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-brand rounded-xl flex items-center justify-center shadow-lg">
                <span className="text-white font-bold text-xl">D</span>
              </div>
              <div className="flex flex-col leading-none">
                <span className="text-xl font-extrabold tracking-tight text-brand-navy">
                  Decimerix
                </span>
                <span className="text-[10px] font-bold tracking-[0.3em] text-brand-green uppercase">
                  Finalutions
                </span>
              </div>
            </div>
            
            {/* Desktop Nav */}
            <div className="hidden md:flex items-center gap-8">
              <a href="#services" className="text-sm font-semibold text-slate-600 hover:text-brand-emerald transition-colors">Services</a>
              <a href="#about" className="text-sm font-semibold text-slate-600 hover:text-brand-emerald transition-colors">About</a>
              <a href="#contact" className="text-sm font-semibold text-slate-600 hover:text-brand-emerald transition-colors">Contact</a>
              <button className="bg-brand-navy text-white px-6 py-2.5 rounded-xl text-sm font-bold hover:bg-slate-800 transition-all shadow-md">
                Get Started
              </button>
            </div>

            {/* Mobile Menu Toggle */}
            <div className="md:hidden">
              <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="p-2 text-slate-600">
                {isMenuOpen ? <X /> : <Menu />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Nav */}
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:hidden bg-white border-b border-slate-200 px-4 py-6 space-y-4 shadow-xl"
          >
            <a href="#services" className="block text-lg font-bold text-slate-600" onClick={() => setIsMenuOpen(false)}>Services</a>
            <a href="#about" className="block text-lg font-bold text-slate-600" onClick={() => setIsMenuOpen(false)}>About</a>
            <a href="#contact" className="block text-lg font-bold text-slate-600" onClick={() => setIsMenuOpen(false)}>Contact</a>
            <button className="w-full bg-brand-navy text-white py-4 rounded-xl font-bold">
              Get Started
            </button>
          </motion.div>
        )}
      </nav>

      <main className="pt-20">
        {/* Hero Section */}
        <section className="relative overflow-hidden py-24 lg:py-40 bg-white">
          <div className="absolute top-0 right-0 w-1/3 h-full bg-emerald-50/50 -skew-x-12 translate-x-20 hidden lg:block"></div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-50 border border-emerald-100 text-brand-green text-xs font-bold uppercase tracking-widest mb-8">
                  Restoring Order. Ensuring Integrity.
                </div>
                <h1 className="text-5xl lg:text-7xl font-black text-brand-navy leading-[1.05] mb-8 tracking-tight">
                  In a landscape of data noise, we provide the <span className="text-brand-emerald">silence</span> of a perfectly balanced ledger.
                </h1>
                <p className="text-xl text-slate-600 mb-10 max-w-xl leading-relaxed font-medium">
                  At Decimerix Finalutions, we specialize in the "Rescue and Restore" of corporate accounting systems for Individuals, Startups, and SMEs.
                </p>
                <div className="flex flex-col sm:flex-row gap-5">
                  <button className="bg-brand-navy text-white px-10 py-5 rounded-2xl font-black text-lg hover:bg-slate-800 transition-all shadow-xl shadow-slate-200 flex items-center justify-center gap-3">
                    Consult Our Experts <ChevronRight className="w-6 h-6" />
                  </button>
                  <button className="bg-white text-brand-navy border-2 border-slate-100 px-10 py-5 rounded-2xl font-black text-lg hover:border-brand-emerald transition-all flex items-center justify-center">
                    Our Services
                  </button>
                </div>
                
                <div className="mt-12 pt-12 border-t border-slate-100">
                  <p className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-6">Software Specialists In</p>
                  <div className="flex flex-wrap gap-8 items-center opacity-70 grayscale hover:grayscale-0 transition-all">
                    {softwareSpecialists.map((sw) => (
                      <span key={sw.name} className={`text-xl font-black ${sw.color}`}>{sw.name}</span>
                    ))}
                  </div>
                </div>
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="relative"
              >
                <div className="relative z-10 rounded-[2.5rem] overflow-hidden shadow-2xl border-8 border-white">
                  <img 
                    src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1000" 
                    alt="Financial Data Analysis" 
                    className="w-full h-[500px] object-cover"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-tr from-brand-navy/40 to-transparent"></div>
                </div>
                {/* Floating Stats Card */}
                <div className="absolute -bottom-10 -left-10 bg-white p-8 rounded-3xl shadow-2xl border border-slate-100 z-20 hidden sm:block">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 bg-emerald-100 rounded-2xl flex items-center justify-center">
                      <BarChart3 className="w-6 h-6 text-brand-emerald" />
                    </div>
                    <div>
                      <p className="text-slate-400 text-xs font-bold uppercase tracking-wider">Efficiency Gain</p>
                      <p className="text-2xl font-black text-brand-navy">+40%</p>
                    </div>
                  </div>
                  <p className="text-slate-500 text-sm font-medium">Average system optimization result</p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Methodology Section */}
        <section id="services" className="py-32 bg-slate-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-24">
              <h2 className="text-sm font-black text-brand-emerald uppercase tracking-[0.3em] mb-6">The Decimerix Methodology</h2>
              <p className="text-4xl lg:text-5xl font-black text-brand-navy mb-8 leading-tight">Systematic Restoration of Structural Integrity</p>
              <div className="w-24 h-1.5 bg-brand-emerald mx-auto rounded-full"></div>
            </div>

            <div className="grid md:grid-cols-3 gap-10">
              {methodology.map((item, idx) => (
                <motion.div 
                  key={idx}
                  whileHover={{ y: -15 }}
                  className="group p-10 rounded-[2.5rem] bg-white border border-slate-100 shadow-sm hover:shadow-2xl hover:border-brand-emerald/20 transition-all duration-500"
                >
                  <div className="mb-8 w-16 h-16 bg-slate-50 rounded-2xl flex items-center justify-center group-hover:bg-brand-emerald group-hover:text-white transition-colors duration-500">
                    {item.icon}
                  </div>
                  <p className="text-xs font-black text-brand-emerald uppercase tracking-widest mb-4">{item.phase}</p>
                  <h3 className="text-2xl font-black text-brand-navy mb-6 leading-tight">{item.title}</h3>
                  <p className="text-slate-500 leading-relaxed font-medium mb-8">{item.description}</p>
                  <div className="space-y-6">
                    {item.points.map((point, i) => (
                      <div key={i} className="space-y-1">
                        <div className="flex items-center gap-3">
                          <div className="w-1.5 h-1.5 bg-brand-emerald rounded-full"></div>
                          <span className="text-brand-navy font-black text-sm uppercase tracking-wide">{point.name}</span>
                        </div>
                        <p className="text-slate-400 text-xs font-medium pl-4 leading-relaxed">{point.desc}</p>
                      </div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Comparison Section */}
        <section className="py-32 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-24 items-center">
              <div>
                <h2 className="text-sm font-black text-brand-emerald uppercase tracking-[0.3em] mb-6">Why Entrust Your Books to Decimerix?</h2>
                <h3 className="text-4xl lg:text-5xl font-black text-brand-navy mb-10 leading-tight">We Resolve the Friction of Complexity.</h3>
                <p className="text-slate-600 text-xl mb-12 leading-relaxed">
                  Business growth often brings unintended complexity. Systems that worked yesterday can become the bottlenecks of today, leading to fragmented reporting and a general loss of financial visibility.
                </p>
                <div className="space-y-6">
                  {comparisons.map((item, i) => (
                    <div key={i} className="flex flex-col sm:flex-row sm:items-center gap-6 p-8 rounded-3xl bg-slate-50 border border-slate-100 hover:border-brand-emerald transition-all">
                      <div className="sm:w-1/3">
                        <p className="text-xs font-black text-slate-400 uppercase tracking-widest mb-1">The Challenge</p>
                        <p className="text-brand-navy font-black text-lg">{item.challenge}</p>
                      </div>
                      <div className="hidden sm:block w-px h-12 bg-slate-200"></div>
                      <div className="sm:w-2/3">
                        <p className="text-xs font-black text-brand-emerald uppercase tracking-widest mb-1">The Decimerix Resolution</p>
                        <p className="text-slate-600 font-medium">{item.resolution}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="relative">
                <div className="absolute inset-0 bg-brand-emerald/5 rounded-[3rem] -rotate-3"></div>
                <div className="relative bg-brand-navy p-12 rounded-[3.5rem] shadow-2xl overflow-hidden">
                  <div className="absolute top-0 right-0 w-64 h-64 bg-brand-emerald/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl"></div>
                  <h4 className="text-brand-emerald font-black text-sm uppercase tracking-[0.3em] mb-8">A Note on Financial Peace of Mind</h4>
                  <p className="text-white text-2xl font-medium leading-relaxed mb-10 italic">
                    "We understand the pressure of managing multi-unit operations and the anxiety of audit deadlines. Our role is to step into the complexity and systematically restore the structural integrity of your books."
                  </p>
                  <div className="flex items-center gap-6">
                    <div className="w-16 h-16 rounded-full bg-gradient-brand flex items-center justify-center text-white font-black text-2xl">D</div>
                    <div>
                      <p className="text-white font-black uppercase tracking-widest">Decimerix Finalutions</p>
                      <p className="text-brand-emerald text-xs font-bold uppercase tracking-widest">Strategic Financial Architecture</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-32 bg-brand-navy relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
            <div className="absolute top-0 left-0 w-96 h-96 bg-brand-emerald rounded-full blur-[120px]"></div>
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-brand-emerald rounded-full blur-[120px]"></div>
          </div>
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid lg:grid-cols-2 gap-24 items-center">
              <div>
                <h2 className="text-sm font-black text-brand-emerald uppercase tracking-[0.3em] mb-6">Why Decimerix?</h2>
                <h3 className="text-4xl lg:text-5xl font-black text-white mb-10 leading-tight">Strategic Focus: High-Complexity Cleanup.</h3>
                <p className="text-slate-300 text-xl mb-12 leading-relaxed">
                  You have built a business of value. We are here to ensure that value is accurately reflected, protected, and prepared for the next stage of your journey. Let us handle the complexity, so you can return to your core mission.
                </p>
                
                <div className="grid sm:grid-cols-2 gap-6 mb-12">
                  {features.map((feature, i) => (
                    <div key={i} className="flex items-center gap-4 bg-white/5 p-4 rounded-2xl border border-white/10">
                      <CheckCircle2 className="w-6 h-6 text-brand-emerald flex-shrink-0" />
                      <span className="text-white font-bold text-sm uppercase tracking-wider">{feature}</span>
                    </div>
                  ))}
                </div>

                <button className="bg-brand-emerald text-white px-8 py-4 rounded-2xl font-black text-lg hover:bg-emerald-600 transition-all flex items-center gap-3">
                  Learn Our Methodology <ArrowRightLeft className="w-5 h-5" />
                </button>
              </div>

              <div className="relative">
                <div className="bg-white/10 backdrop-blur-md p-10 rounded-[3rem] border border-white/20">
                  <div className="space-y-8">
                    <div className="flex gap-6 items-start">
                      <div className="w-14 h-14 bg-brand-emerald rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg shadow-emerald-900/40">
                        <Database className="w-7 h-7 text-white" />
                      </div>
                      <div>
                        <h4 className="text-white font-black text-xl mb-2 uppercase tracking-tight">Data Integrity</h4>
                        <p className="text-slate-400 font-medium">Ensuring every transaction is mapped correctly for GST/TDS compliance.</p>
                      </div>
                    </div>
                    <div className="flex gap-6 items-start">
                      <div className="w-14 h-14 bg-brand-emerald rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg shadow-emerald-900/40">
                        <ShieldCheck className="w-7 h-7 text-white" />
                      </div>
                      <div>
                        <h4 className="text-white font-black text-xl mb-2 uppercase tracking-tight">Audit Readiness</h4>
                        <p className="text-slate-400 font-medium">Optimizing your hierarchy to make internal and external audits seamless.</p>
                      </div>
                    </div>
                    <div className="flex gap-6 items-start">
                      <div className="w-14 h-14 bg-brand-emerald rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg shadow-emerald-900/40">
                        <Calculator className="w-7 h-7 text-white" />
                      </div>
                      <div>
                        <h4 className="text-white font-black text-xl mb-2 uppercase tracking-tight">Accurate Valuation</h4>
                        <p className="text-slate-400 font-medium">Fixing UOM errors and SKU rationalization for precise inventory books.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-32 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-slate-50 rounded-[4rem] overflow-hidden shadow-sm border border-slate-100">
              <div className="grid lg:grid-cols-2">
                <div className="p-16 lg:p-24 bg-brand-navy text-white">
                  <h2 className="text-4xl lg:text-5xl font-black mb-8 leading-tight">Ready to Transform Your Systems?</h2>
                  <p className="text-slate-400 text-xl mb-16 leading-relaxed font-medium">
                    Our team of specialists is ready to help you clean up your accounts and inventory masters.
                  </p>
                  
                  <div className="space-y-10">
                    <div className="flex items-center gap-8 group cursor-pointer">
                      <div className="w-16 h-16 rounded-3xl bg-white/5 flex items-center justify-center group-hover:bg-brand-emerald transition-all duration-500">
                        <Mail className="w-7 h-7 text-brand-emerald group-hover:text-white" />
                      </div>
                      <div>
                        <p className="text-slate-500 text-xs font-black uppercase tracking-[0.2em] mb-1">Private Inquiry</p>
                        <p className="text-white font-black text-xl tracking-tight">info@decimerix.com</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-8 group cursor-pointer">
                      <div className="w-16 h-16 rounded-3xl bg-white/5 flex items-center justify-center group-hover:bg-brand-emerald transition-all duration-500">
                        <Phone className="w-7 h-7 text-brand-emerald group-hover:text-white" />
                      </div>
                      <div>
                        <p className="text-slate-500 text-xs font-black uppercase tracking-[0.2em] mb-1">Direct Line</p>
                        <p className="text-white font-black text-xl tracking-tight">+1 (555) 123-4567</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="p-16 lg:p-24">
                  <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>
                    <div className="grid sm:grid-cols-2 gap-8">
                      <div className="space-y-3">
                        <label className="text-xs font-black text-slate-400 uppercase tracking-[0.2em]">Company Name</label>
                        <input type="text" className="w-full bg-white border-2 border-slate-100 rounded-2xl px-6 py-4 text-slate-900 focus:outline-none focus:border-brand-emerald transition-all font-bold" placeholder="Acme Corp" />
                      </div>
                      <div className="space-y-3">
                        <label className="text-xs font-black text-slate-400 uppercase tracking-[0.2em]">Contact Email</label>
                        <input type="email" className="w-full bg-white border-2 border-slate-100 rounded-2xl px-6 py-4 text-slate-900 focus:outline-none focus:border-brand-emerald transition-all font-bold" placeholder="ceo@acme.com" />
                      </div>
                    </div>
                    <div className="space-y-3">
                      <label className="text-xs font-black text-slate-400 uppercase tracking-[0.2em]">Primary Challenge</label>
                      <select className="w-full bg-white border-2 border-slate-100 rounded-2xl px-6 py-4 text-slate-900 focus:outline-none focus:border-brand-emerald transition-all font-bold appearance-none">
                        <option>COA Cleanup</option>
                        <option>Inventory Master Cleanup</option>
                        <option>Financial Reporting</option>
                        <option>System Migration</option>
                      </select>
                    </div>
                    <div className="space-y-3">
                      <label className="text-xs font-black text-slate-400 uppercase tracking-[0.2em]">Project Details</label>
                      <textarea rows={4} className="w-full bg-white border-2 border-slate-100 rounded-2xl px-6 py-4 text-slate-900 focus:outline-none focus:border-brand-emerald transition-all font-bold" placeholder="Tell us about your current financial system..."></textarea>
                    </div>
                    <button className="w-full bg-brand-navy text-white py-5 rounded-2xl font-black text-xl hover:bg-slate-800 transition-all shadow-xl shadow-slate-200">
                      Request System Audit
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Tags Section */}
        <section className="py-12 bg-slate-50 border-t border-slate-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-wrap justify-center gap-4">
              {[
                "#ACCOUNTING_CLEANUP",
                "#INVENTORY_MANAGEMENT",
                "#BOOKKEEPING",
                "#CHART_OF_ACCOUNTS",
                "#FINANCIAL_REPORTING"
              ].map((tag) => (
                <span key={tag} className="px-6 py-2 rounded-full border-2 border-slate-200 text-slate-400 text-xs font-black tracking-widest hover:border-brand-emerald hover:text-brand-emerald transition-all cursor-default">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-12">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-gradient-brand rounded-2xl flex items-center justify-center">
                <span className="text-white font-black text-2xl">D</span>
              </div>
              <div className="flex flex-col leading-none">
                <span className="text-2xl font-black tracking-tight">Decimerix</span>
                <span className="text-[10px] font-black tracking-[0.4em] text-brand-emerald uppercase">Finalutions</span>
                <span className="text-[8px] font-bold text-slate-500 uppercase tracking-widest mt-2">Strategic Financial Architecture</span>
              </div>
            </div>
            
            <div className="flex flex-col items-center md:items-start gap-4">
              <p className="text-xs font-black text-slate-400 uppercase tracking-widest">Digital Hub</p>
              <div className="flex flex-wrap justify-center gap-10 text-sm font-black uppercase tracking-widest text-white">
                <a href="#" className="hover:text-brand-emerald transition-colors">www.decimerix.com</a>
              </div>
            </div>

            <p className="text-sm text-slate-500 font-bold uppercase tracking-widest">
              © 2026 Decimerix Finalutions
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
