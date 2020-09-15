import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Footer, Header } from "../../componenets";
import CreateBlog from "../CreateBlog";
import DetailBlog from "../DetailBlog";
import Home from "../Home";
import "./MainApp.scss";

const MainApp = () => {
  return (
    <div className="main-wraper">
      <div>
        <Header />
      </div>
      <div className="content-wraper">
        <Router>
          <Switch>
            <Route path="/create-blog">
              <CreateBlog />
            </Route>
            <Route path="/detail-blog">
              <DetailBlog />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </Router>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default MainApp;
