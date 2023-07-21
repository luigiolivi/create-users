import styled from 'styled-components'

export const Button = styled.button`
    border-radius: 14px;
    border: none;
    background: rgba(0, 0, 0, 0.80);
    margin-top: 130px;

    width: 342px;
    height: 74px;

    font-style: normal;
    font-weight: bold;
    font-size: 17px;
    line-height: 28px;

    color: white;

    cursor: pointer;

    display: flex;
    align-items: center;
    justify-content: center;
    gap: 15px;

    &:hover { opacity: 0.8; }
    &:active { opacity: 0.6; }

    ${props => props.isBack && `
        background: transparent;
        border: 1px solid #FFF;
    `}
`;