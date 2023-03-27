interface button {
    link: string,
    title: string
}

export default function SingleColumnTextMedia(props) {
    const { heading: string, content: string, cta: button } = props
    return (
        <div className="py-12">
            <h3>{ heading }</h3>
        </div>
    )
}
