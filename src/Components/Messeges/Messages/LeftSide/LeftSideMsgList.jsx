


const LeftSideMsgList = ({f}) => {
    return (
        <div className="p-5">
    <div className="flex gap-3">
    <img  className="h-[50px] w-[50px] rounded-full" src={f?.photo} />
    <p className="font-sans font-bold">{f?.name}</p>
    </div>
        </div>
    );
};

export default LeftSideMsgList;