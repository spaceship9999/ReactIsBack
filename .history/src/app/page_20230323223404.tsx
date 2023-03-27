import Link from "next/link";
import Header from "./Header";

export default function Home() {
  return (
    <main>
      <Header>
        <Link href="/"/>
      </Header>
    </main>
  )
}
