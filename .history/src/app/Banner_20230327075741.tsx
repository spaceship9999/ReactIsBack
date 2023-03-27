
interface BannerProps {
    heading: string;
    content: string;
    image: string;
    position: string;
}



export default function Banner({heading, content, image, position = "center"}: BannerProps) {
    return (
        <div className="py-20 md:py-24 lg:py-[185px] relative overflow-hidden">
            <img src={image} alt=""
             className={`absolute inset-0 w-full h-full object-cover ${position === 'center' ? 'object-center': 'object-start'}`}/>
             <div className="container">
                <div className="flex flex-col items-center relative z-10 text-white md:max-w-[910px] text-center md:text-left">
                    <h2 className="text-white font-montserrat t-36 font-bold mb-6">{heading}</h2>
                    <div className="font-rubik t-24 lg:pr-20">
                        { content }
                    </div>
                </div>
             </div>
        </div>
    )
}