import React from 'react';

const tickerItems = [
  { match: 'Arsenal vs Chelsea', prediction: 'HOME WIN', confidence: 78, sport: 'football' },
  { match: 'Lakers vs Celtics', prediction: 'AWAY WIN', confidence: 65, sport: 'basketball' },
  { match: 'Barcelona vs Real Madrid', prediction: 'DRAW', confidence: 72, sport: 'football' },
  { match: 'Warriors vs Bulls', prediction: 'HOME WIN', confidence: 84, sport: 'basketball' },
  { match: 'Man City vs Liverpool', prediction: 'HOME WIN', confidence: 69, sport: 'football' },
  { match: 'Nets vs Heat', prediction: 'AWAY WIN', confidence: 71, sport: 'basketball' },
  { match: 'Bayern vs Dortmund', prediction: 'HOME WIN', confidence: 82, sport: 'football' },
  { match: 'Bucks vs 76ers', prediction: 'HOME WIN', confidence: 76, sport: 'basketball' },
];

export function PredictionTicker() {
  const duplicatedItems = [...tickerItems, ...tickerItems];

  return (
    <div className="ticker-container">
      <div className="ticker-label">
        <span className="ticker-live-dot" />
        LIVE PREDICTIONS
      </div>
      <div className="ticker-track">
        <div className="ticker-content">
          {duplicatedItems.map((item, index) => (
            <div
              key={index}
              className={`ticker-item ${item.sport}`}
            >
              <span className="ticker-sport-icon">
                {item.sport === 'football' ? '⚽' : '🏀'}
              </span>
              <span className="ticker-match">{item.match}</span>
              <span className="ticker-arrow">→</span>
              <span className="ticker-prediction">{item.prediction}</span>
              <span className="ticker-confidence">{item.confidence}%</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}