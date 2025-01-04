//used to provide global state for movies
import { createContext, useState, useContext, useEffect } from "react";

const MovieContext = createContext();
export const useMovieContext = () => useContext(MovieContext);
//we are going to wrap our entire content to movie provider so that we can access the movie context in any component so that any of our components can access the movie context

//children is a reserved prop when we write a component and children is anything that is inside the component that we rendered
export const MovieProvider = ({ children }) => {
  const [favorites, setFavorites] = useState([]);
  // use of the concept of local storage that allows us to store the values directly in the browser

  useEffect(() => {
    const storedFavs = localStorage.getItem("favorites");
    if (storedFavs) {
      setFavorites(JSON.parse(storedFavs));
    }
  }, []);
  //if any time the favorites array changes then we are going to store the favorites array in the local storage
  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }, [favorites]); //dependency array called favorites

  //3 operations to be performed on the favorites array
  /* 1. add operations
    2. Remove Operation
    3.To check whether its added in the favorites*/
  const addToFavorites = (movie) => {
    //take the favorites and add a new movie inside of an array
    setFavorites((prev) => [...prev, movie]);
  };

  const removeFromFavorites = (movieId) => {
    setFavorites((prev) => prev.filter((movie) => movie.id !== movieId));
  };

  const isFavorite = (movieId) => {
    return favorites.some((movie) => movie.id === movieId);
  };

  const value = {
    favorites,
    addToFavorites,
    removeFromFavorites,
    isFavorite,
  };

  return (
    <MovieContext.Provider value={value}>{children}</MovieContext.Provider>
  );
};
