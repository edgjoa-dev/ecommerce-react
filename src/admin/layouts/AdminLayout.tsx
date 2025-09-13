import { useState } from "react";
import { AdminHeader, AdminSidebar } from "../components";
import { Outlet } from "react-router";


const AdminLayout = () => {

    const [sidebarCollapsed, setSidebarCollapsed] = useState(false);

    return (
        <section className="bg-gray-50 flex">
            <AdminSidebar
                isCollapsed={sidebarCollapsed}
                onToggle={() => setSidebarCollapsed(!sidebarCollapsed)}
            />

            <div className="flex-1 flex flex-col">
                <AdminHeader />
                <main className="flex-1 p-6">
                    <Outlet />
                </main>

            </div>

        </section>
    )
}


export default AdminLayout;