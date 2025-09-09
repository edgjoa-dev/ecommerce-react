import { CustomPagination } from "@/components/custom"
import { JumBotron } from "@/shop/components"

export const HomePage = () => {
    return (
        <main className="min-h-screen">
            <JumBotron title="Página de inicio ecommerce" />
            <CustomPagination totalPages={7}/>
        </main>
    )
}
