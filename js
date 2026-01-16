

// Example formation (4-3-3) using normalized field coordinates
const formation = [
  { role: "LB",  x: 12, y: 30 },
  { role: "CB1", x: 25, y: 40 },
  { role: "CB2", x: 25, y: 60 },
  { role: "RB",  x: 12, y: 70 },
  { role: "CM1", x: 45, y: 35 },
  { role: "CM2", x: 50, y: 50 },
  { role: "CM3", x: 45, y: 65 },
  { role: "LW",  x: 70, y: 25 },
  { role: "ST",  x: 80, y: 50 },
  { role: "RW",  x: 70, y: 75 }
];

// Calculate average distance between all players (compactness score)
function compactness(players) {
  let total = 0, count = 0;

  for (let i = 0; i < players.length; i++) {
    for (let j = i + 1; j < players.length; j++) {
      const dx = players[j].x - players[i].x;
      const dy = players[j].y - players[i].y;
      total += Math.sqrt(dx * dx + dy * dy);
      count++;
    }
  }

  return Number(total / count).toFixed(2);
}

console.log("Formation Compactness Score:", compactness(formation));
