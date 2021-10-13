import React from 'react';
import styled from 'styled-components';
import {InnerLayout} from '../styles/Layouts';
import Title from '../Components/Title';
import PassionCard from './PassionCard';
import design from '../img/design.svg';
import intelligence from '../img/intelligence.svg';
import gamedev from '../img/game-dev.svg';

const PassionSection=() =>{
    return (
        <InnerLayout>
            <ServicesSectionStyled>
                <Title title={'Passion'} span={'Passion'} />
                <div className="passion">
                    <PassionCard
                        image={design} 
                        title={'Software Engineering'}
                        paragraph={'I enjoy developing interactive UI and building complex modules. It is fascinating when we can design something which is already in our mind. When I am building an API for the backend it feels like solving a really interesting puzzle. And working on the frontend gives the pleasure of creating something.'}
                    />
                    <div className="mid-card">
                        <PassionCard
                            image={intelligence} 
                            title={'Machine Learning'}
                            paragraph={"Machine learning can do wonder. Whether it is predicting a classification problem or simulating a scenario that is impossible to simulate otherwise, it always amaze me. I am a fan Reinforcement Learning. I have explored with methods like a2c and it was an wonderful learning. I will be really  thrilled if I get more opportunity to work in this sector. "
                            }

                        />
                    </div>
                    <PassionCard
                        image={gamedev} 
                        title={'Gaming'}
                        paragraph={'Video games has been my favourite go to pass time. Enjoy playing fps shooters like CS:GO and Valorant'}
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
