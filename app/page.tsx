// app/page.tsx

"use client";

import { useState, useEffect } from "react";
import { translations } from "@/lib/translations";
import { BoldText, Section, ProjectCard } from "@/components/Resume";
import CanvasEffect from '@/components/CanvasEffect'; // کامپوننت جدید را import کنید

export default function ResumePage() {
  const [lang, setLang] = useState<'en' | 'fa'>('en');
  const t = translations[lang];

  useEffect(() => {
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === 'fa' ? 'rtl' : 'ltr';
  }, [lang]);

  const toggleLang = () => {
    setLang(current => (current === 'en' ? 'fa' : 'en'));
  };

  const projects = [
    { id: 'p1', link: 'https://daypay.vercel.app/' },
    { id: 'p2' },
    { id: 'p3' },
    { id: 'p4' },
  ];

  return (
    <>
      {/* فقط این یک خط را اینجا قرار دهید */}
      <CanvasEffect />

      <div className="max-w-4xl mx-auto resume-container">
        <header className="flex flex-col md:flex-row justify-between items-center mb-8">
          <div className={`text-center mb-4 md:mb-0 ${lang === 'fa' ? 'md:text-right' : 'md:text-left'}`}>
            <h1 className="text-4xl font-extrabold mb-2">{t.name}</h1>
            <h2 className="text-xl font-semibold">{t.title}</h2>
          </div>
          <div className={`text-center ${lang === 'fa' ? 'md:text-left' : 'md:text-right'}`}>
            <button onClick={toggleLang} className="lang-toggle-button">
              {t.button}
            </button>
            <p className="mt-2">{t.emailLabel}: <a href="mailto:abdollahiyansaeed@gmail.com" className="project-link">abdollahiyansaeed@gmail.com</a></p>
            <p>{t.phoneLabel}: <a href="tel:+989368013251" className="project-link" style={{ unicodeBidi: 'isolate', direction: 'ltr', display: 'inline-block' }}>+98 936 801 3251</a></p>
            <p>{t.githubLabel}: <a href="https://github.com/Ariya-Dice" target="_blank" rel="noopener noreferrer" className="project-link">Ariya-Dice</a></p>
          </div>
        </header>

        <main>
          <Section title={t.profile}>
            <p className="text-lg">
              <BoldText text={t.profileText} />
            </p>
          </Section>

          <Section title={t.languageProficiency}>
            <ul className="list-disc space-y-2" style={{ paddingInlineStart: '20px' }}>
              <li><BoldText text={t.englishLevel} /></li>
              <li><BoldText text={t.turkishLevel} /></li>
            </ul>
          </Section>

          <Section title={t.skills}>
            <div className="skill-list space-y-2">
              <p><BoldText text={t.programmingLanguages} /></p>
              <p><BoldText text={t.frontend} /></p>
              <p><BoldText text={t.backend} /></p>
              <p><BoldText text={t.blockchainWeb3} /></p>
              <p><BoldText text={t.database} /></p>
              <p><BoldText text={t.developmentTools} /></p>
              <p><BoldText text={t.otherSkills} /></p>
            </div>
          </Section>

          <Section title={t.projects}>
            {projects.map(p => (
              <ProjectCard
                key={p.id}
                title={t[p.id as keyof typeof t]}
                description={t[`${p.id}Desc` as keyof typeof t]}
                link={p.link}
                viewProjectText={t.viewProject}
              />
            ))}
          </Section>
        </main>
      </div>
    </>
  );
}