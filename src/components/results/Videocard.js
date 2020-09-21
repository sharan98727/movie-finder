import React, { forwardRef } from 'react';
import "./videocard.css";
import TextTruncate from "react-text-truncate";
import { ThumbUpSharp } from '@material-ui/icons';


const base_url = "https://image.tmdb.org/t/p/original/";

const  Videocard = forwardRef(({movie},ref) => {
    // console.log(movie);
    return (
        <div ref={ref} className="videocard">
            <img src={`${base_url}${movie.backdrop_path || movie.poster_path}`}
             alt="movie poster"/>
             <TextTruncate 
               line={1}
               element="p"
               truncateText="..."
               text={movie.overview}
               />
             <h2>{movie.title||movie.original_name}</h2>
             <p className="videoCard__stats">
                 {movie.media_type && `${movie.media_type}*`}
                 {movie.release_date || movie.first_air_date}
                 <ThumbUpSharp/>{""}
                 {movie.vote_count}
             </p>
            
            
        </div>
    )
});

export default Videocard
