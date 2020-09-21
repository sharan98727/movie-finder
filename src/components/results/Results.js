
import React, { useEffect, useState } from 'react';
import "./results.css";
import Videocard from './Videocard';
import axios from "../api/axios";
import FlipMove from "react-flip-move";

// import request from '../api/request';

function Results({selectedOption}) {

    const [movies,setMovies]=useState([]);

    useEffect(()=>{
        async function fetchData(){
          const requests = await axios.get(selectedOption);
           console.log(requests)
          setMovies(requests.data.results);
          return requests;
        }

        fetchData()
    },[selectedOption])

    return (
        <div className="results">
            <FlipMove>
        {movies.map((movie)=> (
             <Videocard key={movie.id} movie={movie}/>
        ))}  
        </FlipMove>  
            
        </div>
    );
}

export default Results
