import usePosts from "./hooks/usePosts";

export default async function Posts() {
    const posts = await usePosts();
    return (
        <div className="bg-gradient-to-r from-[#148ca0] to-[#0f1c54] py-16">
            <div className="container">
                <h2 className="text-white t-48 font-montserrat font-bold pb-10 relative leading-none
                            after:absolute after:left-0 after:bottom-0 after:h-[4px] after:w-[120px] after:bg-white">
                    Latest posts
                </h2>
                <div className="mt-9 font-rubik text-white">
                    <div className="mb-3">
                        We solve all kinds of business problems.
                    </div>
                    <div className="font-medium">
                        Below are just a few we've done recently...
                    </div>
                </div>
                <div className="grid grid-cols-3 gap-x-9 gap-y-8">
                    {
                        posts?.map((post) => 
                            (
                                <div className="p-8 bg-white">

                                </div>
                            )
                        )
                    }
                </div>
            </div>
        </div>
    )
}