export default function Footer() {
    return (
        <footer className="bg-dark-blue pt-[78px] pb-[60px]">
            <div className="container font-rubik">
                <div className="flex t-18 xl:gap-x-20">
                    <div className="lg:w-[210px] text-white">
                        <Logo className="w-[113px] mb-14"/>
                        <address className="not-italic  leading-[1.5] mb-4">
                            NSC Global Limited<br/>
                            3rd Floor, West Building<br />
                            1 London Bridge London<br />
                            SE1 9BG
                        </address>
                        <a className="block" href="tel:+442078086300">+44 20 7808 6300</a>
                        <a className="block" href="mailto:enquiries@nscglobal.com">enquiries@nscglobal.com</a>
                    </div>
                    <div className="flex-auto flex justify-evenly">
                        <div>
                            <h4 className="font-montserrat text-[#26ab99] font-semibold mb-7 tracking-wider">Who we are</h4>
                            <ul className="text-white font-rubik t-14 space-y-1">
                                <li>
                                    <a href="/">Who we are</a>
                                </li>
                                <li>
                                    <a href="/">Our People</a>
                                </li>
                                <li>
                                    <a href="/">Our Firm</a>
                                </li>
                                <li>
                                    <a href="/">Our Story</a>
                                </li>
                                <li>
                                    <a href="/">Our Values</a>
                                </li>
                                <li>
                                    <a href="/">Charities</a>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="font-montserrat text-[#26ab99] font-semibold mb-7 tracking-wider">What we do</h4>
                            <ul className="text-white font-rubik t-14 space-y-1">
                                <li>
                                    <a href="/">What we do</a>
                                </li>
                                <li>
                                    <a href="/">Supplying technology</a>
                                </li>
                                <li>
                                    <a href="/">Managing infrastructure</a>
                                </li>
                                <li>
                                    <a href="/">Managing people</a>
                                </li>
                                <li>
                                    <a href="/">Transforming business</a>
                                </li>
                                <li>
                                    <a href="/">Supporting operations</a>
                                </li>
                                <li>
                                    <a href="/">Planning for the future</a>
                                </li>
                            </ul>
                        </div>
                    </div>    
                </div>
                
            </div>
        </footer>
    )
}

const Logo = (props: { className: string }) => {
    const { className } = props;
    return (
        <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 283.4 156" preserveAspectRatio="xMinYMid meet">
            <path id="nsc_global_logo" d="M67,107.8a10.074,10.074,0,0,1-10,9.9c-5.9.2-11.2-4.5-11.2-9.9V71.6c0-7.4-4.1-11.5-12.4-11.5-6.3,0-12.2.6-12.2,4.2v43.5c0,5.4-4.4,9.9-10.9,9.9-4.9,0-10.3-4.4-10.3-9.9V54.2c0-3.6,1-5.3,3.5-7C8,44,18.6,39.3,34,39.3c21.6,0,33,11.2,33,31.2Zm48.8-37.6L106,68c-6.4-1.4-7.3-3.2-7.3-5,0-3,3.1-4.7,8.6-4.7a31.5,31.5,0,0,1,10.9,2.5,19.538,19.538,0,0,0,7.6,2,8.7,8.7,0,0,0,6.7-3.1,10.468,10.468,0,0,0,2.5-7.6,9.067,9.067,0,0,0-3.5-6.6c-4.9-4-13.9-6.5-23.5-6.5-18,0-29.7,9.6-29.7,24.4,0,11.1,7.4,18.9,21.3,22.5,3.8,1,4.8,1.2,6.8,1.6.9.2,1.9.4,3.5.8,6.2,1.5,7.1,3.5,7.1,5.3,0,4.6-6.5,5.1-9.3,5.1a31.582,31.582,0,0,1-15.9-4.4,12.9,12.9,0,0,0-6.2-2A9.431,9.431,0,0,0,78,96.2c-3,3.9-2.1,10,1.9,13.3,4.6,3.8,13,8.3,27.4,8.3,18.2,0,30.4-10.2,30.4-25.4-.1-11.4-7.2-18.7-21.9-22.2Zm95.9,19.2c-2.2-2.9-6.3-4.2-10-4-4.7.2-7.3,1.7-9,4.9-2.7,4.7-6.5,7.3-12.2,7.3-7.8,0-12.9-4.9-13.7-12.9a95.4,95.4,0,0,1,0-13.1c.8-7.7,5.8-12.1,13.7-12.1a13.278,13.278,0,0,1,11.2,6.1c2.7,3.9,5.7,5.1,8.8,5.2,3.7.2,8-.7,10.6-3.9,1.4-1.7,1.7-4.3,1-7C209.8,51,199,39.2,179.9,39.2c-19,0-33.1,12.1-34.2,29.5a152.151,152.151,0,0,0,0,19.1c1.5,17.5,15.9,30.3,34.2,30.3,19.1,0,29.9-10.6,33-21.3.8-3.3.1-5.7-1.2-7.4Zm60,12.3c0-14.8,11.7-17.8,11.7-23.7s-11.7-8.9-11.7-23.7V15.9A15.939,15.939,0,0,0,255.8,0H231c-6.1,0-11,4-11,10,0,6.3,5.1,10.3,11.1,10.3h14.6a4.739,4.739,0,0,1,4.8,4.8V54.3c0,18.9,9.7,20.5,9.7,23.7s-9.7,4.9-9.7,23.7v29.2a4.739,4.739,0,0,1-4.8,4.8H231.1c-6,0-11.1,3.9-11.1,10.3,0,6,4.9,10,11.1,10h24.8a15.938,15.938,0,0,0,15.9-15.9V101.7Z" fill="currentColor"></path>
        </svg>
    )
}