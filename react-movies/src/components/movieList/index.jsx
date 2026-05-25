import React, { useState } from "react";
import Movie from "../movieCard/";
import Grid from "@mui/material/Grid";
import Pagination from "../pagination";

const MovieList = (props) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [moviesPerPage] = useState(5);
  let movieCards = props.movies.map((m) => (
    <Grid key={m.id} size={{xs: 12, sm: 6, md: 4, lg: 3, xl: 2}} sx={{padding: "20px"}}>
                <Movie key={m.id} movie={m} action={props.action} />


    </Grid>
  ));

  const lastMovieIndex = currentPage * moviesPerPage; 
  const firstMovieIndex = lastMovieIndex - moviesPerPage;
  const currentMovies = movieCards.slice(firstMovieIndex, lastMovieIndex);


  return (
    <Grid container sx={{ display: "flex", justifyContent: "center" }}>
  <Grid container >
    {currentMovies}
      </Grid>
      <Grid container>
    <Pagination 
    totalMovies={movieCards.length} 
    moviesPerPage={moviesPerPage} 
    setCurrentPage={setCurrentPage} />
  </Grid>
  </Grid>);
};

export default MovieList;
