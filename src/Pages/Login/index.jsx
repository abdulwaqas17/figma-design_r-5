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
    // console.log("Form Data Submitted:", formData);
    await signInWithEmailAndPassword(auth, formData.email, formData.password)
      .then(async (userCredential) => {
        //sign in successfully
        console.log(userCredential);
        console.log(userCredential.user);

        alert("sign in successfully");

        let usersData = await getDocs(collection(db, "users"))
          .then((u) => {
            console.log("u of then ", u);
            u.forEach((doc) => {
              if (doc.data().email == formData.email) {
                 console.log('doc.data() 36 line', doc.data());
                console.log(doc.id);


                
                window.localStorage.setItem("LoginUserID", doc.id);
                window.localStorage.setItem("LoginUserData", JSON.stringify(doc.data()));
                
              }
              // console.log(doc.id, doc.data().email); // ✅ Ye sahi tarika hai
            });

            alert('go to home page');
            navigate('/home');
           
          })
          .catch((c) => {
            alert(c);
          });

        // console.log('userData ',usersData);
      })
      .catch((c) => {
        alert(c);
      });
  };

  return (
    

<div className="flex justify-center items-center min-h-screen bg-purple-900">
      <div className="bg-white bg-opacity-10 backdrop-blur-lg p-8 rounded-2xl shadow-lg w-full max-w-md text-white">
        <div className="flex justify-between mb-6">
          <Link
            to="/"
            className="w-1/2 p-2 text-center bg-purple-700 rounded-l-lg"
          >
            Sign Up
          </Link>
          <Link
            to="/signin"
            className="w-1/2 p-2 text-center bg-purple-500 rounded-r-lg"
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
            className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 bg-white text-black"
            required
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 bg-white text-black"
            required
          />

          <div className="flex items-center">
            <input type="checkbox" id="remember" className="mr-2" />
            <label htmlFor="remember">Accept terms and conditions</label>
          </div>
          <button
            type="submit"
            className="w-full bg-purple-700 text-white p-2 rounded-md hover:bg-purple-800 transition"
          >
            Sign in
          </button>
        </form>
      </div>
    </div>

  );
};

export default LoginForm;
