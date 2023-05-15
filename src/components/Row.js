import axios from "../api/axios";
import React, { useCallback, useEffect, useState } from "react";
import "./Row.css";

const Row = ({ title, id, fetchUrl }) => {
  const [movies, setMovies] = useState([]);

  const fetchMovieData = useCallback(async () => {
    const response = await axios.get(fetchUrl);
    setMovies(response.data.results);
  }, [fetchUrl]);

  useEffect(() => {
    fetchMovieData();
  }, [fetchMovieData]);

  //useCallback : 컴포넌트가 렌더링되면 함수도 새로 렌더링 된다. 함수는 굳이 다시 생성될 필요가 없기 때문에 usecallback 사용
  //함수를 메모이제이션 해주는 것 usecallback(()=>{},[여기가 바뀔때만 새로 생성하여라 ])

  return (
    <div>
      <h2>{title}</h2>
      <div className="slider">
        <div className="slider__arrow-left">
          <span
            className="arrow"
            onClick={() => {
              document.getElementById(id).scrollLeft -= window.innerWidth - 80;
            }}
          >
            {"<"}
          </span>
        </div>
        <div className="row__posters" id={id}>
          {movies.map((movie) => (
            <img
              key={movie.id}
              className="row__poster"
              src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`}
              alt={movie.name}
              // onClick={() => handleClick(movie)}
            />
          ))}
        </div>
        <div className="slider__arrow-right">
          <span
            className="arrow"
            onClick={() => {
              document.getElementById(id).scrollLeft += window.innerWidth - 80;
            }}
          >
            {">"}
          </span>
        </div>
      </div>
    </div>
  );
};

export default Row;
