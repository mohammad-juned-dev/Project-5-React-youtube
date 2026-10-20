import React from "react";
import Sidebar from "../../components/sidebar/Sidebar";
import Feed from "../../components/feed/Feed";

const Home = ({ sidebar }) => {
  return (
    <div className="flex w-full min-w-0 ">
      <Sidebar sidebar={sidebar} />
      <div className="min-w-0 flex-1  pt-3 pl-3">
        <Feed />
      </div>
    </div>
  );
};

export default Home;
