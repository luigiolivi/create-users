import styled from 'styled-components'
import Background from '../../assets/background2.png'

export const Container = styled.div`
    background: url(${Background});
    background-size: cover;

    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 40px;

    height: 100%;
    min-height: 100vh;
`;

export const Image = styled.img`
    margin-top: 30px;
`;

export const User = styled.li`
    display: flex;
    justify-content: space-around;
    align-items: center;

    background: rgba(255, 255, 255, 0.25);
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
    border-radius: 14px;
    margin-top: 28px;

    width: 342px;
    height: 58px;

    border: none;
    outline: none;

    p {
        font-style: normal;
        font-weight: normal;
        font-size: 24px;
        line-height: 28px;

        color: white;
    }

    button {
        padding-left: 0;
        background: none;
        border: none;
        cursor: pointer;
    }
`