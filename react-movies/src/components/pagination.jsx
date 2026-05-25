import Grid from "@mui/material/Grid";
import { color } from "@mui/system";
import React from "react";

const Pagination = ({ totalMovies, moviesPerPage, setCurrentPage }) => {
let pages = [] ;
for (let i =1 ; i<=  Math.ceil(totalMovies/ moviesPerPage) ; i++){
    pages.push(i);
}


  return (
    <Grid container>
        {pages.map((page,index) => (
            <button sx={{ m: 2, color: "rgb(202, 0, 0)" }} key={index} onClick={() => setCurrentPage(page)}>
                {page}
            </button>
        ))}
    </Grid>
  );
}
export default Pagination;
   