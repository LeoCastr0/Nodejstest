import express from "express"
import playersRouter from "./routes/players.js"

global.fileName = "players.json"

const app = express()
app.use(express.json())
app.use("/players", playersRouter)

app.listen(3001, () => console.log("API Started!"))
