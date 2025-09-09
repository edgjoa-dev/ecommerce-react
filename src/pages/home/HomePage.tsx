import { CustomPagination } from "@/components/custom"
import { products } from "@/mock/productData.mock"
import { JumBotron, ProductsGrid } from "@/shop/components"

export const HomePage = () => {
    return (
        <main className="min-h-screen">
            <JumBotron title="Página de inicio ecommerce" />
            <ProductsGrid products={products}  />
            <CustomPagination totalPages={7}/>
        </main>
    )
}
