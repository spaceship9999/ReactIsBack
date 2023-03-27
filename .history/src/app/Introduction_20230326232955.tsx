export default function Introduction() {
    return (
        <div>
            <hr className="bg-light-blue h-3 border-0"/>
            <div className="container">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mt-20">
                    <div className="bg-light-blue">
                        <div className="aspect aspect-[312/278]">
                            <img src="/img/introduction/Driving_Differentiation.png" className="w-full h-full object-cover object-center" />
                        </div>
                        <div className=" py-4 px-4">
                            <h3 className="uppercase text-white font-bold font-montserrat t-24">
                                DRIVING DIFFERENTIATION
                            </h3>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}