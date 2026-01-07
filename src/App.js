import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";

import Home from "./Pages/Home";
import Cart from "./Pages/Cart";
import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";
import Products from "./Components/Products";
import PopularProducts from "./Components/PopularProducts";
import NewArrival from "./Components/NewArrival";
import Header from "./Components/Header/Header";
import SearchResults from "./Pages/SearchResults";

import Login from "./Pages/Login";
import SignUp from "./Pages/SignUp";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Layout({ searchQuery, setSearchQuery }) {
  return (
    <>
      <Navbar>
        <Header
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
        />
      </Navbar>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/search"
          element={<SearchResults searchQuery={searchQuery} />}
        />
        <Route path="/new-arrivals" element={<NewArrival />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/products/:categoryId" element={<Products />} />
        <Route path="/popularproducts" element={<PopularProducts />} />
      </Routes>

      <Footer />
    </>
  );
}

function App() {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <>
      <ToastContainer position="top-right" autoClose={1500} hideProgressBar />

      <BrowserRouter>
        <Routes>
          {/* Auth Modals */}
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />

          {/* Main Layout */}
          <Route
            path="/*"
            element={
              <Layout
                searchQuery={searchQuery}
                setSearchQuery={setSearchQuery}
              />
            }
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
