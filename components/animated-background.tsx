"use client";
import React from 'react';

export const Aurora = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Aurora layers for depth and movement */}
      <div className="absolute inset-0">
        {/* Primary aurora layer */}
        <div 
          className="absolute top-0 left-0 w-full h-1/2 opacity-60 aurora-wave"
          style={{
            background: `linear-gradient(180deg, 
              rgba(235, 41, 51, 0.8) 0%, 
              rgba(235, 41, 51, 0.6) 20%, 
              rgba(235, 41, 51, 0.4) 40%, 
              rgba(235, 41, 51, 0.2) 60%, 
              rgba(235, 41, 51, 0.1) 80%, 
              transparent 100%)`,
            filter: 'blur(2px)',
            transform: 'skewX(-15deg)',
          }}
        />
        
        {/* Secondary aurora layer - lighter shade */}
        <div 
          className="absolute top-0 left-1/4 w-3/4 h-2/5 opacity-40 aurora-drift"
          style={{
            background: `linear-gradient(180deg, 
              rgba(255, 102, 120, 0.7) 0%, 
              rgba(255, 102, 120, 0.5) 30%, 
              rgba(255, 102, 120, 0.3) 60%, 
              transparent 100%)`,
            filter: 'blur(3px)',
            transform: 'skewX(10deg)',
          }}
        />
        
        {/* Tertiary aurora layer - pink accent */}
        <div 
          className="absolute top-0 right-1/4 w-1/2 h-1/3 opacity-30 aurora-shimmer"
          style={{
            background: `linear-gradient(180deg, 
              rgba(255, 182, 193, 0.6) 0%, 
              rgba(255, 182, 193, 0.4) 40%, 
              rgba(255, 182, 193, 0.2) 70%, 
              transparent 100%)`,
            filter: 'blur(4px)',
            transform: 'skewX(-8deg)',
          }}
        />
        
        {/* Accent streaks */}
        <div 
          className="absolute top-0 left-1/3 w-1/6 h-1/4 opacity-50 aurora-pulse"
          style={{
            background: `linear-gradient(180deg, 
              rgba(235, 41, 51, 0.9) 0%, 
              rgba(235, 41, 51, 0.6) 50%, 
              transparent 100%)`,
            filter: 'blur(1px)',
            transform: 'skewX(-25deg)',
          }}
        />
        
        <div 
          className="absolute top-0 right-1/3 w-1/8 h-1/5 opacity-40 aurora-flicker"
          style={{
            background: `linear-gradient(180deg, 
              rgba(235, 41, 51, 0.8) 0%, 
              rgba(235, 41, 51, 0.5) 60%, 
              transparent 100%)`,
            filter: 'blur(2px)',
            transform: 'skewX(20deg)',
          }}
        />

        {/* Additional flowing layers */}
        <div 
          className="absolute top-0 left-0 w-2/3 h-2/5 opacity-25 aurora-flow"
          style={{
            background: `radial-gradient(ellipse at 30% 0%, 
              rgba(235, 41, 51, 0.6) 0%, 
              rgba(235, 41, 51, 0.3) 40%, 
              transparent 70%)`,
            filter: 'blur(5px)',
            transform: 'skewX(-5deg)',
          }}
        />

        <div 
          className="absolute top-0 right-0 w-3/5 h-1/3 opacity-35 aurora-ripple"
          style={{
            background: `radial-gradient(ellipse at 70% 0%, 
              rgba(255, 102, 120, 0.7) 0%, 
              rgba(255, 102, 120, 0.4) 50%, 
              transparent 80%)`,
            filter: 'blur(3px)',
            transform: 'skewX(12deg)',
          }}
        />

        {/* Floating particles/stars */}
        <div 
          className="absolute top-1/6 left-1/5 w-2 h-2 opacity-60 aurora-twinkle"
          style={{
            background: 'rgba(235, 41, 51, 0.8)',
            borderRadius: '50%',
            filter: 'blur(1px)',
          }}
        />

        <div 
          className="absolute top-1/8 right-1/4 w-1 h-1 opacity-70 aurora-twinkle-2"
          style={{
            background: 'rgba(255, 182, 193, 0.9)',
            borderRadius: '50%',
            filter: 'blur(0.5px)',
          }}
        />

        <div 
          className="absolute top-1/4 left-3/5 w-1.5 h-1.5 opacity-50 aurora-twinkle-3"
          style={{
            background: 'rgba(255, 102, 120, 0.8)',
            borderRadius: '50%',
            filter: 'blur(1px)',
          }}
        />

        {/* Swirling elements */}
        <div 
          className="absolute top-0 left-1/6 w-1/4 h-1/6 opacity-20 aurora-swirl"
          style={{
            background: `conic-gradient(from 0deg, 
              rgba(235, 41, 51, 0.4) 0deg, 
              transparent 180deg, 
              rgba(235, 41, 51, 0.3) 360deg)`,
            filter: 'blur(4px)',
            borderRadius: '50%',
          }}
        />

        <div 
          className="absolute top-0 right-1/6 w-1/5 h-1/8 opacity-25 aurora-swirl-2"
          style={{
            background: `conic-gradient(from 180deg, 
              rgba(255, 102, 120, 0.5) 0deg, 
              transparent 180deg, 
              rgba(255, 102, 120, 0.4) 360deg)`,
            filter: 'blur(3px)',
            borderRadius: '50%',
          }}
        />
      </div>
      
      {/* CSS animations */}
      <style dangerouslySetInnerHTML={{
        __html: `
          @keyframes aurora-wave {
            0% { transform: skewX(-15deg) translateX(-30px) scaleY(1) rotate(-2deg); }
            33% { transform: skewX(-8deg) translateX(10px) scaleY(1.1) rotate(1deg); }
            66% { transform: skewX(-12deg) translateX(25px) scaleY(0.95) rotate(-1deg); }
            100% { transform: skewX(-15deg) translateX(-30px) scaleY(1) rotate(-2deg); }
          }
          
          @keyframes aurora-drift {
            0% { transform: skewX(10deg) translateX(-40px) scaleX(1) translateY(-10px); }
            25% { transform: skewX(18deg) translateX(0px) scaleX(1.08) translateY(5px); }
            50% { transform: skewX(12deg) translateX(35px) scaleX(0.92) translateY(-5px); }
            75% { transform: skewX(15deg) translateX(10px) scaleX(1.05) translateY(8px); }
            100% { transform: skewX(10deg) translateX(-40px) scaleX(1) translateY(-10px); }
          }
          
          @keyframes aurora-shimmer {
            0% { transform: skewX(-8deg) translateX(-20px) scaleY(0.9) rotate(1deg); opacity: 0.3; }
            30% { transform: skewX(-3deg) translateX(5px) scaleY(1.1) rotate(-1deg); opacity: 0.5; }
            60% { transform: skewX(-10deg) translateX(18px) scaleY(0.85) rotate(0.5deg); opacity: 0.4; }
            100% { transform: skewX(-8deg) translateX(-20px) scaleY(0.9) rotate(1deg); opacity: 0.3; }
          }
          
          @keyframes aurora-pulse {
            0% { transform: skewX(-25deg) scaleY(1) translateY(0px); opacity: 0.5; }
            50% { transform: skewX(-18deg) scaleY(1.3) translateY(-5px); opacity: 0.8; }
            100% { transform: skewX(-25deg) scaleY(1) translateY(0px); opacity: 0.5; }
          }
          
          @keyframes aurora-flicker {
            0% { transform: skewX(20deg) translateY(-8px) scaleX(1); opacity: 0.4; }
            25% { transform: skewX(28deg) translateY(2px) scaleX(1.1); opacity: 0.7; }
            75% { transform: skewX(15deg) translateY(-3px) scaleX(0.9); opacity: 0.5; }
            100% { transform: skewX(20deg) translateY(-8px) scaleX(1); opacity: 0.4; }
          }

          @keyframes aurora-flow {
            0% { transform: skewX(-5deg) translateX(-25px) scale(1); opacity: 0.25; }
            50% { transform: skewX(2deg) translateX(30px) scale(1.15); opacity: 0.4; }
            100% { transform: skewX(-5deg) translateX(-25px) scale(1); opacity: 0.25; }
          }

          @keyframes aurora-ripple {
            0% { transform: skewX(12deg) translateX(20px) scaleY(1) rotate(0deg); opacity: 0.35; }
            40% { transform: skewX(8deg) translateX(-15px) scaleY(1.2) rotate(-2deg); opacity: 0.5; }
            80% { transform: skewX(15deg) translateX(10px) scaleY(0.8) rotate(1deg); opacity: 0.3; }
            100% { transform: skewX(12deg) translateX(20px) scaleY(1) rotate(0deg); opacity: 0.35; }
          }

          @keyframes aurora-twinkle {
            0% { opacity: 0.6; transform: scale(1) rotate(0deg); }
            50% { opacity: 1; transform: scale(1.5) rotate(180deg); }
            100% { opacity: 0.6; transform: scale(1) rotate(360deg); }
          }

          @keyframes aurora-twinkle-2 {
            0% { opacity: 0.7; transform: scale(0.8) translateY(0px); }
            60% { opacity: 0.3; transform: scale(1.2) translateY(-3px); }
            100% { opacity: 0.7; transform: scale(0.8) translateY(0px); }
          }

          @keyframes aurora-twinkle-3 {
            0% { opacity: 0.5; transform: scale(1.1) translateX(0px); }
            70% { opacity: 0.9; transform: scale(0.7) translateX(5px); }
            100% { opacity: 0.5; transform: scale(1.1) translateX(0px); }
          }

          @keyframes aurora-swirl {
            0% { transform: rotate(0deg) scale(1); opacity: 0.2; }
            100% { transform: rotate(360deg) scale(1.1); opacity: 0.2; }
          }

          @keyframes aurora-swirl-2 {
            0% { transform: rotate(0deg) scale(0.9); opacity: 0.25; }
            100% { transform: rotate(-360deg) scale(1.05); opacity: 0.25; }
          }
          
          .aurora-wave {
            animation: aurora-wave 10s ease-in-out infinite;
          }
          
          .aurora-drift {
            animation: aurora-drift 14s ease-in-out infinite;
          }
          
          .aurora-shimmer {
            animation: aurora-shimmer 12s ease-in-out infinite;
          }
          
          .aurora-pulse {
            animation: aurora-pulse 7s ease-in-out infinite;
          }
          
          .aurora-flicker {
            animation: aurora-flicker 9s ease-in-out infinite;
          }

          .aurora-flow {
            animation: aurora-flow 16s ease-in-out infinite;
          }

          .aurora-ripple {
            animation: aurora-ripple 13s ease-in-out infinite;
          }

          .aurora-twinkle {
            animation: aurora-twinkle 4s ease-in-out infinite;
          }

          .aurora-twinkle-2 {
            animation: aurora-twinkle-2 5s ease-in-out infinite 1s;
          }

          .aurora-twinkle-3 {
            animation: aurora-twinkle-3 6s ease-in-out infinite 2s;
          }

          .aurora-swirl {
            animation: aurora-swirl 20s linear infinite;
          }

          .aurora-swirl-2 {
            animation: aurora-swirl-2 25s linear infinite reverse;
          }
        `
      }} />
    </div>
  );
};

