import React from "react";
import { useParams } from "react-router";
import { SingleCon, SingleSec, SingleMovie } from "../components/styled-comps";
import { Link } from "react-router-dom";
import { useGlobalContext } from "../context";

export const Single = () => {
  const{loading,allmovies}=useGlobalContext();
  
  const { single } = useParams();
  
  const filteredMovies = allmovies.movies.filter((movie) => single === movie.title);
  return (
    <>
      {filteredMovies.map((item) => {
        const { id, title, genr, popularity,backdrop_path, poster_path, release_date, overview, adult } = item;
        return (
          <SingleSec key={id} background={poster_path}>
            <SingleCon>
              <SingleMovie>
                <div className="single-img">
                {backdrop_path ? <img src={`https://image.tmdb.org/t/p/w500/${backdrop_path}`} alt={title} />:
                  <img src={`https://image.tmdb.org/t/p/w500/${poster_path}`} alt={title} />}
                </div>
                <div className="single-infos">
                  <h1 className="name">{title}</h1>
                  <p className="year">
                    <span>Release date :</span>
                    {release_date}
                  </p>
                  <p className="director">
                    <span>popularity :</span>
                    {popularity}
                  </p>
                  <p className="age">
                    <span>age :</span>
                    {adult ? "R-rated" :"PG-13"}
                  </p>
                  <p className="desc">{overview}</p>
                  <Link className="back" to="/">
                    go back
                  </Link>
                </div>
              </SingleMovie>
            </SingleCon>
          </SingleSec>
        );
      })}
    </>
  );
};
