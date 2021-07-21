import express from 'express'; //ES6 modules syntax
import productRoutes  from './routes/productRoutes.js'


const app = express() //initializing an instance of express
const port = 3000
const myLogger = function (req, res, next) {
    console.log('middleware') 
    next()  
}
const myLogger2 = function (req, res) {
    console.log('middleware2') 
    next()
}
const myLogger3 = function (req, res) {
    console.log('middleware3') 
    res.end();
}

app.use(myLogger);  //middleware
app.use('/api/products', productRoutes)

app.get('/api/users/create', (req, res,next)=>{  //routeHandlers
    console.log(req.originalUrl)
    next()
})

app.get('/api/orders/read', (req, res, next)=>{
    console.log(req.originalUrl)
    next()
})

app.use(myLogger2);  //middleware
app.use(myLogger3);  //middleware

app.listen(port,()=>{
    console.log(`app listening at http://localhost:${port} for requests.`)
})




