import React from 'react'
import styled from 'styled-components';
import {InnerLayout} from '../styles/Layouts';
import Title from '../Components/Title';
import ProgressBar from './ProgressBar';

const Skills=()=> {
    return (
        <SkillsStyled>

            
                <Title title={'Language & Framewroks'} span={'Language & Framewroks'} />
                <InnerLayout>
                    <div className="skills">
                        <ProgressBar 
                            title={'Javascript'}
                            width={'100%'}
                         //   text={'80%'}
                        />
                         <ProgressBar
                            title={'Cypress'}
                            width={'100%'}
                          //  text={'65%'}
                        />
                         <ProgressBar
                            title={'Selenium'}
                            width={'100%'}
                          //  text={'20%'}
                        />
                           <ProgressBar
                            title={'Robot Framework'}
                            width={'100%'}
                          //  text={'20%'}
                        />
                        <ProgressBar
                            title={'Postman'}
                           width={'100%'}
                          //  text={'20%'}
                        />
                        <ProgressBar
                            title={'Mocha'}
                           width={'100%'}
                          //  text={'75%'}
                        />
                        <ProgressBar 
                            title={'MySQL'}
                            width={'100%'}
                         //   text={'50%'}
                        />
                        <ProgressBar
                            title={'Node Js'}
                            width={'100%'}
                            // text={'70%'}
                        />
                       
                        <ProgressBar
                            title={'Java'}
                            width={'100%'}
                            //  text={'66%'}
                        />
                        <ProgressBar
                            title={'PYTHON'}
                           width={'100%'}
                          //  text={'68%'}
                        />

                        <ProgressBar
                            title={'React Js'}
                            width={'100%'}
                           // text={'55%'}
                        />
                        <ProgressBar
                            title={'MongoDB'}
                           width={'100%'}
                         //   text={'50%'}
                        />
                        <ProgressBar
                            title={'Jmeter'}
                           width={'100%'}
                         //   text={'50%'}
                        />
                        <ProgressBar
                            title={'Chai'}
                           width={'100%'}
                        //    text={'50%'}
                        />
                        <ProgressBar
                            title={'Cucumber'}
                           width={'100%'}
                        //    text={'50%'}
                        />
                         <ProgressBar
                            title={'Jenkins'}
                            width={'100%'}
                            //  text={'20%'}
                        /> 
                        <ProgressBar
                            title={'Docker'}
                            width={'100%'}
                            //  text={'20%'}
                        />
                           <ProgressBar
                            title={'Django'}
                            width={'100%'}
                          //  text={'45%'}
                        />
                    </div>
                </InnerLayout>
        </SkillsStyled>
    )
}

const SkillsStyled = styled.section`
    .skills{
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        grid-row-gap: 2rem;
        grid-column-gap: 3rem;
        @media screen and (max-width: 700px){
            grid-template-columns: repeat(1, 1fr);
        }
    }
`;

export default Skills;
