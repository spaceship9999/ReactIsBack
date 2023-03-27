
interface BannerProps {
    heading: string;
    content: string;
    image: string;
    position: string;
}



export default function Banner({heading, content, image: string, position = "center"}: BannerProps) {
    return (
        <div className="py-[200px]">
            <img />
        </div>
    )
}