import React from 'react';
import styled from 'styled-components';
import {InnerLayout} from '../styles/Layouts';
import Title from '../Components/Title';
import SmallTitle from '../Components/SmallTitle';
import LibraryBooksIcon from '@material-ui/icons/LibraryBooks';
import ResumeItem from '../Components/ResumeItem';

const Publication=() =>{
    const publication = <LibraryBooksIcon/>

    return (
        <ResumeStyled>
            <Title title={'Achievement'} span={'Achievement'} />
            <InnerLayout>
                <div className="small-title">
                    <SmallTitle icon={publication} title={'Publication'} />
                </div>
                <div className="resume-content">
                    <ResumeItem
                        year={''}
                        title={'Reinforcement Learning Applied to Finance'}
                        subTitle={''}
                        link={''}
                        text={"Not Published"}
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
export default Publication
