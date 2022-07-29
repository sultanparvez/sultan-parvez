import React from 'react'
import styled from 'styled-components';
import {InnerLayout} from '../styles/Layouts';
import Title from '../Components/Title';
import ProgressBar from './ProgressBar';

const Skills=()=> {
    return (
        <SkillsStyled>

            
                <Title title={'Skills'} span={'Skills'} />
                <InnerLayout>
                    <div className="skills">
                        <ProgressBar 
                            title={'Javascript'}
                            width={'80%'}
                         //   text={'80%'}
                        />
                         <ProgressBar
                            title={'Cypress'}
                            width={'80%'}
                          //  text={'65%'}
                        />
                        <ProgressBar
                            title={'Mocha'}
                            width={'75%'}
                          //  text={'75%'}
                        />
                        <ProgressBar
                            title={'Node Js'}
                            width={'70%'}
                            // text={'70%'}
                        />
                        <ProgressBar
                            title={'PYTHON'}
                            width={'68%'}
                          //  text={'68%'}
                        />
                        <ProgressBar 
                            title={'Java'}
                            width={'66%'}
                          //  text={'66%'}
                        />

                        <ProgressBar
                            title={'React Js'}
                            width={'55%'}
                           // text={'55%'}
                        />
                        <ProgressBar
                            title={'MongoDB'}
                            width={'50%'}
                         //   text={'50%'}
                        />
                        <ProgressBar 
                            title={'MySQL'}
                            width={'50%'}
                         //   text={'50%'}
                        />
                        <ProgressBar
                            title={'Chai'}
                            width={'50%'}
                        //    text={'50%'}
                        />
                        <ProgressBar
                            title={'Cucumber'}
                            width={'50%'}
                        //    text={'50%'}
                        />
                        <ProgressBar
                            title={'Django'}
                            width={'45%'}
                          //  text={'45%'}
                        />
                        <ProgressBar
                            title={'Selenium'}
                            width={'30%'}
                          //  text={'20%'}
                        />
                        <ProgressBar
                            title={'Robot Framework'}
                            width={'27%'}
                          //  text={'20%'}
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
