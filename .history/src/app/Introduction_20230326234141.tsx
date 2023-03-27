export default function Introduction() {
    return (
        <div>
            <hr className="bg-lighter-blue h-3 border-0"/>
            <div className="container">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mt-20">
                    <a href="/" className="bg-lighter-blue group">
                        <div className="aspect aspect-[312/278] relative overflow-hidden">
                            <img src="/img/introduction/Driving_Differentiation.png" className="w-full h-full object-cover object-center" />
                            <div className="absolute inset-0 bg-white/60 z-10 flex items-center justify-center
                             opacity-0 translate-y-full group-hover:translate-y-0 group-hover:opacity-1 duration-1000 ease-[cubic-bezier(0,.6,.18,.98)]">
                                <img src="/img/cisco-partner-o.png" className="w-[150px] h-[150px]"/>
                            </div>
                        </div>
                        <div className=" py-4 px-4">
                            <h3 className="uppercase text-white font-bold font-montserrat t-26">
                                DRIVING DIFFERENTIATION
                            </h3>
                        </div>
                    </a>
                </div>
            </div>
        </div>
    )
}