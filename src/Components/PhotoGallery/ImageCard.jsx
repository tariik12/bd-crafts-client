const ImageCard = ({ photo }) => {
  return (
    <>
      <div>
        <div className="relative group">
          <img className="rounded-lg" src={photo?.uploadedPhoto} alt="img" />
          <div className="absolute rounded-lg inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity">
            {/* <button className="text-white bg-[#7BB4FF] p-1 rounded-lg transform scale-0 group-hover:scale-100 transition-transform transition-delay-500">
              View
            </button> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default ImageCard;
