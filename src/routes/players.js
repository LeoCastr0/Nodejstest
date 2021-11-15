import express from "express"

import PlayersController from "../controller/playersController.js"

const router = express.Router()

router.get("/", PlayersController.getPlayers)

export default router
