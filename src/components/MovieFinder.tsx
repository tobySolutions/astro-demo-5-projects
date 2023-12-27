import React from "react";
import { block } from "million/react";

interface MovieProps {
  title: string;
  release_date: string;
  Rated: string;
  overview: string;
}

const MovieFinder = ({ fetchMovies }) => {
  const [query, setQuery] = React.useState<string>("");

  return (
    <div>
      <div>
        <input
          value={query}
          placeholder="Name a movie & I'll do the rest "
          style={{ width: "40%", padding: "10px" }}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button>Search</button>
      </div>
      <div style={{ paddingTop: "15px" }}>
        {fetchMovies && (
          <>
            <h3>Title: {fetchMovies.results[0].title}</h3>
            <p>Released: {fetchMovies.results[0].release_date} </p>
            <p>Plot: {fetchMovies.results[0].overview} </p>
          </>
        )}
      </div>
    </div>
  );
};

export default MovieFinder;
