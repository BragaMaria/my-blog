import React from "react";
import { Route, Routes } from "react-router-dom";
import PageBlog from "../pages/pageBlog/PageBlog";
import PagePost from "../pages/pagePost/PagePost";

const MainRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<PageBlog />} />
      <Route path="/post/:id" element={<PagePost />} />
    </Routes>
  );
};

export default MainRouter;
