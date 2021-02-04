import React from "react"
import Layout from "../components/layout";

export default function Home() {
  return (
      <Layout>
        <h1>Page header</h1>
        <img src="https://source.unsplash.com/random/400x200" alt="" />
        <p>
          What do I like to do? Lots of course but definitely enjoy building
          websites.
        </p>
      </Layout>
  );
}
