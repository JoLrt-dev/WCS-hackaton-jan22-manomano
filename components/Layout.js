import React from "react";
import Header from "./Header";

export default function Layout({ children, title }) {
  return (
    <div className="bg-primary">
      <Header />
      <h1 className="text-2xl mb-4 mt-4 uppercase text-grey-300 text-center">
        {title}
      </h1>
      <main className="pb-16">{children}</main>
    </div>
  );
}
