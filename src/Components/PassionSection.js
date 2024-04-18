import React from 'react';
import styled from 'styled-components';
import {InnerLayout} from '../styles/Layouts';
import Title from '../Components/Title';
import PassionCard from './PassionCard';
import design from '../img/design.svg';
import intelligence from '../img/intelligence.svg';
import reading from '../img/reading.svg'

const PassionSection=() =>{
    return (
        <InnerLayout>
            <ServicesSectionStyled>
                <Title title={'Passion'} span={'Passion'} />
                <div className="passion">
                    <PassionCard
                        image={design} 
                        title={'Software Engineering'}
                        paragraph={'I adore creating interactive user interfaces and sophisticated components. It\'s fantastic to be able to construct something that already exists in our heads. It seems like I\'m solving a pretty intriguing challenge. I have developed several website, app and testing script using React, Node.js, Java , Cypress etc.'}
                    />
                    <div className="mid-card">
                        <PassionCard
                            image={intelligence} 
                            title={'Machine Learning'}
                            paragraph={"I have been involved in a number of machine learning projects. In one project, we utilized reinforcement learning to trade efficiently in a stock market environment. In another project, we utilized a machine learning technique to monitor credit card theft. I've also worked on a project that aimed to forecast the likelihood of cancer."
                            }

                        />
                    </div>
                    <PassionCard
                        image={reading} 
                        title={'Reading'}
                        paragraph={"Recently, I've been diving into books more often. They provide a break from screens and expose me to top-tier authors."}
                    />
                </div>
            </ServicesSectionStyled>
        </InnerLayout>
    )
}

const ServicesSectionStyled = styled.section`
    .passion{
        margin-top: 5rem;
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        grid-gap: 1.5rem;
        @media screen and (max-width:1000px){
            flex-direction: column;
        }
        @media screen and (max-width:950px){
            grid-template-columns: repeat(2, 1fr);
        }
        @media screen and (max-width:650px){
            grid-template-columns: repeat(1, 1fr);
        }
       
    }
`;

export default PassionSection;
