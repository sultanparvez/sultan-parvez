import React from 'react';
import styled from 'styled-components';
import {InnerLayout} from '../styles/Layouts';
import Title from '../Components/Title';
import SmallTitle from '../Components/SmallTitle';
import BusinessCenterIcon from '@material-ui/icons/BusinessCenter';
import SchoolIcon from '@material-ui/icons/School';
import ResumeItem from '../Components/ResumeItem';

function Resume() {
    const briefcase = <BusinessCenterIcon />
    const school = <SchoolIcon />
    return (
        <ResumeStyled>
            <Title title={'Background'} span={'Background'} />
            <InnerLayout>
                <div className="small-title">
                    <SmallTitle icon={briefcase} title={'Working Experience'} />
                </div>
                <div className="resume-content">
                    <ResumeItem 
                        year={'February 2021  - Present'}
                        title={'Software Quality Assurance Engineering'}
                        subTitle={'Dynamic Solution Innovators Ltd.'}
                        link={'http://dsinnovators.com/'}
                        text={
                            "\u2022 Developing Automation Scripts And implementing them On the CI/CD Pipeline.\n" +
                            "\u2022 UI Automation Testing, API Automation Testing.\n" +
                            "\u2022 Documenting The Automation Process.\n" +
                            "\u2022 Develop Test Cases From The Requirement Document By Utilizing Gherkin Syntax.\n" +
                            "\u2022 Analyze The Requirements From The Business Requirement Document.\n" + 
                            "\u2022 Develop Test Cases From The Requirement Document And Prioritize.\n" +
                            "\u2022 Creating Versatile Data Sets For Edge Case Testing.\n" +
                            "\u2022 Analyze Issues, Recommends Software Changes, And Detailed Bug Reports.\n" +
                            "\u2022 Functional, Smoke, And Regression Testing In Production And UAT.\n" +
                            "\u2022 Create And Maintain Test Cases and test Results Throughout SDLC.\n" +
                            "\u2022 Contribute To Sprint Planning And Daily Stand-ups Meeting.\n" +
                            "\u2022 Mentoring new QA Members In The Team.\n" }
                    />

                </div>
                <div className="small-title u-small-title-margin">
                    <SmallTitle icon={school} title={'Educational Qualifications'} />
                </div>
                <div className="resume-content">
                    <ResumeItem 
                        year={'Janurary 2016 - October 2020'}
                        title={'B.Sc. in Computer Science & Engineering'}
                        link ={'https://www.bracu.ac.bd/'}
                        subTitle={'BRAC University'}
                        text={"\u2022  CGPA: 3.37 out of 4.00."}
                    />
                    <ResumeItem 
                        year={'June 2013 - August 2015'}
                        title={'Higher Secondary School Certificate '}
                        link={"https://imperialcollege.edu.bd/"}
                        subTitle={'Dhaka Imperial College'}
                        text={"\u2022 GPA: 5.00 out of 5.00.\n\u2022 Award of Merit: Gold Medal."}
                    />

                </div>
            </InnerLayout>
        </ResumeStyled>
    )
}

const ResumeStyled = styled.section`
    .small-title{
        padding-bottom: 3rem;
    }
    .u-small-title-margin{
        margin-top: 4rem;
    }

    .resume-content{
        border-left: 2px solid var(--border-color);
    }
`;
export default Resume
