const express=require('express');
const app=express();

app.set('port',3001);
app.use((req,res,next)=>{
    res.status(200).send('<h1>Welcome!</h1>');
 
});


app.listen(app.get('port'),()=>{
    console.log('Server listening on port3001');
});