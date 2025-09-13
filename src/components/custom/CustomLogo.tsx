import { Link } from "react-router";

interface Props {
    subtitle?: string;
}

export const CustomLogo = ({ subtitle = "Shop" }: Props) => {
    const labels: Record<string, string> = {
        men: "Hombres",
        women: "Mujeres",
        kids: "Niños",
        undefined: "Shop",
    };

    const displaySubtitle = labels[subtitle] ?? subtitle;

    return (
        <Link to="/" className="flex items-center whitespace-nowrap">
            <span className="font-montserrat font-bold text-xl m-0 whitespace-nowrap">
                Teslo |
            </span>
            <p className="text-muted-foreground m-0 px-2 whitespace-nowrap">
                {displaySubtitle}
            </p>
        </Link>
    );
};

