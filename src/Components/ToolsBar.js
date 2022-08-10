import React from 'react'
import styled from 'styled-components';

const ToolsBar=({title,  text})=> {
    return (
        <ToolsBarStyled>
            <h6>{title}</h6>
            <div className="tools-bar">
                <p>{text}</p>
            </div>
        </ToolsBarStyled>
    )
}

const ToolsBarStyled = styled.div`
    .tools-bar{
        display: flex;
        align-items: center;
        p{
            padding-right: 1.1rem;
        }
    }
`;

export default ToolsBar;
