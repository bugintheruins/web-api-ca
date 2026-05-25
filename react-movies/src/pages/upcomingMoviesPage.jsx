import React from "react";
import { useQuery } from "@tanstack/react-query";
import PageTemplate from "../components/templateMovieListPage";
import { getUpcomingMovies } from "../api/tmdb-api";
import Spinner from "../components/spinner";
import AddToWatchListIcon from "../components/cardIcons/addToWatchlist";

const UpcomingMoviesPage = () => {
  const { data, error, isPending, isError } = useQuery({
  queryKey: ["upcoming"],
  queryFn: getUpcomingMovies,
});

  if (isPending) {
    return <Spinner />};

  if (isError) {
    return <h1>{error.message}</h1>};

  const movies = data;

  return (
    <PageTemplate
      title="Upcoming Movies"
      movies={data}
      action={(movie) => 
        {return <AddToWatchListIcon movie={movie} />;}}
    />
  );
};

export default UpcomingMoviesPage;