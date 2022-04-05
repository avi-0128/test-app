import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getMovies } from "../Redux/Features/moviesSlice";
import MovieList from "./MoviesList";
import NavBar from "./NavBar";
import { getCurrentUser } from "./CurrentUser";
import LogIn from "./LogIn";

const MoviesHome = () => {
  const [search, setSearch] = useState("");
  const [pageNumber, setPageNumber] = useState(1);
  const [loading, setLoading] = useState(false);
  const movieState = useSelector((store) => {
    return store["movies"]["movies"][0];
  });

  const count = useSelector((store) => {
    return store["movies"]["movies"][1];
  });

  const dispatch = useDispatch();

  useEffect(() => {
    const fetchMovies = async ([search, pageNumber]) => {
      dispatch(getMovies([search, pageNumber]));
      setLoading(true);
    };
    fetchMovies([search, pageNumber]);
  }, [dispatch, search, pageNumber]);

  const [movies, setMovies] = useState(movieState);
  useEffect(() => {
    if (search === "") {
      setMovies([]);
      setPageNumber(1);
    } else if (movieState) setMovies(movies.concat(movieState));
  }, [movieState, pageNumber ]);

  const [isLoggedIn, setIsLoggedIn] = useState("true");
  useEffect(() => {
    getCurrentUser() ? setIsLoggedIn("true") : setIsLoggedIn("false");
  }, [getCurrentUser()]);
  return (
    <>
      {isLoggedIn === "true" ? (
        <div>
          <NavBar setSearch={setSearch} setIsLoggedIn={setIsLoggedIn} />
          <MovieList
            movies={movies}
            count={count}
            search={search}
            pageNumber={pageNumber}
            setPageNumber={setPageNumber}
            loading={loading}
          />
        </div>
      ) : (
        <LogIn />
      )}
    </>
  );
};

export default MoviesHome;
