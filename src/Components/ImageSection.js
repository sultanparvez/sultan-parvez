import React,{useRef,useEffect} from 'react'
import styled from 'styled-components';
import resume2 from '../img/webpic.png';
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
                A self motivated learner, who enjoys taking on new challenges. 
                I have professional experience of UI Automation.
                Also have experience of API testing , Load testing etc.
                I comprehend SQL queries and database schema to a reasonable extent. 
                Additionally, I am also familiar with MERN stacks. 
                </p>
                <div className="about-info">
                    <div className="info-title">
                        <p>Full Name</p>
                        <p>Age</p>
                        <p>Nationality</p>
                        <p>Languages</p>

                    </div>
                    <div className="info">
                        <p>: MD. Sultan Parvez</p>
                        <p>: 25 </p>
                        <p>: Bangladeshi</p>
                        <p>: English, Bengali, French, Chinese</p>

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
