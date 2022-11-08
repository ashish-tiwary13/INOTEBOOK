const connectTOMongo = require('./db')
connectTOMongo();

const express = require('express')
const app = express()
const port = 5000 || process.env.PORT;
//  cors policy
var cors = require('cors')
app.use(cors())
// 
// app.get('/', (req, res) => {
//   res.send('Hello World!')
// })

const dotenv= require('./env');
dotenv.config();
//
app.use(express.json())

app.use('/api/auth', require('./routes/auth'))
app.use('/api/note', require('./routes/note'))

if(process.env.NODE_ENV== "production"){
  const path = require("path");
  app.get("/",(req,res)=>{
    app.use(express.static(path.resolve(__dirname,'frontend','build')));
    res.sendFile(path.resolve(__dirname,'frontend','build','index.html'));
  })
}

app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`)
})
