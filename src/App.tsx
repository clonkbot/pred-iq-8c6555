import React, { useState, useEffect } from 'react';
import { MatchCard } from './components/MatchCard';
import { SportToggle } from './components/SportToggle';
import { StatsPanel } from './components/StatsPanel';
import { PredictionTicker } from './components/PredictionTicker';
import { footballMatches, basketballMatches } from './data/matches';
import './styles/app.css';

type Sport = 'football' | 'basketball';

function App() {
  const [activeSport, setActiveSport] = useState<Sport>('football');
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setTimeout(() => setIsLoaded(true), 100);
  }, []);

  const matches = activeSport === 'football' ? footballMatches : basketballMatches;

  return (
    <div className={`app-container ${isLoaded ? 'loaded' : ''}`}>
      <div className="noise-overlay" />
      <div className="grid-overlay" />

      <PredictionTicker />

      <header className="header">
        <div className="header-content">
          <div className="logo-section">
            <div className="logo-icon">
              <span className="logo-pulse" />
              <span className="logo-text">PRED</span>
              <span className="logo-accent">IQ</span>
            </div>
            <span className="logo-tagline">SPORTS ANALYTICS ENGINE</span>
          </div>

          <SportToggle activeSport={activeSport} onToggle={setActiveSport} />

          <div className="header-stats">
            <div className="stat-item">
              <span className="stat-value">87%</span>
              <span className="stat-label">Accuracy</span>
            </div>
            <div className="stat-divider" />
            <div className="stat-item">
              <span className="stat-value">2.4K</span>
              <span className="stat-label">Predictions</span>
            </div>
          </div>
        </div>
      </header>

      <main className="main-content">
        <div className="content-wrapper">
          <section className="predictions-section">
            <div className="section-header">
              <h2 className="section-title">
                <span className="title-icon">{activeSport === 'football' ? '⚽' : '🏀'}</span>
                {activeSport === 'football' ? 'FOOTBALL' : 'BASKETBALL'} PREDICTIONS
              </h2>
              <div className="live-indicator">
                <span className="live-dot" />
                LIVE ANALYSIS
              </div>
            </div>

            <div className="matches-grid">
              {matches.map((match, index) => (
                <MatchCard
                  key={match.id}
                  match={match}
                  sport={activeSport}
                  delay={index * 0.1}
                />
              ))}
            </div>
          </section>

          <aside className="stats-sidebar">
            <StatsPanel sport={activeSport} />
          </aside>
        </div>
      </main>

      <footer className="footer">
        <span>Requested by @0xshina · Built by @clonkbot</span>
      </footer>
    </div>
  );
}

export default App;