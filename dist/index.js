"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cookie_parser_1 = __importDefault(require("cookie-parser"));
const body_parser_1 = __importDefault(require("body-parser"));
const userRouter_1 = __importDefault(require("./router/userRouter"));
const productRouter_1 = __importDefault(require("./router/productRouter"));
const app = (0, express_1.default)();
const PORT = 8800;
app.use((0, cookie_parser_1.default)());
// parse application/x-www-form-urlencoded
app.use(body_parser_1.default.urlencoded({ extended: false }));
// parse application/json
app.use(body_parser_1.default.json());
app.use("/users", userRouter_1.default); // 1 resources
app.use("/products", productRouter_1.default);
// app.use("/products", productRouter) 1 resources 
app.use((req, res, next) => {
    const err = false;
    if (err) {
        res.status(500).send({
            "message": "Server Error "
        });
    }
    else {
        console.log(" general run on every routers");
        // res.send({
        //     do: "stop"
        // })
        next();
    }
});
app.get("/", (req, res) => {
    // Cookies that have not been signed
    console.log('Cookies: ', req.cookies);
    // Cookies that have been signed
    console.log('Signed Cookies: ', req.signedCookies);
    res.send({
        "hello": "world"
    });
});
app.post("/", (req, res) => {
    res.send({
        "hello": "world post",
        "method": "post"
    });
});
app.put("/random.text", (req, res) => {
    res.send({
        "random": "text"
    });
});
app.get("/ab+cd", (req, res) => {
    res.send({
        "ab": "cd",
        "operation": "+"
    });
});
app.get("/ab?cd", (req, res) => {
    res.send({
        "ab": "cd",
        "operation": "?"
    });
});
app.listen(PORT, () => {
    console.log("application run on port => ", PORT);
});
