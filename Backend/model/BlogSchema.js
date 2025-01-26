const mongoose=require('mongoose');

const BlogSchema= new mongoose.Schema({
  title:{
    type:String
  },
  content:{
    type:String
  },
  tags:
  {
    type:[String]
  },
  createdAt:
  {
    type:Date
  }
    
})

const Blog=mongoose.model('blog',BlogSchema);
module.exports=Blog;