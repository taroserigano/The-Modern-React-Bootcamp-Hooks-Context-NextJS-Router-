import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function SWMovies() {
    const [number, setNumber] = useState(1);
    const [movie, setMove] = useState("")

    /**
     * You would use useEffect to call some operation that you
     * only want to run when something specific updates
     */
    useEffect(() => {
        async function getData() {
            const response = await axios.get(`https://swapi.dev/api/films/${number}/`);
            setMove(response.data);
        };
        getData();

    // the array that is passed in means that if number is updated run useEffect, this stops us make load of requests to the API 
    }, [number]);


    return (
        <div>
            <h1>Pick a movie</h1>
            <h4>{movie.title}</h4>
            <p>{movie.opening_crawl}</p>
            <select value={number} onChange={e => setNumber(e.target.value)}>
                <option value='1'>1</option>
                <option value='2'>2</option>
                <option value='3'>3</option>
                <option value='4'>4</option>
                <option value='5'>5</option>
                <option value='6'>6</option>
                <option value='7'>7</option>
            </select>
        </div>
    )
}
