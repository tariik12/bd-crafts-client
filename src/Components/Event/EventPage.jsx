import React from "react";
import {
  CalendarMonth,
  Event,
  ExpandLess,
  ExpandMore,
  Home,
  KeyboardArrowDown,
  LocationCity,
  LocationOn,
  ShareLocation,
  Star,
  StarBorder,
} from "@mui/icons-material";
import ShareIcon from "@mui/icons-material/Share";
import {
  Avatar,
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  Collapse,
  Divider,
  Fab,
  Icon,
  IconButton,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";
import { Link } from "react-router-dom";
import AddIcon from '@mui/icons-material/Add';
import MoreVertIcon from '@mui/icons-material/MoreVert';


const EventPage = () => {
  const [open, setOpen] = React.useState(true);
  const [open1, setOpen1] = React.useState(true);

  const handleClick = () => {
    setOpen(!open);
  };
  const handleClick1 = () => {
    setOpen1(!open1);
  };

  return (
    <div className="drawer lg:drawer-open">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex p-5 bg-gray-400">
        {/* Page content here */}
        <div>
          {/* Title */}
          <div>
            <h1 className="text-2xl font-bold">
              {" "}
              <IconButton>
                <Event></Event>
              </IconButton>{" "}
              Discover Events
            </h1>
            <Divider></Divider>
          </div>
          {/* Top Button */}
          <div className="flex gap-2 mt-3  ">
            <div className="border rounded-md p-1">
              {" "}
              <h1>
                <ListItemButton onClick={handleClick}>
                  <ListItemIcon>
                    <LocationOn></LocationOn>
                  </ListItemIcon>
                  <ListItemText primary="Location" />
                  {!open ? <ExpandLess /> : <ExpandMore />}
                </ListItemButton>
                <Collapse in={!open} timeout="auto" unmountOnExit>
                  <List component="div" disablePadding>
                    <ListItemButton sx={{ pl: 4 }}>
                      <ListItemIcon>
                        <StarBorder />
                      </ListItemIcon>
                      <ListItemText primary="Starred" />
                    </ListItemButton>
                  </List>
                </Collapse>
              </h1>
            </div>
            <div className="border rounded-md p-1">
              <h1>
                <ListItemButton onClick={handleClick1}>
                  <ListItemIcon>
                    <CalendarMonth></CalendarMonth>
                  </ListItemIcon>
                  <ListItemText primary=" Any Date" />
                  {!open ? <ExpandLess /> : <ExpandMore />}
                </ListItemButton>
                <Collapse in={!open1} timeout="auto" unmountOnExit>
                  <List component="div" disablePadding>
                    <ListItemButton sx={{ pl: 4 }}>
                      <ListItemIcon>
                        <StarBorder />
                      </ListItemIcon>
                      <ListItemText primary="Starred" />
                    </ListItemButton>
                  </List>
                </Collapse>
              </h1>
            </div>
            <div>
              <Button variant="contained">Top</Button>
            </div>
            <div>
              <Button variant="contained">Following</Button>
            </div>
          </div>

          {/* Events Cards Here */}

          <div className=" mt-5 grid md:grid-cols-3 gap-5">
            <div>
              <Card className="relative" sx={{ maxWidth: 345 }}>
                <CardMedia
                  component="img"
                  height="194"
                  image={"https://i.ibb.co/rHT01x9/handricrapt.jpg"}
                  alt="Paella dish"
                />
                <CardContent>
                  <Typography variant="body2" color="text.secondary">
                    This impressive paella is a perfect party dish and a fun
                    meal to cook together with your guests. Add 1 cup of frozen
                    peas along with the mussels, if you like.
                  </Typography>
                </CardContent>

                <div className="flex justify-around">
                  <IconButton size="large">
                    <Button
                      variant="outlined"
                      color="success"
                      primary="Interested"
                    >
                      <Star className="pr-2 font-bold" color="success"></Star>{" "}
                      Interested
                    </Button>
                  </IconButton>

                  <IconButton>
                    <Button
                      variant="outlined"
                      color="success"
                      primary="Interested"
                    >
                      <ShareIcon></ShareIcon>
                    </Button>
                  </IconButton>
                </div>
              <div className="absolute top-0 right-0 border rounded-md bg-transparent text-white">
                <MoreVertIcon></MoreVertIcon>
              </div>
              </Card>
            </div>
          </div>
        </div>
        <label
          htmlFor="my-drawer-2"
          className="btn btn-primary drawer-button lg:hidden"
        >
          Open Sideber
        </label>
      </div>
      <div className="drawer-side">
        <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
        <ul className="menu p-4 w-80 min-h-full text-base-content bg-slate-300">





          {/* Sidebar content here */}
          <li>
            <a>
              <IconButton>
                <Link to={"/"}>
                  <Home></Home>
                </Link>
              </IconButton>
            </a>
          </li>
          <li>
            <a>
              <IconButton>
                <Event></Event>
              </IconButton>{" "}
              Create a new Event
                <Fab size="small" color="primary" aria-label="add">
                   <AddIcon></AddIcon>
                </Fab>
              
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default EventPage;
