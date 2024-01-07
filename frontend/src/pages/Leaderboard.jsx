// Leaderboard.jsx
import React from 'react';
//import '../Scss/Leaderboard.scss';
// import goldmedal from "../image/goldmedal.png"

const Leaderboard = () => {
  // Mock data (replace this with actual data fetching)
  const leaderboardData = [
    { rank: 1, name: 'John Doe', speed: 50, accuracy: 95 },
    { rank: 2, name: 'Jane Smith', speed: 45, accuracy: 92 },
    { rank: 3, name: 'Bob Johnson', speed: 42, accuracy: 90 },
    // Add more data as needed
  ];

  return (
    <div className="leaderboard-container">
      <h2 className="text-center mb-4">Leaderboard</h2>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Name</th>
            <th scope="col">Speed (WPM)</th>
            <th scope="col">Accuracy (%)</th>
            <th scope="col">Medal</th>
          </tr>
        </thead>
        <tbody>
          {leaderboardData.map((leader) => (
            <tr key={leader.rank}>
              <th scope="row">{leader.rank}</th>
              <td className="text-center">{leader.name}</td>
              <td>{leader.speed}</td>
              <td>{leader.accuracy}</td>
              <td>{renderMedal(leader.rank)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

// Function to render medal based on rank
const renderMedal = (rank) => {
  switch (rank) {
    case 1:
      return <img src="gold-medal.png" alt="Gold Medal" className="medal" />;
    case 2:
      return <img src="silver-medal.png" alt="Silver Medal" className="medal" />;
    case 3:
      return <img src="bronze-medal.png" alt="Bronze Medal" className="medal" />;
    default:
      return null;
  }
};

export default Leaderboard;
