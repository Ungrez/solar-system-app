import { Routes, Route } from "react-router";
import React, { useEffect, useState } from "react";
import Explore from "./Explore";
const Content = () => {
  return (
    <Routes>
      <Route path="/explore" element={<Explore />}></Route>
    </Routes>
  );
};

export default Content;
