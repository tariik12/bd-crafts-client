import { useEffect, useState } from "react";
import { FaSistrix } from "react-icons/fa6";
import { Link, useNavigate } from "react-router-dom";
import { useSearchContext } from "../../Provider/ApiContestProvider";
import Container from "../../Utilities/Container";
import MenuDropdown from "./MenuDropdown";
import "./Navbar.css";

const Navbar = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const { handleSearchData } = useSearchContext();
  // const [projects,setProject] = useState([])
  // console.log(projects)
  const [posts, setPosts] = useState([]);
  console.log(posts);
  useEffect(() => {
    setLoading(true);
    fetch(`${import.meta.env.VITE_URL}/allposts`)
      .then((res) => res.json())
      .then((data) => {
        setLoading(false);
        setPosts(data);
      });
  }, []);

  const [searchText, setSearchText] = useState("");
  const handleSearch = () => {
    if (searchText === null || searchText === Number || searchText === "") {
      return alert(" please search valid keyword");
    }
    setLoading(true);

    fetch(`http://localhost:3000/search/${searchText}`)
      .then((res) => res.json())
      .then((data) => {
        setLoading(false);
        handleSearchData(data);
        console.log(data);
        navigate("/searchData");
      });
  };

  if (loading) {
    return <progress className="progress w-56"></progress>;
  }
  return (
    // <div className="navbar  lg:w-full bg-[#327ee0] z-50 text-white ">
    <div className="lg:w-full  mx-auto bg-[#327ee0]  z-10 shadow-sm nav">
      <div className="py-1 border-b[1px]">
        <Container>
          <div className="flex flex-row items-center justify-between gap-3 md:gap-0">
            <div className="flex gap-4 items-center">
              <Link to="/">
                <span className="text-[#FFF] md:text-[33px] text-[20px] font-normal capitalize">
                  bdcrafts
                </span>
              </Link>

              <div className="z-50 top-32  mx-10  rounded-2xl">
                <div className="relative">
                  <input
                    onChange={(event) => setSearchText(event.target.value)}
                    type="text"
                    placeholder="Search"
                    className="border rounded-2xl p-2 bg-transparent border-cyan-100  pr-16 text-white::placeholder  placeholder-white w-full"
                    required
                  />
                  <button
                    onClick={handleSearch}
                    className="absolute  bg-transparent hover:none  top-2 rounded-2xl right-0 "
                  >
                    <FaSistrix className="w-16 text-cyan-100 h-8" />
                  </button>
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
