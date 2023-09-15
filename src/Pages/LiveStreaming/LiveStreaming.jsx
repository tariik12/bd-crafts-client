import { useState } from "react";
import useAuth from "../../hooks/useAuth";
import { useNavigate } from "react-router-dom";

const LiveStreaming = () => {
    const {user} =useAuth();
    const [roomId,setRoomId]=useState("")
    const navigate = useNavigate();
    const handleFormSubmit=(e)=>{
        e.preventDefault();
        navigate(`/live/${roomId}`)
    }
    
    return (
        <div className="hero min-h-screen bg-base-100 shadow-2xl pt-20 pb-14" style={{ backgroundImage:
            `linear-gradient(to bottom, rgba(21, 21, 21, 0.6),rgba(21, 21, 21, 0.6)),
             url('https://img.freepik.com/premium-photo/colorful-vase-with-red-yellow-design-bottom_865967-463128.jpg?w=900&fbclid=IwAR0WB9Lb7sxelWOt_7WVbgNAjZYzFf1NGXSHHEDU3g0-olw5E8ZxJ2iPuZU')` }}>
       
            <div className="card px-5 w-full  max-w-sm shadow-2xl bg-[#f0dcdc55]">
                <h3 className='text-4xl  pt-5 font-serif'>Go To Live</h3>
            
                <form onSubmit={handleFormSubmit}  className="card-body ">
                    <div className="">
                        <input type="text" 
                        defaultValue={user?.displayName}
                        readOnly
                        placeholder="Name" className="bg-transparent placeholder:text-black w-full border-b border-primary  focus:outline-none rounded-xl  p-3" />
                       
                    </div>
                 
                    <div>
                    <input type="text" 
                        value={roomId}
                        onChange={(e)=>setRoomId(e.target.value)}
                        placeholder="enter a code to go live" className="bg-transparent placeholder:text-black w-full border-b border-primary  focus:outline-none rounded-xl  p-3" />
           
            </div>
                    <div className="form-control mt-3">
                        
                        <input  type="submit" className='btn border-primary btn-sm mt-4 bg-[#1589FF]' value={'Submit'} name="" id="" />
    
                    </div>
  
                </form>
               
            </div>
        
    </div>
    );
};

export default LiveStreaming;