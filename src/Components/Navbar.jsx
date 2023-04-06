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
import "../Pages/Home.css"
import { hover } from "@testing-library/user-event/dist/hover";

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
    const background = theme.palette.background.default;
    console.log(isMobileMenuToggled)


    return (
        <div>
            {!isMobileMenuToggled ? (
                <div style={{ position: 'fixed', top: '20px', left: '50%', transform: 'translateX(-50%)', zIndex: '10' }}
                >
                    <span className="button-b">
                    <IconButton
                        className="menu-icon"
                        size="large"
                        onClick={() => setIsMobileMenuToggled(!isMobileMenuToggled)}

                        
                        style={{
                            
                            backgroundColor: "#fbfbfb",
                            
                            

                        }
                    }
                        >
                        <Menu />
                    </IconButton>
                    </span>
                </div>

            ) : (
                <div style={{ position: 'fixed', top: '20px', left: '50%', transform: 'translateX(-50%)', zIndex: '10' }}>
                    <IconButton
                        size="large"
                        onClick={() => setIsMobileMenuToggled(!isMobileMenuToggled)}
                        style={{
                            
                            backgroundColor: "#fbfbfb",
                            
                            

                        }
                    }
                        >
                        <Close />
                    </IconButton>
                    <FlexBetween>
                        <MenuItem>Home</MenuItem>
                        <MenuItem>Projects</MenuItem>
                        <MenuItem>About</MenuItem>
                        <MenuItem>Contact</MenuItem>

                    </FlexBetween>
                </div>



            )}


        </div>


    )
}

export default Navbar;