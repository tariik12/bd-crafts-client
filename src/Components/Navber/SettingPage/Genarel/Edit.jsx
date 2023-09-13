import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../../Provider/AuthProvider";

const Edit = () => {
  const { user } = useContext(AuthContext);
  const [userData, setUserData] = useState(null);
  const [newName, setNewName] = useState("");
  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await fetch(
          `https://bd-crafts-server.vercel.app/singleUser/${user?.email}`
        );
        if (response.ok) {
          const data = await response.json();
          setUserData(data);
          setNewName(data.name);
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

  const handleUpdateName = async () => {
    try {
      const response = await fetch(
        `http://localhost:5000/updateUserName/${user?.email}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ newName: newName }),
        }
      );

      if (response.ok) {
        setUserData({ ...userData, name: newName });
        setIsEditing(false); // Disable editing mode
        window.location.href = "/setting/genarel";
      } else {
        console.error("Failed to update user name");
      }
    } catch (error) {
      console.error("Error updating user name:", error);
    }
  };

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
                {isEditing ? (
                  <>
                    <td>
                      <input
                        type="text"
                        value={newName}
                        onChange={(e) => setNewName(e.target.value)}
                      />
                    </td>
                    <td className="pl-2 border bg-gray-500 p-2">
                      <button onClick={handleUpdateName}>Save</button>
                    </td>
                  </>
                ) : (
                  <>
                    <td>{userData?.[0].name}</td>
                    <td className="pl-2 border bg-slate-600 text-white rounded">
                      <button onClick={() => setIsEditing(true)}>Edit</button>
                    </td>
                  </>
                )}
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Edit;
