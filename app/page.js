"use client";
import { asyncGetTrendingMovies } from "@/store/actions/trendingActions";
import { removeerrors, updatePage } from "@/store/reducers/trendingReducer";
import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Link from "next/link";
import Image from "next/image";
import { toast } from "react-toastify";

const page = () => {
  const dispatch = useDispatch();
  const { trendingmovies, page, errors } = useSelector(
    (state) => state.trendingReducer
  );
  console.log(errors);

  // console.log(data);

  if (errors.length > 0) {
    errors.map((e, i) => {
      toast.error(e);
    });
    dispatch(removeerrors());
  }

  useEffect(() => {
    dispatch(asyncGetTrendingMovies());
  }, [page]);

  return (
    <div className="main">
      {/* <header className="text-center"><h1>Homepage</h1></header> */}

      <div className="movies">
        {trendingmovies &&
          trendingmovies.map((dets) => {
            return (
              <div key={dets.id} className="allimages">
                <div key={dets.id} className="Single-Image">
                  <img
                    src={`https://image.tmdb.org/t/p/w500${dets.poster_path} `}
                    alt=""
                  />
                </div>
                <div className="info">
                  <Link href={`/details/${dets.id}`}>{dets.title}</Link>
                  <h3>
                    <Image src="/star.png" alt="me" width="64" height="64" />
                    {dets.vote_average.toFixed(1)} | {dets.adult ? "18+" : "All Age"}{" "}
                  </h3>

                 
                </div>
              </div>
            );
          })}
      </div>

      {trendingmovies >= 0 ? (
        ""
      ) : (
        <div className=" my-5 text-center paginate">
          <button onClick={() => dispatch(updatePage(-1))}>Previous</button>
          <span className="h1">{page}</span>
          <button onClick={() => dispatch(updatePage(1))}>Next</button>
        </div>
      )}
    </div>
  );
};

export default page;
