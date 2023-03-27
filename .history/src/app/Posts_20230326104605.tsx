import usePosts from "./hooks/usePosts";

export default function Posts() {
    const posts = usePosts();
    return (
        <div className="bg-gradient-to-r from-[#148ca0] to-[#0f1c54] py-16">
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
                        {
                            posts?.map((post) =>
                            (
                                <div key={post?.id} className="flex flex-col justify-between p-8 bg-white font-rubik">
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
                                </div>
                            )
                            )
                        }
                    </div>
                    <div className="pt-14">

                    </div>
                </div>
                
            </div>
        </div>
    )
}