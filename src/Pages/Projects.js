import "./Projects.css"
import React from "react"
import PB from "../Assets/pro-back.mp4"
import P1 from "../Assets/SerenoMusic.png"
import P2 from "../Assets/Story-Teller.png"
import P3 from "../Assets/Enter-the-RickVerse.png"
import P4 from "../Assets/mock2048.png"

const Projects = () => {

    return (
        <div className="projects">
            <video src={PB} autoPlay loop muted className="pb" />
            <div className="p-container">
                <h3 className="p-header">Projects</h3>
                <div className="p-cards">
                    <span className="p-info">
                        <img className="i-pic" src={P1} />
                        <h1 className="i-title">SerenoMusic</h1>
                        <span className="p-des">
                            <h3 className="i-date">Work in Progress</h3>
                            <p className="i-description">A music discover site for users to enjoy trendy music and share their own tracks!</p>
                        </span>
                    </span>
                    <span className="p-info">
                        <img className="i-pic" src={P2} />
                        <h1 className="i-title">Story-Teller</h1>
                        <span className="p-des">
                            <h3 className="i-date">Jan 28</h3>
                            <p className="i-description">An online platform for users to share and read short stories.</p>
                        </span>
                    </span>
                    <span className="p-info">
                        <img className="i-pic" src={P3} />
                        <h1 className="i-title">Enter the Rickverse</h1>
                        <span className="p-des">
                            <h3 className="i-date">Dec 08</h3>
                            <p className="i-description">A character information site for the Rick and Morty animated TV show.</p>
                        </span>
                    </span>
                    <span className="p-info">
                        <img className="i-pic" src={P4} />
                        <h1 className="i-title">Mock2048</h1>
                        <span className="p-des">
                            <h3 className="i-date">Nov 11</h3>
                            <p className="i-description">Mock version of the popular 2048 game.</p>
                        </span>
                    </span>
                </div>
            </div>
        </div>
    )
}

export default Projects