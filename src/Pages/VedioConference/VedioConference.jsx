import { useState } from "react";
import useAuth from "../../hooks/useAuth";
import { Link, useNavigate } from "react-router-dom";

const VedioConference = () => {
  const { user } = useAuth();
  const [roomCode, setRoomCode] = useState("");
  const navigate = useNavigate();
  const handleFormSubmit = (e) => {
    e.preventDefault();
    navigate(`/meetRoom/${roomCode}`);
  };

  return (
    <div
      className="hero min-h-screen bg-base-100 shadow-2xl pt-20 pb-14"
      style={{
        backgroundImage: `linear-gradient(to bottom, rgba(21, 21, 21, 0.6),rgba(21, 21, 21, 0.6)),
             url('https://img.freepik.com/premium-photo/colorful-vase-with-red-yellow-design-bottom_865967-463128.jpg?w=900&fbclid=IwAR0WB9Lb7sxelWOt_7WVbgNAjZYzFf1NGXSHHEDU3g0-olw5E8ZxJ2iPuZU')`,
      }}
    >
      <div className="card px-5 w-full  max-w-sm shadow-2xl bg-[#f0dcdc55]">
        <h3 className="text-4xl  pt-5 font-serif">Enter a metting room</h3>

        <form onSubmit={handleFormSubmit} className="card-body ">
          <div className="">
            <input
              type="text"
              defaultValue={user?.displayName}
              readOnly
              placeholder="Name"
              className="bg-transparent placeholder:text-black w-full border-b border-primary  focus:outline-none rounded-xl  p-3"
            />
          </div>

          <div>
            <input
              type="text"
              value={roomCode}
              onChange={(e) => setRoomCode(e.target.value)}
              placeholder="enter a room code"
              className="bg-transparent placeholder:text-black w-full border-b border-primary  focus:outline-none rounded-xl  p-3"
            />
          </div>
          <div className="form-control mt-3">
            <input
              type="submit"
              className="btn border-primary btn-sm mt-4 bg-[#1589FF]"
              value={"Submit"}
              name=""
              id=""
            />
          </div>
          <button className="btn btn-primary btn-sm">
            <Link to="/">Back to home</Link>
          </button>
        </form>
      </div>
    </div>
  );
};

export default VedioConference;
