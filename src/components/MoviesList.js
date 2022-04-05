import React, { useEffect, useRef, useState } from "react";
import { getCurrentUser } from "./CurrentUser";
import './FormStyle.css'
const MovieList = (props) => {
  const inc = () => {
    // console.log(props.movies)
    props.setPageNumber((pageNumber) => pageNumber + 1);
  };

  const [array, setNewArray] = useState([...new Set(props.movies)]);

  useEffect(() => {
    if (props.search === "") setNewArray([]);
    else setNewArray([...new Set(props.movies)]);
  }, [props.movies, props.search]);

  const myref = useRef();
  useEffect(() => {
    if (props.loading) {
      const observer = new IntersectionObserver(
        (entries) => {
          // console.log(entries[0])
          if (entries[0].isIntersecting) {
            inc();
          }
        },
        { threshold: 0.5 }
      );
      observer.observe(myref.current);
    }
  }, [props.loading]);

  const addCurrentFav = (movie) => {
    let data = JSON.parse(localStorage.getItem(getCurrentUser().phoneNumber));
    data = [...data, movie];
    localStorage.setItem(getCurrentUser().phoneNumber, JSON.stringify(data));
  };

  return (
    <>
      {array && (
        <div className="text-center">
          <div>
            {" "}
            {props.count ? (
              <h4>
                {" "}
                Total displayed Results {array.length}
                <br /> Scroll down to get {props.count - array.length} more
                results
              </h4>
            ) : (
              <h4>Search for a movie</h4>
            )}{" "}
            {"   "}
            <br />{" "}
          </div>

          {array.map((movie, index) => (
             <div className="container-fluid col-lg-8 col-md-6 ">
             <div className="text-center"  key={index}>
              <img src={movie.Poster} alt={movie.Title} className='img-responsive'/>
              <div className="card-body  mx-auto col-lg-6 col-sm-3 col-md-4 ">
                <h5 className="card-title mx-auto ">{movie.Title}</h5>
                <p className="card-text">Year - {movie.Year}</p>
                <p className="card-text">Type - {movie.Type}</p>
                <button
                  type="button"
                  onClick={() => addCurrentFav(movie)}
                  className="btn btn-primary"
                >
                  Add To Favourites
                </button>
              </div>
            </div>
            </div>
          ))}

          <button
            ref={myref}
            onClick={inc}
            type="button"
            className="btn btn-light"
          >
            Loading
          </button>
        </div>
      )}
    </>
  );
};

export default MovieList;
