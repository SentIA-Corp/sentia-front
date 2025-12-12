'use client';
import { useState } from "react";
import { Star } from "lucide-react";
import { sendOpinion } from "@/lib/api";
import { motion, AnimatePresence } from "framer-motion";
import Spinner from "@/components/spinner";
import { useForm } from "react-hook-form";
import { ReviewFormData } from "@/lib/types";

export default function ReviewForm() {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [accepted, setAccepted] = useState(false);

  const { register, handleSubmit, reset } = useForm<ReviewFormData>();

  const onSubmit = async (data: ReviewFormData) => {
    setStatus("loading");
    const formData = {
      ...data,
      rating,
    };
    try {
      await sendOpinion(formData);
      setStatus("success");
      reset();
      setRating(0);
      setAccepted(false);
    } catch (error) {
      setStatus("error");
    }
  };

  const resetForm = () => {
    setStatus("idle");
    reset();
    setRating(0);
    setAccepted(false);
  };

  return (
    <div className="w-full max-w-2xl mx-auto p-8 bg-white rounded-2xl shadow-lg -mt-30">
      {status === "loading" && (
        <div className="flex justify-center items-center h-40">
          <Spinner />
        </div>
      )}
      <AnimatePresence>
        {status === "success" && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            className="flex flex-col items-center gap-4 text-center"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 24 24"><g fill="none" stroke="#008f39" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}><path strokeDasharray="64" strokeDashoffset="64" d="M3 12c0 -4.97 4.03 -9 9 -9c4.97 0 9 4.03 9 9c0 4.97 -4.03 9 -9 9c-4.97 0 -9 -4.03 -9 -9Z"><animate fill="freeze" attributeName="stroke-dashoffset" dur="0.6s" values="64;0"/></path><path strokeDasharray="14" strokeDashoffset="14" d="M8 12l3 3l5 -5"><animate fill="freeze" attributeName="stroke-dashoffset" begin="0.6s" dur="0.2s" values="14;0"/></path></g></svg>
            <p className="text-2xl font-semibold">Valoració enviada!</p>
            <button
              onClick={resetForm}
              className="bg-black text-white font-bold px-6 py-2 rounded-lg hover:bg-gray-800 transition"
            >
              Enviar una altra valoració
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {status === "error" && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            className="flex flex-col items-center gap-4 text-center"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 24 24"><g fill="none" stroke="#950101" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}><path strokeDasharray="64" strokeDashoffset="64" d="M12 3c4.97 0 9 4.03 9 9c0 4.97 -4.03 9 -9 9c-4.97 0 -9 -4.03 -9 -9c0 -4.97 4.03 -9 9 -9Z"><animate fill="freeze" attributeName="stroke-dashoffset" dur="0.6s" values="64;0"/></path><path strokeDasharray="8" strokeDashoffset="8" d="M12 12l4 4M12 12l-4 -4M12 12l-4 4M12 12l4 -4"><animate fill="freeze" attributeName="stroke-dashoffset" begin="0.6s" dur="0.2s" values="8;0"/></path></g></svg>
            <p className="text-2xl font-semibold">Alguna cosa ha anat malament...</p>
            <button
              onClick={resetForm}
              className="bg-black text-white font-bold px-6 py-2 rounded-lg hover:bg-gray-800 transition"
            >
              Tornar a intentar
            </button>
          </motion.div>
        )}
      </AnimatePresence>

     {status === "idle" && (
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
          <div className="text-center">
            <h2 className="text-xl font-semibold">Realitza ara una valoració sobre el nostre servei</h2>
            <p className="text-gray-600">Emplena el següent formulari, i et respondrem al moment!</p>
          </div>
          <hr className="my-2" />
          <div className="flex flex-col gap-2">
            <label className="font-medium">Nom</label>
            <input
              type="text"
              className="border p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-500"
              placeholder="Indica el teu nom"
              {...register("name", { required: true })}
            />
          </div>
          <div className="flex flex-col gap-2">
            <label className="font-medium">Cognoms</label>
            <input
              type="text"
              className="border p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-500"
              placeholder="Indica els teus cognoms"
              {...register("lastname", { required: true })}
            />
          </div>
          <div className="flex flex-col gap-2">
            <label className="font-medium">Email</label>
            <input
              type="email"
              className="border p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-500"
              placeholder="Indica el teu email"
              {...register("email", { required: true })}
            />
          </div>
          <div className="flex flex-col gap-2">
            <label className="font-medium">Telèfon</label>
            <input
              type="text"
              className="border p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-500"
              placeholder="Indica el teu número de telèfon"
              {...register("phone", { required: true })}
            />
          </div>
          <div className="flex flex-col gap-2">
            <label className="font-medium">Valoració</label>
            <div className="flex gap-2 mt-1">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star
                  key={star}
                  className={`w-8 h-8 cursor-pointer transition-all ${
                    (hover || rating) >= star
                      ? "fill-yellow-400 text-yellow-400"
                      : "text-gray-300"
                  }`}
                  onMouseEnter={() => setHover(star)}
                  onMouseLeave={() => setHover(0)}
                  onClick={() => setRating(star)}
                />
              ))}
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <label className="font-medium">Comentaris</label>
            <textarea
              className="border p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-500 h-28"
              placeholder="Escriu la teva opinió..."
              {...register("comment", { required: true })}
            />
          </div>
          <div className="flex items-center gap-2">
            <input
              type="checkbox"
              id="privacy"
              checked={accepted}
              onChange={(e) => setAccepted(e.target.checked)}
              required
            />
            <label htmlFor="privacy" className="text-sm">
              He llegit i accepto el tractament de les meves dades personals segons la <a href="/lopd" target="_blank" className="underline text-blue-600">Política de Privacitat</a>
            </label>
          </div>
          <button
            type="submit"
            className={`py-2 rounded-lg transition flex items-center justify-center gap-2 text-white font-bold
              ${!accepted ? "bg-gray-400 cursor-not-allowed" : "bg-black hover:bg-gray-800"}
            `}
            disabled={!accepted}
          >
            Enviar
          </button>
        </form>
      )}
    </div>
  );
}