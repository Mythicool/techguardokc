import { ArrowRight, CheckCircle } from 'lucide-react';
import ScrambledText from './ScrambledText';

const Hero = () => {
  return (
    <section id="home" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
              <ScrambledText
                className="block"
                radius={120}
                duration={1.5}
                speed={0.6}
                scrambleChars="!@#$%^&*()_+-=[]{}|;:,.<>?"
              >
                Your Trusted
              </ScrambledText>
              <span className="text-primary block">IT Partner</span>
              <ScrambledText
                className="block"
                radius={120}
                duration={1.5}
                speed={0.6}
                scrambleChars="!@#$%^&*()_+-=[]{}|;:,.<>?"
              >
                in Oklahoma City
              </ScrambledText>
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Simple, reliable, and affordable IT solutions for local businesses. 💼
              We handle your technology so you can focus on what matters most - growing your business. 🚀
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <button className="bg-primary text-primary-foreground px-8 py-3 rounded-lg font-semibold hover:bg-primary/90 transition-colors flex items-center justify-center gap-2">
                Get Started Today
                <ArrowRight className="h-5 w-5" />
              </button>
              <button className="border border-border text-foreground px-8 py-3 rounded-lg font-semibold hover:bg-secondary transition-colors">
                Schedule Consultation
              </button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-primary" />
                <span className="text-sm text-muted-foreground">24/7 Support ⏰</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-primary" />
                <span className="text-sm text-muted-foreground">Local Team 🏠</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-primary" />
                <span className="text-sm text-muted-foreground">Fixed Pricing 💰</span>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="bg-white rounded-2xl shadow-2xl p-8 border border-border">
              <div className="space-y-4">
                <div className="h-4 bg-secondary rounded w-3/4"></div>
                <div className="h-4 bg-secondary rounded w-1/2"></div>
                <div className="h-4 bg-secondary rounded w-5/6"></div>
                <div className="h-32 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-lg"></div>
                <div className="flex gap-2">
                  <div className="h-8 bg-primary rounded flex-1"></div>
                  <div className="h-8 bg-secondary rounded flex-1"></div>
                </div>
              </div>
            </div>
            <div className="absolute -top-4 -right-4 bg-primary text-primary-foreground px-4 py-2 rounded-full text-sm font-semibold">
              Trusted by 200+ OKC Businesses ⭐
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;