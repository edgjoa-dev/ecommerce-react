import { Link } from "react-router"
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"

import { AdminTitle } from "@/admin/components"
import { CustomPagination } from "@/components/custom"
import { Button } from '@/components/ui/button';
import { PlusIcon } from "lucide-react";


export const AdminProductsPage = () => {
    return (
        <section className="h-screen">
            <div className="flex justify-between items-center font-montserrat">
                <AdminTitle
                    title={"Productos"}
                    subtitle={"Aquí puedes administrar tus productos."}
                />
                <div className="flex justify-end mb-10 gap-4">
                    <Link to='/admin/product/new' className="font-montserrat">
                        <Button>
                            <PlusIcon />
                            Agregar Producto
                        </Button>
                    </Link>
                </div>

            </div>

            <Table className="bg-white p-10 shadow-xs border border-gray-200 mb-10">
                <TableHeader>
                    <TableRow>
                        <TableHead className="w-[100px]">Producto ID</TableHead>
                        <TableHead>Imagen</TableHead>
                        <TableHead>Nombre</TableHead>
                        <TableHead>Precio</TableHead>
                        <TableHead>Categoria</TableHead>
                        <TableHead>Inventario</TableHead>
                        <TableHead>Tallas</TableHead>
                        <TableHead>Acciones</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    <TableRow>
                        <TableCell className="font-medium">TS-001</TableCell>
                        <TableCell>
                            <img src="https://cdn.forbes.com.mx/2018/08/tesla-suda.jpg" alt="Tesla_jacket" className="h-25 w-25 rounded-md" />
                        </TableCell>
                        <TableCell>Tesla jacket</TableCell>
                        <TableCell>$250.00</TableCell>
                        <TableCell>Categoría 1</TableCell>
                        <TableCell>100 stock</TableCell>
                        <TableCell>s, md, x, xl, xxl </TableCell>
                        <TableCell className="text-center">
                            <Link
                                to={`/admin/product/jacket-tesla`}
                            >
                                <span className="cursor-pointer underline">
                                    Editar
                                </span>
                            </Link>
                        </TableCell>
                    </TableRow>
                </TableBody>

            </Table>
            <CustomPagination totalPages={3} />
        </section>
    )
}
