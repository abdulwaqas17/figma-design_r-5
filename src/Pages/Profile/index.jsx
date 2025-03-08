import React, { useEffect,useContext } from "react";
import { useState } from "react";
import Navbar from "../../Components/Navbar";
import { db } from "../../services/firebase";
import { doc , getDoc ,addDoc,setDoc,collection} from "firebase/firestore";
import { useNavigate } from "react-router";


const Profile = () => {

  // const authorData = JSON.parse(window.localStorage.getItem('LoginUserData'))
  // console.log(authorData);

  const navigate = useNavigate();

  const [loginUserID,setLoginUserID] = useState(null);
  const [loginUser,setLoginUser] = useState('');

 
  



  // 1st use effect jo srif first time chaly ga, user id ls se le kr set kr rha h
  useEffect(() => {
    const userID = window.localStorage.getItem("LoginUserID");
    setLoginUserID(userID);
    console.log('121',loginUserID);
    console.log('useEffect [] 23');
    console.log('[] use effect of profile');
  }, []); // ✅ Empty dependency array means sirf ek dafa run hoga

 


  // second use effet jo loginUserID change honay k bad chaly ga, Get Login User Data
  useEffect(()=>{

    

    // get the specice obj of login user
  const getUser = async ()=> {

 

  if (loginUserID !== null) {
    try {
    
      const userRef = doc(db, 'users', loginUserID);
      const desireObj = await getDoc(userRef);
  
      if (desireObj.exists()) {
        console.log("User Data:", desireObj.data()); // ✅ Document ka data mil gaya
        setLoginUser(desireObj.data());
      } else {
        console.log("No such document!");
      }
  
  
    } catch (e) {
      alert(e)
    }
  }

}

getUser();

  },[loginUserID]);


 
  const [blog, setBlog] = useState({
    title: "",
    image: "",
    description: "",
    authorDetails : '',
    authorID : ''
  });
  
  console.log(blog);
  console.log(loginUser);
  console.log(loginUser.posts);
  console.log(loginUser.posts.length);
  console.log(blog);


  //handleChange for inputs
  const handleChange = (e) => {
    const { name, value } = e.target;
    setBlog({ ...blog, [name]: value , authorDetails : loginUser , authorID : loginUserID});
  };


  // handleSubmit, push the post data in the firestore and also update user data
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(blog);

    const postsRef = collection(db,'posts');
    const blogData = await addDoc(postsRef,blog).then(async (e)=>{

      // console.log(e);
      // console.log(e.id);
      let myAutherObj = loginUser;
      // console.log(myAutherObj);
      // console.log(myAutherObj.posts);
      myAutherObj.posts.push(e.id)
      // console.log(myAutherObj);


      // re assign user data for updation of number of post
      try{

        await setDoc(doc(db,'users',loginUserID), myAutherObj)

      } catch(err) {
        alert(err)
      }


      alert('your post created successfully');
      // navigate('/blog')

    }).catch((c)=>{
      console.log(c);
    })


  };

 


  const cancel = ()=> {

    setBlog({
      title: "",
      image: "",
      description: "",
      authorDetails : '' ,
      authorID : ''
    })
  }





  
  return (
    <div>
        <Navbar />
        <div className="min-h-screen flex flex-col bg-gray-100">
      <div className="flex flex-col md:flex-row p-6 gap-6">
        {/* User Info Section */}
        <div className="bg-white p-6 rounded-2xl shadow-lg w-full md:w-1/3">
          <img
            src="https://wallpapers.com/images/hd/contact-profile-icon-orange-background-r9rxk5644r2zxpzj.png"
            alt="Profile"
            className="w-[170px] h-[170px] mx-auto rounded-full mb-4 border-5 border-purple-950"
          />
          <h2 className="text-center text-lg font-semibold">{loginUser.fullname}</h2>
          <p className="text-center text-gray-600">{loginUser.email}</p>
          <p className="text-center text-gray-600">{loginUser.country}</p>
          <p className="text-center text-gray-600">{loginUser.dob}</p>
          <p className="text-center text-gray-600">No. of Blog writes : {loginUser.posts.length}</p>

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
              required
              name="title"
              placeholder="Blog Title"
              value={blog.title}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded-md"
              maxLength='30'
              minLength='5'
            />
         
            <input
              type="text"
              required
              name="image"
              placeholder="vaild image url"
              value={blog.image}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded-md"
              
            />
            <textarea
              required
              name="description"
              placeholder="Blog Description"
              value={blog.description}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded-md"
              rows="4"
              maxLength= '145'
              minLength='10'
            ></textarea>
            <div className="flex gap-4">
              <button className="bg-gray-400 hover:bg-gray-500 text-white px-4 py-2 rounded-md" onClick={cancel}>Cancel</button>
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

