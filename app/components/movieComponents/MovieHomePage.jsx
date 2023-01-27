"use client";
import React, { useState } from "react";
import { useFetchMovies } from "../../../lib/fetchHooks";
import { IMAGE_BASE_URL, BACKDROP_SIZE, POSTER_SIZE } from "../../../config";
import Header from "./Header";
import HeroSection from "./Hero";
import Card from "./Card";
import Grid from "./Grid";
import Spinner from "./Spinner";

const MoviesPage = () => {
  const [query, setQuery] = useState("");
  const { data, fetchNextPage, isLoading, isFetching, error } =
    useFetchMovies(query);

  console.log(data);

  return (
    <main className="relative h-screen overflow-y-scroll">
      {" "}
      <Header setQuery={setQuery} />
      <HeroSection />
      <Grid />
      <Card />
      <Spinner />
    </main>
  );
};

export default MoviesPage;
