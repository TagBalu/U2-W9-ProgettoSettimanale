import React, { useEffect, useState } from "react";
import "../assets/MyMovieGallery.css";
const API_URL = "http://www.omdbapi.com/?apikey=c2dca32b";
const MovieGallery = ({ title, query }) => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await fetch(`${API_URL}&s=${query}`);
        const data = await response.json();
        if (data.Search) {
          setMovies(data.Search);
        }
      } catch (error) {
        console.error("Errore durante il fetch dei dati:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchMovies();
  }, [query]);

  return (
    <div className="mb-5 movie-gallery">
      <h5 className="text-light">{title}</h5>
      {loading ? (
        <p className="text-light">Loading...</p>
      ) : (
        <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-4 row-cols-xl-6 mb-4">
          {movies.slice(0, 6).map((movie) => (
            <div key={movie.imdbID} className="col mb-2 text-center px-1">
              <img
                src={movie.Poster}
                alt={movie.Title}
                className="img-fluid"
                style={{
                  objectFit: "cover",
                  height: "225px",
                  width: "100%"
                }}
              />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default MovieGallery;
