import React from 'react'
import styled from 'styled-components';
import ImageSection from '../Components/ImageSection';
import Title from '../Components/Title';
import {MainLayout} from '../styles/Layouts';
import PassionSection from '../Components/PassionSection';

const AboutPage=()=> {
    return (

        <MainLayout>
            <AboutStyled >
                <Title title={'About Me'} span={'About Me'} />
                <ImageSection />
                <PassionSection />
            </AboutStyled >
        </MainLayout>
    )
}

const AboutStyled = styled.section`
    
`;

export default AboutPage
