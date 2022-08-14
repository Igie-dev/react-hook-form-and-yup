
import {FcGoogle } from "react-icons/fc";
import { BsFacebook,BsLinkedin} from "react-icons/bs";
export default function Login({setToSignup}) {
  return (
   <section className="dark:text-textW h-screen w-full  flex flex-col items-center p-4 ">
   <h1 className="text-xl font-extrabold mt-5 mb-2">Welcome back</h1>
   <p className="text-textBlur mb-5">Please LogIn</p>
   <div className="w-full h-52 mt-5 dark:bg-secondaryDark rounded-md shadow-lg dark:shadow-secondaryDark grid place-items-center p-3">
<form className="w-full h-full flex flex-col items-center px-4 py-2">
<label className="w-full h-16  m-3 p-2 flex flex-col items-center justify-end relative">
    <span className="absolute left-3 top-1   font-extrabold bg-primaryLight dark:bg-secondaryDark dark:text-textW text-textB">Email</span>
    <input type="email" className="w-full h-4/5 rounded-md px-2 text-textB outline-none border-2  border-textB dark:border-textW bg-transparent dark:text-textW "/>
</label>
<label className="w-full h-16  m-3 p-2  flex flex-col items-center justify-end relative">
    <span  className="absolute left-3 top-1  font-extrabold  bg-primaryLight dark:bg-secondaryDark dark:text-textW text-textB ">Password</span>
    <input type="password" className="w-full h-4/5 rounded-md px-2 text-textB outline-none border-2  border-textB dark:border-textW bg-transparent dark:text-textW "/>
</label>
</form>
</div>
   <div className="w-full h-16  mt-5 flex items-center justify-center px-5 py-2 ">
    <button className="w-11/12 h-full bg-btns rounded-md text-textB dark:text-textW font-bold hover:bg-blue-700 ">LogIn</button>
</div>

<div className="w-full h-80 py-3 px-10 flex flex-col items-center border-t-2 border-textB mt-5 relative ">
    <span className="absolute -top-5 py-1 px-2 font-medium bg-white dark:bg-primaryDark ">Login with</span>
    <div className=" w-full h-14 rounded-md shadow-md bg-primaryLight dark:bg-secondaryDark mt-4 py-3 px-14 text-textB dark:text-textW flex items-center justify-between font-medium cursor-pointer"><BsFacebook className="text-blue-500 h-full w-10 "/><span className="">FaceBook</span></div>
    <div className=" w-full h-14 rounded-md shadow-md bg-primaryLight dark:bg-secondaryDark mt-3  py-3 px-14 text-textB dark:text-textW flex items-center justify-between font-medium cursor-pointer"><FcGoogle className=" h-full w-10 " /><span>Google</span></div>
    <div className=" w-full h-14 rounded-md shadow-md bg-primaryLight dark:bg-secondaryDark mt-3  py-3 px-14 text-textB dark:text-textW flex items-center justify-between font-medium cursor-pointer"><BsLinkedin className="text-blue-400 h-full w-10 "/><span>LinkedIn</span></div>
    <h1 className="mt-7 cursor-pointer font-medium opacity-50  text-xs flex " >Don't have an account? <p className="text-blue-700 ml-1 opacity-100 hover:opacity-50 hover:font-medium" onClick={()=>setToSignup(true)}>Signup</p></h1>
</div>
   </section>
  )
}
