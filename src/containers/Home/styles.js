import styled from 'styled-components'
import { Link } from 'react-router-dom'

import Background from '../../assets/background1.png'


export const Container = styled.div`
    background: url(${Background});
    background-size: cover;

    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 40px;

    height: 100vh;
`;

export const Image = styled.img`
    margin-top: 30px;
`;

export const ContainerItems = styled.div`
    border-radius: 61px 61px 0px 0px;
    background: linear-gradient(135deg, rgba(255, 255, 255, 0.60) 0%, rgba(255, 255, 255, 0.60) 0.01%, rgba(255, 255, 255, 0.15) 100%);
    
    padding: 50px 36px;
    
    display: flex;
    flex-direction: column;

    height: 100%;
`;

export const H1 = styled.h1`
    color: white;

    font-size: 34px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;

    text-align: center;
    margin-bottom: 80px;
`;

export const InputLabel = styled.p`
    color: #EEE;

    font-size: 18px;
    font-style: normal;
    font-weight: 700;
    line-height: 22px;
    letter-spacing: -0.408px;

    margin-left: 25px;
`;

export const Input = styled.input`
    border-radius: 14px;
    background: rgba(255, 255, 255, 0.25);
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);

    width: 342px;
    height: 58px;

    border: none;
    outline: none;

    padding-left: 25px;
    margin-bottom: 34px;

    color: white;
    font-size: 20px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
`;

export const Button = styled(Link)`
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
`;
