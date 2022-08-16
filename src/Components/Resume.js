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
                        "\u2022 UI Automation Testing, API testing.\n" +
                        "\u2022 Develop test cases from the Requirement document by utilizing gherkin syntax.\n" +
                        "\u2022 Analyze the requirements from Business requirement document. \n"+
                        "\u2022 Develop test cases from the Requirement document and prioritize.\n" +
                        "\u2022 Analyze issues, recommends software changes and detailed bug report.\n" +
                        "\u2022 Functional,Smoke and regression testing in Production and UAT.\n"+
                        "\u2022 Create and maintain test cases, test results throughout SDLC.\n" +
                        "\u2022 Contribute to sprint planning and daily stand-ups meeting.\n"+
                        "\u2022 Mentoring new QA members in the team.\n"}
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
