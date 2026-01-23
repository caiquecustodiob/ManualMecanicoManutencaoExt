import React, { useState, useEffect, useRef } from 'react';
import { Lock, Unlock } from 'lucide-react';

interface PatternLockProps {
  onSuccess: () => void;
}

const PatternLock: React.FC<PatternLockProps> = ({ onSuccess }) => {
  const [path, setPath] = useState<number[]>([]);
  const [isDragging, setIsDragging] = useState(false);
  const [status, setStatus] = useState<'neutral' | 'success' | 'error'>('neutral');
  const containerRef = useRef<HTMLDivElement>(null);

  // O padrão U da esquerda para direita:
  // 0 1 2
  // 3 4 5
  // 6 7 8
  // Caminho: 0->3->6 (Desce esq), ->7->8 (Direita baixo), ->5->2 (Sobe dir)
  const CORRECT_PATH = [0, 3, 6, 7, 8, 5, 2];

  const getPointFromEvent = (e: React.PointerEvent | PointerEvent) => {
    if (!containerRef.current) return null;
    const rect = containerRef.current.getBoundingClientRect();
    const x = e.clientX;
    const y = e.clientY;
    
    // Check collision with dots
    const dots = containerRef.current.querySelectorAll('[data-dot-index]');
    for (let i = 0; i < dots.length; i++) {
      const dot = dots[i];
      const dotRect = dot.getBoundingClientRect();
      if (
        x >= dotRect.left &&
        x <= dotRect.right &&
        y >= dotRect.top &&
        y <= dotRect.bottom
      ) {
        return parseInt(dot.getAttribute('data-dot-index') || '-1');
      }
    }
    return null;
  };

  const handleStart = (index: number) => {
    setPath([index]);
    setIsDragging(true);
    setStatus('neutral');
  };

  const handleMove = (e: React.PointerEvent) => {
    if (!isDragging) return;
    e.preventDefault(); // Prevent scroll on mobile
    
    const index = getPointFromEvent(e);
    
    if (index !== null && index !== -1) {
      setPath((prev) => {
        if (prev[prev.length - 1] !== index && !prev.includes(index)) {
          return [...prev, index];
        }
        return prev;
      });
    }
  };

  const handleEnd = () => {
    setIsDragging(false);
    if (path.length === 0) return;

    const isCorrect = 
      path.length === CORRECT_PATH.length && 
      path.every((val, index) => val === CORRECT_PATH[index]);

    if (isCorrect) {
      setStatus('success');
      setTimeout(() => {
        onSuccess();
      }, 500);
    } else {
      setStatus('error');
      setTimeout(() => {
        setPath([]);
        setStatus('neutral');
      }, 1000);
    }
  };

  // Render SVG lines
  const renderLines = () => {
    if (path.length < 2) return null;
    
    // We calculate approximate relative coordinates based on a 3x3 grid
    // 0(15%,15%) 1(50%,15%) 2(85%,15%)
    // ...
    const getCoord = (index: number) => {
      const row = Math.floor(index / 3);
      const col = index % 3;
      return { x: 16.5 + col * 33.5, y: 16.5 + row * 33.5 };
    };

    let lines = [];
    for (let i = 0; i < path.length - 1; i++) {
      const start = getCoord(path[i]);
      const end = getCoord(path[i + 1]);
      lines.push(
        <line
          key={i}
          x1={`${start.x}%`}
          y1={`${start.y}%`}
          x2={`${end.x}%`}
          y2={`${end.y}%`}
          stroke={status === 'error' ? '#EF4444' : status === 'success' ? '#22C55E' : '#DC2626'}
          strokeWidth="4"
          strokeLinecap="round"
        />
      );
    }
    return (
      <svg className="absolute inset-0 w-full h-full pointer-events-none z-0">
        {lines}
      </svg>
    );
  };

  return (
    <div className="flex flex-col items-center bg-gray-50 p-6 rounded-lg border border-gray-200">
      <div className="mb-4 text-center">
        {status === 'success' ? (
          <div className="flex items-center text-green-600 font-bold justify-center">
            <Unlock size={20} className="mr-2" />
            <span>Desbloqueado!</span>
          </div>
        ) : (
          <div className="flex items-center text-gray-600 font-medium justify-center flex-col">
            <div className="flex items-center mb-1">
              <Lock size={16} className="mr-2" />
              <span>Área Restrita</span>
            </div>
            <span className="text-xs text-gray-400">Desenhe o "U" (Esq -> Dir) para liberar</span>
          </div>
        )}
      </div>

      <div 
        ref={containerRef}
        className="relative w-64 h-64 touch-none select-none"
        onPointerMove={handleMove}
        onPointerUp={handleEnd}
        onPointerLeave={handleEnd}
      >
        {renderLines()}
        
        <div className="grid grid-cols-3 gap-8 h-full w-full p-4 relative z-10">
          {[0, 1, 2, 3, 4, 5, 6, 7, 8].map((index) => (
            <div key={index} className="flex items-center justify-center">
              <div
                data-dot-index={index}
                onPointerDown={(e) => {
                  e.currentTarget.releasePointerCapture(e.pointerId); // Crucial for reliable touch drag across elements
                  handleStart(index);
                }}
                className={`w-4 h-4 rounded-full transition-all duration-200 cursor-pointer ${
                  path.includes(index)
                    ? status === 'error' 
                      ? 'bg-red-500 scale-125 shadow-[0_0_10px_rgba(239,68,68,0.5)]'
                      : status === 'success'
                        ? 'bg-green-500 scale-125 shadow-[0_0_10px_rgba(34,197,94,0.5)]'
                        : 'bg-nordeste-red scale-125 shadow-[0_0_10px_rgba(220,38,38,0.5)]'
                    : 'bg-gray-300 hover:bg-gray-400'
                }`}
              />
            </div>
          ))}
        </div>
      </div>
      
      {status === 'error' && (
        <p className="text-red-500 text-xs mt-2 font-bold animate-pulse">Padrão incorreto. Tente novamente.</p>
      )}
    </div>
  );
};

export default PatternLock;