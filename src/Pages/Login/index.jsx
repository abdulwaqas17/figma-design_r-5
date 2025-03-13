import { useState } from "react";
import { Link, useNavigate } from "react-router";
import { auth } from "../../services/firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import { getDocs, collection } from "firebase/firestore";
import { db } from "../../services/firebase";

const LoginForm = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await signInWithEmailAndPassword(auth, formData.email, formData.password)
      .then(async (userCredential) => {
        alert("Sign in successfully");

        let usersData = await getDocs(collection(db, "users"))
          .then((u) => {
            u.forEach((doc) => {
              if (doc.data().email === formData.email) {
                window.localStorage.setItem("LoginUserID", doc.id);
                alert("Go to home page");
                navigate("/");
              }
            });
          })
          .catch((c) => {
            alert(c);
          });
      })
      .catch((c) => {
        alert(c);
      });
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-purple-900">
      <div className="bg-gray-100 bg-opacity-10 backdrop-blur-lg p-8 rounded-2xl shadow-lg w-full max-w-md text-white">
        <div className="flex justify-center gap-[40px] mb-6">
          <Link
            to="/signup"
            className="px-[20px] py-[10px] md:text-xl text-center text-purple-900 bg-white hover:bg-purple-800 hover:text-white transition-all rounded-[5px]"
          >
            Sign Up
          </Link>
          <Link
            to="/signin"
            className="px-[20px] py-[10px] md:text-xl text-center  text-white bg-purple-800 transition-all rounded-[5px]"
          >
            Sign In
          </Link>
        </div>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            className="w-full p-2 focus:border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 bg-white text-black"
            required
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            className="w-full p-2 focus:border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 bg-white text-black"
            required
          />

          <div className="flex items-center">
            <input type="checkbox" id="remember" className="mr-2" />
            <label htmlFor="remember" className="text-black">Remember me</label>
          </div>
          <button
            type="submit"
            className="w-full cursor-pointer bg-purple-700 text-white p-2 rounded-md hover:bg-purple-800 transition"
          >
            Sign in
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
