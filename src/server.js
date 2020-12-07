//MODULES IMPORTS
import express from 'express';
import bodyParser from 'body-parser'

//APPLICATION
const app=express();
//PORT 
const PORT=8000;
//USE OF JSON
app.use(bodyParser.json());

//ROUTES
app.get('/',(req,res)=>{res.send("gellos");})

app.listen(PORT,()=>{console.log(`Server runngin on port:http://localhost:${PORT}`)})