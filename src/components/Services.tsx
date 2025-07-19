import React from 'react';
import { 
  Monitor, 
  Shield, 
  Cloud, 
  ArrowRight,
  CheckCircle,
  Server,
  Smartphone,
  HardDrive,
  Wifi,
  Phone,
  Settings,
  Clock,
  DollarSign,
  Users
} from 'lucide-react';



const ServiceCard = ({ icon, title, description, features, price, popular = false }: {
  icon: React.ReactNode;
  title: string;
  description: string;
  features: string[];
  price: string;
  popular?: boolean;
}) => (
  <div className={`relative bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg border transition-all duration-300 hover:shadow-xl hover:-translate-y-1 hover:bg-white/90 ${
    popular ? 'border-primary ring-2 ring-primary/20' : 'border-white/20'
  }`}>
    {popular && (
      <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
        <span className="bg-primary text-primary-foreground px-4 py-2 rounded-full text-sm font-semibold shadow-lg">
          Most Popular
        </span>
      </div>
    )}
    <div className="flex items-center gap-4 mb-6">
      <div className="p-3 bg-primary/10 rounded-xl border border-primary/20">
        {icon}
      </div>
      <div>
        <h3 className="text-xl font-bold text-foreground">{title}</h3>
        <p className="text-primary font-semibold">{price}</p>
      </div>
    </div>
    <p className="text-muted-foreground mb-6 leading-relaxed">{description}</p>
    <ul className="space-y-3">
      {features.map((feature, index) => (
        <li key={index} className="flex items-center gap-3">
          <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
          <span className="text-sm text-foreground">{feature}</span>
        </li>
      ))}
    </ul>
    <button className="w-full mt-6 bg-primary text-primary-foreground py-3 rounded-xl font-semibold hover:bg-primary/90 transition-colors shadow-md">
      Get Started
    </button>
  </div>
);

