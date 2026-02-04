import React, { useState } from 'react';

interface Match {
  id: string;
  homeTeam: string;
  awayTeam: string;
  homeOdds: number;
  awayOdds: number;
  drawOdds?: number;
  prediction: 'home' | 'away' | 'draw';
  confidence: number;
  league: string;
  time: string;
  homeScore?: number;
  awayScore?: number;
  analysis: string;
}

interface MatchCardProps {
  match: Match;
  sport: 'football' | 'basketball';
  delay: number;
}

export function MatchCard({ match, sport, delay }: MatchCardProps) {
  const [expanded, setExpanded] = useState(false);
  const isFootball = sport === 'football';
  const accentColor = isFootball ? 'var(--football-accent)' : 'var(--basketball-accent)';

  const getPredictionLabel = () => {
    if (match.prediction === 'home') return match.homeTeam;
    if (match.prediction === 'away') return match.awayTeam;
    return 'Draw';
  };

  const getConfidenceClass = () => {
    if (match.confidence >= 80) return 'confidence-high';
    if (match.confidence >= 60) return 'confidence-medium';
    return 'confidence-low';
  };

  return (
    <article
      className={`match-card ${expanded ? 'expanded' : ''}`}
      style={{
        animationDelay: `${delay}s`,
        '--accent': accentColor
      } as React.CSSProperties}
      onClick={() => setExpanded(!expanded)}
    >
      <div className="card-glow" />

      <div className="card-header">
        <span className="league-badge">{match.league}</span>
        <span className="match-time">{match.time}</span>
      </div>

      <div className="teams-section">
        <div className={`team ${match.prediction === 'home' ? 'predicted' : ''}`}>
          <span className="team-name">{match.homeTeam}</span>
          <span className="team-odds">{match.homeOdds.toFixed(2)}</span>
        </div>

        <div className="vs-section">
          <span className="vs-text">VS</span>
          {isFootball && match.drawOdds && (
            <span className={`draw-odds ${match.prediction === 'draw' ? 'predicted' : ''}`}>
              X {match.drawOdds.toFixed(2)}
            </span>
          )}
        </div>

        <div className={`team ${match.prediction === 'away' ? 'predicted' : ''}`}>
          <span className="team-name">{match.awayTeam}</span>
          <span className="team-odds">{match.awayOdds.toFixed(2)}</span>
        </div>
      </div>

      <div className="prediction-section">
        <div className="prediction-header">
          <span className="prediction-label">PREDICTION</span>
          <span className={`prediction-value ${getConfidenceClass()}`}>
            {getPredictionLabel()}
          </span>
        </div>

        <div className="confidence-bar-container">
          <div className="confidence-bar">
            <div
              className={`confidence-fill ${getConfidenceClass()}`}
              style={{ width: `${match.confidence}%` }}
            />
          </div>
          <span className="confidence-value">{match.confidence}%</span>
        </div>
      </div>

      {expanded && (
        <div className="analysis-section">
          <div className="analysis-header">
            <span className="analysis-icon">📊</span>
            <span>MATCH ANALYSIS</span>
          </div>
          <p className="analysis-text">{match.analysis}</p>

          <div className="quick-stats">
            <div className="quick-stat">
              <span className="qs-label">Form</span>
              <div className="form-dots">
                {['W', 'W', 'D', 'L', 'W'].map((result, i) => (
                  <span key={i} className={`form-dot ${result.toLowerCase()}`}>{result}</span>
                ))}
              </div>
            </div>
            <div className="quick-stat">
              <span className="qs-label">H2H</span>
              <span className="qs-value">3-1-2</span>
            </div>
          </div>
        </div>
      )}

      <div className="card-footer">
        <span className="expand-hint">{expanded ? 'Click to collapse' : 'Click for analysis'}</span>
      </div>
    </article>
  );
}