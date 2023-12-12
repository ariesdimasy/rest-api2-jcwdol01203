import express, { Request, Response, Router } from "express"
import axios from "axios"

const router: Router = express.Router()

router.get("/", async (req: Request, res: Response) => {
    try {

        const expenses = await axios.get("http://localhost:4440/expenses")

        res.status(200).send({
            message: "OK",
            data: expenses.data
        })

    } catch (err) {
        res.status(500).send({
            "message": JSON.stringify(err)
        })
    }
})

router.get("/:id", async (req: Request, res: Response) => {
    try {

        const { id } = req.params

        const expense = await axios.get(`http://localhost:4440/expenses/${id}`)

        if (expense) {
            res.status(200).send({
                message: "OK",
                data: expense.data
            })
        }

    } catch (err: any) {
        res.status(500).send({
            "message": JSON.stringify(err?.message)
        })
    }
})

router.post("/", async (req: Request, res: Response) => {

    try {

        const { name, nominal, category } = req.body

        const expenseInsert = await axios.post("http://localhost:4440/expenses", {
            name: name, nominal: nominal, category: category
        })

        res.status(200).send({
            message: "OK",
            data: expenseInsert.data
        })


    } catch (err: any) {
        res.status(500).send({
            "message": JSON.stringify(err?.message)
        })
    }

})

router.put("/:id", async (req: Request, res: Response) => {
    try {

        const { id } = req.params
        const { name, nominal, category } = req.body

        const expenseUpdate = await axios.put(`http://localhost:4440/expenses/${id}`, {
            name, nominal, category
        })

        res.status(200).send({
            message: "OK",
            data: expenseUpdate.data
        })


    } catch (err: any) {
        res.status(500).send({
            "message": JSON.stringify(err?.message)
        })
    }
})


export default router