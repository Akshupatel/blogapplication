const express =require('express');
const {handleAddBlog,handleBlogList, handleDeleteBlog, handleEditBlog,handleSelectedBlogDetails} =require('../controller/postcontroller')

const router=express.Router();

router.route('/api/posts').get(handleBlogList).post(handleAddBlog)
router.route('/api/posts/:id').get(handleSelectedBlogDetails).put(handleEditBlog).delete(handleDeleteBlog);


module.exports =router;