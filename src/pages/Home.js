import React from "react";
import AddNomination from "../components/AddNomination";
import Heading from "../components/Heading";
import MovieList from "../components/Movielist";
import SearchForm from "../components/Searchform";
import AlertComponent from "../components/Alert"
import { useGlobalContext } from "../context";

const Home = () => {

  const {
    movies,
    nominations,
    setNominations
  } = useGlobalContext();
   
  const saveToLocalStorage =
    (items) => {
      localStorage.setItem("session", JSON.stringify(items));
    }

  const addNominatedMovie = (movie) =>{
    const newNomination = [...nominations, movie]
    setNominations(newNomination);
    saveToLocalStorage(newNomination)
  }

  return (
    <main>
      {nominations.length === 5 && <AlertComponent/>}
      <SearchForm />
       { movies.length < 1 ? <h2 className="section-title">  </h2>:<Heading name="Movies" /> }
      <MovieList
        movies={movies}
        handleNominationClick={addNominatedMovie}
        nominateComponent={AddNomination}
      />
    </main>
  );
};

export default Home;
