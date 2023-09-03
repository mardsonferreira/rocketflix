import { Container, Poster, Content, Title, Description } from "./styles";

import { Movie } from './types';

interface MovieProps {
    movie: Movie;
}

export function MovieCard ({ movie } : MovieProps) {
  return (
    <Container>
        <Poster src={movie.image_url} alt="poster"/>

        <Content>
            <Title>
                {movie.title}
            </Title>

            <Description>
                {movie.overview}
            </Description>
        </Content>

    </Container>
  );
}