import express, { Router, Request, Response, NextFunction } from "express"
// const express = require("express")
// const app = express()

const router: Router = express.Router()

router.get("/:username", (req: Request, res: Response, next: NextFunction) => {
    console.log("handler")
    next();
}, (req: Request, res: Response, next: NextFunction) => {
    console.log("handler 2")
    next()
}, (req: Request, res: Response) => {

    const { username, level } = req.params
    //const username = req.params.username

    console.log(" req.params ==> ", req.params)

    res.status(404).send({
        profile: {
            name: username,
            level: level,
            age: 32
        }
    })
})

router.put("/", (req: Request, res: Response) => {
    res.send({
        users: []
    })
})

router.post("/", () => {

})

router.get("/([\$])badut", (req: Request, res: Response) => {
    res.send({
        users: [{
            "clown": "service"
        }]
    })
})

export default router