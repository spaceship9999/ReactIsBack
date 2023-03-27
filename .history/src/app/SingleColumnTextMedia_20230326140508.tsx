interface button {
    link: string,
    title: string
}

export default function SingleColumnTextMedia({ heading: string, content: string, cta: button}) {
    return (
        <div className="py-12">
            <h3>{ heading }</h3>
        </div>
    )
}
