import React, { useEffect, useState , useContext} from "react";
import { db } from "../../services/firebase";
import { getDoc,doc } from "firebase/firestore";
import Navbar from "../../Components/Navbar";
// import { al } from "react-router/dist/development/fog-of-war-CCAcUMgB";


const Post = () => {


    const [postDataID,setPostDataID] = useState(null);
    const [postData,setPostData] = useState(null);
    // const [authorData,setAuthorData] = useState(null);

    let authorData = JSON.parse(window.localStorage.getItem('LoginUserData'));
    // console.log(authorData);

    // console.log('aaaa');


    // use effcet which run only 1 time
    useEffect(()=> {

      console.log('[] use effect of /post');
      setPostDataID(window.localStorage.getItem('postID'))


    },[])

      // use effcet which run when postID update
    useEffect(()=> {

      console.log('in the 1 effect postDataID',postDataID);

     if (postDataID !== null) {

      const desirePost = getDoc(doc(db,'posts',postDataID)).then((data)=> {

        console.log('thennnn id',postDataID);

        if(data.exists()){
          setPostData(data.data())
          console.log('post data ===>',data.data());
        }else{
          console.log('post not found');
        }
        
    }).catch((c)=>{

      alert(c)

    })

     }else {
      setPostData('')
      console.log('This blog could not show ');
     }

  
  },[postDataID]);

  console.log('postData ===>' ,postData);


    // useEffect(()=> {

    //   console.log('bbbbbbbb');
      
    // let aData = JSON.parse(window.localStorage.getItem('LoginUserData'));
    // console.log(aData);

    // if(aData !== authorData) {

    //   // setPostDataID('abc');
    //   console.log('use effect of post');
    //   setAuthorData(JSON.parse(window.localStorage.getItem('LoginUserData')));

    // }else{
    //   console.log('no issue data is correct');
    // }
    

    // });
  //   useEffect(() => {
  //     console.log("useEffect running on every render");
  
  //     let aData = JSON.parse(window.localStorage.getItem("LoginUserData"));
  //     console.log(aData);
  
  //     // if (aData !== authorData) {
  //     //     console.log("Updating authorData...");
  //     //     setAuthorData(aData);
  //     // } else {
  //     //     console.log("Data is already correct");
  //     // }
  // });

    // console.log('ccccccccc');

   


    




    // console.log(authorData);

  return (
    <>
    <Navbar />
    <div className="bg-gray-100 min-h-screen flex items-center justify-center p-4">
      <div className="max-w-3xl w-full bg-white shadow-lg rounded-2xl overflow-hidden">
        {/* Blog Heading */}
        <h1 className="text-center text-3xl font-bold text-purple-700 py-6">
        {postData !== null ? postData.title : ''}
          {/* Blog Title */}
        </h1>

        {/* Blog Image */}
        <img
          src={postData !== null ? postData.image : ''}
          alt="Blog"
          className="w-full h-[400px] border-4"
        />

        {/* Short Paragraph */}
        <p className="text-gray-700 p-6 text-center text-lg">
            {postData !== null ? postData.description : ''}
          {/* This is a short introduction paragraph giving a brief overview of the
          blog topic. */}
        </p>

        {/* Main Content */}
        <div className="px-6 pb-6 space-y-4 text-gray-800">
          <p>
          {/* {postData.p2} */}
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
            suscipit, urna ut tincidunt tulla facilisi. Aenean fermentum, felis eget ultricies gravida, mi
            lorem pharetra felis, ac feugiat velit lorem id lectus. Integer
            dapibus diam at neque dictum volutpa, consectetur adipiscing elit. Donec
            suscipit, urna ut tincidunt tincidunt, justo mi sollicitudin nisl,
            in commodo ligula lectus sit amet eli, consectetur adipiscing elit. Donec
            suscipit, urna ut tincidunt tincidunt, justo mi sollicitudin nisl,
            in commodo ligula lectus sit amet elit.ulla facilisi. Aenean fermentum, felis eget ultricies gravida, mi
            lorem pharetra felis, ac feugiat velit lorem id lectus. Integer
            dapibus diam at neque dictum volutpa, consectetur adipiscing elit. Donec
            suscipit, urna ut tincidunt tincidunt, justo mi sollicitudin nisl,
            in commodo ligula lectus sit amet eli, consectetur adipiscing elit. Donec
            suscipit, urna ut tincidunt tincidunt, justo mi sollicitudin nisl,
            in commodo ligula lectus sit amet elit.incidunt, justo mi sollicitudin nisl,
            in commodo ligula lectus sit amet eli, consectetur adipiscing elit. Donec
            suscipit, urna ut tincidunt tincidunt, justo mi sollicitudin nisl,
            in commodo ligula lectus sit amet elit
          </p>
          <p>
          {/* {postData.p3} */}
            Nulla facilisi. Aenean fermentum, feulla facilisi. Aenean fermentum, felis eget ultricies gravida, mi
            lorem pharetra felis, ac feugiat velit lorem id lectus. Integer
            dapibus diam at neque dictum volutpa, consectetur adipiscing elit. Donec
            suscipit, urna ut tincidunt tincidunt, justo mi sollicitudin nisl,
            in commodo ligula lectus sit amet eli, consectetur adipiscing elit. Donec
            suscipit, urna ut tincidunt tincidunt, justo mi sollicitudin nisl,
            in commodo ligula lectus sit amet elit.lis eget ultricies gravida, mi
            lorem pharetra felis, ac feugiat veto mi sollicitudin nisl,
            in commodo ligula lectus sit amet elit.
          </p>
          <p>
          {/* {postData.p4} */}
            Cras id risus at magna facilisis malesuada. Curabitur ut nisi in
            nunc tincidunt euismod et non quam. Nam sed orci sed leo lobortis
            accumsan.
          </p>
        </div>

        {/* Author Section */}
        <div className="bg-gray-200 p-6 flex items-center gap-4">
          <img
            src="https://wallpapers.com/images/hd/contact-profile-icon-orange-background-r9rxk5644r2zxpzj.png"
            alt="Author"
            className="w-16 h-16 rounded-full border-2 border-purple-600"
          />
          <div>
            <h2 className="text-xl font-bold text-gray-800">{authorData.fullname}</h2>
            <p className="text-gray-600 text-sm">{authorData.dob}</p>
            <p className="text-gray-600 text-sm">{authorData.email}</p>
            <p className="text-gray-600 text-sm">{authorData.country}</p>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default Post;
