
import { AiOutlineMessage} from 'react-icons/ai';
const OnlineFriends = ({friend}) => {
    
  
    return (
    <div>
        
            <div className="p-5 ">
        <div className="flex items-center space-x-3">
        <div className="avatar online">
            
              <div className="w-12 rounded-full">
                <img src={friend?.Profile_image} />
              </div>
           
          </div>
       <div>
         <div className="font-bold flex justify-between">
          <h6>{friend?.Name}</h6>
         <AiOutlineMessage/>
         </div>
         <div className="text-sm opacity-50">Mutual friends 11</div>
       </div>
     </div>
     
   </div>
    </div>
    );
};

export default OnlineFriends;