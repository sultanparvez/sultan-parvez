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
                            title={'Java'}
                            width={'80%'}
                            text={'80%'}
                        />
                        <ProgressBar
                            title={'PYTHON'}
                            width={'80%'}
                            text={'80%'}
                        />
                        <ProgressBar 
                            title={'Javascript'}
                            width={'70%'}
                            text={'70%'}
                        />
                        <ProgressBar 
                            title={'Node Js'}
                            width={'70%'}
                            text={'70%'}
                        />
                        <ProgressBar 
                            title={'React Js'}
                            width={'70%'}
                            text={'70%'}
                        />
                        <ProgressBar
                            title={'MongoDB'}
                            width={'50%'}
                            text={'50%'}
                        />
                        <ProgressBar 
                            title={'MySQL'}
                            width={'50%'}
                            text={'50%'}
                        />
                        <ProgressBar 
                            title={'Mocha'}
                            width={'50%'}
                            text={'50%'}
                        />
                        <ProgressBar 
                            title={'Cypress'}
                            width={'40%'}
                            text={'40%'}
                        />
                        <ProgressBar
                            title={'Django'}
                            width={'40%'}
                            text={'40%'}
                        />
                        <ProgressBar
                            title={'Next Js'}
                            width={'20%'}
                            text={'20%'}
                        />
                        <ProgressBar
                            title={'TypeScript'}
                            width={'20%'}
                            text={'20%'}
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
