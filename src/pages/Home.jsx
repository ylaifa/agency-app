import React from "react";
import { FormattedMessage } from "react-intl";

const Home = () => {
  return (
    <>
      <h1>
        <FormattedMessage id="home.title" />
      </h1>
      <p>
        <FormattedMessage id="home.text" />
      </p>
    </>
  );
};
export default Home;
