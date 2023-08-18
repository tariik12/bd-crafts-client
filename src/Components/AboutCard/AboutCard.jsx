const AboutCard = ({ birthDate, location, bio }) => {
  return (
    <>
      <section className="bg-slate-300 shadow-lg rounded-xl p-1">
        <p className="text-center font-semibold ">About</p>
        <p>Bio:{bio}</p>
        <p>BirthDate:{birthDate}</p>
        <p>Location:{location}</p>
      </section>
    </>
  );
};

export default AboutCard;
