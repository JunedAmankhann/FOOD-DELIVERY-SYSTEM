import React, { useContext } from "react";
import { categories } from "../Category";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import Card from "../components/card";
import { food_items } from "../food";
import { useState } from "react";
import { dataContext } from "../context/UserContext";
import { MdOutlineShoppingBag } from "react-icons/md";
import { ImCross } from "react-icons/im";
import Card2 from "../components/Card2";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";


function Home() {
  let {cate,setCate,input,showCart,setShowCart}=useContext(dataContext)
  const user = JSON.parse(localStorage.getItem("user"));
  const [showMenu, setShowMenu] = useState(false);

  function filter(category){
    if(category==="All"){
      setCate(food_items)
    }else{
      let newList=food_items.filter((item)=>(item.food_category===category))
      setCate(newList)
    }
  }
  let items=useSelector(state=>state.cart)
  
  let subtotal=items.reduce((total,item)=>total+item.qty*item.price,0)
  let deliveryfee=20;
  let taxes=subtotal*0.5/100;
  let grandtotal=Math.floor(subtotal+deliveryfee+taxes)
  
  
  return (
    <div className='bg-slate-200 w-full min-h-screen'>
      <Nav user={user} showMenu={showMenu} setShowMenu={setShowMenu}/>
      {!input?<div className='flex flex-wrap justify-center items-center gap-5 w-[100%]'>
        {categories.map((item)=>{
          return <div className='w-[140px] h-[150px] bg-white flex flex-col items-start gap-5 p-5 justify-start text-[20px] font-semibold text-black rounded-lg shadow-xl hover:bg-zinc-500 cursor-pointer transition-all duration-200' onClick={()=>filter(item.name)}>
            {item.image}
            {item.name}
          </div>

        })}
      </div>:null}
      
      <div className="w-full flex flex-wrap gap-5 px-5 justify-center items-center pt-8 pb-8">
        {cate.length>1?cate.map((item)=>(
          <Card name={item.food_name} image={item.food_image} price={item.price} id={item.id} type={item.food_type}/>
        )):<div className="text-center text-3xl text-red-500 font-bold pt-80">OOPS! No item found</div>}
        
      </div>
      <div className={`w-full md:w-[40vw] h-[100%] fixed top-0 right-0 bg-white shadow-xl p-6 transition-all duration-500 flex flex-col items-center overflow-auto ${showCart?"translate-x-0":"translate-x-full"}`}>
        <header className="w-[100%] flex justify-between items-center">
          <div className="flex items-center gap-2">
            <MdOutlineShoppingBag className="text-green-400 w-10 h-10" />
            <span className="text-green-400 text-[30px] font-bold">
              My Bag
            </span>
          </div>
          <ImCross className="w-[20px] h-[20px] text-green-400 text-[18px] font-bold cursor-pointer hover:text-red-500" onClick={()=>setShowCart(false)}/>
        </header>

        {items.length>0? <>
        <div className="w-full mt-8 flex flex-col gap-5">
          {items.map((item)=>(
            <Card2 name={item.name} price={item.price} image={item.image} id={item.id} qty={item.qty}/>
          ))}
        </div>
        <div className="w-full border-t-2 border-b-2 border-black mt-5 flex flex-col gap-2 p-8">
          <div className="w-full flex justify-between items-center">
            <span className="text-xl text-black font-semibold">Subtotal</span>
            <span className="text-xl text-red-500 font-bold">Rs {subtotal}/-</span>
          </div>
          <div className="w-full flex justify-between items-center">
            <span className="text-xl text-black font-semibold">Delivery Fee</span>
            <span className="text-xl text-red-500 font-bold">Rs {deliveryfee}/-</span>
          </div>
          <div className="w-full flex justify-between items-center">
            <span className="text-xl text-black font-semibold">Taxes</span>
            <span className="text-xl text-red-500 font-bold">Rs {taxes}/-</span>
          </div>
          
        </div>
        <div className="w-full flex justify-between items-center p-9">
            <span className="text-2xl text-black font-semibold">Grand Total</span>
            <span className="text-xl text-red-500 font-bold">Rs {grandtotal}/-</span>
        </div>
        <button className='w-[80%] p-4 bg-yellow-500 rounded-lg text-gray-700 font-bold hover:bg-green-500 transition-all' onClick={()=>{
          toast.success("Order placed successfully")
        }}>Place Order</button>
      </>:<div className="text-center text-3xl text-red-500 font-bold pt-80 ">
          Your bag is empty!
          </div>}
       
      </div>
      <Footer />
    </div>
  
  )
}

export default Home