import D1 from "../Assets/d-one.png"
import D2 from "../Assets/d-two.png"
import animation from "../Assets/ani-one.gif"
import "./Home.css"
import { Typography } from "@mui/material"


const Home = () => {
    return (
        <div className="home">
            <div className="d-box">
                <img src={D2} className="left-d" />
                <img src={D1} className="right-d" />
            </div>
            <div className="c-box">
                <img src={animation} className="ani-one" />
                <div className="text-box">
                    <h3 className="text-one">Hey there,</h3>
                    <h1 className="text-two">I am Hamim Niloy</h1>
                    <h3 className="text-three">Welcome to my Portfolio!</h3>
                    

                </div>
            </div>
        </div>
    )
}

export default Home