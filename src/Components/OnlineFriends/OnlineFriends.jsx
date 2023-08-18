

const OnlineFriends = ({friend}) => {
    console.log(friend);
  
    return (
    <div>
        
            <div className="p-5 ">
        <div className="flex items-center space-x-3">
        <div className="avatar online">
            
              <div className="w-12 rounded-full">
                <img src={friend?.photo} />
              </div>
           
          </div>
       <div>
         <div className="font-bold">{friend?.name}</div>
         <div className="text-sm opacity-50">Mutual friends 11</div>
       </div>
     </div>
     
   </div>
    </div>
    );
};

export default OnlineFriends;