export default function Introduction() {
    return (
        <div>
            <hr className="bg-lighter-blue h-3 border-0"/>
            <div className="container">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mt-20">
                    <div className="bg-lighter-blue">
                        <div className="aspect aspect-[312/278] relative">
                            <img src="/img/introduction/Driving_Differentiation.png" className="w-full h-full object-cover object-center" />
                            <div className="absolute inset-0 bg-white/60 z-10">

                            </div>
                        </div>
                        <div className=" py-4 px-4">
                            <h3 className="uppercase text-white font-bold font-montserrat t-26">
                                DRIVING DIFFERENTIATION
                            </h3>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}