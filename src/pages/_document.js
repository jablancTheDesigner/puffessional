import { Html, Head, Main, NextScript } from "next/document";

import React, { useState } from "react";
import Header from "../components/Header";
import Navigation from "../components/Navigation";

export default function Document() {
  return (
    <Html>
      <Head>
        <link
          href="https://fonts.googleapis.com/icon?family=Material+Icons"
          rel="stylesheet"
        />
      </Head>
      <body className="mal">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
