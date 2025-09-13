import { Outlet } from "react-router"
import { CustomFooter, CustomHeader } from "../components"

export const ShopLayout = () => {
    return (
        <section className="flex flex-col justify-between bg-background">
            <CustomHeader />
            <Outlet />
            <CustomFooter />
        </section>
    )
}
