import { useState } from "react";
import { Link, useNavigate } from "react-router";
import { auth } from "../../services/firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { db } from "../../services/firebase";
import { addDoc, collection } from "firebase/firestore";

const SignupForm = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    fullname: "",
    email: "",
    password: "",
    education: "",
    country: "",
    dob: "",
    posts: [],
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await createUserWithEmailAndPassword(auth, formData.email, formData.password)
      .then(async (userDetails) => {
        await addDoc(collection(db, "users"), formData)
          .then(() => {
            alert("Sign up successfully");
            navigate("/signin");
          })
          .catch((err) => alert(err));
      })
      .catch((c) => alert(c));
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-br from-purple-900 to-gray-900 p-4">
      <div className="bg-white bg-opacity-20 backdrop-blur-lg p-8 rounded-2xl shadow-xl w-full max-w-md text-white">
        <div className="flex justify-center gap-6 mb-6">
          <Link
            to="/signup"
            className="px-5 py-2 md:text-lg font-semibold  bg-purple-800 text-white transition-all rounded-lg shadow"
          >
            Sign Up
          </Link>
          <Link
            to="/signin"
            className="px-5 py-2 md:text-lg font-semibold text-purple-900 bg-white hover:bg-purple-800 hover:text-white transition-all rounded-lg shadow"
          >
            Sign In
          </Link>
        </div>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="fullname"
            placeholder="Full Name"
            value={formData.fullname}
            onChange={handleChange}
            className="w-full p-3 rounded-md border border-gray-300 focus:border-purple-500 focus:ring-2 focus:ring-purple-500 bg-white text-black"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            className="w-full p-3 rounded-md border border-gray-300 focus:border-purple-500 focus:ring-2 focus:ring-purple-500 bg-white text-black"
            required
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            className="w-full p-3 rounded-md border border-gray-300 focus:border-purple-500 focus:ring-2 focus:ring-purple-500 bg-white text-black"
            required
          />
          <input
            type="text"
            name="education"
            placeholder="Education"
            value={formData.education}
            onChange={handleChange}
            className="w-full p-3 rounded-md border border-gray-300 focus:border-purple-500 focus:ring-2 focus:ring-purple-500 bg-white text-black"
            required
          />
          <input
            type="text"
            name="country"
            placeholder="Country"
            value={formData.country}
            onChange={handleChange}
            className="w-full p-3 rounded-md border border-gray-300 focus:border-purple-500 focus:ring-2 focus:ring-purple-500 bg-white text-black"
            required
          />
          <input
            type="date"
            name="dob"
            value={formData.dob}
            onChange={handleChange}
            className="w-full p-3 rounded-md border border-gray-300 focus:border-purple-500 focus:ring-2 focus:ring-purple-500 bg-white text-black"
            required
          />
          <div className="flex items-center">
            <input type="checkbox" id="remember" className="mr-2" />
            <label htmlFor="remember" className="text-black">Remember me</label>
          </div>
          <button
            type="submit"
            className="w-full cursor-pointer bg-purple-700 text-white p-3 rounded-md hover:bg-purple-800 transition font-semibold"
          >
            Sign Up
          </button>
          <p className="text-center mt-4 text-black">
            Already have an account? {" "}
            <Link to="/signin" className="text-purple-900 hover:underline ">
              Sign In
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default SignupForm;
