// ─── Leaderboard.jsx ──────────────────────────────────────────
// CONCEPTS USED: JSX, array mapping
//
// This section displays the top players of the endless jump game.
// It maps through an array of high scores and highlights the top 3.

import './Leaderboard.css';

// Dummy data for the leaderboard
const leaderboardData = [
  { rank: 1, name: 'LavaKing', score: 15420, character: 'Lava Leaper' },
  { rank: 2, name: 'JumpMaster99', score: 14200, character: 'Lava Leaper' },
  { rank: 3, name: 'PixelNinja', score: 13550, character: 'Lava Leaper' },
  { rank: 4, name: 'AlexDev', score: 12100, character: 'Lava Leaper' },
  { rank: 5, name: 'NoobRunner', score: 8400, character: 'Lava Leaper' }
];

function Leaderboard() {
  return (
    <section id="leaderboard" className="leaderboard">
      <div className="section-wrapper">
        
        {/* ── Section Header ────────────────────────────────────── */}
        <h2 className="section-title">
          Top <span className="accent">Runners</span>
        </h2>
        <p className="section-subtitle">
          The absolute best treasure hunters who outran the magma.
        </p>

        {/* ── Leaderboard Table ─────────────────────────────────── */}
        <div className="leaderboard__container">
          <table className="leaderboard__table">
            <thead>
              <tr>
                <th>Rank</th>
                <th>Player</th>
                <th>Character</th>
                <th>Score</th>
              </tr>
            </thead>
            <tbody>
              {leaderboardData.map((player) => (
                <tr 
                  key={player.rank} 
                  className={player.rank <= 3 ? `top-${player.rank}` : ''}
                >
                  <td>#{player.rank}</td>
                  <td>{player.name}</td>
                  <td>{player.character}</td>
                  <td>{player.score}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

      </div>
    </section>
  );
}

export default Leaderboard;