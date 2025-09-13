import { useState, type SetStateAction } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { motion } from "framer-motion";
import { Star } from "lucide-react";

interface Comment {
    id: string;
    user: string;
    rating: number;
    comment: string;
    date: string;
}

export const ProductComments = () => {
    // Simulación de comentarios (normalmente vendrían de una API)
    const [comments, setComments] = useState<Comment[]>([
        {
            id: "1",
            user: "Carlos M.",
            rating: 5,
            comment: "Excelente calidad, el material es premium. Lo volvería a comprar.",
            date: "2025-09-01",
        },
        {
            id: "2",
            user: "Laura G.",
            rating: 4,
            comment: "Muy cómodo y ligero, aunque el tallaje es un poco reducido.",
            date: "2025-09-05",
        },
    ]);

    const [newComment, setNewComment] = useState("");
    const [newRating, setNewRating] = useState<number>(0);

    const handleAddComment = () => {
        if (!newComment.trim() || newRating === 0) return;

        const newEntry: Comment = {
            id: crypto.randomUUID(),
            user: "Usuario Invitado",
            rating: newRating,
            comment: newComment,
            date: new Date().toISOString().split("T")[0],
        };

        setComments([newEntry, ...comments]);
        setNewComment("");
        setNewRating(0);
    };

    return (
        <section className="mt-12 flex flex-col justify-between">
            <h2 className="text-xl font-semibold text-slate-900 mb-6">
                Opiniones de clientes
            </h2>

            {/* Formulario para nuevo comentario */}
            <div className="border border-slate-200 rounded-xl p-4 mb-8 bg-white shadow-sm">
                <h3 className="text-sm font-medium text-slate-700 mb-3">
                    Escribe tu reseña
                </h3>

                {/* Rating con estrellas */}
                <div className="flex gap-1 mb-3">
                    {[1, 2, 3, 4, 5].map((star) => (
                        <motion.button
                            key={star}
                            whileTap={{ scale: 0.9 }}
                            onClick={() => setNewRating(star)}
                            className="focus:outline-none"
                        >
                            <Star
                                className={`h-5 w-5 ${newRating >= star
                                    ? "fill-yellow-400 text-yellow-400"
                                    : "text-slate-300"
                                    }`}
                            />
                        </motion.button>
                    ))}
                </div>

                <div className="flex flex-col gap-4">
                    <Textarea
                        placeholder="Escribe tu experiencia con el producto..."
                        value={newComment}
                        onChange={(e: { target: { value: SetStateAction<string>; }; }) => setNewComment(e.target.value)}
                        className="mb-4"
                    />

                    <Button
                        onClick={handleAddComment}
                        disabled={!newComment.trim() || newRating === 0}
                        className="bg-black hover:bg-black/90 w-sm"
                    >
                        Publicar comentario
                    </Button>
                </div>
            </div>

            {/* Lista de comentarios */}
            <div className="space-y-6">
                {comments.map((c) => (
                    <motion.div
                        key={c.id}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3 }}
                        className="border-b border-slate-200 pb-4"
                    >
                        <div className="flex items-center justify-between mb-2">
                            <p className="text-sm font-medium text-slate-800">{c.user}</p>
                            <span className="text-xs text-slate-500">{c.date}</span>
                        </div>
                        <div className="flex items-center gap-1 mb-2">
                            {[1, 2, 3, 4, 5].map((star) => (
                                <Star
                                    key={star}
                                    className={`h-4 w-4 ${c.rating >= star
                                        ? "fill-yellow-400 text-yellow-400"
                                        : "text-slate-300"
                                        }`}
                                />
                            ))}
                        </div>
                        <p className="text-slate-700 text-sm leading-relaxed">{c.comment}</p>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};
