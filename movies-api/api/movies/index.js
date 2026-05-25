import express from 'express';
import asyncHandler from 'express-async-handler';
import { getMovies } from '../tmdb-api.js';
//import authenticate from '../authenticate.js';

const router = express.Router();

router.get('/discover', asyncHandler(async (req, res) => {
    const discoverMovies = await getMovies();
    res.status(200).json(discoverMovies);
}));

router.get( '/:id', (req,res)=>{
    const {id}=req.params
    const movie = movieData.movies.find(movie => movie.id === id);
    if(!movie){
        return res.status   (404).json({status: 404, message: 'movie not found'})
    }
    return res.status(200).json(task);
}
);

export default router;