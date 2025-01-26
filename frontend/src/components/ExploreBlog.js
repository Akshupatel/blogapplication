// ExploreBlog.js
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

export default function ExploreBlog() {
  const {id} = useParams();
  const [blog, setBlog] = useState(null);
  // State to manage loading status

  useEffect(() => {
    async function fetchBlog() {
      try {
        const response = await axios.get(`http://localhost:8000/api/posts/${id}`);
        setBlog(response.data);
      } catch (error) {
        console.error('Error fetching blog data:', error);
      } finally {
         // Set loading to false after data is fetched
      }
    }

    fetchBlog();
  }, [id]);

 

  if (!blog) {
    return <div>Error: Blog not found.</div>; // Handle case where blog data is not available
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">{blog.title}</h1>
      <p className="text-gray-600 mb-4">{blog.content}</p>
      <div className="text-sm text-gray-500 mb-2">Tags: {blog.tags.join(', ')}</div>
      <div className="text-sm text-gray-500">Created At: {new Date(blog.createdAt).toLocaleDateString()}</div>
    </div>
  );
}
