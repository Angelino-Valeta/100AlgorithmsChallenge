function alternatingSums(a: number[]): number[]{
  let team1 = [];
  let team2 = [];
  let allteam = [];

  a.map((num, i) =>{
    i % 2 === 0 ? team1.push(num): team2.push(num);
  });

  const totalTeam1 = team1.reduce((a,b) => a + b);
  const totalTeam2 = team2.reduce((a,b) => a + b);
  allteam.push(totalTeam1, totalTeam2);

  return allteam;
}

const a = [50, 60, 60, 45, 70];
console.log(alternatingSums(a));