import { Link } from "react-router-dom";
import { useState } from "react";
import {
    Box,
    IconButton,
    InputBase,
    Typography,
    Select,
    MenuItem,
    FormControl,
    useTheme,
    useMediaQuery,
} from "@mui/material";
import {
    DarkMode,
    LightMode,
    Menu,
    Close,
} from "@mui/icons-material";
import { useDispatch, useSelector } from "react-redux";
import { setMode, setLogout } from "../state";
import { useNavigate } from "react-router-dom";
import FlexBetween from "./FlexBetween";

const options = [
    'HOME',
    'PROJECTS',
    'ABOUT ME',
    'CONTACT',
  ];
  
  const ITEM_HEIGHT = 48;

const Navbar = () => {
    const [isMobileMenuToggled, setIsMobileMenuToggled] = useState(false);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const user = useSelector((state) => state.user);
    const isNonMobileScreens = useMediaQuery("(min-width: 1000px)");

    const theme = useTheme();



    return (
        <div>
            {isNonMobileScreens ? (
                <FlexBetween backgroundColor="#FDF4F5" padding="1rem 20%">
                <Typography
                    textAlign="center"
                    fontWeight="bold"
                    fontSize="clamp(1rem, 2rem, 2.25rem)"
                    color="#210062"
                    onClick={() => navigate("/home")}
                    sx={{
                        "&:hover": {
                            color: "#009FBD",
                            cursor: "pointer",
                        },
                    }}
                >
                    Home
                </Typography>
                <Typography
                    textAlign="center"
                    fontWeight="bold"
                    fontSize="clamp(1rem, 2rem, 2.25rem)"
                    color="#210062"
                    onClick={() => navigate("/home")}
                    sx={{
                        "&:hover": {
                            color: "#009FBD",
                            cursor: "pointer",
                        },
                    }}
                >
                    Project
                </Typography>
                <Typography
                    textAlign="center"
                    fontWeight="bold"
                    fontSize="clamp(1rem, 2rem, 2.25rem)"
                    color="#210062"
                    onClick={() => navigate("/home")}
                    sx={{
                        "&:hover": {
                            color: "#009FBD",
                            cursor: "pointer",
                        },
                    }}
                >
                    About
                </Typography>
                <Typography
                    textAlign="center"
                    fontWeight="bold"
                    fontSize="clamp(1rem, 2rem, 2.25rem)"
                    color="#210062"
                    onClick={() => navigate("/home")}
                    sx={{
                        "&:hover": {
                            color: "#009FBD",
                            cursor: "pointer",
                        },
                    }}
                >
                    Contact
                </Typography>
            </FlexBetween>
            ) : (
                <FlexBetween padding="1rem 6%">
                <Typography
                    textAlign="center"
                    fontWeight="bold"
                    fontSize="20px"
                    color="#210062"
                    onClick={() => navigate("/home")}
                    sx={{
                        "&:hover": {
                            color: "#009FBD",
                            cursor: "pointer",
                        },
                    }}
                >
                    Home
                </Typography>
                <Typography
                    textAlign="center"
                    fontWeight="bold"
                    fontSize="20px"
                    color="#210062"
                    onClick={() => navigate("/home")}
                    sx={{
                        "&:hover": {
                            color: "#009FBD",
                            cursor: "pointer",
                        },
                    }}
                >
                    Project
                </Typography>
                <Typography
                    textAlign="center"
                    fontWeight="bold"
                    fontSize="20px"
                    color="#210062"
                    onClick={() => navigate("/home")}
                    sx={{
                        "&:hover": {
                            color: "#009FBD",
                            cursor: "pointer",
                        },
                    }}
                >
                    About
                </Typography>
                <Typography
                    textAlign="center"
                    fontWeight="bold"
                    fontSize="20px"
                    color="#210062"
                    onClick={() => navigate("/home")}
                    sx={{
                        "&:hover": {
                            color: "#009FBD",
                            cursor: "pointer",
                        },
                    }}
                >
                    Contact
                </Typography>
            </FlexBetween>
            )}
            

        </div>


    )
}

export default Navbar;