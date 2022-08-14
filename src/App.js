
import './styles/App.scss';
import { BsSun,BsMoon} from "react-icons/bs";
import {useState} from 'react'
import Login from './components/Login'
import Signup from './components/Signup'



function App() {
const [toggle , setToggle] = useState(false)
  // dark mode
  const [theme, setTheme] = useState(null)
  if(theme === 'dark'){
    document.documentElement.classList.add('dark')
  }else{
    document.documentElement.classList.remove('dark')
  }

  // changing to signup page
  const [toSignup, setToSignup] = useState(false)


  return (
    <div className="App bg-primaryLight dark:bg-primaryDark h-screen w-full grid place-items-center overflow-hidden">
      <div className="w-full h-full relative max-w-md mt-5">
      <div className="absolute top-2 right-3 bg-primaryDark dark:bg-primaryLight h-6 w-12 max-h-6 min-h-6 max-w-12 min-w-12 rounded-xl p-0.5 flex items-center overflow-hidden border-solid border-textBlur border-2 ">
<span className=" w-3/6 h-4/5 rounded-full cursor-pointer grid place-items-center absolute left-1 " style={{display: toggle ? 'none': 'block'}} onClick={() => {setToggle(true);setTheme('dark')}}><BsMoon className="h-full w-full text-textW" /></span> 
<span className=" w-3/6 h-4/5 rounded-full cursor-pointer grid place-items-center   absolute right-1" style={{display: toggle ? 'block':'none' }} onClick={() => {setToggle(false);setTheme(null)}}><BsSun className="h-full w-full"/></span>
</div>
{!toSignup && <Login setToSignup={setToSignup}/>} 
{toSignup && <Signup setToSignup={setToSignup}/>} 
      </div>
   
    </div>
  );
}

export default App;
