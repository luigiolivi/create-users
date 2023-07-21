import { styled } from "styled-components";

export const ContainerItems = styled.div`
    border-radius: 61px 61px 0px 0px;
    background: linear-gradient(135deg, rgba(255, 255, 255, 0.60) 0%, rgba(255, 255, 255, 0.60) 0.01%, rgba(255, 255, 255, 0.15) 100%);
    
    padding: 50px 36px;
    
    display: flex;
    flex-direction: column;

    height: 100%;

    ${props => props.isBlur && `
        backdrop-filter: blur(22.5px);
        min-height: calc(100vh - 170px);
    `}
`;
