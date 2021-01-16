import React from "react";
import Link from "next/Link";

export default function Pagination({ curr, next }) {
  const CurrentPage = parseInt(curr);
  const prevPage = CurrentPage - 1;
  const nextPage = CurrentPage + 1;
  return (
    <div>
      <Link href={`../pages/[page]`} as={`../pages/${prevPage}`}>
        <a> Prev</a>
      </Link>
      <Link href={`../pages/[page]`} as={`../pages/${nextPage}`}>
        <a> Next</a>
      </Link>
    </div>
  );
}
