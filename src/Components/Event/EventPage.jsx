import  { useEffect, useRef, useState } from "react";
import { Event } from "@mui/icons-material";
import {
  Card,
  CardContent,
  CardMedia,
  Divider,
  Fab,
  IconButton,
  Typography,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";

const createEvent = (event) => {
  event.preventDefault();
  const ename = event.target.ename.value;
  const startdate = event.target.startdate.value;
  const starttime = event.target.starttime.value;
  const opinion = event.target.opinion.value;
  const whocansee = event.target.whocansee.value;
  const address = event.target.address.value;
  const photoUrl = event.target.photoUrl.value;

  const eventCreate = {
    ename,
    startdate,
    starttime,
    opinion,
    whocansee,
    photoUrl,
    address,
  };
  console.log(eventCreate);

  fetch("https://bd-crafts-server.vercel.app/eventdataPost", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(eventCreate),
  })
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      if (data.acknowledged === true) {
        alert("Event Created Successfully");
      }
    });
};

const EventPage = () => {
  const [eventsData, setEventsData] = useState([]);
  console.log(eventsData);
  
  const modalRef = useRef(null);

  

  const closeModal = () => {
    if (modalRef.current) {
      modalRef.current.close();
    }
  };

  useEffect(() => {
    fetch("https://bd-crafts-server.vercel.app/eventdata")
      .then((response) => response.json())
      .then((data) => {
        setEventsData(data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  return (
    <div className="container mx-auto">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col bg-white">
       
        <div>
          {/* Title */}
          <div
           onClick={() => window.my_modal_3.showModal()}
           className="border rounded-md bg-slate-200 flex items-center justify-center md:w-1/4"
          >
          <a className="flex items-center gap-3 font-semibold mb-3">
              <IconButton>
                <Event></Event>
              </IconButton> 
              Create a new Event
              <Fab size="small" color="primary" aria-label="add" >
                <AddIcon ></AddIcon>
              </Fab>
            </a>
            <Divider></Divider>
          </div>

          {/* Events Cards Here */}

          <div>
            <div  className=" mt-5 grid md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 justify-center gap-5 ">
              {eventsData.map((event) => (
                  <Card
                    className="relative"
                    sx={{ maxWidth: 345 }}
                    key={event.id}
                  >
                    <CardMedia
                      component="img"
                      height="300"
                      image={event.photoUrl} 
                      alt={event.photoUrl} 
                    />
                    <CardContent>
                      <div className="flex justify-between pb-2">
                      <Typography variant="body2" color="text.secondary">
                        <h1 className="font-bold"> Date: {event.startdate}</h1>
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        <h1 className="font-bold"> Time: {event.starttime}</h1>
                      </Typography>
                      </div>
                      <Typography variant="body2" color="text.secondary">
                        Title: {event.ename}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        <h1 className="font-semibold"> Location: {event.address}</h1>
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        <h1 className="text-gray-600">{event.attendance}</h1>
                      </Typography>
                    </CardContent>
                   </Card>
                ))}
            </div>

            <div>
              {/* Modal =======*/}

              <dialog ref={modalRef} id="my_modal_3" className="modal">
                <div className="modal-box">
                  <button
                    className="btn btn-sm btn-circle bg-red-500 absolute right-2 top-2"
                    onClick={closeModal}
                  >
                    ✕
                  </button>
                  <div className="container mx-auto border p-5 bg-slate-400 shadow-2xl rounded-lg my-10">
                    <form onSubmit={(event) => createEvent(event)}>
                      <div className="bg-blue-400 p-3 my-3 rounded ">
                        <h1 className="text-xl font-bold text-black text-center">
                          Create An Event
                        </h1>
                      </div>
                      <div className="grid gap-5">
                        {/* Event Name */}
                        <div className="mb-6 w-full">
                          <label
                            htmlFor="name"
                            className="block mb-2 text-sm font-medium text-white dark:text-white"
                          >
                            Event Name
                          </label>
                          <input
                            type="text"
                            id="ename"
                            name="ename"
                            className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                            placeholder="Event Name"
                            required
                          />
                        </div>

                        <div className="flex justify-between ">
                          {/* Start Date */}
                          <div className="mb-6">
                            <label
                              htmlFor="startdate"
                              className="block mb-2 text-sm font-medium text-white dark:text-white"
                            >
                              Start Date
                            </label>
                            <input
                              type="date"
                              id="startdate"
                              name="startdate"
                              className="shadow-sm bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                              placeholder="start date"
                              required
                            />
                          </div>

                          {/*  Start Time */}
                          <div className="mb-6">
                            <label
                              htmlFor="starttime"
                              className="block mb-2 text-sm font-medium text-white dark:text-white"
                            >
                              Start Time
                            </label>
                            <input
                              type="time"
                              id="starttime"
                              name="starttime"
                              className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                              placeholder="Start Time"
                              required
                            />
                          </div>
                        </div>

                        {/* Your Opinion */}
                        <div className="mb-6">
                          <label
                            htmlFor="number"
                            className="block mb-2 text-sm font-medium text-white dark:text-white"
                          >
                            Your Opinion
                          </label>
                          <input
                            type="text"
                            id="opinion"
                            name="opinion"
                            className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                            placeholder="Your Opinion"
                            required
                          />
                        </div>

                        {/* Who can see it */}
                        <div className="mb-6">
                          <label
                            htmlFor="address"
                            className="block mb-2 text-sm font-medium text-white dark:text-white"
                          >
                            Who can see it
                          </label>
                          <input
                            type="text"
                            id="whocansee"
                            name="whocansee"
                            className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                            placeholder="Who can see it"
                            required
                          />
                        </div>

                        {/* date of birth */}
                        <div className="mb-6">
                          <label
                            htmlFor="address"
                            className="block mb-2 text-sm font-medium text-white dark:text-white"
                          >
                            Address
                          </label>
                          <input
                            type="text"
                            id="address"
                            name="address"
                            className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                            placeholder="Address"
                            required
                          />
                        </div>

                        {/* Picture URL */}
                        <div className="mb-6">
                          <label
                            htmlFor="photoUrl"
                            className="block mb-2 text-sm font-medium text-white dark:text-white"
                          >
                            Picture Url
                          </label>
                          <input
                            type="text"
                            id="photoUrl"
                            name="photoUrl"
                            className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                            placeholder="Photo Url"
                            required
                          />
                        </div>
                      </div>

                      <div className="flex justify-center">
                        <button
                      
                          type="submit"
                          className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-xl px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                        >
                          Create Event
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </dialog>

              {/* ======================================== */}
            </div>
          </div>
        </div>

      </div>

    </div>
  );
};

export default EventPage;
