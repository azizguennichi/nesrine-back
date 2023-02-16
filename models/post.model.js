const mongoose= require ('mongoose')


const postSchema =new mongoose.model({

   name : String,
   description : String,
   media : [],
   creator: {
    type: mongoose.Taypes.objectId,
    ref:'users',
    require :true 
   }

})
module.exports =mongoose.model('posts',postSchema)