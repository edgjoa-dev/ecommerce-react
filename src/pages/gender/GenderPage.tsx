import { CustomPagination } from "@/components/custom";
import { products } from "@/mock/productData.mock";
import { JumBotron, ProductsGrid } from "@/shop/components";
import { useParams } from "react-router";

export const GenderPage = () => {
    const { gender } = useParams();

    let genderLabel: string;

    switch (gender) {
        case "men":
            genderLabel = "Hombres";
            break;

        case "women":
            genderLabel = "Mujeres";
            break;

        case "kids":
            genderLabel = "Niños";
            break;

        default:
            genderLabel = "Productos";
            break;
    }

    return (
        <section className="min-h-screen">
            <JumBotron title={`Productos para ${genderLabel}`} />
            <ProductsGrid products={products} />
            <CustomPagination totalPages={7} />
        </section>
    );
};
