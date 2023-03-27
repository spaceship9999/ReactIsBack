import Link from "next/link";
import Header from "./Header";
import Award from "./Award";
import Banner from "./Banner";

export default function Home() {
  return (
    <main>
      <Header></Header>
      <Award/>
      <Banner title="NSC operates" image=""/>
    </main>
  )
}
