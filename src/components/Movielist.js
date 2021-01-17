import React from "react";
import Loading from "./Loading";
import { useGlobalContext } from "../context";

const MovieList = (props) => {
  const {movies, loading} = useGlobalContext();

  const NominateComponent = props.nominateComponent
  
  if(loading){
    return <Loading/>
  }
  if(movies.length < 1){
    return (<h2 className="section-title">
      
    </h2>
    )
  }
  return (
    <section className="section">
      <div className="cocktails-center">
        {props.movies.map((movie) => {
          const {id, name, image, date}=movie
          return (
            <article className="cocktail" key={id}>
              <div className="img-container">
                <img
                  src={
                    image !== "N/A"
                      ? image
                      : "https://bitsofco.de/content/images/2018/12/broken-1.png"
                  }
                  alt={name}
                />
              </div>
              <div className="cocktail-footer">
                <h3>{name}</h3>
                <p>{date}</p>
                <div className="nav-links">
                  
                    <div onClick={() => props.handleNominationClick(movie)}>
                      <NominateComponent />
                    </div>
                  
                </div>
              </div>
            </article>
          );
        })
        }
      </div>
    </section>
  );
};

export default MovieList;
