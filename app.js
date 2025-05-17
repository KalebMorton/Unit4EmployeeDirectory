import express from "express";
const app = express()

app.route('/').get((req, res) => {
    res.send("sup bitch2")
})

export default app