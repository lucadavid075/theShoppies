import React, { useState, useContext, useEffect } from "react";


 
const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState(" ");
  const [movies, setMovies] = useState([]);
  const [nominations, setNominations] = useState([]);
 
if(nominations === null){
  setNominations([])
}  


  useEffect(() => {
    const fetchMovies = async () => {
      setLoading(true);
     
      try {
        const response = await fetch(`http://www.omdbapi.com/?s=${searchTerm}&apikey=33bbde9d`);
        const data = await response.json();
        console.log(data)
        const [ movies ] = Object.entries(data);
        
        if (movies) 
        {
          const newMovies = movies[1].map((movie)=>
          {
            const { Title, imdbID, Poster, Plot, Year } = movie
            return {name:Title, id:imdbID, image:Poster, info:Plot, date: Year}
          })
          
          setMovies(newMovies);

        }
        else{
          setMovies([]);
        }
        setLoading(false)
        
      } 
      catch (error) {
        setLoading(false);
      }
    };
    fetchMovies();
  }, [searchTerm]);

  React.useEffect(()=>{
    const movieNominations = JSON.parse(localStorage.getItem('session'));
    setNominations(movieNominations)
  }, [])
 

  return (
    <AppContext.Provider
      value={{
        loading,
        searchTerm,
        movies,
        setSearchTerm,
        nominations,
        setNominations,
        }}
    >
      {children}
    </AppContext.Provider>
  );
};
// make sure use
export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
