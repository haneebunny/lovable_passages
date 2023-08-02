import Link from "next/link";

export default function Navigation() {
  return (
    <nav className="p-3 flex flex-row justify-between ">
      <Link href="/">집</Link>
      <Link href="/books">책</Link>
      <Link href="/books/1004/passage/new">new</Link>
    </nav>
  );
}
