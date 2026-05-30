const express = require("express");
const cookieParser = require("cookie-parser")
const cors = require("cors")

const app = express()
app.set("trust proxy", 1)

app.use(express.json())
app.use(cookieParser())
app.use(cors({
  origin: [
      "https://nextround-ai-jet.vercel.app",
      "https://nextround-nzbb6b2xt-aryan-nns-projects.vercel.app",
    ],
  credentials: true,
}))

/*require all the ri=outes here*/
const authRouter = require("./routes/auth.routes");
const interviewRouter = require("./routes/interview.routes")


/*using all the routes here*/
app.use("/api/auth", authRouter)
app.use("/api/interview", interviewRouter)



module.exports = app;