const Ctrlindex={};
const Photo= require('../models/image')
const cloudinary=require('cloudinary');
const fs= require('fs-extra');


Ctrlindex.renderIndex=async(req,res) => {
  const image=await Photo.find()
  
    res.render('index',{image});
}

Ctrlindex.renderImage=async(req,res) => {
    const {_id}= req.params;
    const image= await Photo.findById(_id)
        console.log(image);
    res.render('image',{image})
}

Ctrlindex.postIndex=async(req,res) =>{
    const{title,description}=req.body;
   const result=await cloudinary.v2.uploader.upload(req.file.path);
   console.log(result);
    const photo= new Photo({
        title,
        description,
        imageURL:result.url,
        public_id:result.public_id
    });
    await photo.save();
    await fs.unlink(req.file.path);
    res.redirect('/')
};

Ctrlindex.imgDelete=async(req,res) => {

    const{_id}=req.params;
    const image=await Photo.findByIdAndDelete(_id)
    const result=await cloudinary.v2.uploader.destroy(image.public_id);
    console.log(result);
    res.redirect('/')
}

module.exports=Ctrlindex;