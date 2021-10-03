import React from 'react';
import about from '../img/about.jpg';
import cv from "../assets/MD_Sultan_Parvez.pdf"

function ImageSection() {
    return (
        <div className="ImageSection">
            <div className="img">
                <img src={about} alt=""/>
            </div>
            <div className="about-info">
                <h4>I am<span> Sultan Parvez</span></h4>
                <p className="about-text">
                    A motivated software engineer, who enjoys taking on new challenges. I'm not afraid to venture down new paths. I like being a part of the team. Communication, in my opinion, is the most effective means of learning and comprehension.
                </p>
                <div className="about-details">
                    <div className="left-section">
                        <p>Full Name</p>
                        <p>Age</p>
                        <p>Nationality</p>
                        <p>Languages</p>
                        <p>Address</p>
                        <p>Countries</p>
                    </div>
                    <div className="right-section">
                        <p>: MD. Sultan Parvez</p>
                        <p>: 24</p>
                        <p>: Bangladeshi</p>
                        <p>: English, Bengali, French, Chinese</p>
                        <p>: House#38 Saleh Bhaban, Jatrabari, Dhaka, Bangladesh</p>
                        <p>: Bangladesh</p>
                    </div>
                </div>
                <a target="_blank" href={cv}><button  className="btn">Resume</button></a>

            </div>
        </div>
    )
}

export default ImageSection;
