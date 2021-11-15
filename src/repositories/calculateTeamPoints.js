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

    const sortedPlayers = ordenedPlayers.reduce((obj, {team, points}) => {
        if (!obj[team]) obj[team] = []
        obj[team].push(points)
        return obj
    }, {})

    // ordenedPlayers.forEach(function (a) {
    //     // if (!this[a.team] && !this[a.points]) {
    //     //     this[a.team] = {team: a.team, points: a.points}
    //     //     sortedPlayers.Push(this[a.points])
    //     // }
    //     this[a.team].points += a.points
    // }, Object.create(null))

    //return ordenedPlayers
    return sortedPlayers
}

export default {getPlayers}
