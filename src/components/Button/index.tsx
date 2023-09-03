import React, { ButtonHTMLAttributes } from "react";

import ShuffleSvg from "../../assets/shuffle.svg";

import { Container, Icon, Title } from "./styles";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    title: string;
}

export function Button({ title, ...rest }: ButtonProps) {
    return (
        <Container {...rest}>
            <Icon src={ShuffleSvg} alt="shuffle" />
            <Title>{title}</Title>
        </Container>
    );
}
