import {promises as fs} from "fs"
const {readFile} = fs
import Repository from "../repositories/calculateTeamPoints.js"

async function getPlayers(req, res, next) {
    try {
        // const players = []
        const data = JSON.parse(await readFile(global.fileName))
        //players.push(data)
        let result = await Repository.getPlayers(data)
        res.send(result)
    } catch (err) {
        next(err)
    }
}

export default {
    getPlayers
}
