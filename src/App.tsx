import { RouterProvider } from "react-router"
import "./App.css"
import { appRouter } from "./app.router"


export const App = () => {
  return (
    <RouterProvider router={ appRouter } />
  )
}
