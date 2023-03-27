interface button {
    link: string,
    title: string
}

interface TextMedia {
    heading: string,
    content: string,
    link: button
}

export default function SingleColumnTextMedia({ heading, content, link }: TextMedia) {
    return (
        <div className="container">
            <div className="py-12">
                <div className="xl:pr-24 text-dark-blue">
                    <h3 className=" font-montserrat t-36 font-bold mb-6">{heading}</h3>
                    <div className="font-rubik t-18 leading-[1.33]">{ content }</div>
                </div>
                
            </div>
        </div>
       
    )
}
