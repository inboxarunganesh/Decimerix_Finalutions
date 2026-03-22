/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion, AnimatePresence } from "motion/react";
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
  ChevronRight,
  ChevronUp,
  CheckCircle2,
  Menu,
  X,
  ArrowRightLeft,
  Building2,
  MessageSquare,
  ClipboardList,
  Sparkles,
  Send,
} from "lucide-react";
import { useState, useEffect } from "react";

// --- Scroll To Top Component ---
const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 400) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          className="fixed bottom-8 right-8 z-[60]"
        >
          <button
            onClick={scrollToTop}
            className="bg-brand-navy hover:bg-brand-emerald text-white p-4 rounded-2xl shadow-2xl transition-all hover:-translate-y-1 active:scale-95 border border-white/10 group"
            aria-label="Scroll to top"
          >
            <ChevronUp size={24} strokeWidth={3} />
            <span className="absolute -top-10 left-1/2 -translate-x-1/2 bg-slate-800 text-white text-[10px] px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap font-black uppercase tracking-widest pointer-events-none">
              Back to Top
            </span>
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // --- Form Logic States ---
  const [result, setResult] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  // --- Form Submission Handler ---
  const onSubmit = async (event) => {
    event.preventDefault();
    setIsSubmitting(true);
    setResult("Sending....");

    const formData = new FormData(event.target);

    // Form Configuration
    formData.append("access_key", "0f74e943-b84e-4067-85b6-8f498bcf68da");
    formData.append("subject", `New Enquiry from ${formData.get("company")}`);
    formData.append("from_name", "Decimerix Contact Form");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        setResult("Form Submitted Successfully!");
        event.target.reset();
      } else {
        console.log("Error", data);
        setResult(data.message);
      }
    } catch (error) {
      setResult("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const methodology = [
    {
      phase: "1. The Diagnostic Phase",
      title: "The Clean Slate",
      description:
        "We begin by listening to your data. We perform a forensic review to identify 'Technical Debt'—those small errors that have compounded over time. We don't just fix the entries; we resolve the underlying logic.",
      points: [
        {
          name: "COA Harmonization",
          desc: "Creating a unified Chart of Accounts that speaks one language across your entire organization.",
        },
        {
          name: "Master Data Sanitization",
          desc: "Standardizing your Item and Vendor masters to eliminate the 'duplicates' that distort your true margins.",
        },
      ],
      icon: <Search className="w-8 h-8 text-brand-emerald" />,
    },
    {
      phase: "2. The Synthesis of Complexity",
      title: "Consolidation Protocol",
      description:
        "For organizations managing multiple units, the burden of consolidation can be overwhelming. We act as your specialized consolidation partner, weaving together disparate data streams into a single, high-fidelity financial narrative.",
      points: [
        {
          name: "Multi Unit Consolidation Protocol",
          desc: "A proven framework for merging complex, decentralized units into one 'Audit-Ready' master file.",
        },
        {
          name: "Inter-Unit Symmetry",
          desc: "Ensuring that internal transactions cancel out perfectly, leaving only the truth of your group’s performance.",
        },
      ],
      icon: <GitBranch className="w-8 h-8 text-brand-emerald" />,
    },
    {
      phase: "3. The Output",
      title: "Clarity as a Service",
      description:
        "Our final deliverable is not just a report; it is certainty. We provide automated, logic-driven insights that tell you exactly where you stand, formatted for immediate executive review.",
      points: [
        {
          name: "Bespoke MIS Dashboards",
          desc: "Automated insights formatted for immediate executive review.",
        },
        {
          name: "Software-Agnostic Stability",
          desc: "Whether your journey takes you through Tally, Zoho, or Xero, our accounting logic remains your constant anchor.",
        },
      ],
      icon: <Monitor className="w-8 h-8 text-brand-emerald" />,
    },
  ];

  const comparisons = [
    {
      challenge: "Data Fragmentation",
      resolution: "We provide a single, unified version of financial truth.",
    },
    {
      challenge: "Reporting Delays",
      resolution:
        "We engineer automated logic to turn weeks of work into hours.",
    },
    {
      challenge: "Audit Anxiety",
      resolution:
        "We build 'Audit-Ready' systems that stand up to the highest scrutiny.",
    },
  ];

  const softwareSpecialists = [
    { name: "Xero", color: "text-sky-500" },
    { name: "Tally Prime", color: "text-amber-600" },
    { name: "Zoho", color: "text-red-600" },
  ];

  const features = [
    "Small Business Experts",
    "Individual Professional Services",
    "Startup Financial Scaling",
    "Medium Enterprise Solutions",
    "High-Complexity Cleanup",
    "Global Financial Architecture",
  ];

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900 selection:bg-emerald-100 selection:text-emerald-900">
      <ScrollToTop />

      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/90 backdrop-blur-md border-b border-slate-200 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-20 items-center">
            <div className="flex items-center">
              <a href="/" className="flex items-center">
                <img
                  src="/Logo.png"
                  alt="Decimerix Finalutions"
                  className="h-12 w-auto object-contain"
                />
              </a>
            </div>

            <div className="hidden md:flex items-center gap-8">
              <a
                href="#about"
                className="text-sm font-semibold text-slate-600 hover:text-brand-emerald transition-colors"
              >
                About
              </a>
              <a
                href="#services"
                className="text-sm font-semibold text-slate-600 hover:text-brand-emerald transition-colors"
              >
                Services
              </a>
              <a
                href="#contact"
                className="bg-brand-navy text-white px-6 py-2.5 rounded-xl text-sm font-bold hover:bg-slate-800 transition-all shadow-md"
              >
                Contact
              </a>
            </div>

            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="p-2 text-slate-600"
              >
                {isMenuOpen ? <X /> : <Menu />}
              </button>
            </div>
          </div>
        </div>

        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:hidden bg-white border-b border-slate-200 px-4 py-6 space-y-4 shadow-xl"
          >
            <a
              href="#about"
              className="block text-lg font-bold text-slate-600"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </a>
            <a
              href="#services"
              className="block text-lg font-bold text-slate-600"
              onClick={() => setIsMenuOpen(false)}
            >
              Services
            </a>
            <a
              href="#contact"
              className="block w-full text-center bg-brand-navy text-white py-4 rounded-xl font-bold"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </a>
          </motion.div>
        )}
      </nav>

      <main className="pt-20">
        {/* Hero Section */}
        <section className="relative overflow-hidden py-12 lg:py-20 bg-white">
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
                  In a landscape of data noise, we provide the{" "}
                  <span className="text-brand-emerald">silence</span> of a
                  perfectly balanced ledger.
                </h1>
                <p className="text-xl text-slate-600 mb-10 max-w-xl leading-relaxed font-medium">
                  At Decimerix Finalutions, we specialize in the "Rescue and
                  Restore" of corporate accounting systems for Individuals,
                  Startups, and SMEs.
                </p>

                <div className="mt-8 pt-12 border-t border-slate-100">
                  <p className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-6">
                    Software Specialists In
                  </p>
                  <div className="flex flex-wrap gap-8 items-center opacity-70 grayscale hover:grayscale-0 transition-all">
                    {softwareSpecialists.map((sw) => (
                      <span
                        key={sw.name}
                        className={`text-xl font-black ${sw.color}`}
                      >
                        {sw.name}
                      </span>
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
                    src="/Hero_image.jpg"
                    alt="Financial"
                    className="w-full h-[450px] object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-tr from-brand-navy/40 to-transparent"></div>
                </div>
                <div className="absolute -bottom-6 -left-10 bg-white p-8 rounded-3xl shadow-2xl border border-slate-100 z-20 hidden sm:block">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 bg-emerald-100 rounded-2xl flex items-center justify-center">
                      <BarChart3 className="w-6 h-6 text-brand-emerald" />
                    </div>
                    <div>
                      <p className="text-slate-400 text-xs font-bold uppercase tracking-wider">
                        Efficiency Gain
                      </p>
                      <p className="text-2xl font-black text-brand-navy">
                        +80%
                      </p>
                    </div>
                  </div>
                  <p className="text-slate-500 text-sm font-medium">
                    Average system optimization result
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Methodology Section */}
        <section id="services" className="py-24 bg-slate-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-20">
              <h2 className="text-sm font-black text-brand-emerald uppercase tracking-[0.3em] mb-6">
                The Decimerix Methodology
              </h2>
              <p className="text-4xl lg:text-5xl font-black text-brand-navy mb-8 leading-tight">
                Systematic Restoration of Structural Integrity
              </p>
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
                  <p className="text-xs font-black text-brand-emerald uppercase tracking-widest mb-4">
                    {item.phase}
                  </p>
                  <h3 className="text-2xl font-black text-brand-navy mb-6 leading-tight">
                    {item.title}
                  </h3>
                  <p className="text-slate-500 leading-relaxed font-medium mb-8">
                    {item.description}
                  </p>
                  <div className="space-y-6">
                    {item.points.map((point, i) => (
                      <div key={i} className="space-y-1">
                        <div className="flex items-center gap-3">
                          <div className="w-1.5 h-1.5 bg-brand-emerald rounded-full"></div>
                          <span className="text-brand-navy font-black text-sm uppercase tracking-wide">
                            {point.name}
                          </span>
                        </div>
                        <p className="text-slate-400 text-xs font-medium pl-4 leading-relaxed">
                          {point.desc}
                        </p>
                      </div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Comparison Section */}
        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-20 items-center">
              <div>
                <h2 className="text-sm font-black text-brand-emerald uppercase tracking-[0.3em] mb-6">
                  Why Entrust Your Books to Decimerix?
                </h2>
                <h3 className="text-4xl lg:text-5xl font-black text-brand-navy mb-10 leading-tight">
                  We Resolve the Friction of Complexity.
                </h3>
                <p className="text-slate-600 text-xl mb-12 leading-relaxed">
                  Business growth often brings unintended complexity. Systems
                  that worked yesterday can become the bottlenecks of today,
                  leading to fragmented reporting and a general loss of
                  financial visibility.
                </p>
                <div className="space-y-6">
                  {comparisons.map((item, i) => (
                    <div
                      key={i}
                      className="flex flex-col sm:flex-row sm:items-center gap-6 p-8 rounded-3xl bg-slate-50 border border-slate-100 hover:border-brand-emerald transition-all"
                    >
                      <div className="sm:w-1/3">
                        <p className="text-xs font-black text-slate-400 uppercase tracking-widest mb-1">
                          The Challenge
                        </p>
                        <p className="text-brand-navy font-black text-lg">
                          {item.challenge}
                        </p>
                      </div>
                      <div className="hidden sm:block w-px h-12 bg-slate-200"></div>
                      <div className="sm:w-2/3">
                        <p className="text-xs font-black text-brand-emerald uppercase tracking-widest mb-1">
                          The Decimerix Resolution
                        </p>
                        <p className="text-slate-600 font-medium">
                          {item.resolution}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="relative">
                <div className="absolute inset-0 bg-brand-emerald/5 rounded-[3rem] -rotate-3"></div>
                <div className="relative bg-brand-navy p-12 rounded-[3.5rem] shadow-2xl overflow-hidden">
                  <div className="absolute top-0 right-0 w-64 h-64 bg-brand-emerald/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl"></div>
                  <h4 className="text-brand-emerald font-black text-sm uppercase tracking-[0.3em] mb-8">
                    A Note on Financial Peace of Mind
                  </h4>
                  <p className="text-white text-2xl font-medium leading-relaxed mb-10 italic">
                    "We understand the pressure of managing multi-unit
                    operations and the anxiety of audit deadlines. Our role is
                    to step into the complexity and systematically restore the
                    structural integrity of your books."
                  </p>
                  <div className="flex items-center gap-6">
                    <div>
                      <p className="text-white font-black uppercase tracking-widest">
                        Decimerix Finalutions
                      </p>
                      <p className="text-brand-emerald text-xs font-bold uppercase tracking-widest">
                        Strategic Financial Architecture
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section
          id="about"
          className="py-24 bg-slate-50 relative overflow-hidden"
        >
          <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
            <div className="absolute top-0 left-0 w-96 h-96 bg-brand-emerald rounded-full blur-[120px]"></div>
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-brand-emerald rounded-full blur-[120px]"></div>
          </div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid lg:grid-cols-2 gap-24 items-center">
              <div>
                <h2 className="text-sm font-black text-brand-emerald uppercase tracking-[0.3em] mb-6">
                  Why Decimerix?
                </h2>
                <h3 className="text-4xl lg:text-5xl font-black text-brand-navy mb-10 leading-tight">
                  Strategic Focus: High-Complexity Cleanup.
                </h3>
                <p className="text-slate-600 text-xl mb-12 leading-relaxed">
                  You have built a business of value. We are here to ensure that
                  value is accurately reflected, protected, and prepared for the
                  next stage of your journey. Let us handle the complexity, so
                  you can return to your core mission.
                </p>

                <div className="grid sm:grid-cols-2 gap-6 mb-12">
                  {features.map((feature, i) => (
                    <div
                      key={i}
                      className="flex items-center gap-4 bg-white p-4 rounded-2xl border border-slate-200"
                    >
                      <CheckCircle2 className="w-6 h-6 text-brand-emerald flex-shrink-0" />
                      <span className="text-brand-navy font-bold text-sm uppercase tracking-wider">
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="relative">
                <div className="bg-white p-10 rounded-[3rem] border border-slate-200 shadow-sm">
                  <div className="space-y-8">
                    <div className="flex gap-6 items-start">
                      <div className="w-14 h-14 bg-brand-emerald rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg shadow-emerald-900/40">
                        <Database className="w-7 h-7 text-white" />
                      </div>
                      <div>
                        <h4 className="text-brand-navy font-black text-xl mb-2 uppercase tracking-tight">
                          Data Integrity
                        </h4>
                        <p className="text-slate-500 font-medium">
                          Ensuring every transaction is mapped correctly for
                          GST/TDS compliance.
                        </p>
                      </div>
                    </div>
                    <div className="flex gap-6 items-start">
                      <div className="w-14 h-14 bg-brand-emerald rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg shadow-emerald-900/40">
                        <ShieldCheck className="w-7 h-7 text-white" />
                      </div>
                      <div>
                        <h4 className="text-brand-navy font-black text-xl mb-2 uppercase tracking-tight">
                          Audit Readiness
                        </h4>
                        <p className="text-slate-500 font-medium">
                          Optimizing your hierarchy to make internal and
                          external audits seamless.
                        </p>
                      </div>
                    </div>
                    <div className="flex gap-6 items-start">
                      <div className="w-14 h-14 bg-brand-emerald rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg shadow-emerald-900/40">
                        <Calculator className="w-7 h-7 text-white" />
                      </div>
                      <div>
                        <h4 className="text-brand-navy font-black text-xl mb-2 uppercase tracking-tight">
                          Accurate Valuation
                        </h4>
                        <p className="text-slate-500 font-medium">
                          Fixing UOM errors and SKU rationalization for precise
                          inventory books.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section
          id="contact"
          className="py-24 bg-brand-navy relative overflow-hidden"
        >
          <div className="absolute top-0 left-0 w-full h-full opacity-20 pointer-events-none">
            <div className="absolute top-1/4 -left-20 w-96 h-96 bg-brand-emerald rounded-full blur-[120px]"></div>
            <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-brand-emerald rounded-full blur-[120px]"></div>
          </div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid lg:grid-cols-12 gap-16 items-center">
              <div className="lg:col-span-5">
                <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-brand-emerald text-xs font-black uppercase tracking-[0.2em] mb-8">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-emerald opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-emerald"></span>
                  </span>
                  Accepting New Projects
                </div>
                <h2 className="text-5xl lg:text-6xl font-black text-white mb-8 leading-tight tracking-tight">
                  Secure Your{" "}
                  <span className="text-brand-emerald">Financial</span> Future.
                </h2>
                <p className="text-slate-400 text-xl mb-12 leading-relaxed font-medium">
                  We don't just "fix books"—we build structural integrity. Reach
                  out to our specialists to begin your system restoration.
                </p>

                <div className="grid gap-8">
                  <div className="flex items-center gap-6 group">
                    <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-brand-emerald transition-all duration-300">
                      <Mail className="w-6 h-6 text-brand-emerald group-hover:text-white" />
                    </div>
                    <div>
                      <p className="text-slate-500 text-[10px] font-black uppercase tracking-[0.2em] mb-1">
                        write to
                      </p>
                      <p className="text-white font-black text-xl hover:text-brand-emerald transition-colors cursor-pointer">
                        info@decimerix.com
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-6 group">
                    <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-brand-emerald transition-all duration-300">
                      <Phone className="w-6 h-6 text-brand-emerald group-hover:text-white" />
                    </div>
                    <div>
                      <p className="text-slate-500 text-[10px] font-black uppercase tracking-[0.2em] mb-1">
                        Expert Consultation
                      </p>
                      <p className="text-white font-black text-xl hover:text-brand-emerald transition-colors cursor-pointer">
                        +91 7603988816
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-7">
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="bg-white/5 backdrop-blur-xl border border-white/10 p-10 lg:p-14 rounded-[3.5rem] shadow-2xl relative"
                >
                  <form className="space-y-6" onSubmit={onSubmit}>
                    {/* Honeypot Spam Protection */}
                    <input
                      type="checkbox"
                      name="botcheck"
                      className="hidden"
                      style={{ display: "none" }}
                    />

                    <div className="grid sm:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">
                          Company Entity
                        </label>
                        <div className="relative group">
                          <Building2 className="absolute left-5 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-500 group-focus-within:text-brand-emerald transition-colors" />
                          <input
                            type="text"
                            name="company"
                            required
                            className="w-full bg-white/5 border border-white/10 rounded-2xl pl-14 pr-6 py-4 text-white placeholder:text-slate-600 focus:outline-none focus:border-brand-emerald focus:bg-white/10 transition-all font-bold"
                            placeholder="Acme Corp"
                          />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">
                          Work Email
                        </label>
                        <div className="relative group">
                          <Mail className="absolute left-5 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-500 group-focus-within:text-brand-emerald transition-colors" />
                          <input
                            type="email"
                            name="email"
                            required
                            className="w-full bg-white/5 border border-white/10 rounded-2xl pl-14 pr-6 py-4 text-white placeholder:text-slate-600 focus:outline-none focus:border-brand-emerald focus:bg-white/10 transition-all font-bold"
                            placeholder="ceo@acme.com"
                          />
                        </div>
                      </div>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">
                          Contact Number
                        </label>
                        <div className="relative group">
                          <Phone className="absolute left-5 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-500 group-focus-within:text-brand-emerald transition-colors" />
                          <input
                            type="tel"
                            name="phone"
                            required
                            className="w-full bg-white/5 border border-white/10 rounded-2xl pl-14 pr-6 py-4 text-white placeholder:text-slate-600 focus:outline-none focus:border-brand-emerald focus:bg-white/10 transition-all font-bold"
                            placeholder="+91 00000 00000"
                          />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">
                          Service Required
                        </label>
                        <div className="relative group">
                          <ClipboardList className="absolute left-5 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-500 group-focus-within:text-brand-emerald transition-colors z-10" />
                          <select
                            name="service"
                            className="w-full bg-white/5 border border-white/10 rounded-2xl pl-14 pr-12 py-4 text-white focus:outline-none focus:border-brand-emerald focus:bg-white/10 transition-all font-bold appearance-none cursor-pointer"
                          >
                            <option
                              className="bg-slate-900"
                              value="COA Cleanup"
                            >
                              COA Cleanup
                            </option>
                            <option
                              className="bg-slate-900"
                              value="Inventory Master Cleanup"
                            >
                              Inventory Master Cleanup
                            </option>
                            <option
                              className="bg-slate-900"
                              value="Financial Reporting"
                            >
                              Financial Reporting
                            </option>
                            <option
                              className="bg-slate-900"
                              value="System Migration"
                            >
                              System Migration
                            </option>
                            <option className="bg-slate-900" value="Others">
                              Others
                            </option>
                          </select>
                          <div className="absolute right-5 top-1/2 -translate-y-1/2 pointer-events-none text-slate-500">
                            <ChevronUp className="rotate-180 w-4 h-4" />
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">
                        Project Brief
                      </label>
                      <div className="relative group">
                        <MessageSquare className="absolute left-5 top-6 w-5 h-5 text-slate-500 group-focus-within:text-brand-emerald transition-colors" />
                        <textarea
                          name="message"
                          rows={4}
                          required
                          className="w-full bg-white/5 border border-white/10 rounded-2xl pl-14 pr-6 py-5 text-white placeholder:text-slate-600 focus:outline-none focus:border-brand-emerald focus:bg-white/10 transition-all font-bold"
                          placeholder="Describe your current challenges..."
                        ></textarea>
                      </div>
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-brand-emerald text-white py-5 rounded-2xl font-black text-lg hover:bg-emerald-400 hover:-translate-y-1 transition-all shadow-xl shadow-brand-emerald/20 flex items-center justify-center gap-3 active:scale-[0.98] group disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {isSubmitting ? "Processing..." : "Get in touch"}{" "}
                      <Send className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                    </button>

                    {result && (
                      <p
                        className={`text-center text-xs font-bold uppercase tracking-widest mt-4 ${result.includes("Successfully") ? "text-brand-emerald" : "text-red-400"}`}
                      >
                        {result}
                      </p>
                    )}

                    <p className="text-center text-[10px] text-slate-500 font-bold uppercase tracking-widest mt-6">
                      <Sparkles className="inline w-3 h-3 mr-1 text-brand-emerald" />
                      Complimentary Initial Forensic Review included
                    </p>
                  </form>
                </motion.div>
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
                "#FINANCIAL_REPORTING",
                "#SYSTEM_RESCUE",
              ].map((tag) => (
                <span
                  key={tag}
                  className="px-6 py-2 rounded-full border-2 border-slate-200 text-slate-400 text-xs font-black tracking-widest hover:border-brand-emerald hover:text-brand-emerald transition-all cursor-default"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-slate-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-12">
            <div className="flex flex-col items-center md:items-start gap-2">
              <img
                src="/Logo.png"
                alt="Decimerix"
                className="h-14 w-auto object-contain brightness-0 invert"
              />
              <span className="text-[8px] font-bold text-slate-500 uppercase tracking-widest mt-1">
                Strategic Financial Architecture
              </span>
            </div>
            <div className="flex flex-col items-center md:items-start gap-4">
              <p className="text-xs font-black text-slate-400 uppercase tracking-widest">
                Digital Hub
              </p>
              <div className="flex flex-wrap justify-center gap-10 text-sm font-black uppercase tracking-widest text-white">
                <a
                  href="https://www.decimerix.com"
                  className="hover:text-brand-emerald transition-colors"
                >
                  www.decimerix.com
                </a>
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
