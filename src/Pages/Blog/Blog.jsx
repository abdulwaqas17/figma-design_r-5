import React, { useEffect } from "react";
import { useState } from "react";
import Navbar from "../../Components/Navbar";
import SixCarts from "../../Components/SixCarts";
import Footer from "../../Components/Footer";
import ThreeCarts from "../../Components/ThreeCarts";
import Cart from "../../Components/Cart";
import { useNavigate } from "react-router";
// import ModalBox from "../../Components/Modal";
// import Button from "react-bootstrap/Button";
// import Form from "react-bootstrap/Form";
// import Modal from "react-bootstrap/Modal";
// import MyModal from "../../Components/demo";
import { addDoc, collection ,getDocs} from "firebase/firestore";
import { db } from "../../services/firebase";
import PostTagline from "../../Components/PostTagline";
// import BlogModal from "../../Components/Modal";
// import { motion, AnimatePresence } from "framer-motion";
// import './../App.css'

// import TailwindModal from './demo'

const Blog = () => {
  const navigate = useNavigate();
  // const [isOpen, setIsOpen] = useState(false);
  const [posts, setPosts] = useState([]);

  useEffect(()=>{

    const myPosts = getDocs(collection(db,'posts')).then((e)=>{

      console.log('use effect get posts wala');
      // console.log(myPosts); return a promise
      console.log(e);
      let postArray = [];

      e.forEach((doc)=>{

        // console.log(doc.data());
        postArray.push({id : doc.id, ...doc.data()})

      })

      console.log(postArray);
      setPosts(postArray);

    })

  },[])
  console.log(posts);
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
  // async function GetData() {
  //   const querySnapshot = await getDocs(collection(db, "users"));
  //   console.log(querySnapshot);
  //   // querySnapshot.forEach((doc) => {
  //   //   console.log(`${doc.id} => ${doc.data()}`);
  //   // });
  //   querySnapshot.forEach((doc) => {
  //     console.log(doc.id, "=>", doc.data()); // ✅ Ye sahi tarika hai
  //   });
  // }

  

  // form which is object
  const [Form,setForm] = useState({
    authorName :'',
    Title:'',
    Disc:''
  })

  //handleChange
  function handleChange(e) {
    setForm({...Form,[e.target.name]:e.target.value});
    console.log(Form);
  }


  // push the data
  // async function pushData() {
  //   try {
  //     const docRef = await addDoc(collection(db, "users"), Form
  //     );

  //     console.log("Document written with ID: ", docRef);
  //     console.log("Document : ", docRef.id);
  //     console.log('abcccc');

  //     setIsOpen(false);
  //     setForm({
  //       authorName :'',
  //       Title:'',
  //       Disc:''
  //     })
  //   } catch (e) {
  //     console.error("Error adding document: ", e);
  //   }
  // }

  return (
    <div>

  

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

          onClick={() => navigate('/profile')}
            
            className="font-bold md:px-[20px] px-[15px] md:py-[10px] py-[10px] border-[2px] hover:border-purple-700 hover:text-black hover:bg-transparent cursor-pointer bg-purple-700 text-white md:text-xl transition-all rounded-[13px]"
          >
            Create Your Blog
          </button>
         
        </section>

        <SixCarts />
        
        <div className="mt-[40px]">
          <ThreeCarts />
        </div>

        <PostTagline postValue= "Author's Posts"/>

        <div className="threeBoxes flex justify-between flex-wrap gap-[40px] mt-[40px]">



          {console.log(posts.length)}
          {posts.length > 0 && (
            posts.map((p)=>{
             return( 
          
              <Cart
              
              heading={p.title}
              para={p.description}
      
              imgLink = {p.image}

              id = {p.id}

              authorName = {p.authorDetails.fullname}
              postDate = {p.postDate}



            />
         
            // console.log(posts);
             )
            })
            
          )}
   

      </div>




      </main>
      <Footer />
    </div>
  );
};

export default Blog;
