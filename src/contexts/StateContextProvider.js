import React, { createContext, useContext, useState } from 'react';

const StateContext = createContext();
const baseUrl = 'https://google-search1.p.rapidapi.com/google-search';

export const StateContextProvider = ({ children }) => {
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');

  const getResults = async (url) => {
    setLoading(true);

    const res = await fetch(`${baseUrl}${url}`, {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': 'const axios = require("axios");

const options = {
  method: 'GET',
  url: 'https://google-search1.p.rapidapi.com/google-search',
  params: {hl: 'en', q: 'Avengers+Endgame', gl: 'us'},
  headers: {
    'X-RapidAPI-Key': 'b74d3dd467msh986ed3e030ccf7cp144bd6jsn369069d8f21b',
    'X-RapidAPI-Host': 'google-search1.p.rapidapi.com'
  }
};

axios.request(options).then(function (response) {
	console.log(response.data);
}).catch(function (error) {
	console.error(error);
});',
        'X-RapidAPI-Host': 'google-search1.p.rapidapi.com',
      },
    });

    const data = await res.json();

    setResults(data);
    setLoading(false);
  };

  return (
    <StateContext.Provider value={{ getResults, results, searchTerm, setSearchTerm, loading }}>
      {children}
    </StateContext.Provider>
  );
};

export const useStateContext = () => useContext(StateContext);
