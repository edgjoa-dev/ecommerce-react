import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ShoppingCart, Heart, Minus, Plus } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface Product {
    id: string;
    title: string;
    price: number;
    description: string;
    stock: number;
    sizes: string[];
    images: string[];
}

export const ProductPage = () => {

    const [product] = useState<Product>({
        id: "376e23ed-df37-4f88-8f84-4561da5c5d46",
        title: "Men's Raven Lightweight Hoodie",
        price: 115,
        description:
            "Introducing the Tesla Raven Collection. The Men's Raven Lightweight Hoodie has a premium, relaxed silhouette made from a sustainable bamboo cotton blend. Subtle TPU Tesla logos across chest and sleeve. French terry interior for versatility in any season.",
        stock: 10,
        sizes: ["XS", "S", "M", "L", "XL", "XXL"],
        images: [
            "https://placehold.co/600x600",
            "https://placehold.co/300x300",
            "https://placehold.co/100x100",
        ],
    });

    const [selectedSize, setSelectedSize] = useState<string | null>(null);
    const [mainImage, setMainImage] = useState(product.images[0]);
    const [quantity, setQuantity] = useState<number>(1);

    const handleQuantityChange = (type: "inc" | "dec") => {
        if (type === "inc" && quantity < product.stock) {
            setQuantity((prev) => prev + 1);
        }
        if (type === "dec" && quantity > 1) {
            setQuantity((prev) => prev - 1);
        }
    };

    return (
        <section className="h-screen font-montserrat max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                {/* Left side - Images */}
                <div>
                    <div className="aspect-square rounded-xl overflow-hidden bg-slate-100 border border-slate-200 flex items-center justify-center">
                        <AnimatePresence mode="wait">
                            <motion.img
                                key={mainImage}
                                src={mainImage}
                                alt={product.title}
                                className="w-full h-full object-cover"
                                initial={{ opacity: 0, scale: 1.05 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0 }}
                                transition={{ duration: 0.4, ease: "easeOut" }}
                                whileHover={{ scale: 1.05 }}
                            />
                        </AnimatePresence>
                    </div>
                    <div className="grid grid-cols-4 gap-3 mt-4">
                        {product.images.map((img, idx) => (
                            <motion.button
                                key={idx}
                                onClick={() => setMainImage(img)}
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className={`aspect-square rounded-lg overflow-hidden border transition-all duration-200 ${mainImage === img
                                        ? "border-black"
                                        : "border-slate-200 hover:border-slate-400"
                                    }`}
                            >
                                <img
                                    src={img}
                                    alt={`Thumbnail ${idx}`}
                                    className="w-full h-full object-cover"
                                />
                            </motion.button>
                        ))}
                    </div>
                </div>

                {/* Right side - Product Info */}
                <div className="flex flex-col justify-between">
                    <div>
                        <motion.h1
                            initial={{ y: 10, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ duration: 0.5 }}
                            className="text-3xl font-semibold text-slate-900 mb-4"
                        >
                            {product.title}
                        </motion.h1>
                        <motion.p
                            initial={{ y: 10, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ duration: 0.6, delay: 0.1 }}
                            className="text-xl text-slate-800 font-medium mb-6"
                        >
                            ${product.price.toFixed(2)}
                        </motion.p>

                        <p className="text-slate-600 leading-relaxed mb-8">
                            {product.description}
                        </p>

                        {/* Sizes */}
                        <div className="mb-8">
                            <h2 className="text-sm font-medium text-slate-700 mb-3">
                                Selecciona talla
                            </h2>
                            <div className="flex flex-wrap gap-2">
                                {product.sizes.map((size) => (
                                    <motion.button
                                        key={size}
                                        onClick={() => setSelectedSize(size)}
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.9 }}
                                        className={`px-4 py-2 rounded-lg border text-sm font-medium transition-all duration-200 ${selectedSize === size
                                                ? "bg-black text-white border-black"
                                                : "bg-white text-slate-700 border-slate-300 hover:border-slate-500"
                                            }`}
                                    >
                                        {size}
                                    </motion.button>
                                ))}
                            </div>
                        </div>

                        {/* Quantity */}
                        <div className="mb-8">
                            <h2 className="text-sm font-medium text-slate-700 mb-3">
                                Cantidad
                            </h2>
                            <div className="flex items-center gap-4">
                                <motion.button
                                    onClick={() => handleQuantityChange("dec")}
                                    whileTap={{ scale: 0.8 }}
                                    className="p-2 border rounded-lg hover:bg-slate-100 transition"
                                >
                                    <Minus className="h-4 w-4" />
                                </motion.button>
                                <span className="text-lg font-medium w-8 text-center">
                                    {quantity}
                                </span>
                                <motion.button
                                    onClick={() => handleQuantityChange("inc")}
                                    whileTap={{ scale: 0.8 }}
                                    className="p-2 border rounded-lg hover:bg-slate-100 transition"
                                >
                                    <Plus className="h-4 w-4" />
                                </motion.button>
                            </div>
                        </div>
                    </div>

                    {/* Actions */}
                    <div className="space-y-4">
                        {product.stock > 0 ? (
                            <motion.div whileTap={{ scale: 0.97 }}>
                                <Button className="w-full h-12 text-base flex items-center justify-center gap-2 bg-black hover:bg-black/90">
                                    <ShoppingCart className="h-5 w-5" />
                                    Añadir al carrito
                                </Button>
                            </motion.div>
                        ) : (
                            <Button
                                className="w-full h-12 text-base"
                                variant="outline"
                                disabled
                            >
                                Sin stock
                            </Button>
                        )}

                        <motion.div whileTap={{ scale: 0.9 }}>
                            <Button
                                className="w-full h-12 text-base flex items-center justify-center gap-2"
                                variant="outline"
                            >
                                <motion.div
                                    whileHover={{ scale: 1.2 }}
                                    transition={{ repeat: Infinity, repeatType: "reverse", duration: 0.6 }}
                                >
                                    <Heart className="h-5 w-5" />
                                </motion.div>
                                Guardar en favoritos
                            </Button>
                        </motion.div>

                        <p className="text-sm text-slate-500 text-center">
                            {product.stock > 5
                                ? "Disponible en inventario"
                                : product.stock > 0
                                    ? "Últimas piezas disponibles"
                                    : "Este producto no está disponible"}
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};
