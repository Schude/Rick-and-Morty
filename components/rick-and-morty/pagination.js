import React from "react";
import Link from "next/Link";

export default function Pagination({ curr }) {
  const CurrentPage =parseInt(curr)
  const prevPage = CurrentPage-1
  const nextPage = CurrentPage+1
  return (
    <div>
      
          <Link href={`../pages/[pages]`} as={`../pages/${prevPage}`}>
            <a> Prev</a>
          </Link>
          <Link href={`../pages/[pages]`} as={`../pages/${nextPage}`}>
            <a> Next</a>
          </Link>
       
    </div>
  );
}
