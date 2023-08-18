const AboutCard = ({ birthDay, location, bio }) => {
  return (
    <>
      <section className="bg-slate-300 shadow-lg rounded-xl ">
        <p>About</p>
        <p>Bio: {bio}</p>
        <p>BirthDay: {bio}</p>
      </section>
    </>
  );
};

export default AboutCard;
