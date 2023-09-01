
const OnlineFriends = ({f}) => {
 
  
    return (
      <div className="py-3">
        
             <div className="flex gap-3" >

            <img  className="h-[50px] w-[50px] rounded-full" src={f?.photo} />
            
          </div>
    
    </div>
    );
};

export default OnlineFriends;