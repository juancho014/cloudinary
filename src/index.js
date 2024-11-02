const app=require('./server');
const PORT= 4000;
require('./database');


app.get('/',(req,res) => {
    res.send('hola juan')
})



app.listen(PORT,()=>{console.log(`funcionando en el puerto ${PORT}`);});
