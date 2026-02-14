/**
 * 🏆 IPL Season Points Table
 *
 * IPL ka season chal raha hai aur tujhe points table banana hai!
 * Tujhe match results ka array milega, aur tujhe har team ke points
 * calculate karke sorted table return karna hai.
 *
 * Match result types:
 *   - "win": Winning team gets 2 points, losing team gets 0
 *   - "tie": Both teams get 1 point each
 *   - "no_result": Both teams get 1 point each (rain/bad light)
 *
 * Each match object: { team1: "CSK", team2: "MI", result: "win", winner: "CSK" }
 *   - For "tie" and "no_result", the winner field is absent or ignored
 *
 * Rules (use for loop with object accumulator):
 *   - Loop through matches array
 *   - Build an object accumulator: { "CSK": { team, played, won, lost, tied, noResult, points }, ... }
 *   - After processing all matches, convert to array and sort:
 *     1. By points DESCENDING
 *     2. If points are equal, by team name ASCENDING (alphabetical)
 *
 * Validation:
 *   - Agar matches array nahi hai ya empty hai, return []
 *
 * @param {Array<{team1: string, team2: string, result: string, winner?: string}>} matches
 * @returns {Array<{team: string, played: number, won: number, lost: number, tied: number, noResult: number, points: number}>}
 *
 * @example
 *   iplPointsTable([
 *     { team1: "CSK", team2: "MI", result: "win", winner: "CSK" },
 *     { team1: "RCB", team2: "CSK", result: "tie" },
 *   ])
 *   // CSK: played=2, won=1, tied=1, points=3
 *   // MI: played=1, won=0, lost=1, points=0
 *   // RCB: played=1, tied=1, points=1
 *   // Sorted: CSK(3), RCB(1), MI(0)
 */
export function iplPointsTable(matches) {
  // Your code here
  if(!Array.isArray(matches) || matches.length===0) return [];
  var res = {};
  for(let i=0;i<matches.length;i++)
  {

    var obj = matches[i];
    
    if(!res[obj.team1])
    {
      res[obj.team1] = {team: obj.team1, played: 0, won: 0, lost: 0, tied: 0, noResult: 0, points: 0};
    }
    if(!res[obj.team2])
    {
      res[obj.team2] = {team: obj.team2, played: 0, won: 0, lost: 0, tied: 0, noResult: 0, points: 0};
    }

    res[obj.team1].played++;
    res[obj.team2].played++;
    if(obj.result==="tie")
    {
      res[obj.team1].tied++;
      res[obj.team2].tied++;
      res[obj.team1].points++;
      res[obj.team2].points++;
    }
    else if(obj.result==="no_result")
    {
      res[obj.team1].noResult++;
      res[obj.team2].noResult++;
      res[obj.team1].points++;
      res[obj.team2].points++;
    }
    else
    {
      let winner = obj.winner;
      let loser = winner === obj.team1 ? obj.team2 : obj.team1;

      res[winner].won++;
      res[winner].points += 2;
      res[loser].lost++;
    }
  }
  var arr = Object.values(res);
  arr.sort((a,b)=>{
    if(a.points!==b.points) return b.points-a.points;
    return a.team.localeCompare(b.team);
  });
  return arr;
}
