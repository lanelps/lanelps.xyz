import React from "react";
import tw, { css } from "twin.macro";

import Layout from "../components/Layout";

const Home = () => {
  return (
    <Layout title="Home" page="home" url="/">
      <h1
        css={[
          tw`relative w-auto top-[calc(1vh)] font-main font-normal text-body text-black`,
          css``,
        ]}
      >
        Hello World!
      </h1>
    </Layout>
  );
};

export default Home;
