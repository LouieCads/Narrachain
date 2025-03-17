const express = require("express")
const app = express()
const cors = require("cors")
const PORT = 3308

app.use(express.json())
app.use(cors())

const db = require("./models")

// const usersRouter = require("./routes/Users")
// app.use("/auth", usersRouter)
// const postsRouter = require("./routes/Posts")
// app.use("/posts", postsRouter)

db.sequelize.sync().then(() => {
  app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`)
  })
})