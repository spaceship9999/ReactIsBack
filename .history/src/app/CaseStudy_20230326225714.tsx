import usePosts from "./hooks/usePosts";


export default function CaseStudy() {
    const posts = usePosts();
    return (
        <div className="bg-light-blue py-24">
            <div className="container">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-9 gap-y-8 xl:gap-x-[72px] xl:gap-y-[60px] ">
                    {
                        posts?.map((post) =>
                        (
                            <div key={post?.id} className="flex flex-col justify-between p-8 bg-white font-rubik">
                                <div className="">
                                    <img className="aspect aspect-video" src="https://picsum.photos/410/200"/>
                                    <div className="px-8">
                                        <h3 className="t-18 text-dark-blue font-medium pb-4 relative leading-[1.33]
                                        after:absolute after:bottom-0 after:left-0 after:w-[80px] after:h-[2px] after:bg-light-green">{post?.title}</h3>
                                        <div className="pt-4 t-14 leading-[1.2] text-dark-blue mb-6">
                                            {post?.body}
                                        </div>
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
            </div>
        </div>
        
    )
}