import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Edit = () => {
    const [userData, setUserData] = useState()
    useEffect(() => {
        fetch(`${import.meta.env.VITE_URL}/allusers`)
          .then((response) => response.json())
          .then((data) => {
            setUserData(data);
          })
          .catch((error) => {
            console.error("Error fetching data:", error);
          });
      }, []);

  return (
    <div className="w-full max-w-screen-md h-[803px] flex items-center justify-center mx-auto mt-2  overflow-hidden">
      <div className="bg-blue-300 rounded-lg p-4">
        <div className="space-y-4">
          <div className="bg-white lg:w-[588px] w-full mx-auto rounded-lg text-center p-4">
            General
          </div>
          <table className="w-full p-4">
            <tbody>
              <tr className="bg-white h-[47px] px-4 ">
                <td className="pl-2">Name :</td>
                <td>{userData?.displayName}</td>
                <td className="pl-2 border bg-gray-500 p-2">
                  <button>
                    <Link to={`/edit`}>Edit</Link>
                  </button>
                </td>
              </tr>
              <br />

              <tr className="bg-white h-[47px] px-4 ">
                <td className="pl-2">Email:</td>
                <td>{userData?.email}</td>
                <td className="pl-2 border bg-gray-500 p-2">
                  <Link to="#">Edit</Link>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Edit;
