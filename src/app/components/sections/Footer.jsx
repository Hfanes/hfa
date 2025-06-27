import React from "react";

export default function Footer() {
  const date = new Date();
  const year = date.getFullYear();
  return (
    <section className="sm:px-10 px-5 mt-12 mb-4 text-center mx-auto">
      <div className="">
        Copyright © {year}{" "}
        <span className="text-accentYellow font-bold">hfa</span> | All rights
        reserved.
      </div>
    </section>
  );
}
