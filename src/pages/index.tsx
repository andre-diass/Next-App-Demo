import Link from "next/link";
import MainFooter from "@/components/footer/MainFooter";

export default function Home() {
  return (
    <div>
      <h1> hello world</h1>
      <Link href="/posts">Posts</Link>
      <MainFooter></MainFooter>
    </div>
  );
}
