import React, { useState } from "react";
import Link from "next/Link";

export default function Pagination({ curr }) {
 
  const pageNumbers = [];
  const dynamicPages = [];
  for (let i = 1; i < 35; i++) {
    pageNumbers.push(i);
  }
  for (let i = curr - 3; i <= curr + 3; i++) {
    if (i < 35 && i > 0) {
      dynamicPages.push(i);
    }
  }
  
  return (
    <div>
      <ul>
        {dynamicPages.map((elem) => (
            <Link
        href={`../pages/[pages]`}
        as={`../pages/${elem}`}
      >
        <a > {elem}</a>
      </Link>
        ))}
      </ul>
      
    </div>
  );
}
