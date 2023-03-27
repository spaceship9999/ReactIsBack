
interface BannerProps {
    heading: string;
    content: string;
    image: string;
    position: string;
}



export default function Banner({heading, content, image, position = "center"}: BannerProps) {
    return (
        <div className="py-[200px] relative">
            <img src={image}
             className={`absolute inset-0 w-full h-full object-cover ${position === 'center' ? 'object-center': 'object-start'}`}/>
        </div>
    )
}