
interface BannerProps {
    heading: string;
    content: string;
    image_link: string;
    position: string;
}



export default function Banner({heading, content, image_link: string, position = "center"}: BannerProps) {
    return (
        <div className="py-[200px]">
            <img src={image_link}/>
        </div>
    )
}