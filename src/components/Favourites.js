import React, { useEffect, useState } from "react";

import { getCurrentUser } from "./CurrentUser";
import NavBar from "./NavBar";


const Favourites = () => {
  const [getFavourites, setGetFavourites] = useState(
    JSON.parse(localStorage.getItem(getCurrentUser().phoneNumber))
  );
  //console.log(getFavourites)
  const removeFav = (movie) => {
    const currentFav = JSON.parse(
      localStorage.getItem(getCurrentUser().phoneNumber)
    );
    const newFav = currentFav.filter((fav) => fav.imdbID !== movie.imdbID);
    setGetFavourites(newFav);
  };

  useEffect(() => {
    localStorage.setItem(
      getCurrentUser().phoneNumber,
      JSON.stringify(getFavourites)
    );
    console.log(getFavourites)
  }, [getFavourites]);

  return (
    <>
      <NavBar />
      <div>
        {getFavourites.length>0  
          ?
         getFavourites.map((movie, index) => (
          <div className="container-fluid col-lg-8 col-md-6  ">
            <div className="text-center" alt={movie.Title} key={index}>
              <img src={movie.Poster} alt={movie.Title} className='img-responsive' />
              <div className="card-body  mx-auto col-lg-6 col-sm-3 col-md-4 ">
                <h5 className="card-title mx-auto ">{movie.Title}</h5>
                <p className="card-text">Year - {movie.Year}</p>
                <p className="card-text">Type - {movie.Type}</p>

                <button
                  type="button"
                  className="btn btn-danger"
                  onClick={() => removeFav(movie)} >
                  Remove
                </button>
              </div>
            </div>
            </div>
            
          )) :
          <div className="container-fluid col-lg-4 col-sm-4">
          <div className="text-center card mx-auto mt-5">
             <h4>No favourites</h4>
          </div>
          </div> }</div>
        
     
    </>
  );
};

export default Favourites;
