import { Avatar, Box, Divider, IconButton, Stack, Switch } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import logo from "../../../../assets/icon/bdcraft_logo.png";
import { Gear, Phone, User } from "phosphor-react";
import { Message } from "@mui/icons-material";
import { Link } from "react-router-dom";
import { FaHouse } from "react-icons/fa6";

const IconBer = () => {
  const theme = useTheme();
  const style = {
    iconCss: `border p-2 rounded shadow-red-600  bg-slate-500`,
  };
  return (
    <>
      <Box
        p={2}
        sx={{
          backgroundColor: theme.palette.background.paper,
          boxShadow: "3px 0px 2px rgba(0, 0, 0, 0.25)",
          height: "100vh",
          width: 100,
          position: "relative",
        }}
      >
        <Stack
          direction="column"
          alignItems={"center"}
          justifyContent="space-between"
          sx={{ height: "100%", width: "100%" }}
          spacing={4}
        >
          <Stack>
            <Link to='/'>
            <Box
              sx={{
                backgroundColor: theme.palette.primary.main,
                height: 60,
                width: 60,
                borderRadius: 1.5,
               padding:1,
               marginTop:1,
              }}
            >
              <img  src={logo} alt="logo" />
              <FaHouse size={25} className="text-white ms-2 mt-2" />
            </Box>
            </Link>

            <div className="flex flex-col gap-5 py-5 text-3xl text-white">
              <div className={style.iconCss}>
                <Message></Message>
              </div>
              <div className={style.iconCss}>
                <User></User>
              </div>
              <div className={style.iconCss}>
                <Phone></Phone>
              </div>
            </div>
          </Stack>

          <div>
            <IconButton>
              <Gear></Gear>
            </IconButton>

            <Stack>
              <Switch defaultChecked></Switch>
              <Avatar src={"https://i.ibb.co/fMMzzbY/Ahaduzzaman.jpg"}></Avatar>
            </Stack>
          </div>
        </Stack>
      </Box>
    </>
  );
};

export default IconBer;
