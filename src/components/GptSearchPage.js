import React from "react";
import GptSearchBar from "./GptSearchBar";
import GptSearchSuggestions from "./GptSearchSuggestions";
import { BACKGROUND_URL } from "../utils/constants";

const GptSearchPage = () => {
  return (
    <>
      <div className="fixed -z-10">
        <img
          className="h-screen md:h-full object-cover"
          src={BACKGROUND_URL}
          alt="background"
        />
      </div>
      <div className="">
        <GptSearchBar />
        <GptSearchSuggestions />
      </div>
    </>
  );
};

export default GptSearchPage;
