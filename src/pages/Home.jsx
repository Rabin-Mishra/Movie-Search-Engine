import MovieCard from "../components/MovieCard";
import { useState, useEffect } from "react"; //hook of react
import "../css/Home.css";
import { searchMovies, getPopularMovies } from "../services/api"; //importing the searchMovies function from the api.js file

function Home() {
  const [searchQuery, setSearchQuery] = useState("");
  //to avoid constantly fetching the movie  at every single time use the concept of useEffect and useState which rerenders the component
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  //the way is you write the useEffect function and write the function that runs when the array changes hence the format as useEffect(()=>{},[])
  useEffect(() => {
    const loadPopularMovies = async () => {
      try {
        const popularMovies = await getPopularMovies();
        setMovies(popularMovies);
      } catch (err) {
        console.log(err);
        setError("Failed to load movies...........");
      } finally {
        setLoading(false);
      }
    };
    loadPopularMovies();
  }, []);

  const handleSearch = async (e) => {
    e.preventDefault();
    //using a search api feature
    if (!searchQuery.trim()) return;
    if (loading) return;
    setLoading(true);
    try {
      const searchResults = await searchMovies(searchQuery);
      setMovies(searchResults);
      setError(null);
    } catch (err) {
      console.log(err);
      setError("Failed to search movies...........");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="home">
      <form action="" onSubmit={handleSearch} className="search-form">
        <input
          type="text"
          placeholder="Search For Movies ..."
          className="search-input"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <button type="submit" className="search-button">
          Search
        </button>
      </form>
      {error && <div className="error-message">{error}</div>}
      {/* here we will be performing some conditional rendering */}
      {loading ? (
        <div className="loading">Loading......</div>
      ) : (
        <div className="movies-grid">
          {movies.map((movie) => (
            <MovieCard movie={movie} key={movie.id} />
          ))}
        </div>
      )}
    </div>
  );
}
export default Home;
