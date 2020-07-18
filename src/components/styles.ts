import styled from 'styled-components';

export const Button = styled.button`
    height: 34px;
    background: #5AAC44;
    width: 100%;
    outline: none;
    border: 0;
    border-radius: 4px;
    color: #fff;
    transition: .25s;
    padding: .4rem;
    font-weight: 700;
    transition: .25s all;

    &:hover {
        cursor: pointer;
        opacity: .9;
    }
`;