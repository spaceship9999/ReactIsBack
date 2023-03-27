interface button {
    link: string,
    title: string
}

interface TextMedia {
    heading: string,
    content: string,
    link: button,
    image: string
}

export default function SingleColumnTextMedia({ heading, content, link, image }: TextMedia) {
    return (
        <div className="container">
            <div className="py-12">
                <div className="xl:pr-24 text-dark-blue">
                    <h3 className=" font-montserrat t-36 font-bold mb-5">{heading}</h3>
                    <div className="font-rubik t-20 leading-[1.8]">{ content }</div>
                </div>
                {
                    image && (
                        <img src={image} className="w-full"/>
                    )
                }
            </div>
        </div>
       
    )
}
