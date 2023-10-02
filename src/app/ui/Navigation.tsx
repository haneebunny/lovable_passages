"use client";

import styled from "@emotion/styled";
import Link from "next/link";

export default function Navigation() {
  return (
    <nav className="p-3 flex flex-row justify-between ">
      <NavLink href="/">집</NavLink>
      <NavLink href="/writing">글</NavLink>
      <NavLink href="/books">책</NavLink>
      <NavLink href="/books/1004/passage/new">new</NavLink>
    </nav>
  );
}

const NavLink = styled.a`
  :hover {
    font-weight: bold;
    font-size: large;
  }

  transition: all 0.2s;
`;
