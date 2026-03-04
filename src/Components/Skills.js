import React from 'react'
import styled from 'styled-components';
import {InnerLayout} from '../styles/Layouts';
import Title from '../Components/Title';
import SkillBadge from './SkillBadge';

const Skills = () => {
    return (
        <SkillsStyled>
            <Title title={'Languages & Frameworks'} span={'Languages & Frameworks'} />
            <InnerLayout>
                <div className="skills">
                    <SkillBadge title={'JavaScript'} />
                    <SkillBadge title={'Cypress'} />
                    <SkillBadge title={'REST Assured'} />
                    <SkillBadge title={'Selenium'} />
                    <SkillBadge title={'Robot Framework'} />
                    <SkillBadge title={'Postman'} />
                    <SkillBadge title={'Mocha'} />
                    <SkillBadge title={'Chai'} />
                    <SkillBadge title={'Cucumber'} />
                    <SkillBadge title={'Jenkins'} />
                    <SkillBadge title={'Docker'} />
                    <SkillBadge title={'Django'} />
                    <SkillBadge title={'Report Portal'} />
                    <SkillBadge title={'MySQL'} />
                    <SkillBadge title={'Node.js'} />
                    <SkillBadge title={'Java'} />
                    <SkillBadge title={'Python'} />
                    <SkillBadge title={'React.js'} />
                    <SkillBadge title={'MongoDB'} />
                    <SkillBadge title={'JMeter'} />
                </div>
            </InnerLayout>
        </SkillsStyled>
    )
}

const SkillsStyled = styled.section`
    .skills {
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        grid-gap: 1rem;
        @media screen and (max-width: 900px) {
            grid-template-columns: repeat(3, 1fr);
        }
        @media screen and (max-width: 600px) {
            grid-template-columns: repeat(2, 1fr);
        }
    }
`;

export default Skills;