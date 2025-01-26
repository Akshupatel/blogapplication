import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import NoFound from './NoFound';
export default function Home() {
  const [blogData, setBlogData] = useState([]); 
  const [searchTerm, setSearchTerm] = useState(''); 
  const [filteredBlogs, setFilteredBlogs] = useState([]);

  useEffect(() => {
    async function fetchBlog() {
      try {
        const response = await axios.get('http://localhost:8000/api/posts');
        setBlogData(response.data);
        setFilteredBlogs(response.data);
      } catch (e) {
        console.log('Error during recipe fetching:', e);
      }
    }

    fetchBlog();
  }, []);

  useEffect(() => {
    const filtered = blogData.filter(blog => {
      const titleMatch = blog.title.toLowerCase().includes(searchTerm.toLowerCase());
      const tagsMatch = blog.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
      return titleMatch || tagsMatch;
    });
    setFilteredBlogs(filtered);
  }, [searchTerm, blogData]);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-4xl  font-bold mb-4">Blog Posts</h1>

      <div className="mb-4">
        <input
          type="text"
          className="w-full p-2 border-2 border-black rounded-lg"
          placeholder="Search by title or tag..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3  ">
        {filteredBlogs.length > 0 ? (
          filteredBlogs.map((blog, index) => (
           
            <div
              key={index}
              className="bg-white p-4 rounded-lg shadow-sm hover:shadow-lg hover:bg-blue-50 transition duration-1000"

            >
              <h2 className="text-xl font-bold mb-2 ">{blog.title}</h2>
              <p className="text-gray-600 my-1">
                {`${blog.content.substring(0, 50)}...`}
              </p>
              <Link to={`/blogdetails/${blog._id}`}>
                <button className="bg-blue-900 text-white font-semibold px-1 py-1 my-1 rounded-lg hover:bg-blue-700 transition duration-300">Read more...</button>
              </Link>
            </div>
          
          ))
        ) : (
          <NoFound/>
        )}
        </div>  
    </div>
  );
}
