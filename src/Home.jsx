import React from "react";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Trusted from "./components/Trusted";
import FeatureProduct from "./components/FeatureProduct";
import Test from "./components/Test";

const Home = () => {
  const data = {
    name: "Online Store",
  };
  return (
    <>
      <Hero myData={data} />
      <FeatureProduct />
      <Services />
      <Trusted />
    </>
  );
};

export default Home;
