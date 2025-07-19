import React, { useState, useRef, useEffect } from 'react';
import { CheckCircle, Zap } from 'lucide-react';

interface Card {
  icon: React.ReactNode;
  title: string;
  description: string;
  features: string[];
  color: string;
  size: 'small' | 'medium' | 'large' | 'tall';
}

interface MagicBentoProps {
  cards: Card[];
  textAutoHide?: boolean;
  enableStars?: boolean;
  enableBorderGlow?: boolean;
  enableTilt?: boolean;
  enableMagnetism?: boolean;
  clickEffect?: boolean;
  spotlightRadius?: number;
  particleCount?: number;
  glowColor?: string;
}

const MagicBento: React.FC<MagicBentoProps> = ({
  cards,
  textAutoHide = false,
  enableStars = false,
  enableBorderGlow = false,
  enableTilt = false,
  enableMagnetism = false,
  clickEffect = false,
  spotlightRadius = 300,
  particleCount = 8,
  glowColor = "346, 77, 128"
}) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        setMousePosition({
          x: e.clientX - rect.left,
          y: e.clientY - rect.top
        });
      }
    };

    if (enableMagnetism || enableBorderGlow) {
      document.addEventListener('mousemove', handleMouseMove);
      return () => document.removeEventListener('mousemove', handleMouseMove);
    }
  }, [enableMagnetism, enableBorderGlow]);

  const getGridClass = (size: string, index: number) => {
    switch (size) {
      case 'large':
        return 'md:col-span-3 lg:col-span-4';
      case 'tall':
        return 'md:col-span-2 lg:col-span-2 md:row-span-2';
      case 'medium':
        return 'md:col-span-2 lg:col-span-3';
      case 'small':
      default:
        return 'md:col-span-3 lg:col-span-2';
    }
  };

  const getColorClasses = (index: number) => {
    const colors = [
      'from-primary/10 to-primary/5',
      'from-red-50 to-red-100',
      'from-blue-50 to-blue-100',
      'from-green-50 to-green-100',
      'from-purple-50 to-purple-100',
      'from-orange-50 to-orange-100'
    ];
    return colors[index % colors.length];
  };

  const getIconBgClasses = (index: number) => {
    const bgColors = [
      'bg-primary/20',
      'bg-red-200',
      'bg-blue-200',
      'bg-green-200',
      'bg-purple-200',
      'bg-orange-200'
    ];
    return bgColors[index % bgColors.length];
  };

  return (
    <div 
      ref={containerRef}
      className="grid grid-cols-1 md:grid-cols-6 lg:grid-cols-8 gap-4 max-w-7xl mx-auto relative"
    >
      {cards.map((card, index) => (
        <div
          key={index}
          className={`
            ${getGridClass(card.size, index)}
            bg-gradient-to-br ${getColorClasses(index)}
            rounded-2xl p-6 border border-border 
            hover:shadow-lg transition-all duration-300 group
            ${enableTilt ? 'hover:scale-[1.02]' : ''}
            ${clickEffect ? 'active:scale-95' : ''}
            cursor-pointer relative overflow-hidden
          `}
          style={{
            background: enableBorderGlow 
              ? `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(${glowColor}, 0.1) 0%, transparent 50%)`
              : undefined
          }}
        >
          {/* Stars effect */}
          {enableStars && (
            <div className="absolute inset-0 opacity-20">
              {Array.from({ length: particleCount }).map((_, i) => (
                <div
                  key={i}
                  className="absolute w-1 h-1 bg-white rounded-full animate-pulse"
                  style={{
                    left: `${Math.random() * 100}%`,
                    top: `${Math.random() * 100}%`,
                    animationDelay: `${Math.random() * 2}s`
                  }}
                />
              ))}
            </div>
          )}

          <div className={`flex items-start justify-between mb-4 ${card.size === 'large' ? 'mb-6' : ''}`}>
            <div className={`p-3 ${getIconBgClasses(index)} rounded-xl`}>
              {card.icon}
            </div>
            {card.size === 'large' && (
              <div className="opacity-0 group-hover:opacity-100 transition-opacity">
                <CheckCircle className="h-5 w-5 text-primary" />
              </div>
            )}
            {card.size === 'medium' && index === 4 && (
              <Zap className="h-5 w-5 text-purple-600" />
            )}
          </div>

          <h3 className={`font-bold text-foreground mb-2 ${card.size === 'large' ? 'text-2xl mb-3' : 'text-lg'}`}>
            {card.title}
          </h3>

          <p className={`text-muted-foreground mb-4 ${card.size === 'large' ? 'mb-6' : ''} ${card.size === 'small' ? 'text-sm' : ''}`}>
            {card.description}
          </p>

          {/* Features */}
          {card.size === 'large' && (
            <div className="space-y-2">
              {card.features.slice(0, 2).map((feature, idx) => (
                <div key={idx} className="flex items-center gap-2 text-sm text-muted-foreground">
                  <CheckCircle className="h-4 w-4 text-primary" />
                  <span>{feature}</span>
                </div>
              ))}
            </div>
          )}

          {card.size === 'tall' && (
            <div className="space-y-3">
              {card.features.map((feature, idx) => (
                <div key={idx} className="flex items-center gap-2 text-xs text-muted-foreground">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span>{feature}</span>
                </div>
              ))}
            </div>
          )}

          {card.size === 'small' && index === 1 && (
            <div className="text-xs text-muted-foreground">
              Firewall • Antivirus • Training
            </div>
          )}

          {card.size === 'medium' && index === 5 && (
            <div className="flex gap-2">
              <span className="px-2 py-1 bg-orange-200 text-orange-700 text-xs rounded-full">Backup</span>
              <span className="px-2 py-1 bg-orange-200 text-orange-700 text-xs rounded-full">Recovery</span>
            </div>
          )}

          {/* Border glow effect */}
          {enableBorderGlow && (
            <div 
              className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              style={{
                background: `linear-gradient(135deg, rgba(${glowColor}, 0.1) 0%, transparent 100%)`,
                border: `1px solid rgba(${glowColor}, 0.2)`
              }}
            />
          )}
        </div>
      ))}
    </div>
  );
};

export default MagicBento;