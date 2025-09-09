
interface Props {
    title: string;
    subtitle?: string;
}


export const JumBotron = ({ title, subtitle }: Props) => {

    const subtitleOptional = "Ropa y accesorios de moda para todas las edades";

    return (

        <section className=" py-16 px-4 lg:px-8 bg-muted/60 font-montserrat">
            <div className="container mx-auto text-center">
                <h1 className="text-2xl lg:text-5xl font-medium tracking-tight mb-6">
                    {title}
                </h1>
                <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto font-light">
                    {subtitle || subtitleOptional}
                </p>
            </div>
        </section>
    )
}
