import React from 'react';

interface SportToggleProps {
  activeSport: 'football' | 'basketball';
  onToggle: (sport: 'football' | 'basketball') => void;
}

export function SportToggle({ activeSport, onToggle }: SportToggleProps) {
  return (
    <div className="sport-toggle">
      <button
        className={`toggle-btn football ${activeSport === 'football' ? 'active' : ''}`}
        onClick={() => onToggle('football')}
      >
        <span className="toggle-icon">⚽</span>
        <span className="toggle-text">FOOTBALL</span>
        <span className="toggle-glow" />
      </button>

      <div className="toggle-divider" />

      <button
        className={`toggle-btn basketball ${activeSport === 'basketball' ? 'active' : ''}`}
        onClick={() => onToggle('basketball')}
      >
        <span className="toggle-icon">🏀</span>
        <span className="toggle-text">BASKETBALL</span>
        <span className="toggle-glow" />
      </button>
    </div>
  );
}