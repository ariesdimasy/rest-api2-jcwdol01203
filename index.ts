import express, { Application, Request, Response, NextFunction } from "express"
import cookieParser from "cookie-parser"
import bodyParser from "body-parser"
import userRouter from "./router/userRouter"
import productRouter from "./router/productRouter"
import expenseRouter from "./router/expenseRouter"

const app: Application = express()
const PORT: number = 8800

app.use(cookieParser())
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json())
app.use("/api/users", userRouter) // 1 resources
app.use("/api/products", productRouter)
app.use("/api/expenses", expenseRouter)
// app.use("/products", productRouter) 1 resources 
app.use((req: Request, res: Response, next: NextFunction) => {

    const err = false

    if (err) {
        res.status(500).send({
            "message": "Server Error "
        })
    } else {
        console.log(" general run on every routers")
        // res.send({
        //     do: "stop"
        // })
        next()
    }

})

app.get("/", (req: Request, res: Response) => {

    // Cookies that have not been signed
    console.log('Cookies: ', req.cookies)

    // Cookies that have been signed
    console.log('Signed Cookies: ', req.signedCookies)

    res.send({
        "hello": "world"
    })
})

app.post("/", (req: Request, res: Response) => {
    res.send({
        "hello": "world post",
        "method": "post"
    })
})

app.put("/random.text", (req: Request, res: Response) => {
    res.send({
        "random": "text"
    })
})

app.get("/ab+cd", (req: Request, res: Response) => {
    res.send({
        "ab": "cd",
        "operation": "+"
    })
})

app.get("/ab?cd", (req: Request, res: Response) => {
    res.send({
        "ab": "cd",
        "operation": "?"
    })
})

console.log("hello")

app.listen(PORT, () => {
    console.log("application run on port => ", PORT)
})