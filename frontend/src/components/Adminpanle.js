import React from "react";
import { Link } from 'react-router-dom';

export default function Adminpanle() {
  return (
    <div className="flex flex-col items-center min-h-screen bg-gray-100 p-6">
      <h1 className="text-2xl font-bold mb-8">Admin Panel</h1>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
        {/* Add Blog Box */}
        <div className="bg-white rounded-lg shadow-lg p-6 flex flex-col items-center hover:shadow-xl transition-shadow">
          <img
            src="https://uxwing.com/wp-content/themes/uxwing/download/video-photography-multimedia/add-image-photo-icon.png"
            alt="Add Blog"
            className="w-24 h-24 mb-4"
          />
          <h2 className="text-lg font-semibold mb-2">Add Blog</h2>
          <p className="text-gray-600 mb-4 text-center">
            Create and publish a new blog post.
          </p>
          <Link to="/addpost">
          <button
            type="button"
            className="bg-blue-600 text-white px-4 py-2 rounded-lg"
          >
            Add Now
          </button>
        </Link>
        </div>

        {/* Edit Blog Box */}
        <div className="bg-white rounded-lg shadow-lg p-6 flex flex-col items-center hover:shadow-xl transition-shadow">
          <img
            src="https://www.vhv.rs/dpng/d/494-4943577_post-edit-icon-material-design-hd-png-download.png"
            alt="Edit Blog"
            className="w-24 h-24 mb-4"
          />
          <h2 className="text-lg font-semibold mb-2">Edit Blog</h2>
          <p className="text-gray-600 mb-4 text-center">
            Modify an existing blog post.
          </p>
          <Link to="/editpost">
          <button className="bg-green-600 text-white px-4 py-2 rounded-lg">
            Edit Now
          </button></Link>
        </div>

        {/* Delete Blog Box */}
        <div className="bg-white rounded-lg shadow-lg p-6 flex flex-col items-center hover:shadow-xl transition-shadow">
          <img
            src="https://cdn0.iconfinder.com/data/icons/digital-documents-3/66/page_document_rejected_unavailable_error-512.png"
            alt="Delete Blog"
            className="w-24 h-24 mb-4"
          />
          <h2 className="text-lg font-semibold mb-2">Delete Blog</h2>
          <p className="text-gray-600 mb-4 text-center">
            Remove a blog post permanently.
          </p>
          <Link to='/deletepost'>
          <button className="bg-red-600 text-white px-4 py-2 rounded-lg">
            Delete Now
          </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
