import React from 'react'
import styled from 'styled-components';

const SkillBadge = ({ title }) => {
    return (
        <SkillBadgeStyled>
            <span>{title}</span>
        </SkillBadgeStyled>
    )
}

const SkillBadgeStyled = styled.div`
    span {
        display: inline-block;
        padding: 0.5rem 1.2rem;
        border: 1px solid var(--border-color);
        border-radius: 4px;
        font-size: 0.95rem;
        font-weight: 600;
        letter-spacing: 1px;
        text-transform: uppercase;
        color: var(--font-color);
        transition: all 0.3s ease-in-out;
        width: 100%;
        text-align: center;

        &:hover {
            background-color: var(--primary-color-light);
            border-color: var(--primary-color);
            color: var(--white-color);
            cursor: default;
        }
    }
`;

export default SkillBadge;