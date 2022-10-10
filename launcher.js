import express from "express"
import router from "./index.cjs"
import http from "http"
import https from  "https"

let app = express()

app.use(router)


http.createServer(app).listen(80);
https.createServer({}, app).listen(443);
