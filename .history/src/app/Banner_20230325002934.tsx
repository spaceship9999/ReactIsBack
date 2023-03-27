
interface BannerProps {
    heading: string;
    content: string;
    image: string;
    position: string;
}



export default function Banner({heading, content, image, position = "center"}: BannerProps) {
    return (
        <div className="py-[180px] relative">
            <img src={image}
             className={`absolute inset-0 w-full h-full object-cover ${position === 'center' ? 'object-center': 'object-start'}`}/>
             <div className="container">
                <div className="flex items-center relative z-10 text-white">
                    <h2 className="text-white font-montserrat t-48">{heading}</h2>
                </div>
             </div>
        </div>
    )
}