const Blog=require('../model/BlogSchema');

async function  handleBlogList(req,res) {
    try{
        const allBlog= await Blog.find();
        res.json(allBlog);
    }
    catch(e){
        console.error(e);

    }  
}

async function handleSelectedBlogDetails(req,res) {
    try {
        const blog= await Blog.findOne({_id:req.params.id})
        res.json(blog);
        
    } catch (error) {
        console.error(error);
    }  
}

async function handleAddBlog(req,res) {
    const {title,content,tags,createdAt}=req.body;
    try {
     const blog= new Blog({
         title,
         content,
         tags,
         createdAt
     })
     await blog.save();
     res.send("posts created Successfully");   
    } 
    catch (error) {
     console.error(error);
     
    }   
}

async function handleEditBlog(req,res) {
    const _id = req.params.id;
    const updateblog=req.body;
    try {
        const updatedBlog=await Blog.findByIdAndUpdate(_id,updateblog);
        res.send("updated succesfully")
    } catch (error) {
        console.error(error);
    } 
}

async function handleDeleteBlog(req,res) {
    try {
        const deleteBlog=await Blog.deleteOne({_id:req.params.id});
        res.send("deleted Successfully")
    } catch (error) {
        console.error(error);
    }   
}

module.exports={
    handleAddBlog,
    handleBlogList,
    handleDeleteBlog,
    handleEditBlog,
    handleSelectedBlogDetails
}
