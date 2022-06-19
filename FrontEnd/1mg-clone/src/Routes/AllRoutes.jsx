import React from "react";
import { Home } from "./Home";
import { Routes, Route } from "react-router-dom";
import { Categories } from "./Categories";
import { Products } from "./Products";
export const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/categories" element={<Categories />} />
      <Route path="/products" element={<Products />} />
    </Routes>
  );
};
