import React from "react";
import { useQuery } from "@tanstack/react-query";
import PageTemplate from "../components/templateMovieListPage";
import { getPopularMovies } from "../api/tmdb-api";
import Spinner from "../components/spinner";
import AddToFavouritesIcon from '../components/cardIcons/addToFavourites'

const TopRatedMoviesPage = () => {
    const { data, error, isPending, isError } = useQuery({
        queryKey: ['top-rated-movies'],
        queryFn: getPopularMovies,
    }); 

    if (isPending) {
        return <Spinner />;
    }

    if (isError) {
        return <h1>{error.message}</h1>;
    }
const movies = data;
    return (
        <PageTemplate
            title="Top Rated Movies"
            movies={data}
            action={(movie) => {
            return <AddToFavouritesIcon movie={movie} />
        }}
        />
    );  
};

export default TopRatedMoviesPage;

