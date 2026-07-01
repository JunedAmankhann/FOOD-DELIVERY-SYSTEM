import react, { useContext } from 'react'
import { GiKnifeFork } from "react-icons/gi";
import { IoSearch } from "react-icons/io5";
import { MdOutlineShoppingBag } from "react-icons/md";
import { dataContext } from '../context/UserContext';
import { useEffect } from 'react';
import { food_items } from '../food';
import { useSelector } from 'react-redux';
import { Link } from "react-router-dom";
import { FaUserCircle } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import { IoLogOutOutline } from "react-icons/io5";
import { useNavigate } from "react-router-dom";


function Nav({user,showMenu,setShowMenu}) {
  let {input,setInput,cate,setCate,showCart,setShowCart}=useContext(dataContext)
  const navigate=useNavigate();
  useEffect(()=>{
    let newList=food_items.filter((item)=>item.food_name.includes(input)||item.food_name.toLowerCase().includes(input))
    setCate(newList)
  },[input])
  let items=useSelector(state=>state.cart)
  const handleLogout=()=>{localStorage.removeItem("user");navigate("/login")}
  
  return (
    <div className='w-full h-[100px] flex justify-between items-center px-5 md:px-8'>
     <div className='flex items-center gap-4'>
    <div className=' flex justify-center items-center rounded-md'>
        <GiKnifeFork className='w-[50px] h-[50px] text-green-500'/>
    </div>
    <div className='hidden md:block'>
        <h1 className='text-3xl font-extrabold'>
            <span className='text-green-600'>Tasty</span>
            <span className='text-orange-500'>Bites</span>
        </h1>
        <p className='text-gray-500 text-sm font-bold'>
            Good Food, Great Mood 
        </p>
    </div>
</div>
      <form className='w-[45%] h-[60px] bg-white flex items-center px-5 gap-5 rounded-md shadow-md md:w-[70%]' onSubmit={(e)=>e.preventDefault()}>
        <IoSearch className='text-green-500 w-[20px] h-[20px]'/>
        <input type="text" placeholder='Search Items...'
        className='w-[100%] outline-none text-[16px] md:text-[20px]' onChange={(e)=>setInput(e.target.value)} value={input}/>
      </form>
      {
        user ? (<div className="relative">
        <button onClick={() => setShowMenu(!showMenu)} className="bg-white px-4 py-3 rounded-md shadow-xl text-green-600 font-bold">
        Hello, {user.name}
        </button>
      {showMenu && (
        <div className="absolute right-0 mt-2 w-56 bg-white rounded-lg shadow-xl z-50">
          <div className="px-4 py-3 border-b">
            <div className="flex items-center gap-2">
              <FaUserCircle />
              <span>{user.name}</span>
            </div>
            <div className="flex items-center gap-2 ">
              <IoIosMail />
              <span>{user.email}</span>
            </div>
          </div>
          <button
            onClick={handleLogout}
            className="w-full flex items-center gap-2 px-4 py-3 text-red-500 hover:bg-gray-100">
            <IoLogOutOutline />
            Logout
          </button>
        </div>
      )}
    </div>
  ) : (
    <Link
      to="/login"
      className="w-[100px] h-[60px] bg-white flex justify-center items-center text-green-500 px-5 py-3 rounded-md shadow-xl font-bold hover:bg-zinc-600">
      Login
    </Link>
  )
}
      <div className='w-[60px] h-[60px] bg-white flex justify-center items-center rounded-md shadow-xl relative hover:bg-zinc-600 cursor-pointer'onClick={()=>{
        setShowCart(true)
      }}>
        <span className='absolute top-0 right-2 text-green-500 font-bold text-[18px]'>{items.length}</span>
        <MdOutlineShoppingBag className='w-[30px] h-[30px] text-green-500' />
      </div>
    </div>
  )
}

export default Nav