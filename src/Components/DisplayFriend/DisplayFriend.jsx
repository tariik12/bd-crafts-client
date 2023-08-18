

const DisplayFriend = ({friend}) => {
    const {name,photo}=friend;
    return (
        <div className="p-5 ">
             <div className="flex items-center space-x-3">
            <div className="avatar">
              <div className="mask mask-squircle w-12 h-12">
                <img src={photo} alt="Avatar Tailwind CSS Component" />
              </div>
            </div>
            <div>
              <div className="font-bold">{name}</div>
              <div className="text-sm opacity-50">Mutual friends 11</div>
            </div>
          </div>
          
        </div>
    );
};

export default DisplayFriend;