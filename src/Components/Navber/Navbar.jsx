import { Link, useNavigate } from "react-router-dom";
import Container from "../../Utilities/Container";
import MenuDropdown from "./MenuDropdown";
import { FaSistrix } from "react-icons/fa6";
import './Navbar.css' ; 
import {  useEffect, useState } from "react";

const Navbar = () => {
  const navigate = useNavigate()
  const [loading, setLoading] = useState(true)
  // const [projects,setProject] = useState([])
  // console.log(projects)
  const [posts, setPosts] = useState([]);
  console.log(posts)
  useEffect(() => {
    setLoading(true)
    fetch(`${import.meta.env.VITE_URL}/allposts`)
      .then((res) => res.json())
      .then((data) => {
        setLoading(false)
        setPosts(data)
        
      })
  }, [])


  const [searchText, setSearchText] = useState('')
       const handleSearch =() =>{
        if(searchText === null || searchText === Number || searchText === ""){
            return  alert(' please search valid keyword')
            }
         setLoading(true)
         fetch(`http://localhost:3000/search/${searchText}`)
         .then(res =>res.json())
         .then(data =>{
             setLoading(false)
             setPosts(data)
             console.log(data)
             navigate('/searchData')
         })
       }

       if(loading){
        return  <progress className="progress w-56"></progress>
        }
  return (
    // <div className="navbar  lg:w-full bg-[#327ee0] z-50 text-white ">
     <div className="lg:w-full fixed mx-auto bg-[#327ee0]  z-10 shadow-sm nav"> 
      <div className="py-1 border-b[1px]">
        <Container>
          <div className="flex flex-row items-center justify-between gap-3 md:gap-0">
            <div className="flex gap-4 items-center">
              <Link to="/">
                <span className="text-[#FFF] text-[33px] font-normal capitalize">
                  bdcrafts
                </span>
              </Link>
              <div className="lg:w-[350px] mx-auto w-full py-2 rounded-full  transition cursor-pointer relative">
                
                <div className="form-control lg:w-[350px] mx-auto w-full ">
                  {/* <input
                    type="text"
                    placeholder="Search for friend, post or video"
                    className="input border h-[39px] border-white rounded-full bg-[#FFF] text-black px-10 w-full"
                  /> */}
                </div>
                <div className="form-control    z-50 top-32  mx-10 bg-black rounded-2xl">
                    <div className="">
                        <input onChange={(event)=>setSearchText(event.target.value)} type="text" placeholder="Search by Technology such as react or javascript" className="input bg-transparent border-cyan-100 w-[300px] pr-16 text-cyan-100"  required/>
                        <button onClick={handleSearch} className="  bg-transparent hover:none absolute top-2 rounded-2xl right-0 rounded-l-none"><FaSistrix className="w-16 text-cyan-100 h-8"/></button>
                    </div>
                </div>
              </div>
            </div>
            <MenuDropdown />
          </div>
        </Container>
      </div>
    </div>
  );
};

export default Navbar;
