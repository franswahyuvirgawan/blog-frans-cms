import Link from "next/link";

function Navbar() {
  return (
    <div className="mx-auto max-w-5xl px-5">
      <div className="flex justify-between items-center h-16 w-full">
        <Link className="font-bold text-xl" href="/">
          <span>Frans</span>
          <span className="text-purple-500">Blog</span>
        </Link>
        <div>Home</div>
      </div>
    </div>
  );
}

export default Navbar;
