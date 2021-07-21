import express from 'express'; //ES6 modules syntax
const router = express.Router()

// 'api/products/read
router.get('/read', (req, res)=>{

    res.send(req.originalUrl);

 } )



// 'api/products/create
router.post('/create', (req, res)=>{

    res.send(req.originalUrl);

 })


 router.put('/update', (req, res)=>{

    res.send(req.originalUrl);

 })







export default router