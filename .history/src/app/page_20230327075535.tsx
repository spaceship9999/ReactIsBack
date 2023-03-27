'use client'

import Link from "next/link";
import Header from "./Header";
import Award from "./Award";
import Banner from "./Banner";
import Posts from "./Posts";
import SingleColumnTextMedia from "./SingleColumnTextMedia";
import CaseStudy from "./CaseStudy";
import Introduction from "./Introduction";
import CallToAction from "./CallToAction";

export default function Home() {
  return (
    <main>
      <Award/>
      <Banner 
        heading="NSC operates in 180 countries across multiple time zones, currencies and languages"
        image="/img/Cisco_Banner.png" content="orem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged." position={""}/>
      <Posts/>
      <SingleColumnTextMedia heading="Making our Retail customers&#8217; digital ambitions a reality with
        CISCO&#8217;s Meraki Dashboard" 
        link={{ link: '/', title: '&#10084; <span class="font-montserrat">CTA</span> &#10084;'}}
        image="/img/NSC_Cisco_Infographic.png"
        content="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."/>
      <CaseStudy></CaseStudy>
      <Introduction/>
      <CallToAction/>
    </main>
  )
}
