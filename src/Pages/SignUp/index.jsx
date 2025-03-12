import { useState } from "react";
import { Link,useNavigate } from "react-router";
import { auth } from "../../services/firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { db } from "../../services/firebase";
import { addDoc,collection } from "firebase/firestore";

const SignupForm = () => {

  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    fullname: "",
    email: "",
    password: "",
    education: "",
    country: "",
    dob: "",
    posts:[]
  
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async(e) => {
    e.preventDefault();
    // console.log("Form Data Submitted:", formData);
    
    // .then m asyn is lien lagya h q k myDoc bhi await le rha h
    await createUserWithEmailAndPassword(auth,formData.email,formData.password).then ( async (userDetails)=> {

      // console.log('userDetails',userDetails);
      // console.log('userDetails.user',userDetails.user);

      const myDoc = await addDoc(collection(db,'users'),formData).then((e)=> {

        console.log('myDoc.then',e);

        alert('sign up successfully');
  
        navigate('/signin');

        // console.log('myDoc45',myDoc);

      }).catch((err)=>{
        alert(err)
      })

      // console.log('myDoc49',myDoc);


    }).catch((c)=> {
      alert(c);
    })
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
            className="px-[20px] py-[10px] md:text-xl text-center text-purple-900 bg-white hover:bg-purple-800 hover:text-white transition-all rounded-[5px]"
          >
            Sign In
          </Link>
        </div>
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* <input
            type="file"
            name="profileImage"
            onChange={handleChange}
            className="w-full p-2 focus:border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 bg-white text-black"
          /> */}
          <input
            type="text"
            name="fullname"
            placeholder="Full Name"
            value={formData.fullname}
            onChange={handleChange}
            className="w-full p-2 focus:border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 bg-white text-black"
            required
          />
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
          <input
            type="text"
            name="education"
            placeholder="Education"
            value={formData.education}
            onChange={handleChange}
            className="w-full p-2 focus:border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 bg-white text-black"
            required
          />
          <input
            type="text"
            name="country"
            placeholder="Country"
            value={formData.country}
            onChange={handleChange}
            className="w-full p-2 focus:border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 bg-white text-black"
            required
          />
          <input
            type="date"
            name="dob"
            value={formData.dob}
            onChange={handleChange}
            className="w-full p-2 focus:border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 bg-white text-black"
            required
          />
          <div className="flex items-center">
            <input type="checkbox" id="remember" className="mr-2" />
            <label htmlFor="remember">Remember me</label>
          </div>
          <button
            type="submit"
            className="w-full bg-purple-700 text-white p-2 rounded-md hover:bg-purple-800 transition"
          >
            Sign Up
          </button>
          <p className="text-center mt-4">
            Already have an account?{" "}
            <button className="text-purple-300 hover:underline">Sign In</button>
          </p>
        </form>
      </div>
    </div>
  );
};

export default SignupForm;