const Services = () => {
  const coreServices = [
    {
      icon: <Monitor className="h-6 w-6 text-primary" />,
      title: "Managed IT Services 🔧",
      description: "Complete IT infrastructure management and support for your business operations.",
      features: [
        "24/7 network monitoring and maintenance ⚡",
        "Proactive system updates and patches 🔄",
        "Remote and on-site technical support 🛠️",
        "IT asset management and inventory 📊",
        "Performance optimization and reporting 📈",
        "Dedicated account manager 👨‍💼"
      ],
      price: "Starting at $99/user/month"
    },
    {
      icon: <Shield className="h-6 w-6 text-primary" />,
      title: "Cybersecurity Solutions 🛡️",
      description: "Comprehensive protection against evolving cyber threats and data breaches.",
      features: [
        "Advanced firewall configuration and management 🔥",
        "Multi-layered antivirus and anti-malware protection 🦠",
        "Employee security awareness training 🎓",
        "Vulnerability assessments and penetration testing 🔍",
        "Incident response and recovery planning 🚨",
        "Compliance support (HIPAA, PCI-DSS, SOX) ✅"
      ],
      price: "Starting at $149/month",
      popular: true
    },
    {
      icon: <Cloud className="h-6 w-6 text-primary" />,
      title: "Cloud Services & Migration ☁️",
      description: "Seamless transition to cloud platforms with ongoing management and optimization.",
      features: [
        "Cloud strategy and migration planning 🗺️",
        "Microsoft 365 and Google Workspace setup 📧",
        "AWS, Azure, and hybrid cloud solutions 🌐",
        "Cloud backup and disaster recovery 💾",
        "Cost optimization and monitoring 💡",
        "24/7 cloud infrastructure support 🔄"
      ],
      price: "Starting at $199/month"
    }
  ];

  const specializedServices = [
    {
      icon: <Server className="h-6 w-6 text-blue-600" />,
      title: "Server Management",
      description: "Professional server setup, maintenance, and optimization for maximum uptime.",
      features: [
        "Windows and Linux server administration",
        "Virtualization with VMware and Hyper-V",
        "Database management and optimization",
        "Server monitoring and alerting",
        "Backup and disaster recovery solutions"
      ]
    },
    {
      icon: <Wifi className="h-6 w-6 text-green-600" />,
      title: "Network Infrastructure",
      description: "Design and implement robust, scalable network solutions for your business.",
      features: [
        "Network design and implementation",
        "Wireless network setup and optimization",
        "VPN configuration for remote access",
        "Network security and access control",
        "Performance monitoring and troubleshooting"
      ]
    },
    {
      icon: <Smartphone className="h-6 w-6 text-purple-600" />,
      title: "Mobile Device Management",
      description: "Secure and manage all mobile devices across your organization.",
      features: [
        "BYOD policy development and enforcement",
        "Mobile app management and deployment",
        "Device encryption and remote wipe capabilities",
        "Mobile security and compliance monitoring",
        "Integration with existing IT infrastructure"
      ]
    },
    {
      icon: <HardDrive className="h-6 w-6 text-orange-600" />,
      title: "Data Backup & Recovery",
      description: "Comprehensive data protection with automated backup and rapid recovery solutions.",
      features: [
        "Automated daily backups to cloud and local storage",
        "Point-in-time recovery capabilities",
        "Disaster recovery planning and testing",
        "Ransomware protection and recovery",
        "Compliance-ready data retention policies"
      ]
    },
    {
      icon: <Phone className="h-6 w-6 text-red-600" />,
      title: "VoIP & Communications",
      description: "Modern communication solutions including VoIP phone systems and video conferencing.",
      features: [
        "VoIP phone system setup and management",
        "Video conferencing solutions (Zoom, Teams)",
        "Unified communications integration",
        "Call routing and auto-attendant setup",
        "Mobile and remote worker support"
      ]
    },
    {
      icon: <Settings className="h-6 w-6 text-indigo-600" />,
      title: "IT Consulting & Strategy",
      description: "Strategic technology planning and digital transformation guidance.",
      features: [
        "Technology roadmap development",
        "Digital transformation consulting",
        "Vendor selection and management",
        "IT budget planning and optimization",
        "Compliance and regulatory guidance"
      ]
    }
  ];

  const industryFocus = [
    {
      title: "Healthcare & Medical Practices",
      description: "HIPAA-compliant IT solutions for medical offices, clinics, and healthcare facilities.",
      features: ["HIPAA compliance", "EMR/EHR support", "Medical device integration", "Secure patient data management"]
    },
    {
      title: "Legal & Professional Services",
      description: "Secure, reliable IT infrastructure for law firms and professional service providers.",
      features: ["Document management systems", "Client confidentiality protection", "Case management software", "Secure communications"]
    },
    {
      title: "Manufacturing & Distribution",
      description: "Industrial IT solutions supporting operations, inventory, and supply chain management.",
      features: ["ERP system integration", "Inventory management", "Production monitoring", "Supply chain connectivity"]
    },
    {
      title: "Retail & E-commerce",
      description: "Point-of-sale systems, inventory management, and e-commerce platform support.",
      features: ["POS system management", "E-commerce platforms", "Payment processing security", "Inventory tracking"]
    }
  ];

  return (
    <section id="services" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-white/20 max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Complete IT Solutions for Oklahoma City Businesses 🌟
            </h2>
            <p className="text-xl text-muted-foreground leading-relaxed">
              From small startups to established enterprises, we provide comprehensive 
              technology services that keep your business running smoothly, securely, and efficiently. 💻✨
            </p>
          </div>
        </div>

        {/* Core Services */}
        <div className="mb-20">
          <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-white/20">
            <h3 className="text-2xl font-bold text-foreground mb-8 text-center">Core IT Services</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {coreServices.map((service, index) => (
                <ServiceCard key={index} {...service} />
              ))}
            </div>
          </div>
        </div>

        {/* Specialized Services */}
        <div className="mb-20">
          <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-white/20">
            <h3 className="text-2xl font-bold text-foreground mb-8 text-center">Specialized Services</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {specializedServices.map((service, index) => (
                <div key={index} className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-md border border-white/20 hover:shadow-lg hover:bg-white/90 transition-all duration-300">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 bg-primary/10 rounded-xl border border-primary/20">
                      {service.icon}
                    </div>
                    <h4 className="text-lg font-semibold text-foreground">{service.title}</h4>
                  </div>
                  <p className="text-muted-foreground mb-4 text-sm leading-relaxed">{service.description}</p>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-sm">
                        <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                        <span className="text-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Industry Focus */}
        <div className="mb-20">
          <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-white/20">
            <h3 className="text-2xl font-bold text-foreground mb-8 text-center">Industry Expertise</h3>
            <div className="grid md:grid-cols-2 gap-6">
              {industryFocus.map((industry, index) => (
                <div key={index} className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-md border border-white/20 hover:shadow-lg transition-all duration-300">
                  <h4 className="text-lg font-semibold text-foreground mb-3">{industry.title}</h4>
                  <p className="text-muted-foreground mb-4 text-sm leading-relaxed">{industry.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {industry.features.map((feature, idx) => (
                      <span key={idx} className="px-3 py-1 bg-primary/10 text-primary text-xs rounded-full border border-primary/20">
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Why Choose Us */}
        <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 mb-12 shadow-lg border border-white/20">
          <h3 className="text-2xl font-bold text-foreground mb-6 text-center">Why Oklahoma City Businesses Choose Us</h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center bg-white/60 rounded-xl p-6 border border-white/20 shadow-sm">
              <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4 border border-primary/30">
                <Clock className="h-8 w-8 text-primary" />
              </div>
              <h4 className="font-semibold text-foreground mb-2">Rapid Response ⚡</h4>
              <p className="text-sm text-muted-foreground leading-relaxed">Average 2-hour response time with local technicians who understand your business</p>
            </div>
            <div className="text-center bg-white/60 rounded-xl p-6 border border-white/20 shadow-sm">
              <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4 border border-primary/30">
                <DollarSign className="h-8 w-8 text-primary" />
              </div>
              <h4 className="font-semibold text-foreground mb-2">Transparent Pricing 💎</h4>
              <p className="text-sm text-muted-foreground leading-relaxed">Fixed monthly rates with no hidden fees or surprise charges</p>
            </div>
            <div className="text-center bg-white/60 rounded-xl p-6 border border-white/20 shadow-sm">
              <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4 border border-primary/30">
                <Users className="h-8 w-8 text-primary" />
              </div>
              <h4 className="font-semibold text-foreground mb-2">Local Expertise 🏠</h4>
              <p className="text-sm text-muted-foreground leading-relaxed">Oklahoma City-based team with deep understanding of local business needs</p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-white/20 text-center">
          <h3 className="text-2xl font-bold text-foreground mb-4">Ready to Transform Your IT Infrastructure? 🚀</h3>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
            Schedule a free consultation to discuss your specific needs and learn how we can help your business thrive with reliable, secure technology solutions. 💪
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-primary text-primary-foreground px-8 py-3 rounded-xl font-semibold hover:bg-primary/90 transition-colors flex items-center gap-2 shadow-md">
              Schedule Free Consultation
              <ArrowRight className="h-5 w-5" />
            </button>
            <button className="border border-white/30 bg-white/60 text-foreground px-8 py-3 rounded-xl font-semibold hover:bg-white/80 transition-colors shadow-sm">
              View Pricing Plans
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;