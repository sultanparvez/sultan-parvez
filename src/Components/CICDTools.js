import React from 'react'
import styled from 'styled-components';
import {InnerLayout} from '../styles/Layouts';
import Title from '../Components/Title';
import ToolsBar from './ToolsBar';

const CICDTools=()=> {
    return (
        <ToolsStyled>

            
                <Title title={'CI/CD Tools'} span={'CI/CD Tools'} />
                <InnerLayout>
                    <div className="skills">

                    <ToolsBar
                            title={'Github Actions'}
                        />

                        <ToolsBar 
                            title={'Docker'}
                        
                        />
                         <ToolsBar
                            title={'Jenkins'}
                        
                        />
                         <ToolsBar
                            title={'Circle Ci'}
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

export default  CICDTools;
