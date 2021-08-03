import React from "react";
import { Link } from "react-router-dom";
import { HomeSec, Movie, MoviesCon } from "../components/styled-comps";
import { Loading } from "../components/Loading";
import { useGlobalContext } from "../context";

const Home = () => {
  const{loading,allmovies}=useGlobalContext();
  const moviesResult =allmovies.movies;
  let message= ''
  if(allmovies.length<2){
    message="there is no resault";
  }
  return (
    <HomeSec>
      <MoviesCon>
        {loading && <Loading/>}
        {message}
        {moviesResult &&
        moviesResult.map((movie)=>{
          // console.log(movie)
          const { id, title, genr, popularity,backdrop_path, poster_path, release_date, adult } = movie;
          return (
            <Link key={id} to={`/movie/${title}`}>
              <Movie>
                <div className="movie-img">
                  {backdrop_path ? <img src={`https://image.tmdb.org/t/p/w500/${backdrop_path}`} alt={title} />:
                  <img src={`https://image.tmdb.org/t/p/w500/${poster_path}`} alt={title} />}
                </div>
                <div className="movie-text">
                  <div className="movie-title"><h4>{title}</h4></div>
                  <div className="movie-age"><p>{adult? 'R_rated' : 'PG-13'}</p></div>
                </div>
              </Movie>
            </Link>
          );
        })
        }
         
        
      </MoviesCon>
    </HomeSec>
  );
};
export default Home;
