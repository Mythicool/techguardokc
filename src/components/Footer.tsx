import React from 'react';
import { Shield, Phone, Mail, MapPin, Facebook, Twitter, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-foreground text-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <Shield className="h-8 w-8 text-primary" />
              <span className="text-2xl font-bold">TechGuard OKC</span>
            </div>
            <p className="text-background/80 mb-6 max-w-md">
              Your trusted local IT partner in Oklahoma City. We provide reliable, 
              affordable technology solutions that help your business thrive in the digital age.
            </p>
            <div className="flex space-x-4">
              <a href="https://facebook.com/techguardokc" className="text-background/60 hover:text-primary transition-colors" aria-label="Follow us on Facebook">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="https://twitter.com/techguardokc" className="text-background/60 hover:text-primary transition-colors" aria-label="Follow us on Twitter">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="https://linkedin.com/company/techguardokc" className="text-background/60 hover:text-primary transition-colors" aria-label="Connect with us on LinkedIn">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2 text-background/80">
              <li><a href="#services" className="hover:text-primary transition-colors">IT Support</a></li>
              <li><a href="#services" className="hover:text-primary transition-colors">Cybersecurity</a></li>
              <li><a href="#services" className="hover:text-primary transition-colors">Cloud Services</a></li>
              <li><a href="#services" className="hover:text-primary transition-colors">Network Management</a></li>
              <li><a href="#services" className="hover:text-primary transition-colors">IT Consulting</a></li>
              <li><a href="#services" className="hover:text-primary transition-colors">Data Management</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
            <div className="space-y-3 text-background/80">
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4" />
                <span>(405) 555-TECH</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4" />
                <span>hello@techguardokc.com</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4" />
                <span>Oklahoma City Metro</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-background/20 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-background/60 text-sm">
              © 2025 TechGuard OKC. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <button className="text-background/60 hover:text-primary transition-colors text-sm">
                Privacy Policy
              </button>
              <button className="text-background/60 hover:text-primary transition-colors text-sm">
                Terms of Service
              </button>
              <button className="text-background/60 hover:text-primary transition-colors text-sm">
                Service Level Agreement
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;