"use client";
import Footer from "@/components/footer";
import TeamCard from "@/components/team";
import { motion } from "framer-motion";

export default function Team() {
    
  return (
    <>
      <div className="min-h-screen">
        <div className="font-sans grid items-center justify-items-center p-8 pb-20 gap-16 pt-30 bg-gray-200">
          <p className="text-2xl font-bold tracking-[1.5px]">Team</p>
        </div>
        <div className="font-sans grid items-center justify-items-center -mt-10 pb-10 gap-16 px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <TeamCard />
          </motion.div>
        </div>
      </div>
      <Footer />
    </>
  );
}
