import React, { useState, useEffect } from "react";
import axios from "axios";

export default function EditPost() {
  const [blogs, setBlogs] = useState([]);
  const [editBlog, setEditBlog] = useState(null); // To store the blog being edited
  const [formData, setFormData] = useState({
    title: "",
    content: "",
    tags: "",
    createdAt: "",
  });

  // Fetch blogs
  const fetchBlogs = async () => {
    try {
      const response = await axios.get("http://localhost:8000/api/posts"); // API to get all blogs
      setBlogs(response.data);
    } catch (error) {
      console.error("Error fetching blogs:", error);
    }
  };

  // Open edit form with the selected blog's details
  const handleEditClick = (blog) => {
    setEditBlog(blog._id); // Set the blog being edited
    setFormData({
      title: blog.title,
      content: blog.content,
      tags: blog.tags.join(", "), // Convert tags array to a comma-separated string
      createdAt: blog.createdAt,
    });
  };

  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Submit updated blog
  const handleFormSubmit = async (e) => {
    e.preventDefault();
    try {
      const updatedBlog = {
        title: formData.title,
        content: formData.content,
        tags: formData.tags.split(",").map((tag) => tag.trim()), // Convert back to array
        createdAt: formData.createdAt,
      };
      await axios.put(`http://localhost:8000/api/posts/${editBlog}`, updatedBlog); // Send PUT request
      alert("Blog updated successfully!");
      setEditBlog(null); // Close the form
      fetchBlogs(); // Refresh the blog list
    } catch (error) {
      console.error("Error updating blog:", error);
    }
  };

  // Fetch blogs on component mount
  useEffect(() => {
    fetchBlogs();
  }, []);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-6">
      <h1 className="text-2xl font-bold mb-6">Edit Blog Posts</h1>
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
                  Actions
                </th>
              </tr>
            </thead>
            <tbody>
              {blogs.map((blog) => (
                <tr key={blog._id}>
                  <td className="border border-gray-300 px-4 py-2">
                    {blog.title}
                  </td>
                  <td className="border border-gray-300 px-4 py-2 text-center">
                    <button
                      onClick={() => handleEditClick(blog)}
                      className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
                    >
                      Edit
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>

      {editBlog && (
        <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-md mt-6">
          <h2 className="text-xl font-bold mb-4">Edit Blog</h2>
          <form onSubmit={handleFormSubmit}>
            <div className="mb-4">
              <label className="block mb-1 font-semibold">Title</label>
              <input
                type="text"
                name="title"
                value={formData.title}
                onChange={handleInputChange}
                className="w-full border border-gray-300 px-4 py-2 rounded-lg"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block mb-1 font-semibold">Content</label>
              <textarea
                name="content"
                value={formData.content}
                onChange={handleInputChange}
                className="w-full border border-gray-300 px-4 py-2 rounded-lg"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block mb-1 font-semibold">Tags</label>
              <input
                type="text"
                name="tags"
                value={formData.tags}
                onChange={handleInputChange}
                className="w-full border border-gray-300 px-4 py-2 rounded-lg"
                placeholder="Comma-separated tags"
                required
              />
            </div>
            <div className="flex justify-between">
              <button
                type="submit"
                className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600"
              >
                Save Changes
              </button>
              <button
                type="button"
                onClick={() => setEditBlog(null)}
                className="bg-gray-500 text-white px-4 py-2 rounded-lg hover:bg-gray-600"
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
}
