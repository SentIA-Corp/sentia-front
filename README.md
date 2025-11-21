# 🧠 SentIA – Frontend

Sistema de recopilació i gestió de valoracions amb resposta automàtica mitjançant IA.

Aquest és el repositori del frontend, desenvolupat amb Next.js 13+, React, TypeScript i TailwindCSS.
L’objectiu del projecte és permetre que un usuari introdueixi una valoració, i que el sistema generi automàticament una resposta utilitzant IA. També inclou una pàgina d’administració/desplegament de reviews en format targetes.

### 🚀 Tecnologies utilitzades

- Next.js 13+ (App Router)
- React 18
- TypeScript
- TailwindCSS
- Framer Motion (animacions)
- Lucide Icons (icones del projecte)
- API interna per gestionar enviaments del formulari

Integració amb IA per generar resposta automàtica a cada comentari

### 📂 Estructura principal del projecte
```bash 
src/
  app/
    page.tsx               → pàgina principal del formulari
    reviews/page.tsx       → visualització de valoracions (targetes)
    lopd/page.tsx          → política de privacitat
    api/
      review/route.ts      → endpoint que gestiona l’enviament del formulari i genera resposta
  components/
    Form.tsx               → formulari de valoracions
    ReviewCard.tsx         → targeta de visualització
    UI/*                   → components visuals reutilitzables
This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

```

### 🛠 Getting Started

Instal·la les dependències:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Executa el servidor de desenvolupament:
```bash
npm run dev
```

Obre el navegador a 👉 http://localhost:3000

### 🔐 Política de privacitat (LOPD)

El projecte inclou una pàgina completa a /lopd amb el contingut legal sobre:

- Responsable del tractament
- Dades recopilades
- Finalitat
- Base legal
- Conservació
- Drets dels usuaris
- Cookies
- Seguretat

### 🧪 Com contribuir

Les pull requests són benvingudes.
Si vols proposar noves funcionalitats o millores, obre un issue.

### 🚀 Desplegament

El projecte està pensat per desplegar-se fàcilment a Vercel, plataforma oficial de Next.js.

Documentació:
https://nextjs.org/docs/app/building-your-application/deploying

## 📄 Llicència

Aquest projecte és propietat de SentIA.
Ús privat restringit.