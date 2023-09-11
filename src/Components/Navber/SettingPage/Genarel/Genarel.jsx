import React, { useContext } from "react";
import { AuthContext } from "../../../../Provider/AuthProvider";
import { Link } from "react-router-dom";

const General = () => {
  const { user } = useContext(AuthContext); 

  return (
    <div className="w-full max-w-screen-md h-[803px] flex items-center justify-center mx-auto mt-2  overflow-hidden">
      <div className="bg-blue-300 rounded-lg p-4">
        <div className="space-y-4">
          <div className="bg-white lg:w-[588px] w-full mx-auto rounded-lg text-center p-4">General</div>
          <table className="w-full p-4">
            <tbody>
            <tr className="bg-white h-[47px] px-4 ">
                <td className="pl-2">Name :</td>
                <td>{user?.displayName}</td>
                <td className="pl-2">
                  <Link to="/edit">Update</Link>
                </td>
              </tr>
              <br />
              <tr className="bg-white h-[47px] px-4">
                <td className="pl-2">Status</td>
                <td>todo</td>
                <td className="pl-2">
                  <Link to="#">Update</Link>
                </td>
              </tr>
               <br />
               <tr className="bg-white h-[47px] px-4">
                <td className="pl-2">Email:</td>
                <td>{user?.email}</td>
                <td className="pl-2">
                  <Link to="/edit">Update</Link>
                </td>
              </tr>
              <br />
              <tr className="bg-white h-[47px] px-4">
                <td className="pl-2">Username:</td>
                <td>todo</td>
                <td className="pl-2">
                  <Link to="#">Update</Link>
                </td>
              </tr>
               <br />
              <tr className="bg-white h-[47px] px-4">
                <td className="pl-2">Contact:</td>
                <td>+8801758614542</td>
                <td className="pl-2">
                  <Link to="#">Update</Link>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default General;
