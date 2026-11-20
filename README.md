# Portfolio

A one-page portfolio built with React, TypeScript, Vite, and Tailwind CSS.

## Getting started

```sh
npm install
npm run dev
```

Edit `src/data/portfolio.ts` to add your education, experience, skills, contact information, and links. Empty social links appear as “coming soon” until URLs are supplied. The résumé PDF is stored in `public/Anthony_Zheng_Resume.pdf`; replace that file to update the preview and download. The résumé link opens the PDF in a new tab, where visitors can use their browser’s download controls. The section layout lives in `src/App.tsx`, and reusable UI components are in `src/components`.

Tailwind utilities live alongside the components. The Vite configuration provides the Tailwind stylesheet entry.
