import "./App.scss";
import { Route, Routes } from "react-router-dom";
import Home from "./home";
import RestApi from "./api/Axios";
import productClient from "./clients/product.client";
import { useEffect, useState } from "react";
import AuthRoute from "./utils/AuthRoute";
import useProducts from "./hooks/useProducts";

function App() {
  const { products, details, getDetails } = useProducts([]);
  return (
    <div className="App">
      {products &&
        products.map((item: any) => (
          <div key={item.id} onClick={() => getDetails(item)}>
            <h1>{item.title}</h1>
            <p>{item.completed}</p>
          </div>
        ))}
      {details ? (
        <div>
          <h1>{details.title}</h1>
          <p>{details.completed}</p>
          <p>{details.id}</p>
        </div>
      ) : null}
      <Routes>
        <Route path="/" element={<AuthRoute />}>
          <Route path="home" element={<Home />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
