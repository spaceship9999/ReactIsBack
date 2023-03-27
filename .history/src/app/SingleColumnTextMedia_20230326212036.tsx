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
                <h3 className="text-dark-blue font-montserrat t-36">{ heading }</h3>
            </div>
        </div>
       
    )
}
