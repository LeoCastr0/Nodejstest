// Given an array of players
// returns a sorted array of teams with the total team points for active players.
// The output is sorted in descending order by points
// input: [{ team: 'green', name: 'Bob', points: 5, isActive: true }, ...]
// output: [{ team: 'green', points: 40 }, ...]

async function getPlayers(players) {
    const ordenedPlayers = []

    players.forEach(player => {
        if (player.isActive) {
            const returnObject = {}
            returnObject.team = player.team
            returnObject.points = player.points
            ordenedPlayers.push(returnObject)
        }
    })

    ordenedPlayers.sort(function (a, b) {
        if (a.points < b.points) {
            return 1
        }
        if (a.points > b.points) {
            return -1
        }
        return 0
    })

    const sum = items => {
        const total = items.reduce((newArr, {team, points}) => {
            newArr[team] = (newArr[team] || 0) + points
            return newArr
        }, {})
        return Object.keys(total).map(team => ({team, points: total[team]}))
    }

    return sum(ordenedPlayers)
}

export default {getPlayers}
