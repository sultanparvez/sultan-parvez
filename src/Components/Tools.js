import React from 'react'
import styled from 'styled-components';
import {InnerLayout} from '../styles/Layouts';
import Title from '../Components/Title';
import ToolsBar from './ToolsBar';

const Tools=()=> {
    return (
        <ToolsStyled>

            
                <Title title={'Tools'} span={'Tools'} />
                <InnerLayout>
                    <div className="skills">
                        <ToolsBar 
                            title={'Jira'}
                        
                        />
                         <ToolsBar
                            title={'Microsft Azure'}
                        
                        />
                         <ToolsBar
                            title={'Miro'}
                        />
                         <ToolsBar
                            title={'QA Complete'}
                        />
                    
                
                    </div>
                </InnerLayout>
        </ToolsStyled>
    )
}

const ToolsStyled = styled.section`
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

export default  Tools;
