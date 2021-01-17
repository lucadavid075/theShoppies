import React from 'react'
import Heading from '../components/Heading'
import MovieList from '../components/Movielist';
import RemoveNomination from "../components/RemoveNomination";
import { useGlobalContext } from '../context';


const Nominations = () => {
  const { nominations, setNominations } = useGlobalContext();
  const saveToLocalStorage =
    (items) => {
      localStorage.setItem("session", JSON.stringify(items));
    };

  const removeNominatedMovie = (movie) => {
      const newNomination = nominations.filter(
      (favourite) => favourite.id !== movie.id
    );
    setNominations(newNomination);
    saveToLocalStorage(newNomination);
  };
    return (
      <main>
        <Heading name="My Nominees" />
        <div>
          <MovieList
            movies={nominations}
            handleNominationClick={removeNominatedMovie}
            nominateComponent={RemoveNomination}
          />
        </div>
      </main>
    );
}

export default Nominations 