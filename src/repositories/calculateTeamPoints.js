// Given an array of players
// returns a sorted array of teams with the total team points for active players.
// The output is sorted in descending order by points
// input: [{ team: 'green', name: 'Bob', points: 5, isActive: true }, ...]
// output: [{ team: 'green', points: 40 }, ...]

async function getPlayers(players) {
    const sortedPlayers = []

    players.forEach(player => {
        if (player.isActive) {
            const returnObject = {}
            returnObject.team = player.team
            returnObject.points = player.points
            sortedPlayers.push(returnObject)
        }
    })
    sortedPlayers.sort(function (a, b) {
        if (a.points < b.points) {
            return 1
        }
        if (a.points > b.points) {
            return -1
        }
        // a must be equal to b
        return 0
    })
    return sortedPlayers
}

export default {getPlayers}
