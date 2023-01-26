"use client";
import React, { useState } from "react";
import { useFetchMovies } from "../../../lib/fetchHooks";
import Header from "../../components/movieComponents/Header";
import HeroSection from "../../components/movieComponents/Hero";
import Card from "../../components/movieComponents/Card";
import Grid from "../../components/movieComponents/Grid";
import Spinner from "../../components/movieComponents/Spinner";

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
