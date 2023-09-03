import { useState } from "react";

import ShuffleSvg from "../assets/shuffle.svg";

import { Container, Title, Shuffle, Subtitle } from "./styles";

import { Button } from "../components/Button";
import { MovieCard } from "../components/MovieCard";

import { api } from "../services/api";

import { Movie } from "../components/MovieCard/types";

export function Home() {
    const [loading, setLoading] = useState(false);
    const [movie, setMovie] = useState({} as Movie);

    function getRandomID() {
        const min = 1;
        const max = 10000;
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    async function getMovieSuggestion() {
        setLoading(true);
        const movieID = getRandomID();
        try {
            const { data } = await api.get(
                `${movieID}?${process.env.REACT_APP_API_KEY}&${process.env.REACT_APP_LANGUAGE}`
            );

            setMovie({
                id: data.id,
                overview: data.overview,
                title: data.title,
                image_url:`${process.env.REACT_APP_IMG_URL}/${data.poster_path}`,
            });
        } catch (err) {
            console.log(err);
        } finally {
            setLoading(false);
        }
    }

    return (
        <Container>
            <Shuffle src={ShuffleSvg} alt="shuffle" />

            <Title>Não sabe o que assistir?</Title>

            {movie.id && <MovieCard movie={movie} />}

            <Button
                title="Encontrar filme"
                disabled={loading}
                onClick={() => getMovieSuggestion()}
            />

            <Subtitle>
                <span>
                    Clique em "Encontrar filme" que traremos
                </span>

                <span>
                    informações de algum filme para você assistir hoje.
                </span>
            </Subtitle>
        </Container>
    );
}
