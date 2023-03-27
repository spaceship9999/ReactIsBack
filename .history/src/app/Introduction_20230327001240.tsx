import { motion } from "framer-motion";

export default function Introduction() {
    return (
        <div className="relative">
            <hr className="bg-lighter-blue h-3 border-0"/>
            <div className="relative">
                <img src="/img/introduction/dots.png" className="absolute inset-y-0 h-full right-0 hidden lg:block w-[260px] max-w-[260px]"></img>
                <div className="container relative z-20">
                    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-5 py-20">
                        <a href="/" className="block bg-lighter-blue group">
                            <div className="aspect aspect-[312/278] relative overflow-hidden">
                                <img src="/img/introduction/Driving_Differentiation.png" className="w-full h-full object-cover object-center" />
                                <div className="absolute inset-0 bg-white/60 z-10 flex flex-col gap-y-6 items-center justify-center
                                 opacity-0 translate-y-full group-hover:translate-y-0 group-hover:opacity-100 duration-1000 ease-[cubic-bezier(0,.6,.18,.98)]">
                                    <img src="/img/cisco-partner-o.png" className="w-[150px] h-[150px]" />
                                    <motion.div
                                        whileHover={{ scale: 1.2, transition: { duration: 1, ease: [0, .6, .18, .98] } }}
                                        className="inline-block bg-light-green text-white t-14 rounded-full px-5 py-[10px] font-semibold tracking-tight">
                                        Read more <span className="font-normal ml-1">&gt;</span>
                                    </motion.div>
                                </div>
                            </div>
                            <div className="pt-4 pb-12 px-4">
                                <h3 className="uppercase text-white font-bold font-montserrat t-25">
                                    Driving Differentiation
                                </h3>
                            </div>
                        </a>
                        <a href="/" className="block bg-lighter-blue group">
                            <div className="aspect aspect-[312/278] relative overflow-hidden">
                                <img src="/img/introduction/Customer_Journey.png" className="w-full h-full object-cover object-center" />
                                <div className="absolute inset-0 bg-white/60 z-10 flex flex-col gap-y-6 items-center justify-center
                                 opacity-0 translate-y-full group-hover:translate-y-0 group-hover:opacity-100 duration-1000 ease-[cubic-bezier(0,.6,.18,.98)]">
                                    <img src="/img/cisco-partner-o.png" className="w-[150px] h-[150px]" />
                                    <motion.div
                                        whileHover={{ scale: 1.2, transition: { duration: 1, ease: [0, .6, .18, .98] } }}
                                        className="inline-block bg-light-green text-white t-14 rounded-full px-5 py-[10px] font-semibold tracking-tight">
                                        Read more <span className="font-normal ml-1">&gt;</span>
                                    </motion.div>
                                </div>
                            </div>
                            <div className="pt-4 pb-12 px-4">
                                <h3 className="uppercase text-white font-bold font-montserrat t-25">
                                    Customer journey eyewear
                                </h3>
                            </div>
                        </a>
                        <a href="/" className="block bg-lighter-blue group">
                            <div className="aspect aspect-[312/278] relative overflow-hidden">
                                <img src="/img/introduction/Distribution.png" className="w-full h-full object-cover object-center" />
                                <div className="absolute inset-0 bg-white/60 z-10 flex flex-col gap-y-6 items-center justify-center
                                 opacity-0 translate-y-full group-hover:translate-y-0 group-hover:opacity-100 duration-1000 ease-[cubic-bezier(0,.6,.18,.98)]">
                                    <img src="/img/cisco-partner-o.png" className="w-[150px] h-[150px]" />
                                    <motion.div
                                        whileHover={{ scale: 1.2, transition: { duration: 1, ease: [0, .6, .18, .98] } }}
                                        className="inline-block bg-light-green text-white t-14 rounded-full px-5 py-[10px] font-semibold tracking-tight">
                                        Read more <span className="font-normal ml-1">&gt;</span>
                                    </motion.div>
                                </div>
                            </div>
                            <div className="pt-4 pb-12 px-4">
                                <h3 className="uppercase text-white font-bold font-montserrat t-25">
                                    Distribution and fulfilment
                                </h3>
                            </div>
                        </a>
                        <a href="/" className="block bg-lighter-blue group">
                            <div className="aspect aspect-[312/278] relative overflow-hidden">
                                <img src="/img/introduction/Transforming_Retail.png" className="w-full h-full object-cover object-center" />
                                <div className="absolute inset-0 bg-white/60 z-10 flex flex-col gap-y-6 items-center justify-center
                                 opacity-0 translate-y-full group-hover:translate-y-0 group-hover:opacity-100 duration-1000 ease-[cubic-bezier(0,.6,.18,.98)]">
                                    <img src="/img/cisco-partner-o.png" className="w-[150px] h-[150px]" />
                                    <motion.div
                                        whileHover={{ scale: 1.2, transition: { duration: 1, ease: [0, .6, .18, .98] } }}
                                        className="inline-block bg-light-green text-white t-14 rounded-full px-5 py-[10px] font-semibold tracking-tight">
                                        Read more <span className="font-normal ml-1">&gt;</span>
                                    </motion.div>
                                </div>
                            </div>
                            <div className="pt-4 pb-12 px-4">
                                <h3 className="uppercase text-white font-bold font-montserrat t-25">
                                    Transforming retail estate
                                </h3>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
           
        </div>
    )
}