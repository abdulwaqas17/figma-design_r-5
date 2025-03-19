import { useState } from 'react'
import './App.css'
import Navbar from './Components/Navbar'
import Hero from './Components/Hero'
import Footer from './Components/Footer'
import Blog from './Pages/Blog/Blog'
import About from './Pages/About/About'
import Contact from './Pages/Contact/Contact'
import Home from './Pages/Home/Home'
import { BrowserRouter,Routes,Route } from 'react-router'
// import ModalBox from './Components/Modal'
import SignupForm from './Pages/SignUp/index'
import LoginForm from './Pages/Login/index'
import Profile from './Pages/Profile'
import Post from './Pages/Post'


function App() {
 

  return (
    <>

     <BrowserRouter>   

       <Routes>

         <Route path='/signup' element={<SignupForm/>} />
         <Route path='/signin' element={<LoginForm/>} />
         <Route path='/' element={<Home/>} />
         <Route path='/blog' element={<Blog/>} />
         <Route path='/profile' element={<Profile/>} />
         <Route path='/about' element={<About/>} />
         <Route path='/contact' element={<Contact/>} />
         <Route path='/post' element={<Post/>} />

       </Routes>
     
     </BrowserRouter>

    </>
  )
}

export default App


/* 

Yeh rahi Tailwind CSS ki commonly used classes ki list, jo tumhein yad krne aur use karne mein madad degi:

📌 Text & Typography
text-sm text-base text-lg text-xl text-2xl text-3xl text-4xl
font-thin font-light font-normal font-medium font-semibold font-bold font-extrabold
text-left text-center text-right
leading-tight leading-normal leading-relaxed
tracking-tight tracking-wide



🎨 Colors (Text & Background)
text-red-500 text-blue-500 text-green-500 text-yellow-500 text-gray-500
bg-red-500 bg-blue-500 bg-green-500 bg-yellow-500 bg-gray-500
hover:bg-red-600 hover:text-blue-600
border-red-500 border-blue-500




📏 Spacing (Margin & Padding)
m-0 m-1 m-2 m-3 m-4 m-5
mt-2 mb-4 ml-6 mr-8
p-0 p-1 p-2 p-3 p-4 p-5
pt-2 pb-4 pl-6 pr-8




🔲 Flexbox & Grid
flex flex-row flex-col
justify-start justify-center justify-end justify-between justify-around
items-start items-center items-end
gap-2 gap-4 gap-6
grid grid-cols-1 grid-cols-2 grid-cols-3 grid-cols-4



📦 Width & Height
w-4 w-8 w-16 w-32 w-64 w-full
h-4 h-8 h-16 h-32 h-64 h-full
max-w-sm max-w-md max-w-lg max-w-xl



🌟 Borders & Shadows
border border-2 border-4 border-gray-500
rounded-sm rounded-md rounded-lg rounded-full
shadow-sm shadow-md shadow-lg shadow-xl



🎛 Positioning
relative absolute fixed sticky
top-0 bottom-0 left-0 right-0
z-0 z-10 z-20



🎚 Other Useful Classes
hidden block inline-block inline
overflow-hidden overflow-scroll overflow-auto
cursor-pointer cursor-not-allowed
opacity-50 opacity-75 opacity-100
transition duration-200 ease-in-out






Here's your **LinkedIn post**, now updated to mention **Local Storage** as the data storage method:  

---

🚀 **Multi-User Admin Dashboard – Built with HTML, CSS & JavaScript**  

Excited to share my latest project: a **Multi-User Admin Dashboard**, developed as part of my **Web & App Development** course! 🎯  

This **fully responsive** and **dynamic dashboard** allows users to **sign up & sign in** with different roles, including:  
🔹 **Admin** – Full control, including user removal & management.  
🔹 **Manager & Employees** – Role-based access with personalized functionality.  

### ✨ **Key Features:**  
✅ **Role-Based Authentication** – Users can log in as **Admin, Manager, or Employee**.  
✅ **Dynamic Dashboard** – Displays **real-time user statistics** (total users, admins, managers, employees).  
✅ **User Management** – Admins can **add/remove users** & filter users by name.  
✅ **Profile Management** – Users can edit their details with **instant updates**.  
✅ **Multi-Tab Navigation** – Sections include **Home, Profile, Services, Contact, and Dashboard**.  
✅ **Fully Responsive UI** – Optimized for **mobile & desktop** devices.  
✅ **Data Storage** – Uses **Local Storage** to store & manage user data.  

💡 **Tech Stack Used:**  
🔹 **HTML, CSS, JavaScript** – Frontend Development  
🔹 **Local Storage** – For **data persistence**  

🎯 **Live Preview:** 🔗 [Add Link]  
📂 **GitHub Repository:** 🔗 [Add Link]  

A huge thanks to my instructors and peers for their support! 🙌 Looking forward to your feedback. Drop your thoughts in the comments! 💬  

#WebDevelopment #JavaScript #HTML #CSS #AdminDashboard #LocalStorage #FrontendDevelopment #ResponsiveDesign #UserManagement #Coding #ProjectShowcase #UIUX  

👥 **Tag Your Mentors/Peers Here**  

---

This version now **clearly highlights Local Storage** for data management. Let me know if you'd like any final tweaks! 🚀






🚀 Multi-User Admin Dashboard – Built with HTML, CSS & JavaScript

Excited to share my latest project: a Multi-User Admin Dashboard, developed as part of my Web & App Development course! 🎯

This fully responsive and dynamic dashboard allows users to sign up & sign in with different roles, including:
🔹 Admin – Full control, including user removal & management.
🔹 Manager & Employees – Role-based access with personalized functionality.

✨ Key Features:
✅ Role-Based Authentication – Users can log in as Admin, Manager, or Employee.
✅ Dynamic Dashboard – Displays real-time user statistics (total users, admins, managers, employees).
✅ User Management – Admins can add/remove users & filter users by name.
✅ Profile Management – Users can edit their details with instant updates.
✅ Multi-Tab Navigation – Sections include Home, Profile, Services, Contact, and Dashboard.
✅ Fully Responsive UI – Optimized for mobile & desktop devices.
✅ Data Storage – Uses Local Storage to store & manage user data.

💡 Tech Stack Used:
🔹 HTML, CSS, JavaScript – Frontend Development
🔹 Local Storage – For data persistence

🎯 Live Preview: 🔗 [Add Link]
📂 GitHub Repository: 🔗 [Add Link]

A huge thanks to my instructors and peers for their support! 🙌 Looking forward to your feedback. Drop your thoughts in the comments! 💬

#WebDevelopment #JavaScript #HTML #CSS #AdminDashboard #LocalStorage #FrontendDevelopment #ResponsiveDesign #UserManagement #Coding #ProjectShowcase #UIUX

👥 Tag Your Mentors/Peers Here
*/