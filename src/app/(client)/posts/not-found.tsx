import Header from "@/app/components/Header";
import Link from "next/link";

function NotFound() {
  return (
    <div>
      <Header title="404 - Page Not Found" />
      <div>
        <Link href="/">Return home</Link>
      </div>
    </div>
  );
}

export default NotFound;
