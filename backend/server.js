import express from 'express'; //ES6 modules syntax
import productRoutes  from './routes/productRoutes.js'


const app = express() //initializing an instance of express
const port = 3000


app.use('/api/products', productRoutes)

app.get('/api/users/create', (req, res,next)=>{  //routeHandlers
    console.log(req.originalUrl)
    next()
})

app.get('/api/orders/read', (req, res, next)=>{
    console.log(req.originalUrl)
    next()
})



app.listen(port,()=>{
    console.log(`app listening at http://localhost:${port} for requests.`)
})




