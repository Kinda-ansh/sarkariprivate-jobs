// App.js
import React from "react";
import Navbar from "../src/Components/Navbar/navbar";
import Footer from "../src/Components/Navbar/footer";
import ScrollToTop from "./Resuable/ScrollToTop";
import AllRoutes from "./Routes/allRoutes";
import { BrowserRouter as Router } from "react-router-dom";

const App = () => {
    return (
        <Router>
            <div className=" w-[98%] sm:w-[90%] m-auto">
                <nav className="fixed-navbar">
                    <Navbar />
                </nav>{" "}
                <ScrollToTop />
                <main className="main">
                    <AllRoutes />
                </main>
                <footer>
                    {" "}
                    <Footer />
                </footer>{" "}
            </div>{" "}
        </Router>
    );
};

export default App;
