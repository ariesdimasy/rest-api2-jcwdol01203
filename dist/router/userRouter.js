"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
// const express = require("express")
// const app = express()
const router = express_1.default.Router();
router.get("/:username", (req, res, next) => {
    console.log("handler");
    next();
}, (req, res, next) => {
    console.log("handler 2");
    next();
}, (req, res) => {
    const { username, level } = req.params;
    //const username = req.params.username
    console.log(" req.params ==> ", req.params);
    res.status(404).send({
        profile: {
            name: username,
            level: level,
            age: 32
        }
    });
});
router.put("/", (req, res) => {
    res.send({
        users: []
    });
});
router.post("/", () => {
});
router.get("/([\$])badut", (req, res) => {
    res.send({
        users: [{
                "clown": "service"
            }]
    });
});
exports.default = router;
