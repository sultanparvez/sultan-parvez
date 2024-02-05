import React,{useRef,useEffect} from 'react'
import styled from 'styled-components';
import resume2 from '../img/SP_DP02.jpg';
import cv from "../assets/MD_Sultan_Parvez.pdf"

const ImageSection=()=> {
    const name = useRef('Sultan Parvez')
    return (
        <ImageSectionStyled>
            <div className="left-content">
                <img src={resume2} alt=""/>
            </div>
            <div className="right-content">
                <h4>I am <span>{name.current}</span></h4>
                <p className="paragraph">
                As a seasoned Software Quality Assurance (SQA) Engineer, I have expertise in automation using tools such as Cypress, Selenium, Appium, and Robot Framework, as well as proficiency in programming languages like Java, Python, and JavaScript. 
                Also, I am experienced in API testing using Postman and performance testing with JMeter. I am committed to learning new technologies and tools to optimize the software testing process and ensure exceptional product quality.
                With a keen eye for detail and effective problem-solving skills, I work closely with stakeholders to deliver projects on time and meet or surpass customer expectations.
                Additionally, I am familiar with the MERN stack.
                </p>
                <div className="about-info">
                    <div className="info-title">
                        <p>Full Name</p>
                        <p>Age</p>
                        <p>Nationality</p>
                    </div>
                    <div className="info">
                        <p>: MD. Sultan Parvez</p>
                        <p>: 26 </p>
                        <p>: Bangladeshi</p>
                    </div>
                </div>

                <a target="_blank" href={cv}>
                <button  className="btn">Resume</button></a>

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
