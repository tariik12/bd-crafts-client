

const CategoryBox = ({  name }) => {


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
    </div>
  );
};

export default CategoryBox;
