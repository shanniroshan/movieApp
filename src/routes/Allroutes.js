import React from 'react'
import { Routes, Route } from 'react-router-dom';
import { MovieList, MovieDetail, Search, PageNotFound } from "../pages";

export const Allroutes = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<MovieList api="movie/now_playing" />} />
        <Route path="movie/:id" element={<MovieDetail />} />
        <Route path="movie/popular" element={<MovieList api="movie/popular" />} />
        <Route path="movie/top" element={<MovieList api="movie/top_rated" />} />
        <Route path="movie/upcomming" element={<MovieList api="movie/upcoming" />} />
        <Route path="search" element={<Search api="search/movie"/>} />
        <Route path="*" element={<PageNotFound />} />

      </Routes>

    </>
  )
}









