//MODULES IMPORTS
import express from 'express';
import bodyParser from 'body-parser'
import usersRoutes from '../routes/usersRoutes.js'
//APPLICATION
const app=express();
//PORT 
const PORT=8000;
//USE OF JSON
app.use(bodyParser.json());

//ROUTES
app.use('/users',usersRoutes);



//--------
app.listen(PORT,()=>{console.log(`Server runngin on port:http://localhost:${PORT}`)})