const express = require('express')
const userRouter = require('./services/userRoute')
const app = express()



app.get('',(req,res)=>{
    app.use('/user',userRouter)

    res.send(`<!DOCTYPE html>
    <html>
      <head>
        <title>API Status</title>
      </head>
      <body>
        <h6>{ "error": "Authorization is required" }</h6>
      </body>
    </html>`)
})


app.use('/user',userRouter)

// server running
const port = 3000

app.listen(3000,()=>{
    console.log(`Server is running at http://localhost:${port}`)
})