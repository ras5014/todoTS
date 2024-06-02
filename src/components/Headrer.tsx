type HeadrerProps = {
    image: {
        src: string;
        alt: string;
    }
}

const Headrer = ({ image }: HeadrerProps) => {
    return (
        <header>
            <img {...image} />
            <h1>Your Course Goals</h1>
        </header>
    )
}

export default Headrer
