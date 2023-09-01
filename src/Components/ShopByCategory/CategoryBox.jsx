import { useState } from "react";

const CategoryBox = ({ subCategory, name }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  // const toggleDropdown = () => {
  //   setIsDropdownOpen(!isDropdownOpen);
  // };
  const selected = false;
  return (
    <div
      className={`
        flex 
        flex-col 
        items-center 
        justify-center 
        gap-2
        relative
        p-3
      
        border-b-2
        hover:text-neutral-800
      
        cursor-pointer
        ${
          selected
            ? "border-b-neutral-800 text-neutral-800"
            : "border-transparent text-neutral-500"
        }
     
      `}
    >
      <h1
        className="text-xl font-medium btn"
        // onMouseEnter={toggleDropdown}
        // onMouseLeave={toggleDropdown}
      >
        {name}
      </h1>
      {isDropdownOpen && (
        <div className="absolute top-full left-0 z-10 bg-white border border-neutral-800 rounded-lg p-2">
          {/* Dropdown content goes here */}
          <ul className="text-black">
            {subCategory.map((item, i) => (
              <li key={i}>{item?.category}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default CategoryBox;
