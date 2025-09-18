import React from 'react';
import styled from 'styled-components';
import { InnerLayout } from '../styles/Layouts';
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
                        year={'February 2021 - August 2025'}
                        title={'Dynamic Solution Innovators Ltd.'}
                        subTitle={'Software Quality Assurance Engineering'}
                        link={'http://dsinnovators.com/'}
                        text={
                            "⚡ Automation Engineer:\n" +
                            "• Developing automation scripts and implementing them on the CI/CD pipeline.\n" +
                            "• UI automation testing and API automation testing.\n" +
                            "• Documenting the automation process.\n\n" +

                            "⚡ QA Coach:\n" +
                            "• Mentoring and training: Guide and mentor team members across the company in automation and QA practices, helping them adopt industry-standard tools, frameworks, and methodologies.\n" +
                            "• Driving quality culture: Promote a mindset of high-quality standards, encouraging teams to embed testing and automation into their development process while ensuring best practices are followed.\n" +
                            "• Process improvement & support: Provide hands-on support with test design, automation strategies, and reporting, while continuously improving QA processes to increase efficiency and reliability.\n\n" +

                            "⚡ QA Engineer:\n" +
                            "• Develop test cases from the requirement document by utilizing Gherkin syntax.\n" +
                            "• Analyze the requirements from the business requirement document.\n" +
                            "• Develop and prioritize test cases from the requirement document.\n" +
                            "• Create versatile data sets for edge case testing.\n" +
                            "• Analyze issues, recommend software changes, and prepare detailed bug reports.\n" +
                            "• Perform functional, smoke, and regression testing in production and UAT.\n" +
                            "• Create and maintain test cases and test results throughout the SDLC.\n" +
                            "• Contribute to sprint planning and daily stand-ups meetings.\n"
                        }
                    />

                </div>
                <div className="small-title u-small-title-margin">
                    <SmallTitle icon={school} title={'Educational Qualifications'} />
                </div>
                <div className="resume-content">
                      <ResumeItem
                        year={'September 2025 - Present'}
                        title={'M.Sc. in Quantum Information Science'}
                        link={'https://www.ku.dk/'}
                        subTitle={'University of Copenhagen'}
                    />
                    <ResumeItem
                        year={'Janurary 2016 - October 2020'}
                        title={'B.Sc. in Computer Science & Engineering'}
                        link={'https://www.bracu.ac.bd/'}
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
