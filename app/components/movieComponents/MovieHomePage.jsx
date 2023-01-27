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
      {!query && data && data.pages ? (
        <HeroSection
          imgUrl={
            data.pages[0].results[0].backdrop_path
              ? IMAGE_BASE_URL +
                BACKDROP_SIZE +
                data.pages[0].results[0].backdrop_path
              : "/no_image.jpg"
          }
          title={data.pages[0].results[0].title}
          text={data.pages[0].results[0].overview}
        />
      ) : null}
      <Grid />
      <Card />
      <Spinner />
    </main>
  );
};

export default MoviesPage;
