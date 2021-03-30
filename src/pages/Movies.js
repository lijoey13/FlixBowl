import React, {useState} from 'react';
import SearchIcon from '@material-ui/icons/Search';
import "./Movies.css";
import { ResultCard } from "../pages/ResultCard";
import {Watchlist}  from '../components/Watchlist';


export default function Movies() {

    const [query, setQuery] = useState("");
    const [results, setResults] = useState([]);
    const onChange = e => {
        e.preventDefault();
        setQuery(e.target.value);

        fetch(`https://api.themoviedb.org/3/search/multi?api_key=a03d6e087c03a49dc18522ddd29392a5&language=en-US&page=1&include_adult=false&query=${e.target.value}`)
            .then(res => res.json())
            .then((data) => {
                if(!data.errors) {
                    setResults(data.results);
                } else {
                    setResults([]);
                }
            });
    };


    return (
        <>
        <div className="movies__wrapper">
            <div className="search__bar">
                <SearchIcon fontSize="large"/>    
                <input placeholder="Search titles, actors, genres..."
                type="text"
                value={query}
                onChange={onChange} />
            </div>

            {results.length > 0 && (
                <u1 className="results">
                    {results.map(multi => (
                        <li key={multi.id}>
                            <ResultCard multi={multi}/>
                        </li>
                    ))}
                </u1>
            )}
        </div>

    <div className="watchlist__wrapper">
        <Watchlist/>                 
    </div>
        
        </>
    )  
}
