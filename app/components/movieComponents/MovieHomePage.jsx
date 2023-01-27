"use client";
import React, { useState } from "react";
import { useFetchMovies } from "../../../lib/fetchHooks";
import { IMAGE_BASE_URL, BACKDROP_SIZE, POSTER_SIZE } from "../../../config";
import Header from "./Header";
import HeroSection from "./Hero";
import Card from "./Card";
import Grid from "./Grid";
import Spinner from "./Spinner";
import Link from "next/link";

const MoviesPage = () => {
  const [query, setQuery] = useState("");
  const { data, fetchNextPage, isLoading, isFetching, error } =
    useFetchMovies(query);

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
      <Grid
        className="m-auto max-w-7xl p-4"
        title={
          query
            ? `Search Results: ${data?.pages[0].total_results}`
            : "Popular Movies"
        }
      >
        {/* //Nested loop */}

        {data && data.pages
          ? data.pages.map((page) =>
              page.results.map((movie) => (
                <div
                  key={movie.id}
                  className="cursor-pointer duration-300 hover:text-red-900 hover:opacity-70"
                >
                  {movie.original_title}
                </div>
              ))
            )
          : null}
      </Grid>
      <Card />
      <Spinner />
    </main>
  );
};

export default MoviesPage;
