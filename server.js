const connectTOMongo = require('./db')
connectTOMongo();

const express = require('express')
const app = express()
const path= require('path');
const {PORT} = require('./config/keys')
//  cors policy
var cors = require('cors')
app.use(cors())
// 

//
app.use(express.json())

app.use('/api/auth', require('./routes/auth'))
app.use('/api/note', require('./routes/note'))


//
import fs from 'fs'
import ReactDOMServer from "react-dom/server";
const App = require('../backend/frontend/src/App.js')
 const serverRenderer = (req, res, next)=>{
    fs.readFile(path.resolve('./frontend/build/index.html'), 'utf-8', (err,data)=>{
        if(err){
            console.error(err);
            return res.status(500).send('An error occurred');
        }
        return res.send(
            data.replace(
                '<div id="root"></div>',
                `<div id="root">${ReactDOMServer.renderToString(<App />)}</div>`
            )
        )
    })
 }
 app.use('^/$', serverRenderer)
//

// deployment

__dirname = path.resolve();
if(process.env.NODE_ENV ==='production'){
  app.use(express.static(path.join(__dirname,"/frontend/build")));
  app.get('*',(req,res)=>{
    res.sendFile(path.resolve(__dirname,'frontend','build',"index.html"));
  });
}else{
  app.get("/",(req,res)=>{
    res.send("API is running..");
  });
}
//

app.listen(PORT, () => {
  console.log(`Example app listening on port http://localhost:${PORT}`)
})
