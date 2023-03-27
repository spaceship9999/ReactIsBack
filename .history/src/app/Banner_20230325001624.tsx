
interface BannerProps {
    heading: string;
    content: string;
    imagek: string;
    position: string;
}



export default function Banner({heading, content, image, position = "center"}: BannerProps) {
    return (
        <div className="py-[200px]">
            <img src={image}/>
        </div>
    )
}