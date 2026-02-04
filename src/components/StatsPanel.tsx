import React from 'react';

interface StatsPanelProps {
  sport: 'football' | 'basketball';
}

const footballStats = {
  todayPicks: 8,
  winRate: 87,
  avgOdds: 1.85,
  streak: 5,
  topLeague: 'Premier League',
  totalProfit: '+24.5u'
};

const basketballStats = {
  todayPicks: 6,
  winRate: 82,
  avgOdds: 1.92,
  streak: 3,
  topLeague: 'NBA',
  totalProfit: '+18.2u'
};

export function StatsPanel({ sport }: StatsPanelProps) {
  const stats = sport === 'football' ? footballStats : basketballStats;
  const accent = sport === 'football' ? 'var(--football-accent)' : 'var(--basketball-accent)';

  return (
    <div className="stats-panel" style={{ '--panel-accent': accent } as React.CSSProperties}>
      <div className="panel-header">
        <h3 className="panel-title">PERFORMANCE</h3>
        <span className="panel-subtitle">{sport.toUpperCase()} ANALYTICS</span>
      </div>

      <div className="stat-grid">
        <div className="stat-card highlight">
          <span className="stat-card-value">{stats.winRate}%</span>
          <span className="stat-card-label">WIN RATE</span>
          <div className="stat-bar">
            <div className="stat-bar-fill" style={{ width: `${stats.winRate}%` }} />
          </div>
        </div>

        <div className="stat-card">
          <span className="stat-card-value">{stats.todayPicks}</span>
          <span className="stat-card-label">TODAY'S PICKS</span>
        </div>

        <div className="stat-card">
          <span className="stat-card-value">{stats.avgOdds}</span>
          <span className="stat-card-label">AVG ODDS</span>
        </div>

        <div className="stat-card">
          <span className="stat-card-value">{stats.streak}🔥</span>
          <span className="stat-card-label">WIN STREAK</span>
        </div>
      </div>

      <div className="top-league-card">
        <span className="tlc-label">TOP PERFORMING LEAGUE</span>
        <span className="tlc-value">{stats.topLeague}</span>
      </div>

      <div className="profit-card">
        <div className="profit-header">
          <span className="profit-label">MONTHLY PROFIT</span>
          <span className="profit-badge">VERIFIED</span>
        </div>
        <span className="profit-value">{stats.totalProfit}</span>
        <div className="profit-chart">
          {[40, 55, 45, 70, 65, 80, 75, 90, 85, 95].map((height, i) => (
            <div
              key={i}
              className="chart-bar"
              style={{
                height: `${height}%`,
                animationDelay: `${i * 0.1}s`
              }}
            />
          ))}
        </div>
      </div>

      <div className="tips-section">
        <h4 className="tips-title">💡 PRO TIPS</h4>
        <ul className="tips-list">
          <li>Higher confidence = Lower risk</li>
          <li>Check H2H before betting</li>
          <li>Never chase losses</li>
        </ul>
      </div>
    </div>
  );
}