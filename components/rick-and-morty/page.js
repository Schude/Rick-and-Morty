import React from "react";
import Link from "next/Link";
export default function Pagination ({next,to,as}) {
    
  return (
    <div>
      <Link
        href={to}
        as={as}
      >
        <a> {next}. sayfa </a>
      </Link>
    </div>
  );
}
