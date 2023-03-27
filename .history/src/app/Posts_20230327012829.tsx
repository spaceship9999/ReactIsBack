import { AnimatePresence, motion, stagger, useInView } from "framer-motion";
import usePosts from "./hooks/usePosts";
import { useRef } from "react";

export default function Posts() {
    const posts = usePosts();
    const ref = useRef(null);
    const isInView = useInView(ref)
    return (
        <div ref={ref} className="bg-gradient-to-r from-[#148ca0] to-[#0f1c54] py-16">
            <div className="container">
                <div className="lg:px-10">
                    <h2 className="text-white t-48 font-montserrat font-bold pb-4 lg:pb-10 relative leading-none
                                after:absolute after:left-0 after:bottom-0 after:h-[4px] after:w-[120px] after:bg-white">
                        Latest posts
                    </h2>
                    <div className="mt-9 mb-12 font-rubik text-white">
                        <div className="mb-3">
                            We solve all kinds of business problems.
                        </div>
                        <div className="font-medium">
                            Below are just a few we&apos;ve done recently...
                        </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-9 gap-y-8 xl:gap-x-[72px] xl:gap-y-[60px] ">
                        <AnimatePresence>
                            {
                                posts?.map((post) =>
                                (
                                    <motion.div 
                                    initial={{ scale: 0.8, y: '200px'}}
                                    animate={{ scale: 1, y: '0'}}
                                        transition={{ ease: [0, .6, .18, .98]}}
                                    key={post?.id} className="flex flex-col justify-between p-8 bg-white font-rubik">
                                        <div>
                                            <h3 className="t-18 text-dark-blue font-medium pb-4 relative leading-[1.33]
                                            after:absolute after:bottom-0 after:left-0 after:w-[80px] after:h-[2px] after:bg-light-green">{post?.title}</h3>
                                            <div className="pt-4 t-14 leading-[1.2] text-dark-blue mb-6">
                                                {post?.body}
                                            </div>
                                        </div>
                                        <div>
                                            <a className="inline-block bg-light-green text-white t-14 rounded-full px-5 py-[10px] font-semibold tracking-tight" href={`/post/${post?.id}`}>
                                                Read more <span className="font-normal ml-1">&gt;</span>
                                            </a>
                                        </div>
                                    </motion.div>
                                )
                                )
                            }
                        </AnimatePresence>
                    </div>
                    <div className="pt-14 flex flex-col lg:flex-row gap-y-4 font-rubik items-center justify-between">
                        <div className="flex gap-1">
                            <button className="rounded-full flex justify-center items-center bg-white text-dark-blue w-9 h-9 font-bold">1</button>
                            <button className="rounded-full flex justify-center items-center bg-white text-grey w-9 h-9 font-bold">2</button>
                            <button className="rounded-full flex justify-center items-center bg-white text-grey w-9 h-9 font-bold">3</button>
                            <button className="rounded-full flex justify-center items-center bg-white text-grey w-9 h-9 font-bold text-sm">&gt;</button>
                            <button className="rounded-full flex justify-center items-center bg-white text-grey w-9 h-9 font-bold text-sm">&gt;&gt;</button>
                        </div>
                        <div className="font-bold text-white">
                            Page 1 of 18
                        </div>
                    </div>

                </div>

            </div>
        </div>
    )
}