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

  const handleScroll = (e) => {
    const { scrollTop, clientHeight, scrollHeight } = e.currentTarget;
    if (scrollHeight - scrollTop === clientHeight) fetchNextPage();
  };

  if (error) return <div>Oh noooooooo something went wrong!</div>;

  return (
    <main
      className="relative h-screen overflow-y-scroll"
      onScroll={handleScroll}
    >
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
        {data && data.pages
          ? data.pages.map((page) =>
              page.results.map((movie) => (
                <Link key={movie.id} href={`/${movie.id}`}>
                  <div className="cursor-pointer duration-300 hover:opacity-80">
                    <Card
                      imgUrl={
                        movie.poster_path
                          ? IMAGE_BASE_URL + POSTER_SIZE + movie.poster_path
                          : "/no_image.jpg"
                      }
                      title={movie.original_title}
                    />
                  </div>
                </Link>
              ))
            )
          : null}
      </Grid>
      {isLoading || isFetching ? <Spinner /> : null}
    </main>
  );
};

export default MoviesPage;
