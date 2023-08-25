import ImageCard from "./ImageCard";

const PhotoGallery = () => {
  const photos = [
    {
      uploadedPhoto:
        "https://img.freepik.com/free-photo/back-school-concept-school-supplies-ai-generative_123827-24120.jpg?w=1060&t=st=1692960037~exp=1692960637~hmac=b32f7c3e8752423b4d62cd102d783fb0e6c6245e2a62491f9b62c7003cc915cb",
    },
    {
      uploadedPhoto:
        "https://img.freepik.com/free-photo/back-school-concept-school-supplies-ai-generative_123827-24120.jpg?w=1060&t=st=1692960037~exp=1692960637~hmac=b32f7c3e8752423b4d62cd102d783fb0e6c6245e2a62491f9b62c7003cc915cb",
    },
    {
      uploadedPhoto:
        "https://img.freepik.com/free-photo/back-school-concept-school-supplies-ai-generative_123827-24120.jpg?w=1060&t=st=1692960037~exp=1692960637~hmac=b32f7c3e8752423b4d62cd102d783fb0e6c6245e2a62491f9b62c7003cc915cb",
    },
    {
      uploadedPhoto:
        "https://img.freepik.com/free-photo/back-school-concept-school-supplies-ai-generative_123827-24120.jpg?w=1060&t=st=1692960037~exp=1692960637~hmac=b32f7c3e8752423b4d62cd102d783fb0e6c6245e2a62491f9b62c7003cc915cb",
    },
    {
      uploadedPhoto:
        "https://img.freepik.com/free-photo/back-school-concept-school-supplies-ai-generative_123827-24120.jpg?w=1060&t=st=1692960037~exp=1692960637~hmac=b32f7c3e8752423b4d62cd102d783fb0e6c6245e2a62491f9b62c7003cc915cb",
    },
    {
      uploadedPhoto:
        "https://img.freepik.com/free-photo/back-school-concept-school-supplies-ai-generative_123827-24120.jpg?w=1060&t=st=1692960037~exp=1692960637~hmac=b32f7c3e8752423b4d62cd102d783fb0e6c6245e2a62491f9b62c7003cc915cb",
    },
    {
      uploadedPhoto:
        "https://img.freepik.com/free-photo/back-school-concept-school-supplies-ai-generative_123827-24120.jpg?w=1060&t=st=1692960037~exp=1692960637~hmac=b32f7c3e8752423b4d62cd102d783fb0e6c6245e2a62491f9b62c7003cc915cb",
    },
    {
      uploadedPhoto:
        "https://img.freepik.com/free-photo/back-school-concept-school-supplies-ai-generative_123827-24120.jpg?w=1060&t=st=1692960037~exp=1692960637~hmac=b32f7c3e8752423b4d62cd102d783fb0e6c6245e2a62491f9b62c7003cc915cb",
    },
  ];

  return (
    <>
      <div className="bg-blue-100 rounded-xl p-4 my-5">
        <h1 className="text-[#7BB4FF] text-2xl font-bold mb-2">Photos</h1>
        <div className="grid grid-cols-2 gap-2">
          {photos.map((photo, i) => (
            <ImageCard key={i} photo={photo}></ImageCard>
          ))}
        </div>
      </div>
    </>
  );
};

export default PhotoGallery;
