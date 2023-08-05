
import { useEffect } from 'react'
import { useState } from 'react';

export const   useFetch = (api, queryTerm="") => {
    const [data, setData] = useState([]);
    const url =`https://api.themoviedb.org/3/${api}?api_key=31b5b228dca13d11ddb4ca1ddbdf60fa&query=${queryTerm}`
    
     

    useEffect(() => {
        async function fetchMovies() {
          const response = await fetch(url)
          const json = await response.json();
          setData(json.results);
        }
        fetchMovies();
      }, [url])

  return {data}
}
