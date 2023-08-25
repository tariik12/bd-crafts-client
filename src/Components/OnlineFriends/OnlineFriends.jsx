
const OnlineFriends = ({f}) => {
    
  
    return (
      <div className="py-3">
         <label className=" ">
             <div className="tooltip tooltip-bottom" data-tip={f?.name}>
            <img  className="h-[50px] w-[50px] rounded-full" src={f?.photo} />
          </div>
        
        </label>
    </div>
    );
};

export default OnlineFriends;