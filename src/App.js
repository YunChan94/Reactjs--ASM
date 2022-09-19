import React from "react";
import { Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// import Browse from "./pages/browse/Browse";
// import Search from "./pages/search/Search";
// Browser chi download code khi user su dung trang do
const Browse = React.lazy(() => import("./pages/browse/Browse"));
const Search = React.lazy(() => import("./pages/search/Search"));

function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<p className="centered">Loading...</p>}>
        <Routes>
          <Route path="/" element={<Browse />} />
          <Route path="/search" element={<Search />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
