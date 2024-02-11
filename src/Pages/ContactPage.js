import React from 'react';
import styled from 'styled-components';
import {MainLayout, InnerLayout} from '../styles/Layouts';
import Title from '../Components/Title';
import PhoneIcon from '@material-ui/icons/Phone';
import EmailIcon from '@material-ui/icons/Email';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import ContactItem from '../Components/ContactItem';
import WorkSpace from "../img/Setup-1.jpg";
import FacebookIcon from "@material-ui/icons/Facebook";
import GithubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import InstagramIcon from "@material-ui/icons/Instagram";
import TwitterIcon from "@material-ui/icons/Twitter";

const ContactPage=()=> {
    const phone = <PhoneIcon />
    const email = <EmailIcon />
    const location = <LocationOnIcon />
   return (
     <MainLayout>
       <Title title={"Get in Touch"} span={'Get in Touch'}/>
       <ContactPageStyled>
         <InnerLayout className={"contact-section"}>
           <div className="left-content">
             <form className="form">
               <img src={WorkSpace} alt="" />
             </form>
             <div className="icons">
               <a
                 target="_blank"
                 href="https://www.linkedin.com/in/sultanparvez/"
                 className="icon i-linkedin"
                 rel="noreferrer"
               >
                 <LinkedInIcon />
               </a>
               <a
                 target="_blank"
                 href="https://www.instagram.com/_fahim.dipto/"
                 className="icon i-insta"
                 rel="noreferrer"
               >
                 <InstagramIcon />
               </a>
               <a
                 target="_blank"
                 href="https://www.facebook.com/tfangpOwer"
                 className="icon i-fb"
                 rel="noreferrer"
               >
                 <FacebookIcon />
               </a>
               <a
                 target="_blank"
                 href="https://twitter.com/_SultanParvez"
                 className="icon i-twitter"
                 rel="noreferrer"
               >
                 <TwitterIcon />
               </a>
               <a
                 target="_blank"
                 href="https://github.com/sultanparvez"
                 className="icon i-github"
                 rel="noreferrer"
               >
                 <GithubIcon />
               </a>
             </div>
           </div>
           <div className="right-content">
             <div className="contact-title">
               <h6
                 style={{
                   fontStyle: "italic",
                   color: "var(--background-grey)",
                 }}
               >
                 I am available in -
               </h6>
             </div>
             <ContactItem
               title={"Email"}
               icon={email}
               cont1={"sultanparvez77 [dot] sp [at] gmail [dot] com"}

             />
             <ContactItem
               title={"Address"}
               icon={location}
               cont1={"Dhaka, Bangladesh"}
             />
           </div>
         </InnerLayout>
       </ContactPageStyled>
     </MainLayout>
   );
 }
const ContactPageStyled = styled.section`
    .contact-section{
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        grid-column-gap: 2rem;
        @media screen and (max-width: 978px){
            grid-template-columns: repeat(1, 1fr);
            .f-button{
                margin-bottom: 3rem;
            }
        }
        .right-content{
            display: grid;
            grid-template-columns: repeat(1, 1fr);
            @media screen and (max-width: 502px){
                width: 100%;

            }
        }
        .contact-title{
            h4{
                color: var(--white-color);
                padding: 1rem 0;
                font-size: 1.8rem;
            }
        }
        .form{
                    width: 100%;
                    @media screen and (max-width: 502px){
                        width: 100%;
                    }
                    .form-field{
                        margin-top: 2rem;
                        position: relative;
                        width: 100%;
                        label{
                            position: absolute;
                            left: 20px;
                            top: -19px;
                            display: inline-block;
                            background-color: var(--background-dark-color);
                            padding:0 .5rem;
                            color: inherit;
                        }
                        input{
                            border: 1px solid var(--border-color);
                            outline: none;
                            background: transparent;
                            height: 50px;
                            padding:0 15px;
                            width: 100%;
                            color: inherit;
                        }
                        textarea{
                            background-color: transparent;
                            border: 1px solid var(--border-color);
                            outline: none;
                            color: inherit;
                            width: 100%;
                            padding: .8rem 1rem;
                        }
                    }


                }
                 .icons {
                display: flex;
                justify-content: center;
                margin-top: 1rem;
                .icon {
                border: 2px solid var(--border-color);
                display: flex;
                align-items: center;
                justify-content: center;
                border-radius: 50%;
                transition: all 0.4s ease-in-out;
                cursor: pointer;
                &:hover {
                border: 2px solid var(--primary-color);
                color: var(--primary-color);
                }
                &:not(:last-child) {
                margin-right: 1rem;
                }
                svg {
                margin: 0.5rem;
                }
                }
                .i-linkedin {
                &:hover {
                border: 2px solid #0b67c3;
                color: #0b67c3;
                }
                }
                .i-insta {
                &:hover {
                border: 2px solid #fb3958;
                color: #fb3958;
                }
                }
                .i-fb {
                &:hover {
                border: 2px solid #3a5998;
                color: #3a5998;
                }
                }
                .i-twitter {
                &:hover {
                border: 2px solid #1da1f2;
                color: #1da1f2;
                }
                }
                .i-github {
                &:hover {
                border: 2px solid #5f4687;
                color: #5f4687;
                }
                }
                }
                }

    }
`;

export default ContactPage
