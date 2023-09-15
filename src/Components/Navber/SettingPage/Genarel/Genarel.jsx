import  { useContext, useState, useEffect } from "react";
import { AuthContext } from "../../../../Provider/AuthProvider";
import { Link } from "react-router-dom";

const General = () => {
  const { user } = useContext(AuthContext);
  const [userData, setUserData] = useState(null);
  console.log(userData);

  useEffect(() => {

    const fetchUserData = async () => {
      try {
        const response = await fetch(`https://bd-crafts-server.vercel.app/singleUser/${user?.email}`);
        if (response.ok) {
          const data = await response.json();
          setUserData(data);
        } else {
          console.error("Failed to fetch user data");
        }
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    if (user?.email) {
      fetchUserData();
    }
  }, [user]);

  return (
    <div className="w-full max-w-screen-md h-[803px] flex items-center justify-center mx-auto mt-2 overflow-hidden">
      <div className="bg-blue-300 rounded-lg p-4">
        <div className="space-y-4">
          <div className="bg-white lg:w-[588px] w-full mx-auto rounded-lg text-center p-4">General</div>
          {userData ? (
            <table className="w-full p-4">
            <tbody>
            <tr className="bg-white h-[47px] px-4 ">
                <td className="pl-2">Name :</td>
                <td>{userData?.[0].name}</td>
                <td className="pl-2 bg-slate-600 text-white rounded">
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
                <td>{userData?.email}</td>
                <td className="pl-2">
                  <Link to="/edit">Update</Link>
                </td>
              </tr>
              <br />
              <tr className="bg-white h-[47px] px-4">
                <td className="pl-2">Username:</td>
                <td>{userData?.name}</td>
                <td className="pl-2">
                  <Link to="#">Update</Link>
                </td>
              </tr>
               <br />
              
            </tbody>
            </table>
          ) : (
            <p>Loading user data...</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default General;
