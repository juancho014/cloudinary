const {Schema,model}= require('mongoose')

const imageSchema=new Schema ({
    title:{type:String},
    description:{type:String},
    imageURL:{type:String},
    public_id:{type:String},
});

module.exports= model('images',imageSchema);