import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Button = styled(Link)`
    padding: ${({ big }) => ( big ? '16px 40px' : "14px 24px")};
    background: ${({ primary }) => ( primary ? 'transparent' : "#FFF")};
    color: ${({ primary }) => ( primary ? '#fff' : '#000d1a')};
    font-size: ${({ big }) => ( big ? '20px' : '14px')};
    display: flex;
    justify-content: center;
    align-items: center;
    transition: 0.3s;
    white-space: none;
    outline: none;
    text-decoration: none;
    min-width: 100px;
    max-width: 200px;
    cursor: pointer;

    &:hover {
        transition: translateY(-2px);
    }
`;