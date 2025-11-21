import Footer from "@/components/footer";
import ReviewForm from "@/components/forms/form";

export default function Home() {
  return (
    <>
      <div className="font-sans grid items-center justify-items-center p-8 pb-20 gap-16 pt-30 bg-gray-200 ">
        <p className="text-2xl font-bold tracking-[1.5px] text-center">
          La teva empresa de conf
          <a className="text-sky-500 font-bold uppercase">ia</a>
          <br />
          per a valoracions reals i transparents.
        </p>
      </div>
      <div className="font-sans grid items-center justify-items-center pb-20 gap-16 mt-20">
        <ReviewForm />
      </div>
      <Footer />
    </>
  );
}
