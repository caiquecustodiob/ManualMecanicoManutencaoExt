import React, { useRef, useEffect, useState } from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  delay?: string; // Mantido para compatibilidade, mas controlado via CSS transition delay se necessário
}

export const Card: React.FC<CardProps> = ({ children, className = '', delay = '' }) => {
  const [isVisible, setIsVisible] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // Quando o card entra 10% na tela, ativa a animação
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target); // Para de observar após animar (animação única)
        }
      },
      { threshold: 0.1, rootMargin: '50px' }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => {
      if (cardRef.current) observer.unobserve(cardRef.current);
    };
  }, []);

  // Extrair o tempo do delay string (ex: "delay-100") para style inline se necessário, 
  // mas aqui vamos usar classes utilitárias para simplicidade com o estado
  const getDelayClass = () => {
    if (delay === 'delay-100') return 'delay-[100ms]';
    if (delay === 'delay-200') return 'delay-[200ms]';
    if (delay === 'delay-300') return 'delay-[300ms]';
    return '';
  };

  return (
    <div 
      ref={cardRef}
      className={`
      bg-white rounded-xl shadow-[0_2px_8px_rgba(0,0,0,0.04)] 
      border border-slate-100 overflow-hidden 
      transform transition-all duration-700 cubic-bezier(0.2, 0.8, 0.2, 1)
      hover:shadow-[0_8px_24px_rgba(0,0,0,0.08)] hover:-translate-y-1
      active:scale-[0.99]
      ${isVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-12 scale-[0.98]'}
      ${getDelayClass()}
      ${className}
    `}>
      {children}
    </div>
  );
};

export const CardHeader: React.FC<{ title: string; icon?: React.ReactNode; color?: string }> = ({ title, icon, color = 'bg-gradient-to-r from-red-600 to-red-500' }) => {
  return (
    <div className={`${color} text-white p-5 flex items-center gap-3`}>
      {icon && <span className="text-white/90 drop-shadow-sm">{icon}</span>}
      <h2 className="text-lg font-bold tracking-tight">{title}</h2>
    </div>
  );
};

export const CardContent: React.FC<{ children: React.ReactNode; className?: string }> = ({ children, className = '' }) => {
  return (
    <div className={`p-5 md:p-6 ${className}`}>
      {children}
    </div>
  );
};