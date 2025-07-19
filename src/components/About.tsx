import React from 'react';
import { MapPin, Clock, Award, Heart, Users, Target, Shield, Zap } from 'lucide-react';

const About = () => {
  const stats = [
    { number: "200+", label: "Happy Clients", icon: <Users className="h-6 w-6" /> },
    { number: "5+", label: "Years Experience", icon: <Award className="h-6 w-6" /> },
    { number: "24/7", label: "Support Available", icon: <Clock className="h-6 w-6" /> },
    { number: "99.9%", label: "Uptime Guarantee", icon: <Target className="h-6 w-6" /> }
  ];

  const features = [
    {
      icon: <MapPin className="h-6 w-6" />,
      title: "Locally Owned & Operated 🏠",
      description: "Born and raised in OKC, we're invested in our community's success and understand local business needs."
    },
    {
      icon: <Zap className="h-6 w-6" />,
      title: "Rapid Response Times ⚡",
      description: "Average response time under 2 hours for critical issues, with same-day on-site support available."
    },
    {
      icon: <Shield className="h-6 w-6" />,
      title: "Certified Professionals 🎓",
      description: "Our team holds industry certifications and stays current with the latest technology trends and security practices."
    },
    {
      icon: <Heart className="h-6 w-6" />,
      title: "Personal Service 💝",
      description: "We treat every client like family, providing personalized solutions rather than one-size-fits-all approaches."
    }
  ];

  const testimonials = [
    {
      quote: "TechGuard OKC transformed our IT infrastructure. Their local team understands our business needs and provides solutions that actually work. Best decision we've made for our company's technology.",
      author: "Sarah Mitchell",
      position: "CEO, OKC Marketing Solutions",
      initials: "SM"
    },
    {
      quote: "Outstanding support and expertise. They've helped us scale our technology as we've grown, and their proactive monitoring has prevented countless issues.",
      author: "Mike Rodriguez",
      position: "Operations Manager, Thunder Manufacturing",
      initials: "MR"
    }
  ];

  return (
    <section id="about" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="bg-slate-900/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-slate-700/50">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Your Local Oklahoma City IT Experts 🏆
            </h2>
            <p className="text-xl text-slate-300 leading-relaxed max-w-3xl mx-auto">
              TechGuard OKC was founded with a simple mission: to provide reliable, 
              affordable IT services to local businesses in Oklahoma City and surrounding areas. 🎯
            </p>
          </div>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Features */}
          <div className="bg-slate-800/60 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-slate-600/30">
            <h3 className="text-2xl font-bold text-white mb-8">What Sets Us Apart</h3>
            <div className="space-y-6">
              {features.map((feature, index) => (
                <div key={index} className="bg-slate-700/40 rounded-xl p-6 border border-slate-600/20 hover:bg-slate-700/60 transition-all duration-300">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-primary/20 rounded-xl border border-primary/30 text-primary">
                      {feature.icon}
                    </div>
                    <div>
                      <h4 className="font-semibold text-white mb-2">{feature.title}</h4>
                      <p className="text-slate-300 text-sm leading-relaxed">{feature.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Stats */}
          <div className="bg-slate-800/60 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-slate-600/30">
            <h3 className="text-2xl font-bold text-white mb-8 text-center">
              Why OKC Businesses Choose Us 🌟
            </h3>
            
            <div className="grid grid-cols-2 gap-6 mb-8">
              {stats.map((stat, index) => (
                <div key={index} className="bg-slate-700/40 rounded-xl p-6 text-center border border-slate-600/20 hover:bg-slate-700/60 transition-all duration-300">
                  <div className="flex justify-center mb-3 text-primary">
                    {stat.icon}
                  </div>
                  <div className="text-3xl font-bold text-white mb-2">
                    {stat.number}
                  </div>
                  <div className="text-sm text-slate-300">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>

            {/* Mission Statement */}
            <div className="bg-primary/10 rounded-xl p-6 border border-primary/20">
              <h4 className="font-semibold text-white mb-3">Our Mission</h4>
              <p className="text-slate-300 text-sm leading-relaxed">
                We understand the unique challenges facing Oklahoma businesses and deliver 
                solutions that actually work. Our goal is to be your trusted technology partner, 
                not just another vendor.
              </p>
            </div>
          </div>
        </div>

        {/* Testimonials */}
        <div className="bg-slate-800/60 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-slate-600/30">
          <h3 className="text-2xl font-bold text-white mb-8 text-center">What Our Clients Say 💬</h3>
          <div className="grid md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-slate-700/40 rounded-xl p-6 border border-slate-600/20">
                <blockquote className="text-slate-300 italic mb-6 leading-relaxed">
                  "{testimonial.quote}"
                </blockquote>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center border border-primary/30">
                    <span className="text-primary font-semibold">{testimonial.initials}</span>
                  </div>
                  <div>
                    <div className="font-semibold text-white">{testimonial.author}</div>
                    <div className="text-sm text-slate-400">{testimonial.position}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <div className="bg-slate-900/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-slate-700/50">
            <h3 className="text-2xl font-bold text-white mb-4">Ready to Experience the Difference? 🚀</h3>
            <p className="text-slate-300 mb-6 leading-relaxed">
              Join over 200 Oklahoma City businesses who trust us with their technology needs. 🤝
            </p>
            <button className="bg-primary text-primary-foreground px-8 py-3 rounded-xl font-semibold hover:bg-primary/90 transition-colors shadow-lg">
              Schedule Your Free Consultation
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;