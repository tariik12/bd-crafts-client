const ProfileAction = () => {
  return (
    <>
      <section className="w-4/5 -my-6 mx-auto flex justify-between items-center">
        <div className="flex justify-between items-center gap-4">
          <img
            src="https://images.unsplash.com/photo-1599834562135-b6fc90e642ca?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80"
            alt="profile photo"
            className="w-36 h-36 rounded-full"
          />
          <h1 className="font-semibold text-3xl">MD Mahadi Hasan</h1>
        </div>
        <div className="flex gap-2">
          <button className="btn btn-info">Add Friend</button>
          <button className="btn btn-success">Follow</button>
          <button className="btn btn-warning">Message</button>
        </div>
      </section>
    </>
  );
};

export default ProfileAction;
