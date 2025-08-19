import React, { useRef, useEffect } from 'react'
import styled from 'styled-components';
import resume2 from '../img/SP_DP02.jpg';
import cv from "../assets/MD_Sultan_Parvez.pdf"

const ImageSection = () => {
    const name = useRef('Sultan Parvez')
    const currentYear = new Date().getFullYear();
    const birthYear = 1997;
    // Subtracted by one since my birthdate is Dec 19
    const age = (currentYear - birthYear) - 1;
    return (
        <ImageSectionStyled>
            <div className="left-content">
                <img src={resume2} alt="" />
            </div>
            <div className="right-content">
                <h4>I am <span>{name.current}</span></h4>
                <p className="paragraph">
                    Currently pursuing an MSc in Quantum Information Science at the University of Copenhagen, where I am developing advanced analytical and computational problem-solving skills while exploring the intersection of quantum technologies, algorithms, and information systems.
                    I strongly believe that this academic journey will strengthen my ability to reason about complex systems, think critically, and adapt to cutting-edge technological trends.
                </p>

                <p className="paragraph mt-6">
                    Previously, I worked as a QA Automation Engineer and QA Coach. In this capacity, I designed and executed automation frameworks using Cypress, Selenium, Appium, and Robot Framework with proficiency in Java, Python, and JavaScript, while also mentoring and guiding teams to adopt best practices in testing and automation.
                    I have hands-on experience with API testing (Postman), performance testing (JMeter), and familiarity with the MERN stack, which enables effective collaboration across development and testing environments. With a keen eye for detail and strong problem-solving skills, I ensured software quality and fostered a culture of continuous improvement, while delivering projects on time and meeting or exceeding customer expectations.
                </p>

                <div className="about-info">
                    <div className="info-title">
                        <p>Full Name</p>
                        <p>Age</p>
                        <p>Nationality</p>
                    </div>
                    <div className="info">
                        <p>: Md Sultan Parvez</p>
                        <p>: {age} </p>
                        <p>: Bangladeshi</p>
                    </div>
                </div>

                <a target="_blank" href={cv}>
                    <button className="btn">Resume</button></a>

            </div>
        </ImageSectionStyled>
    )
}


const ImageSectionStyled = styled.div`
    margin-top: 5rem;
    display: flex;
    @media screen and (max-width:1000px){
        flex-direction: column;
        .left-content{
            margin-bottom: 2rem;
        }
    }
    .left-content{
        width: 100%;
        
        img{
            width: 95%;
            object-fit: cover;
        }
    }
    .right-content{
        width: 100%;
        h4{
            font-size: 2rem;
            color: var(--white-color);
            span{
                font-size: 2rem;
            }
        }
        .paragraph{
            padding: 1rem 0;
        }
        .about-info{
            display: flex;
            padding-bottom: 1.4rem;
            .info-title{
                padding-right: 3rem;
                p{
                    font-weight: 600;
                }
            }
            .info-title, .info{
                p{
                    padding: .3rem 0;
                }
            }
        }
    }
`;
export default ImageSection;
