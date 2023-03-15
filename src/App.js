import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Footer from "./components/footer/Footer";
import Navbar from "./components/navbar/Navbar";
import ScrollToTop from "./components/Scrolltotop";
import Home from "./pages/Homepage/Home";
import Moviedetails from "./pages/Moviedetails";
import Nowplayingpage from "./pages/Moviespage/Nowplayingpage";
import Popularpage from "./pages/Moviespage/Popularpage";
import Topratedpage from "./pages/Moviespage/Topratedpage";
import Upcomingpage from "./pages/Moviespage/Upcomingpage";
import SearchPage from "./pages/SearchPage";
import Tvshowspage from "./pages/Tvshowspage";

function App() {
  return (
    <div className="App">
      <Router>
        <ScrollToTop />
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/popular" element={<Popularpage />} />
          <Route path="/top_rated" element={<Topratedpage />} />
          <Route path="/now_playing" element={<Nowplayingpage />} />
          <Route path="/upcoming" element={<Upcomingpage />} />
          <Route path="/movie-details/:id" element={<Moviedetails />} />
          <Route path="/tvshows" element={<Tvshowspage />} />
          <Route path="/search" element={<SearchPage />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}
export default App;
