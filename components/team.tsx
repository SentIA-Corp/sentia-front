import Image from "next/image";

export default function TeamCard() {

  const team = [
    { name: "Edgar Sánchez", role: "Frontend Dev", photo: "/team/edgar.jpg" },
    { name: "Ruben Pabo", role: "Backend Dev", photo: "/team/ruben.jpg" },
    { name: "Joel Hoyos", role: "Database Admin", photo: "/team/joel.jpg" },
  ];

  return (
    <div className="w-full max-w-2xl mx-auto p-8 bg-white rounded-2xl shadow-lg">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {team.map((person) => (
          <div
            key={person.name}
            className="bg-white shadow-lg rounded-2xl p-6 flex flex-col items-center text-center hover:shadow-sm hover:shadow-sky-500 transition"
          >
            <Image
              src={person.photo}
              alt={person.name}
              className=" rounded-full object-cover mb-4 shadow-md"
              width={128}
              height={128}
            />
            <h3 className="text-lg font-semibold">{person.name}</h3>
            <p className="text-gray-500">{person.role}</p>
          </div>
        ))}
      </div>

      <div className="mt-8 text-justify text-gray-700">
        <p> Hola a tothom!<br />
            <br />
            Som Edgar, Ruben i Joel, estudiants del CEFP en Inteligència Artificial i Big Data,
            i volem presentar SentIA, el nostre projecte per a la matèria M06 Projecte en el que
            hem aplicat les diferents tecnologíes i coneixements adquirits durant els últims mesos.<br />
            <br />
            SentIA, neix per la necessitat de les empreses de comptar amb valoracions autèntiques i transparents
            dels seus clients. Amb l&apos;ajuda de la intel·ligència artificial, oferim una plataforma que facilita
            la recopilació i anàlisi de feedback real, ajudant les empreses a millorar els seus serveis i
            establir una relació de confiança amb els seus clients.<br />
            
            <br />
            Gràcies per posar la vostra confiança en <b>SentIA</b>!
        </p>
      </div>
    </div>
  );
}
