import React from "react";
import App from "next/app";
import Head from "next/head";

// Global
import "~/styles/global.scss";

class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;

    return (
      <>
        
          <Head>
            <title>NextJS Advanced Routing</title>
          </Head>
          <Component {...pageProps} />
  
      </>
    );
  }
}

export default MyApp;
