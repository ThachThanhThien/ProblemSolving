// Input 
// int ranked[n]: the leaderboard scores
// int player[m]: the player's scores

// Output
// int[m]: the player's rank after each new score


function climbingLeaderboard(ranked, player) {
    const res = new Array(player.length);
    ranked = Array.from(new Set(ranked));

    for (let i = 0; i < player.length; i++) {
        while (player[i] >= ranked[ranked.length - 1]) {
            ranked.pop();
        }
        res[i] = ranked.length + 1;
    }
    return res;
}


console.log(climbingLeaderboard([100,90,90,80,75,60], [50,65,77,90,102]))