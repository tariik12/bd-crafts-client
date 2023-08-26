
const OnlineFriends = ({friend}) => {
    
  
    return (
      <div className="py-3">
        
             <div className="flex gap-3" >

            <img  className="h-[50px] w-[50px] rounded-full" src={friend?.Profile_image} />
            <p>{friend?.Name}</p>
          </div>
    
    </div>
    );
};

export default OnlineFriends;