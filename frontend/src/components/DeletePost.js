import React, { useState, useEffect } from "react";
import axios from "axios";

export default function DeletePost() {
  const [blogs, setBlogs] = useState([]);

  // Fetch all blogs
  const fetchBlogs = async () => {
    try {
      const response = await axios.get("http://localhost:8000/api/posts");
      setBlogs(response.data);
    } catch (error) {
      console.error("Error fetching blogs:", error);
    }
  };

  // Delete a blog
  const deleteBlog = async (id) => {
    try {
      await axios.delete(`http://localhost:8000/api/posts/${id}`);
      alert("Blog deleted successfully!");
      fetchBlogs(); // Refresh the list after deletion
    } catch (error) {
      console.error("Error deleting blog:", error);
    }
  };

  // Load blogs when the component mounts
  useEffect(() => {
    fetchBlogs();
  }, []);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-6">
      <h1 className="text-2xl font-bold mb-6">Delete Blog Posts</h1>
      <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-4xl">
        {blogs.length === 0 ? (
          <p>No blogs available.</p>
        ) : (
          <table className="w-full border-collapse border border-gray-300">
            <thead>
              <tr className="bg-gray-200">
                <th className="border border-gray-300 px-4 py-2 text-left">
                  Title
                </th>
                <th className="border border-gray-300 px-4 py-2 text-left">
                  Content
                </th>
                <th className="border border-gray-300 px-4 py-2">Actions</th>
              </tr>
            </thead>
            <tbody>
              {blogs.map((blog) => (
                <tr key={blog._id}>
                  <td className="border border-gray-300 px-4 py-2">
                    {blog.title}
                  </td>
                  <td className="border border-gray-300 px-4 py-2">
                    {blog.content}
                  </td>
                  <td className="border border-gray-300 px-4 py-2 text-center">
                    <button
                      onClick={() => deleteBlog(blog._id)}
                      className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
}
