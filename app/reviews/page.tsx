"use client";
import Footer from "@/components/footer";
import ReviewCard from "@/components/review";
import Spinner from "@/components/spinner";
import { getOpinions } from "@/lib/api";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

// Spinner simple usando Tailwind


const REVIEWS_PER_PAGE = 10;

type Opinion = {
  id: string;
  name: string;
  lastname: string;
  comment: string;
  rating: number;
  response: string;
};

export default function Reviews() {
  const [reviews, setReviews] = useState<Opinion[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    getOpinions(REVIEWS_PER_PAGE, (page - 1) * REVIEWS_PER_PAGE)
      .then((data) => {
        setReviews(data.items || []);
        setTotalPages(Math.ceil(data.total / REVIEWS_PER_PAGE));
        setError(null);
      })
      .catch(() => {
        setError("¡Ups! Hemos tenido un problema. Vuelve a intentarlo más tarde.");
      })
      .finally(() => {
        setLoading(false);
      });
  }, [page]);

  return (
    <>
      <div className="font-sans grid items-center justify-items-center p-8 pb-20 gap-16 pt-30 bg-gray-200">
        <p className="text-xl font-bold tracking-[1.5px]">Reviews</p>
      </div>
      {loading ? (
        <Spinner />
      ) : (
        <div className="font-sans grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 p-8 w-full max-w-7xl mx-auto">
          {error ? (
            <div className="flex flex-col items-center justify-center col-span-3 rounded-lg p-8">
              <svg className="w-16 h-16 text-red-500 mb-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01M21 12c0 4.97-4.03 9-9 9s-9-4.03-9-9 4.03-9 9-9 9 4.03 9 9z" />
              </svg>
              <p className="text-xl font-bold mb-2">¡Ups! Hemos tenido un problema.</p>
              <p className="text-gray-700">Vuelve a intentarlo más tarde.</p>
            </div>
          ) : (
            <AnimatePresence>
              {reviews.map((opinion, idx) => (
                <motion.div
                  key={opinion.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -30 }}
                  transition={{ duration: 0.4, delay: idx * 0.08 }}
                >
                  <ReviewCard
                    name={opinion.name}
                    surname={opinion.lastname}
                    comment={opinion.comment}
                    rating={opinion.rating}
                    aiResponse={opinion.response}
                  />
                </motion.div>
              ))}
            </AnimatePresence>
          )}
        </div>
      )}
      {totalPages > 1 && !loading && (
        <div className="flex justify-center items-center gap-4 py-8">
          <button
            className="px-4 py-2 bg-gray-300 rounded disabled:opacity-50"
            onClick={() => setPage((p) => Math.max(1, p - 1))}
            disabled={page === 1}
          >
            ◀
          </button>
          <span>Página {page} de {totalPages}</span>
          <button
            className="px-4 py-2 bg-gray-300 rounded disabled:opacity-50"
            onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
            disabled={page === totalPages}
          >
            ▶
          </button>
        </div>
      )}
      <Footer />
    </>
  );
}