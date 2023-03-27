'use client'

import Link from "next/link";
import Header from "./Header";
import Award from "./Award";
import Banner from "./Banner";
import Posts from "./Posts";
import SingleColumnTextMedia from "./SingleColumnTextMedia";

export default function Home() {
  return (
    <main>
      <Header></Header>
      <Award/>
      <Banner 
        heading="NSC operates in 180 countries across multiple time zones, currencies and languages"
        image="/img/Cisco_Banner.png" content="orem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged." position={""}/>
      <Posts/>
      <SingleColumnTextMedia heading="Making our Retail customers' digital ambitions a realitv with
        CISCO's Meraki Dashboard" content="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.">

      </SingleColumnTextMedia>
    </main>
  )
}
