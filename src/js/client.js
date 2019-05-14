import React from "react";
import ReactDOM from "react-dom";
import {BrowserRouter as Router, Route} from "react-router-dom";

import Layout from "./pages/Layout";
import Featured from "./pages/Featured";
import Settings from "./pages/Setting";
import Archives from "./pages/Archives";

const app = document.getElementById('app');

ReactDOM.render(
    <Router>
        <Layout>
            <Route exact path="/" compornent={Featured}></Route>
            <Route path="/archives" compornent={Archives}></Route>
            <Route path="/settings" compornent={Settings}></Route>
        </Layout>
    </Router>,
app);