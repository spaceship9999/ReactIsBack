
interface BannerProps {
    heading: string;
    content: string;
    image: string;
    position: string;
}



export default function Banner({heading, content, image, position = "center"}: BannerProps) {
    return (
        <div className="py-[185px] relative">
            <img src={image}
             className={`absolute inset-0 w-full h-full object-cover ${position === 'center' ? 'object-center': 'object-start'}`}/>
             <div className="container">
                <div className="flex flex-col items-center relative z-10 text-white lg:max-w-[910px]">
                    <h2 className="text-white font-montserrat t-36 font-bold mb-6">{heading}</h2>
                    <div className="font-rubik t-24">
                        { content }
                    </div>
                </div>
             </div>
        </div>
    )
}