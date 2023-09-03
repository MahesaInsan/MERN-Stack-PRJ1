require('dotenv').config()
const express = require ('express');
const mongoose = require('mongoose');
/* const cors = require('cors'); */
const app = express();
const userRoutes = require('./Routes/userRoute');
const cardRoutes = require('./Routes/cardRoute');
const typeRoutes = require('./Routes/typeRoute');

app.use(express.json())
app.use('/user', userRoutes)
app.use('/card', cardRoutes)
app.use('/type', typeRoutes)

/* app.use(cors()) */

mongoose.connect(process.env.MONGO_URI)
    .then(()=>{
        app.listen(process.env.PORT, ()=>{
            console.log("connected and listening on port 5000")
        });
    }).catch((error)=>{
        console.log(error)
    })

app.get('/', (req, res)=>{
    res.write('hello')
    res.end()
})