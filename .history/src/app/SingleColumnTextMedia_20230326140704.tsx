interface button {
    link: string,
    title: string
}

export default function SingleColumnTextMedia({ heading, content, string}) {
    return (
        <div className="py-12">
            <h3>{ heading }</h3>
        </div>
    )
}
