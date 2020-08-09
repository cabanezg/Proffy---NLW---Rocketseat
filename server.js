// server
const express = require('express')
const server = express()

const  { pageGiveClasses,
         pageLanding,
         pageStudy,
         saveClasses 
        } = require("./pages.js")


        
/* nunjucks config (template engine)*/
const nunjucks = require('nunjucks')
nunjucks.configure('src/views',  {
    express: server,
    noCache: true,
})

// Start and config server
server 
// recive req.body data
.use(express.urlencoded({ extended: true}))
/* Configure statics files */
.use(express.static("public"))
/* Application routes */
.get("/", pageLanding)
.get("/study", pageStudy)
.get("/give-classes", pageGiveClasses)
.post("/save-classes", saveClasses)
// start server
.listen(5600)