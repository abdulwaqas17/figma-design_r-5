import React, { useEffect, useState , useContext} from "react";
import { db } from "../../services/firebase";
import { getDoc,doc } from "firebase/firestore";
import Navbar from "../../Components/Navbar";
import Cart from "../../Components/Cart";
import PostTagline from "../../Components/PostTagline";
// import { al } from "react-router/dist/development/fog-of-war-CCAcUMgB";


const Post = () => {


    const [postDataID,setPostDataID] = useState(null);
    const [postData,setPostData] = useState(null);
    const [authorPosts,setAuthorPosts] = useState(null);

    // let authorData = JSON.parse(window.localStorage.getItem('LoginUserData'));
    // console.log(authorData);

    // console.log('aaaa');

    console.log('[] use effect before');
    // use effcet which run only 1 time, set post id
    useEffect(()=> {

      console.log('[] use effect of /post');
      setPostDataID(window.localStorage.getItem('postID'));
      console.log('[] use effect of /post after set');


    },[])
    console.log('[] use effect after');

      // use effcet which run when postID update, Get the data of post
    useEffect(()=> {

      console.log('in the 1 effect postDataID',postDataID);

     if (postDataID !== null) {

      const desirePost = getDoc(doc(db,'posts',postDataID)).then((data)=> {

        console.log('thennnn id',postDataID);

        if(data.exists()){
          setPostData(data.data())
          console.log('post data ===>',data.data());
          console.log('post data ===>',data.id);
        }else{
          console.log('post not found');
        }
        
    }).catch((c)=>{

      alert(c)

    })

     }else {
      // setPostData('')
      console.log('This blog could not show ');

     }

  
  },[postDataID]);

  console.log('postData ===>' ,postData);


  // useEffect(()=> {

  //   let getAuthor = async()=> {

  //    try{
  //     let myAuthor = await getDoc(doc(db,'users',postData.authorID));
  //     // console.log(myAuthor.data());
  //     let myAuthorData = myAuthor.data();

  //     let myAuthorPosts = myAuthorData.posts.map((postID)=> {

  //       getDoc(doc(db,'posts',postID)).then((post)=> {

  //         let authorPost = post.data();
  //         console.log(authorPost);
          
  //         return (
  //           <Cart
  //           heading={authorPost.title}
  //           para={authorPost.description}
  //           imgLink={authorPost.image}
  //           />
  //           )
      

  //       })

      

  //     }).catch((e)=> {
  //       console.log(e);
  //     })

  //     console.log('rrrrrrrrrrrrrrrrrrrrr');
  //     console.log(myAuthorPosts);


  //    } catch (c) {

  //     console.log(c);

  //    }
  //    console.log('eeeeeeeeeeeeeeeeeeeeeee');
  //    console.log(myAuthorPosts);

  //   }

  //   getAuthor()
  // },[postData])


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


  // useEffect(() => {
  //   let getAuthor = async () => {
  //     try {
  //       // Author data le kar rahe hain
  //       let myAuthor = await getDoc(doc(db, 'users', postData.authorID));
  //       let myAuthorData = myAuthor.data();
  //       console.log(myAuthorData);
  
  //       // Sab posts ko promises ki form me collect karenge
  //       let myAuthorPostsPromises = myAuthorData.posts.map((postID) => {
  //         return getDoc(doc(db, 'posts', postID)).then((post) => {
  //           return post.data(); // Yeh promise return kar raha hai
  //         });
  //       });

  //       console.log(myAuthorPostsPromises);
        
  //       // Sare promises ko resolve karenge
  //       let myAuthorPostsData = await Promise.all(myAuthorPostsPromises);

  //       console.log(myAuthorPostsData);
  
  //       // UI components ko banayenge
  //       let myAuthorPosts = myAuthorPostsData.map((authorPost, index) => {
  //         return (
  //           <Cart
  //             key={index}
  //             heading={authorPost.title}
  //             para={authorPost.description}
  //             imgLink={authorPost.image}
  //           />
  //         );
  //       });
  
  //       console.log('rrrrrrrrrrrrrrrrrrrrr');
  //       console.log(myAuthorPosts); // Yeh array of JSX components hai
  
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   };
  
  //   getAuthor();
  // }, [postData]);
  
  useEffect(() => {
    let getAuthor = async () => {
      try {
        let myAuthor = await getDoc(doc(db, 'users', postData.authorID));
        let myAuthorData = myAuthor.data();
  
        let myAuthorPosts = [];  // Yeh array me components store honge
  
        for (let postID of myAuthorData.posts) { // Asynchronously handle karne ke liye
          let post = await getDoc(doc(db, 'posts', postID));
          let authorPost = post.data();

          console.log('Components Array:', authorPost);
          console.log('Components Array:', post.id);
  
          // Ab hum directly component array me push karenge
          myAuthorPosts.push(
            <Cart
             id = {post.id}
              heading={authorPost.title}
              para={authorPost.description}
              imgLink={authorPost.image}
            />
          );
        }
  
        console.log('Components Array:', myAuthorPosts); // Yeh ab components ka array hai
        setAuthorPosts(myAuthorPosts);
        console.log('authorPosts:', authorPosts); // Yeh ab components ka array hai
  
      } catch (error) {
        console.log(error);
      }
    };
  
    getAuthor();
  }, [postData]);
  

  console.log('authorPosts:', authorPosts); 
  

  return (
    <>
    <Navbar />
    <div className="bg-gray-100 min-h-screen flex flex-col items-center justify-center gap-[50px] p-4">
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
            <h2 className="text-xl font-bold text-gray-800">{postData !== null ? postData.authorDetails.fullname : ''}</h2>
            <p className="text-gray-600 text-sm">{postData !== null ? postData.authorDetails.dob : ''}</p>
            <p className="text-gray-600 text-sm">{postData !== null ? postData.authorDetails.email : ''}</p>
            <p className="text-gray-600 text-sm">{postData !== null ? postData.authorDetails.country : ''}</p>
          </div>
        </div>
      </div>

      <div>
        {postData ? (

<div>
<PostTagline postValue={`${postData.authorDetails.fullname}' Posts`} />

<div className=" flex justify-between flex-wrap gap-[40px]" >
{authorPosts && authorPosts.length > 0 ? (

  authorPosts

): 'No Post Found'}
</div>




</div>



        ) : 'Hello'}
      </div>
    </div>
    </>
  );
};

export default Post;
