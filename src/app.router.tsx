import { createBrowserRouter, Navigate } from "react-router";
import { ShopLayout } from "./shop/layouts/ShopLayout";
import { HomePage } from "./pages/home/HomePage";
import { ProductPage } from "./pages/product/ProductPage";
import { RegisterPage, LoginPage } from "./auth";
import { AdminProductPage, AdminProductsPage, DashboardPage } from "./admin";
import { lazy } from "react";
import { GenderPage } from "./pages/gender/GenderPage";


const AuthLayout = lazy(() => import('./auth/layouts/AuthLayout'))
const AdminLayout = lazy(() => import('./admin/layouts/AdminLayout'))

export const appRouter = createBrowserRouter([

    //Main-Routes
    {
        path: '/',
        element: <ShopLayout />,
        children: [
            {
                index: true,
                element: <HomePage />
            },
            {
                path: 'product/:idSlug',
                element: <ProductPage />
            },
            {
                path: 'gender/:gender',
                element: <GenderPage />
            },
        ]
    },

    //Auth-Routes
    {
        path: '/auth',
        element: <AuthLayout />,
        children: [
            {
                index: true,
                element: <Navigate to='/auth/login' />
            },
            {
                path: 'register',
                element: <RegisterPage />
            },
            {
                path: 'login',
                element: <LoginPage />
            }
        ]

    },

    //Admin-Routes
    {
        path: '/admin',
        element: <AdminLayout />,

        children: [
            {
                index: true,
                element: <DashboardPage />
            },
            {
                path: 'product/:id',
                element: <AdminProductPage />
            },
            {
                path: 'products',
                element: <AdminProductsPage />
            },
        ]
    },

    //Ruta no definida
    {
        path: '*',
        element: <Navigate to='/' />
    }
])

