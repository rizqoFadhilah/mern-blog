import React from "react";
import { BlogItem, Button, Gap } from "../../componenets";
import "./home.scss";
import { useHistory } from "react-router-dom";

const Home = () => {
  const history = useHistory();
  return (
    <div className="home-wraper">
      <div className="create-wraper">
        <Button
          tittle="create blog"
          onClick={() => history.push("./create-blog")}
        />
      </div>
      <Gap height={20} />
      <div className="content-wraper">
        <BlogItem />
        <BlogItem />
        <BlogItem />
        <BlogItem />
      </div>
      <div className="pagination">
        <Button tittle="Previous" />
        <Gap width={20} />
        <Button tittle="Next" />
      </div>
      <Gap height={20} />
    </div>
  );
};

export default Home;
