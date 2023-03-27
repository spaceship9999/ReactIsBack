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
                    <div className="font-rubik t-20 leading-[1.8] mb-8">{ content }</div>
                    {
                        link && (
                            <a className="inline-block py-6 px-[70px] text-white bg-light-blue font-bold rounded-3xl" href={link?.link}
                            dangerouslySetInnerHTML={{__html: link.title}}/>
                        )
                    }
                </div>
                {
                    image && (
                        <div className="mt-32">
                            <img src={image} className="w-full" />
                        </div>
                    )
                }
            </div>
        </div>
       
    )
}
