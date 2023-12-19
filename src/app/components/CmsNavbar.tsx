import Link from "next/link";
import { BackArrowIcons } from "./Icons";

function CmsNavbar() {
  return (
    <div className="flex justify-between items-center py-1 px-5">
      <Link href="/">
        <BackArrowIcons />
      </Link>
      <Link className="font-bold text-xl" href="/">
        <span>Frans</span>
        <span className="text-purple-500">Blog</span>
      </Link>
    </div>
  );
}

export default CmsNavbar;
