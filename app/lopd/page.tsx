import Footer from "@/components/footer";
import TeamCard from "@/components/team";

export default function Lopd() {
    
  return (
    <>
        <div className="font-sans grid items-center justify-items-center p-8 pb-20 gap-16 pt-30 bg-gray-200">
          <p className="text-2xl font-bold tracking-[1.5px]">Política de privacitat i avís legal</p>
        </div>
        <div className="font-sans grid items-center justify-items-center -mt-10 pb-10 gap-16 px-4">
           <div className="w-full max-w-2xl mx-auto p-8 bg-white rounded-2xl shadow-lg">
              <div className="flex flex-col gap-2 my-2 text-gray-700">
                <h2 className="font-semibold">1. Responsable del tractament</h2>
                <p>
                    El responsable del tractament de les dades és <strong>SentIA</strong>, empresa dedicada a la gestió i recopilació de valoracions.
                </p>
                <p>
                    Correu de contacte: <a className="text-blue-500 hover:underline" href="mailto:info@sentia.com">info@sentia.com</a>
                </p>
              </div>

              <div className="flex flex-col gap-2 my-2 text-gray-700">
                <h2 className="font-semibold">2. Dades que recopilem</h2>
                <p>En aquesta web es recopilen les següents dades personals a través del formulari de valoracions:</p>
                <ul>
                    <li>· Nom</li>
                    <li>· Cognoms</li>
                    <li>· Correu electrònic</li>
                    <li>· Telèfon</li>
                    <li>· Valoració (estrelles)</li>
                    <li>· Comentari</li>
                </ul>
              </div>

              <div className="flex flex-col gap-2 my-2 text-gray-700">
                <h2 className="font-semibold">3. Finalitat del tractament</h2>
                <p>Les dades proporcionades s'utilitzen exclusivament per:</p>
                <ul>
                    <li>Gestionar i publicar valoracions d&apos;usuaris</li>
                    <li>Generar una resposta automatitzada a través d'intel·ligència artificial</li>
                    <li>Millorar el servei i experiència dels usuaris</li>
                </ul>
                <p>No es faran servir amb finalitats comercials ni publicitàries.</p>
              </div>

              <div className="flex flex-col gap-2 my-2 text-gray-700">
                <h2 className="font-semibold">4. Base legal del tractament</h2>
                <p>
                    El tractament es basa en el consentiment explícit de l&apos;usuari quan envia el formulari i accepta la casella de privacitat.
                </p>
              </div>

              <div className="flex flex-col gap-2 my-2 text-gray-700">
                <h2 className="font-semibold">5. Conservació de les dades</h2>
                <p>
                    Les dades es conservaran mentre siguin necessàries per a la finalitat del servei o fins que l&apos;usuari en sol·liciti l&apos;eliminació.
                </p>
              </div>

              <div className="flex flex-col gap-2 my-2 text-gray-700">
                <h2 className="font-semibold">6. Destinataris</h2>
                <p>
                    Les dades no es cediran a tercers, excepte obligació legal.
                </p>
                <p>
                    La resposta generada per IA es processa de manera automatitzada però sense transmetre informació personal a tercers.
                </p>
              </div>

              <div className="flex flex-col gap-2 my-2 text-gray-700">
                <h2 className="font-semibold">7. Drets dels usuaris</h2>
                <p>Pots exercir els teus drets de:</p>
                <ul>
                    <li>· Accés</li>
                    <li>· Rectificació</li>
                    <li>· Supressió</li>
                    <li>· Oposició</li>
                    <li>· Limitació del tractament</li>
                    <li>· Portabilitat de les dades</li>
                </ul>
                <p>Mitjançant correu a <a className="text-blue-500 hover:underline" href="mailto:info@sentia.com">info@sentia.com</a></p>
              </div>

              <div className="flex flex-col gap-2 my-2 text-gray-700">
                <h2 className="font-semibold">8. Seguretat de les dades</h2>
                <p>
                    Les teves dades s&apos;emmagatzemen de forma segura i s&apos;adopten mesures tècniques adequades per evitar-ne l&apos;accés no autoritzat.
                </p>
              </div>

              <div className="flex flex-col gap-2 my-2 text-gray-700">
                <h2 className="font-semibold">9. Ús de cookies</h2>
                <p>
                    Aquesta web pot utilitzar cookies tècniques necessàries per al funcionament.
                </p>
                <p>No s&apos;utilitzen cookies de publicitat ni de seguiment.</p>
              </div>

              <div className="flex flex-col gap-2 my-2 text-gray-700">
                <h2 className="font-semibold">10. Acceptació</h2>
                <p>
                    En utilitzar aquesta web i enviar el formulari, acceptes aquesta política de privacitat.
                </p>
              </div>
           </div>
        </div>
      <Footer />
    </>
  );
}
