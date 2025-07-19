import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import About from './components/About';
import Contact from './components/Contact';


function App() {
  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Beautiful gradient background layers - darkest at bottom, lightest at top */}
      <div className="absolute inset-0 bg-gradient-to-b from-pink-50 via-purple-100 via-blue-200 via-indigo-300 to-slate-400"></div>
      <div className="absolute inset-0 bg-gradient-to-br from-rose-100/30 via-violet-200/40 via-cyan-200/30 to-gray-500/20"></div>
      <div className="absolute inset-0 bg-gradient-to-bl from-transparent via-fuchsia-100/30 via-sky-200/40 to-stone-400/25"></div>

      {/* Animated floating orbs for extra visual interest */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute top-40 right-20 w-96 h-96 bg-purple-200/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      <div className="absolute bottom-20 left-1/3 w-80 h-80 bg-blue-200/15 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>

      {/* Main Content */}
      <div className="relative z-10">
        <Header />
        <Hero />
        <Services />
        <About />
        <Contact />

      </div>
    </div>
  );
}

export default App;