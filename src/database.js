const mongoose= require('mongoose');
const URI= 'mongodb://127.0.0.1:27017/cloudinary';
mongoose.connect(URI,{}).then(db=>{console.log('conectado a la base de datos');})
                        .catch(err=>{console.log(err)})