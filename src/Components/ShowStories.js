import React from "react";
import Story from "./Story";
import useDataFetcher from "../Hooks/dataFetcher";
import Loader from "./Loader";

// const ShowStories = (props) => {
//   const { type } = props.match.params;
//   const { isLoading, stories } = useDataFetcher(type);
const ShowStories = ({ type }) => {
  const { isLoading, stories } = useDataFetcher(type ? type : "top");

  return (
    <>
      <Loader show={isLoading}>Loading...</Loader>
      <>
        {stories.map(({ data: story }) => (
          <Story key={story.id} story={story} />
        ))}
      </>
    </>
  );
};

export default ShowStories;
