import { motion } from "framer-motion";
import usePosts from "./hooks/usePosts";


export default function CaseStudy() {
    const posts = usePosts();
    return (
        <div className="bg-light-green py-24 mb-20">
            <div className="container">
                <h2 className="text-white t-48 font-montserrat font-bold pb-4 lg:pb-10 relative leading-none mb-8
                            after:absolute after:left-0 after:bottom-0 after:h-[4px] after:w-[120px] after:bg-white">
                    Case Study
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-9 gap-y-8 xl:gap-x-[72px] xl:gap-y-[60px] ">
                    {
                        posts?.map((post) =>
                        (
                            <div key={post?.id} className="flex flex-col justify-between bg-white font-rubik">
                                <div className="">
                                    <div className="aspect aspect-[4/3] ">
                                        <img className="w-full h-full object-cover object-center" src="https://picsum.photos/410/200" alt=""/>
                                    </div>
                                    <div className="px-8 pt-8">
                                        <h3 className="t-18 text-dark-blue font-medium pb-4 relative leading-[1.33]
                                        after:absolute after:bottom-0 after:left-0 after:w-[80px] after:h-[2px] after:bg-light-green">{post?.title}</h3>
                                        <div className="pt-4 t-14 leading-[1.2] text-dark-blue mb-6">
                                            {post?.body}
                                        </div>
                                    </div>
                                </div>
                                
                                <div className="px-8 p-8">
                                    <motion.a 
                                        whileHover={{ scale: 1.2, transition: { duration: 1, ease: [0, .6, .18, .98] }}}
                                        className="inline-block bg-light-green text-white t-14 rounded-full px-5 py-[10px] font-semibold tracking-tight" href={`/post/${post?.id}`}>
                                        Read more <span className="font-normal ml-1">&gt;</span>
                                    </motion.a>
                                </div>
                            </div>
                        )
                        )
                    }
                </div>
            </div>
        </div>
        
    )
}