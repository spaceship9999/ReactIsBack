import { motion } from "framer-motion";

export default function Introduction() {
    return (
        <div>
            <hr className="bg-lighter-blue h-3 border-0"/>
            <div className="container">
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-5 mt-20">
                    <a href="/" className="block bg-lighter-blue group">
                        <div className="aspect aspect-[312/278] relative overflow-hidden">
                            <img src="/img/introduction/Driving_Differentiation.png" className="w-full h-full object-cover object-center" />
                            <div className="absolute inset-0 bg-white/60 z-10 flex flex-col gap-y-6 items-center justify-center
                             opacity-0 translate-y-full group-hover:translate-y-0 group-hover:opacity-100 duration-1000 ease-[cubic-bezier(0,.6,.18,.98)]">
                                <img src="/img/cisco-partner-o.png" className="w-[150px] h-[150px]"/>
                                <motion.div
                                    whileHover={{ scale: 1.2, transition: { duration: 1, ease: [0, .6, .18, .98] } }}
                                    className="inline-block bg-light-green text-white t-14 rounded-full px-5 py-[10px] font-semibold tracking-tight">
                                    Read more <span className="font-normal ml-1">&gt;</span>
                                </motion.div>
                            </div>
                        </div>
                        <div className=" py-4 px-4">
                            <h3 className="uppercase text-white font-bold font-montserrat t-25">
                                DRIVING DIFFERENTIATION
                            </h3>
                        </div>
                    </a>
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
                        <div className=" py-4 px-4">
                            <h3 className="uppercase text-white font-bold font-montserrat t-25">
                                Customer journey eyewear
                            </h3>
                        </div>
                    </a>
                </div>
            </div>
        </div>
    )
}