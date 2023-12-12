import express, { Router, Request, Response } from "express"
import axios from "axios"

const router: Router = express.Router()

router.get("/", async (req: Request, res: Response) => {
    try {
        const products = await axios.get("http://localhost:4440/products")

        res.status(200).send({
            message: "OK",
            data: products.data
        })

    } catch (err) {
        res.status(500).send({
            message: JSON.stringify(err)
        })
    }
})

router.post("/", async (req: Request, res: Response) => {
    try {

        const { name, price } = req.body

        console.log(req.body)

        const products = await axios.post("http://localhost:4440/products", {
            name: name,
            price: price
        })

        res.status(200).send({
            message: "OK",
            data: products.data
        })

    } catch (err) {
        res.status(500).send({
            message: JSON.stringify(err)
        })
    }
})

export default router