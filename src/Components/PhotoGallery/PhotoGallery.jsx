import ImageCard from "./ImageCard";

const PhotoGallery = ({ posts }) => {
  console.log(posts);

  return (
    <>
      <div className="bg-blue-100 rounded-xl p-4 my-5">
        <h1 className="text-black text-2xl font-bold mb-2">Photos</h1>
        <div className="grid grid-cols-2 gap-2">
          {posts.map((photo, i) => (
            <ImageCard key={i} photo={photo?.photoUrl}></ImageCard>
          ))}
        </div>
      </div>
    </>
  );
};

export default PhotoGallery;
