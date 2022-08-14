
import {FcGoogle } from "react-icons/fc";
import { BsFacebook,BsLinkedin} from "react-icons/bs";
// install react-hook-from
import {useForm} from 'react-hook-form';
//install yup
import * as yup from 'yup';
//install @hookform/resolvers
import {yupResolver} from '@hookform/resolvers/yup';



export default function Signup({setToSignup}) {

  

//validation with yup
const schema = yup.object().shape({
userName: yup.string("Name must be string!").required("Full-name is required!"),
userEmail: yup.string().email("Invalid email address!").required("Email is required!"),
userPassword: yup.string().matches(/[A-Z]/g,"Password atleast 1 uppercase character!")
.matches(/[ `!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?~]/, "Password must have special character!")
.min(6,'Password must be at least 6 characters long!').max(20, "Password must be less than 20 characters!").required("Password is required!") ,
confirmPassword: yup.string().oneOf([yup.ref("userPassword!"), null], "Password don't match!").required("Conform password is required!"),

})
 
//registration with useFrom
//passing schema in useForm with resolver form yupResolver
const {register, handleSubmit , formState:{errors},} = useForm({
  resolver: yupResolver(schema)
});

//hundling submit
const onSubmit = (data) =>{
  const userData = {
    Name: data.userName,
    Email: data.userEmail,
    Password: data.confirmPassword
  }

  console.log(data)
  console.log(userData)
}


  return (
    <section className="dark:text-textW h-screen w-full  flex flex-col items-center p-4 ">
   <h1 className="text-xl font-extrabold mt-5 mb-2">Welcome</h1>
   <p className="text-textBlur mb-0">Please SignUp</p>
   <div className="w-full h-auto mt-0 dark:bg-secondaryDark rounded-md shadow-lg dark:shadow-secondaryDark grid place-items-center p-3">
<form  className="w-full h-full flex flex-col items-center px-4 py-2">
<label className="w-full h-16  m-3 p-2 flex flex-col items-center justify-end relative">
    <span className="absolute left-3 top-1  font-extrabold bg-primaryLight dark:bg-secondaryDark dark:text-textW text-textB">Name</span>
    <input type="text" {...register("userName")} className="w-full h-4/5 rounded-md px-2 text-textB outline-none border-2  border-textB dark:border-textW bg-transparent dark:text-textW "/>
    <p className="absolute -bottom-3 right-2 text-xxs text-red-600">{errors.userName?.message}</p>
</label>


<label className="w-full h-16  m-3 p-2 flex flex-col items-center justify-end relative">
    <span className="absolute left-3 top-1  font-extrabold bg-primaryLight dark:bg-secondaryDark dark:text-textW text-textB">Email</span>
    <input type="email" {...register("userEmail")} className="w-full h-4/5 rounded-md px-2 text-textB outline-none border-2  border-textB dark:border-textW bg-transparent dark:text-textW "/>
    <p className="absolute -bottom-3 right-2 text-xxs text-red-600">{errors.userEmail?.message}</p>
</label>

<label className="w-full h-16  m-3 p-2  flex flex-col items-center justify-end relative">
    <span  className="absolute left-3 top-1 font-extrabold  bg-primaryLight dark:bg-secondaryDark dark:text-textW text-textB ">Create password</span>
    <input type="password"  {...register("userPassword")} className="w-full h-4/5 rounded-md px-2 text-textB outline-none border-2  border-textB dark:border-textW bg-transparent dark:text-textW" />
    <p className="absolute -bottom-3 right-2 text-xxs text-red-600">{errors.userPassword?.message}</p>
  
</label>
<label className="w-full h-16  m-3 mt-6 p-2  flex flex-col items-center justify-end relative">
    <span  className="absolute left-3 top-1 font-extrabold  bg-primaryLight dark:bg-secondaryDark dark:text-textW text-textB ">Confirm password</span>
    <input type="password" {...register("confirmPassword")} className="w-full h-4/5 rounded-md px-2 text-textB outline-none border-2  border-textB dark:border-textW bg-transparent dark:text-textW " />
    <p className="absolute -bottom-3 right-2 text-xxs text-red-600">{errors.confirmPassword?.message}</p>
   
</label>
</form>
</div>
   <div className="w-full h-16  mt-5 flex items-center justify-center px-5 py-2 ">
    <button className="w-11/12 h-full bg-btns rounded-md text-textB dark:text-textW font-bold hover:bg-blue-700  disabled:bg-opacity-50" 
 onClick={handleSubmit(onSubmit)} >Submit</button>
</div>

<div className="w-full h-80 py-3 px-10 flex flex-col items-center border-t-2 border-textB mt-5 relative ">
    <span className="absolute -top-5 py-1 px-2 font-medium bg-white dark:bg-primaryDark ">SignUp with</span>
    <div className=" w-full h-14 rounded-md shadow-md bg-primaryLight dark:bg-secondaryDark mt-4 py-3 px-14 text-textB dark:text-textW flex items-center justify-between font-medium cursor-pointer"><BsFacebook className="text-blue-500 h-full w-10 "/><span className="">FaceBook</span></div>
    <div className=" w-full h-14 rounded-md shadow-md bg-primaryLight dark:bg-secondaryDark mt-3  py-3 px-14 text-textB dark:text-textW flex items-center justify-between font-medium cursor-pointer"><FcGoogle className=" h-full w-10 " /><span>Google</span></div>
    <div className=" w-full h-14 rounded-md shadow-md bg-primaryLight dark:bg-secondaryDark mt-3  py-3 px-14 text-textB dark:text-textW flex items-center justify-between font-medium cursor-pointer"><BsLinkedin className="text-blue-400 h-full w-10 "/><span>LinkedIn</span></div>
    <h1 className="mt-7 cursor-pointer font-medium opacity-50  text-xs flex " >Already has an account? <p className="text-blue-700 ml-1 opacity-100 hover:opacity-50 hover:font-medium" onClick={()=>setToSignup(false)}>LogIn</p></h1>
</div>
   </section>
  )
}
