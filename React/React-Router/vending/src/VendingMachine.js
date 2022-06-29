import React from "react";
import { BrowserRouter, Route, NavLink, Link } from "react-router-dom";


import Honeybun from "./Honeybun";
import Coke from "./Coke";
import Doritos from "./Doritos";
import NavBar from "./Navbar";
import Home from "./Home";

const VendingMachine = () => {
    return (
        <main className="VendingMachine">
            <BrowserRouter>
                <NavBar />
                <Route exact path="/">
                    <Home />
                </Route>
                <Route exact path="/honeybun">
                    <Honeybun />
                    <Link to="/" className="Link">
                        Back to Vending Home
                    </Link>
                </Route>
                <Route exact path="/coke">
                    <Coke />
                    <Link to="/" className="Link">
                        Back To Vending Home
                    </Link>
                </Route>
                <Route exact path="/doritos">
                    <Doritos />
                    <Link to="/" className="Link">
                        Back to Vending Home
                    </Link>
                </Route>
            </BrowserRouter>
        </main>
    )
}

export default VendingMachine; 