// // import { useState } from "react";
// // import { motion, AnimatePresence } from "framer-motion";
// // import { addDoc, collection ,getDocs} from "firebase/firestore";
// // import { db } from "./../../services/firebase";

// // export default function BlogModal(props) {

// //   const [isShow, setIsShow] = useState(false);
  
// //   console.log('props.open modal',props.open);
// //   let a = false;
// //   if(props.open){

// //     setIsShow(true);

// //   }
// //   console.log('a is' , a);
// //   console.log('isOpen modal',isShow);


// //   const [Form,setForm] = useState({
// //     authorName :'',
// //     Title:'',
// //     Disc:''
// //   })

// //   function handleChange(e) {
// //     setForm({...Form,[e.target.name]:e.target.value});
// //     console.log(Form);
// //   }

// //   async function pushData() {
// //     try {
// //       const docRef = await addDoc(collection(db, "users"), Form
// //       );

// //       console.log("Document written with ID: ", docRef);
// //       console.log("Document : ", docRef.id);
// //       console.log('abcccc');

// //       setIsOpen(false);
// //       setForm({
// //         authorName :'',
// //         Title:'',
// //         Disc:''
// //       })
// //     } catch (e) {
// //       console.error("Error adding document: ", e);
// //     }
// //   }
// //   return (
// //     // <div className="flex justify-center items-center min-h-screen bg-gray-100">
  
// //       <AnimatePresence>
// //         {isShow && (
// //           <div className="fixed inset-0 flex items-center justify-center z-50">
// //             {/* Overlay */}
// //             <motion.div
// //               className="absolute inset-0 bg-black bg-opacity-10 backdrop-blur-lg"
// //               initial={{ opacity: 0 }}
// //               animate={{ opacity: 1 }}
// //               exit={{ opacity: 0 }}
// //             />
// // {/* absolute inset-0 bg-gray-900 bg-opacity-30 backdrop-blur-sm */}
// //             {/* Modal Content */}
// //             <motion.div
// //               className="bg-white p-6 rounded-2xl shadow-xl z-10 w-96"
// //               initial={{ opacity: 0, scale: 0.8 }}
// //               animate={{ opacity: 1, scale: 1 }}
// //               exit={{ opacity: 0, scale: 0.8 }}
// //               transition={{ duration: 0.3 }}
// //             >
// //               <h2 className="text-xl font-semibold text-gray-800 mb-4">Create a Blog</h2>
              
// //               <input
// //               value={Form.authorName} onChange={handleChange} name="authorName"
// //                 type="text"
// //                 placeholder="Author Name"
// //                 className="w-full p-2 border rounded-lg mb-3 focus:ring-2 focus:ring-blue-500"
// //               />
// //               <input
// //               value={Form.Title} onChange={handleChange} name="Title"
// //                 type="text"
// //                 placeholder="Blog Title"
// //                 className="w-full p-2 border rounded-lg mb-3 focus:ring-2 focus:ring-blue-500"
// //               />
// //               <textarea
// //               value={Form.Disc} onChange={handleChange} name="Disc"
// //                 placeholder="Blog Description"
// //                 className="w-full p-2 border rounded-lg mb-3 h-24 focus:ring-2 focus:ring-blue-500"
// //               ></textarea>

// //               <div className="flex justify-end space-x-2">
// //                 <button
// //                   onClick={() => setIsShow(false)}
// //                   className="px-4 py-2 bg-gray-300 text-gray-800 rounded-lg hover:bg-gray-400 transition"
// //                 >
// //                   Cancel
// //                 </button>
// //                 <button
// //                 onClick={pushData}
// //                   className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
// //                 >
// //                   Post
// //                 </button>
// //               </div>
// //             </motion.div>
// //           </div>
// //         )}
// //       </AnimatePresence>
// //     // </div>
// //   );
// // }
// <AnimatePresence>
// {isOpen && (
//   <div className="fixed inset-0 flex items-center justify-center z-50">
//     {/* Overlay */}
//     <motion.div
//       className="absolute inset-0 bg-black bg-opacity-10 backdrop-blur-lg"
//       initial={{ opacity: 0 }}
//       animate={{ opacity: 1 }}
//       exit={{ opacity: 0 }}
//     />
// {/* absolute inset-0 bg-gray-900 bg-opacity-30 backdrop-blur-sm */}
//     {/* Modal Content */}
//     <motion.div
//       className="bg-white p-6 rounded-2xl shadow-xl z-10 w-96"
//       initial={{ opacity: 0, scale: 0.8 }}
//       animate={{ opacity: 1, scale: 1 }}
//       exit={{ opacity: 0, scale: 0.8 }}
//       transition={{ duration: 0.3 }}
//     >
//       <h2 className="text-xl font-semibold text-gray-800 mb-4">Create a Blog</h2>
      
//       <input
//       value={Form.authorName} onChange={handleChange} name="authorName"
//         type="text"
//         placeholder="Author Name"
//         className="w-full p-2 border rounded-lg mb-3 focus:ring-2 focus:ring-blue-500"
//       />
//       <input
//       value={Form.Title} onChange={handleChange} name="Title"
//         type="text"
//         placeholder="Blog Title"
//         className="w-full p-2 border rounded-lg mb-3 focus:ring-2 focus:ring-blue-500"
//       />
//       <textarea
//       value={Form.Disc} onChange={handleChange} name="Disc"
//         placeholder="Blog Description"
//         className="w-full p-2 border rounded-lg mb-3 h-24 focus:ring-2 focus:ring-blue-500"
//       ></textarea>

//       <div className="flex justify-end space-x-2">
//         <button
//           onClick={() => setIsOpen(false)}
//           className="px-4 py-2 bg-gray-300 text-gray-800 rounded-lg hover:bg-gray-400 transition"
//         >
//           Cancel
//         </button>
//         <button
//         onClick={pushData}
//           className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
//         >
//           Post
//         </button>
//       </div>
//     </motion.div>
//   </div>
// )}
// </AnimatePresence>