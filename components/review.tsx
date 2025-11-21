import IconUser from "./ui/iconUser";
import { Star, User, Bot } from "lucide-react"

interface ReviewCardProps {
  name: string;
  surname: string;
  comment: string;
  rating: number;
  aiResponse: string;
}

export default function ReviewCard({
  name,
  surname,
  comment,
  rating,
  aiResponse,
}: ReviewCardProps) {
  return (
    <div className="bg-white p-6 rounded-2xl shadow-lg w-full max-w-xl mx-auto border border-gray-100">
      
      <div className="flex items-center gap-4">
        <div className="bg-gray-200 p-3 rounded-full">
          <User className="w-6 h-6 text-gray-700" />
        </div>
        <div>
          <p className="font-semibold text-lg">{name} {surname}</p>
        </div>
      </div>

      <div className="flex mt-3 mb-2">
        {[1, 2, 3, 4, 5].map((star) => (
          <Star
            key={star}
            className={`w-6 h-6 ${
              rating >= star ? "text-yellow-400 fill-yellow-400" : "text-gray-300"
            }`}
          />
        ))}
      </div>

      <p className="text-gray-800 mb-4">{comment}</p>

      <div className="mt-4 bg-gray-50 border border-gray-200 p-4 rounded-xl">
        <div className="flex items-center gap-3 mb-2">
          <div className="bg-blue-200 p-2 rounded-full">
            <Bot className="w-5 h-5 text-blue-700" />
          </div>
          <p className="font-semibold text-blue-700">SentIA</p>
        </div>
        <p className="text-gray-700">{aiResponse}</p>
      </div>
    </div>
  );
}
