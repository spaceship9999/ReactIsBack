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
                <div className="lg:pr-24">
                    <h3 className="text-dark-blue font-montserrat t-36 font-bold">{heading}</h3>
                </div>
                
            </div>
        </div>
       
    )
}
