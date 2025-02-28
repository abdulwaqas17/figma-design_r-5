// import React from "react";
// import { useState } from "react";
// import Navbar from "../../Components/Navbar";
// // import { Button } from "@/components/ui/button";

// const Profile = () => {
//   const [blog, setBlog] = useState({
//     title: "",
//     author: "",
//     image: "",
//     description: "",
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setBlog({ ...blog, [name]: value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log(blog);
//   };

//   return (
//    <>
//     <Navbar />
//     <div className="min-h-screen flex flex-col bg-gray-100">
//       {/* Navbar */}
//       {/* <nav className="bg-purple-800 shadow-md p-4 flex justify-between items-center">
//         <h1 className="text-xl font-semibold text-white">My Website</h1>
//         <button className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-md">
//           Logout
//         </button>
//       </nav> */}

//       <div className="flex flex-col md:flex-row p-6 gap-6">
//         {/* User Info Section */}
//         <div className="bg-white p-6 rounded-2xl shadow-lg w-full md:w-1/3">
//           <img
//             src="https://via.placeholder.com/150"
//             alt="Profile"
//             className="w-24 h-24 mx-auto rounded-full mb-4 border-4 border-purple-500"
//           />
//           <h2 className="text-center text-lg font-semibold">John Doe</h2>
//           <p className="text-center text-gray-600">johndoe@example.com</p>
//           <p className="text-center text-gray-600">USA</p>
//           <p className="text-center text-gray-600">01 Jan 1990</p>
//         </div>

//         {/* Blog Form Section */}
//         <div className="bg-white p-6 rounded-2xl shadow-lg w-full md:w-2/3">
//           <h2 className="text-2xl font-semibold text-purple-600 mb-4">
//             Create a Blog
//           </h2>
//           <form onSubmit={handleSubmit} className="space-y-4">
//             <input
//               type="text"
//               name="title"
//               placeholder="Blog Title"
//               value={blog.title}
//               onChange={handleChange}
//               className="w-full p-2 border border-gray-300 rounded-md"
//             />
//             <input
//               type="text"
//               name="author"
//               placeholder="Author Name"
//               value={blog.author}
//               onChange={handleChange}
//               className="w-full p-2 border border-gray-300 rounded-md"
//             />
//             <input
//               type="file"
//               name="image"
//               onChange={handleChange}
//               className="w-full p-2 border border-gray-300 rounded-md"
//             />
//             <textarea
//               name="description"
//               placeholder="Blog Description"
//               value={blog.description}
//               onChange={handleChange}
//               className="w-full p-2 border border-gray-300 rounded-md"
//               rows="8"
//             ></textarea>
//             <div className="flex gap-4">
//               <button className="bg-gray-600 hover:bg-gray-700 text-white px-4 py-2 rounded-md">
//                 Cancel
//               </button>
//               <button className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-md">
//                 Create Post
//               </button>
//             </div>
//           </form>
//         </div>
//       </div>
//     </div>
//     </>
//   );
// };

// export default Profile;
import React from "react";
import { useState } from "react";
import Navbar from "../../Components/Navbar";

const Profile = () => {
  const [blog, setBlog] = useState({
    title: "",
    author: "",
    image: "",
    description: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setBlog({ ...blog, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(blog);
  };

  
  return (
    <div>
        <Navbar />
        <div className="min-h-screen flex flex-col bg-gray-100">
      <div className="flex flex-col md:flex-row p-6 gap-6">
        {/* User Info Section */}
        <div className="bg-white p-6 rounded-2xl shadow-lg w-full md:w-1/3">
          <img
            src="https://via.placeholder.com/150"
            alt="Profile"
            className="w-24 h-24 mx-auto rounded-full mb-4 border-4 border-purple-500"
          />
          <h2 className="text-center text-lg font-semibold">John Doe</h2>
          <p className="text-center text-gray-600">johndoe@example.com</p>
          <p className="text-center text-gray-600">USA</p>
          <p className="text-center text-gray-600">01 Jan 1990</p>
          <div className="mt-4 flex justify-center gap-4">
            <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md">Edit Profile</button>
            <button className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-md">Logout</button>
          </div>
        </div>

        {/* Blog Form Section */}
        <div className="bg-white p-6 rounded-2xl shadow-lg w-full md:w-2/3">
          <h2 className="text-2xl font-semibold text-purple-600 mb-4">Create a Blog</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              name="title"
              placeholder="Blog Title"
              value={blog.title}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded-md"
            />
            <input
              type="text"
              name="author"
              placeholder="Author Name"
              value={blog.author}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded-md"
            />
            <input
              type="file"
              name="image"
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded-md"
            />
            <textarea
              name="description"
              placeholder="Blog Description"
              value={blog.description}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded-md"
              rows="4"
            ></textarea>
            <div className="flex gap-4">
              <button className="bg-gray-400 hover:bg-gray-500 text-white px-4 py-2 rounded-md">Cancel</button>
              <button type="submit" className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-md">
                Create Post
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Profile;

