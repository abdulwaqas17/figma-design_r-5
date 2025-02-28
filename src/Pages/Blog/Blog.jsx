import React from "react";
import { useState } from "react";
import Navbar from "../../Components/Navbar";
import SixCarts from "../../Components/SixCarts";
import Footer from "../../Components/Footer";
import ThreeCarts from "../../Components/ThreeCarts";
import ModalBox from "../../Components/Modal";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import MyModal from "../../Components/demo";
import { addDoc, collection ,getDocs} from "firebase/firestore";
import { db } from "../../services/firebase";
import BlogModal from "../../Components/Modal";
import { motion, AnimatePresence } from "framer-motion";
// import './../App.css'

// import TailwindModal from './demo'

const Blog = () => {
  const [isOpen, setIsOpen] = useState(false);
  // console.log(isOpen);
  // const [show, setShow] = useState(false);

  // console.log('blog');

  // const handleClose = () => {
  //   setShow(false)
  //   console.log('11111111111');
  // };
  // const handleShow = () =>{
  //   console.log('showw111');
  //   setShow(true)
  // } ;


   // set the data
 

  // get the data
  async function GetData() {
    const querySnapshot = await getDocs(collection(db, "users"));
    console.log(querySnapshot);
    // querySnapshot.forEach((doc) => {
    //   console.log(`${doc.id} => ${doc.data()}`);
    // });
    querySnapshot.forEach((doc) => {
      console.log(doc.id, "=>", doc.data()); // ✅ Ye sahi tarika hai
    });
  }

  

  // form which is object
  const [Form,setForm] = useState({
    authorName :'',
    Title:'',
    Disc:''
  })

  function handleChange(e) {
    setForm({...Form,[e.target.name]:e.target.value});
    console.log(Form);
  }


  // push the data
  async function pushData() {
    try {
      const docRef = await addDoc(collection(db, "users"), Form
      );

      console.log("Document written with ID: ", docRef);
      console.log("Document : ", docRef.id);
      console.log('abcccc');

      setIsOpen(false);
      setForm({
        authorName :'',
        Title:'',
        Disc:''
      })
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  }

  return (
    <div>
      {/* aik componet k through dosrey component m function bhi pas krwa sakte hn as a props aur kam bhi krwa sakthn */}
      {/* Modal */}
      {/* <MyModal isShow={show} func={handleClose}/> */}
      {/* <TailwindModal isShow={show} func={handleClose}/> */}

{/* {console.log(isOpen)} */}
      {/* <BlogModal open={isOpen}/> */}
      <AnimatePresence>
        {isOpen && (
          <div className="fixed inset-0 flex items-center justify-center z-50">
            {/* Overlay */}
            <motion.div
              className="absolute inset-0 bg-black bg-opacity-10 backdrop-blur-lg"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            />
{/* absolute inset-0 bg-gray-900 bg-opacity-30 backdrop-blur-sm */}
            {/* Modal Content */}
            <motion.div
              className="bg-white p-6 rounded-2xl shadow-xl z-10 w-96"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.3 }}
            >
              <h2 className="text-xl font-semibold text-gray-800 mb-4">Create a Blog</h2>
              
              <input
              value={Form.authorName} onChange={handleChange} name="authorName"
                type="text"
                placeholder="Author Name"
                className="w-full p-2 border rounded-lg mb-3 focus:ring-2 focus:ring-blue-500"
              />
              <input
              value={Form.Title} onChange={handleChange} name="Title"
                type="text"
                placeholder="Blog Title"
                className="w-full p-2 border rounded-lg mb-3 focus:ring-2 focus:ring-blue-500"
              />
              <textarea
              value={Form.Disc} onChange={handleChange} name="Disc"
                placeholder="Blog Description"
                className="w-full p-2 border rounded-lg mb-3 h-24 focus:ring-2 focus:ring-blue-500"
              ></textarea>

              <div className="flex justify-end space-x-2">
                <button
                  onClick={() => setIsOpen(false)}
                  className="px-4 py-2 bg-gray-300 text-gray-800 rounded-lg hover:bg-gray-400 transition"
                >
                  Cancel
                </button>
                <button
                onClick={pushData}
                  className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
                >
                  Post
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      <Navbar />
      <main className="bg-gray-100 px-[20px] md:px-[50px] pb-[80px]">
        <section className="md:pt-[70px] pt-[40px] md:mb-[90px] mb-[50px] text-center">
          <h3 className="md:text-2xl font-bold">Hello React</h3>
          <h1 className="py-[20px] text-2xl md:text-5xl font-bold">
            Find all our blogs from here
          </h1>
          <p className="md:w-[60%] w-full mx-auto pb-[18px] md:pb-[30px]">
            Lorem ipsum dolor sit, ame . Laudantium, aspernatur modit
            consectetur adipisicing elit. Eos neque quod delectus. Laudantium,
            aspernatur modi?
          </p>
          <button

          onClick={() => setIsOpen(true)}
            
            className="font-bold md:px-[20px] px-[15px] md:py-[10px] py-[10px] border-[2px] hover:border-purple-700 hover:text-black hover:bg-transparent cursor-pointer bg-purple-700 text-white md:text-xl transition-all rounded-[20px]"
          >
            Create Your Blog
          </button>
          <button
            onClick={GetData}
            className="font-bold md:px-[20px] px-[15px] md:py-[10px] py-[10px] border-[2px] hover:border-purple-700 hover:text-black hover:bg-transparent cursor-pointer bg-purple-700 text-white md:text-xl transition-all rounded-[20px]"
          >
            Get Your Blog
          </button>
        </section>
        <SixCarts />
        700
        <div className="mt-[40px]">
          <ThreeCarts />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Blog;
