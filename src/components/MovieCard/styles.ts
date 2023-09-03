import {styled} from "styled-components";

export const Container = styled.div`
    display: flex;
    justify-content: space-between;
    gap: 16px;
`;

export const Poster = styled.img`
    width: 171px;
    height: 243px;
`;

export const Content = styled.div`
    display: flex;
    flex-direction: column;
    gap: 8px;

    max-width: 423px;
`;

export const Title = styled.span`
    font-size: 20px;
    font-weight: bold;
`;

export const Description = styled.span`
    color: #FFFCF9;
`;