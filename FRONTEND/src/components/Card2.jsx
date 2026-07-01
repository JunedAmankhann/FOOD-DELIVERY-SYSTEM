import React from 'react'
import image1 from "../assets/image1.avif"
import { RiDeleteBin5Line } from "react-icons/ri";
import { useDispatch } from 'react-redux';
import { IncrementQty, RemoveItem,DecrementQty } from '../redux/cartSlice';

function Card2({name,id,price,image,qty}) {
  let dispatch=useDispatch()
  return (
    <div className='w-full h-[120px] p-2 shadow-lg hover:border-2 hover:border-green-500 rounded-lg flex justify-between'>
     <div className='w-[50%] h-full flex gap-8'>
        <div className='w-[30%] h-full overflow-hidden rounded-lg'>
            <img src={image} alt="" className='object-cover'/>
        </div>
        <div className='w-[40%] h-full flex flex-col gap-5'>
            <div className='text-xl text-black font-bold'>{name}</div>
            <div className='w-[110px] h-[50px] bg-slate-400 flex rounded-lg overflow-hidden shadow-lg font-bold border-2 border-green-400 text-xl'>
              <button className='w-[30%] h-full bg-white flex justify-center items-center text-black hover:bg-red-400'onClick={()=>{qty>1?dispatch(DecrementQty(id)):1}}>-</button>
              <span className='w-[40%] h-full bg-slate-200 flex justify-center items-center text-red-700'>{qty}</span>
              <button className='w-[30%] h-full bg-white flex justify-center items-center text-black hover:bg-red-400'onClick={()=>{dispatch(IncrementQty(id))}}>+</button>
            </div>
        </div>
     </div>
        <div className='flex flex-col justify-start items-end gap-10'>
        <span className='text-xl text-red-500 font-bold'>Rs {price}/-</span>
        <RiDeleteBin5Line className='w-[30px] h-[30px] text-red-600 cursor-pointer' onClick={()=>dispatch(RemoveItem(id))}/>
        </div>   
    </div>
  )
}

export default Card2
