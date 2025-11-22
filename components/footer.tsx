
export default function Footer() {
  const date = new Date();
  return (
    <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center py-2">
      SentIA © {date.getFullYear()}
      <a href="/lopd" className="text-gray-500 hover:underline">Política de Privacitat i Avís legal</a>
    </footer>
    
  );
}