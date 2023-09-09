import { createContext, useContext, useState } from "react";
const ApiContext = createContext();

export const useSearchContext = () => {
    return useContext(ApiContext);
  };


const ApiContestProvider = ({children}) => {
    // const [tasks, setTasks] = useState([]);
    const [searchData, setTitle] = useState([]);

    // const createTask = (task) => {
    //     task.id = Date.now().toString();
    //     setTasks([...tasks, task]);
    //   };
    
      const handleSearchData = (title) =>{
        console.log(title)
        setTitle(title) 
      }
    //   const updateTaskStatus = (taskId, status) => {
    //     const updatedTasks = tasks.map((task) =>
    //       task.id === taskId ? { ...task, status } : task
    //     );
    //     setTasks(updatedTasks);
    //   };
    return (
        <div>
         <ApiContext.Provider value={{handleSearchData,searchData }}>
      {children}
    </ApiContext.Provider>    
        </div>
    );
};
export default ApiContestProvider;