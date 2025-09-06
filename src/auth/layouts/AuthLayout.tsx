import { Outlet } from "react-router";

const AuthLayout = () => {
    return (
        <div className="h-screen">Auth Layout
        <Outlet />
        </div>
    )
}

export default AuthLayout;