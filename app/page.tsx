// app/page.tsx

"use client";

import { useState, useEffect } from "react";
import { translations } from "@/lib/translations";
import { BoldText, Section, ProjectCard } from "@/components/Resume";
import CanvasEffect from '@/components/CanvasEffect';

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

          {/* Updated Section for Web3 Game Development Services */}
          <Section title={t.web3DevServicesTitle}>
            <p className="text-lg mb-4">
              <BoldText text={t.web3DevServicesOverview} />
            </p>
            <p className="mb-6">{t.web3DevServicesDescription}</p>

            <h3 className="text-xl font-bold mb-3">{t.myServicesInclude}</h3>
            <ul className="list-disc ml-5 space-y-2 mb-8">
              <li>{t.serviceSmartContract}</li>
              <li>{t.serviceFrontend}</li>
              <li>{t.serviceWalletIntegration}</li>
              <li>{t.serviceBackend}</li>
              <li>{t.serviceAdminDashboard}</li>
              <li>{t.serviceDeployment}</li>
              <li>{t.serviceSourceCode}</li>
            </ul>

            <h2 className="text-3xl font-bold mb-6">{t.developmentPackagesTitle}</h2>
            <p className="text-lg mb-4">{t.packageDescription}</p>


            <div className="space-y-6">
              {/* Starter Package */}
              <div className="border p-4 rounded-lg shadow-sm bg-gradient-to-r from-blue-50 to-blue-100">
                <h3 className="text-2xl font-bold mb-2 text-blue-700">🟢 {t.starterPackageTitle} - {t.starterPackagePrice}</h3>
                <p className="text-lg mb-3">({t.starterPackageTagline})</p>
                <ul className="list-disc ml-5 space-y-1">
                  <li>{t.deliveryTime}: <span className="font-semibold">{t.starterPackageDelivery}</span></li>
                  <li>{t.revisions}: <span className="font-semibold">{t.starterPackageRevisions}</span></li>
                  <li>{t.includes}</li>
                  <ul className="list-circle ml-8">
                    <li>{t.starterPackageIncludes1}</li>
                    <li>{t.starterPackageIncludes2}</li>
                    <li>{t.starterPackageIncludes3}</li>
                    <li>{t.starterPackageIncludes4}</li>
                  </ul>
                </ul>
              </div>

              {/* Professional Package */}
              <div className="border p-4 rounded-lg shadow-sm bg-gradient-to-r from-yellow-50 to-yellow-100">
                <h3 className="text-2xl font-bold mb-2 text-yellow-700">🟡 {t.professionalPackageTitle} - {t.professionalPackagePrice}</h3>
                <p className="text-lg mb-3">({t.professionalPackageTagline})</p>
                <ul className="list-disc ml-5 space-y-1">
                  <li>{t.deliveryTime}: <span className="font-semibold">{t.professionalPackageDelivery}</span></li>
                  <li>{t.revisions}: <span className="font-semibold">{t.professionalPackageRevisions}</span></li>
                  <li>{t.includes}</li>
                  <ul className="list-circle ml-8">
                    <li>{t.professionalPackageIncludes1}</li>
                    <li>{t.professionalPackageIncludes2}</li>
                    <li>{t.professionalPackageIncludes3}</li>
                    <li>{t.professionalPackageIncludes4}</li>
                  </ul>
                </ul>
              </div>

              {/* Ultimate Package */}
              <div className="border p-4 rounded-lg shadow-sm bg-gradient-to-r from-red-50 to-red-100">
                <h3 className="text-2xl font-bold mb-2 text-red-700">🔵 {t.ultimatePackageTitle} - {t.ultimatePackagePrice}</h3>
                <p className="text-lg mb-3">({t.ultimatePackageTagline})</p>
                <ul className="list-disc ml-5 space-y-1">
                  <li>{t.deliveryTime}: <span className="font-semibold">{t.ultimatePackageDelivery}</span></li>
                  <li>{t.revisions}: <span className="font-semibold">{t.ultimatePackageRevisions}</span></li>
                  <li>{t.includes}</li>
                  <ul className="list-circle ml-8">
                    <li>{t.ultimatePackageIncludes1}</li>
                    <li>{t.ultimatePackageIncludes2}</li>
                    <li>{t.ultimatePackageIncludes3}</li>
                    <li>{t.ultimatePackageIncludes4}</li>
                    <li>{t.ultimatePackageIncludes5}</li>
                    <li>{t.ultimatePackageIncludes6}</li>
                  </ul>
                </ul>
              </div>

              {/* Specialized Service: Decentralized Payment Gateway */}
              <div className="border p-4 rounded-lg shadow-sm bg-gradient-to-r from-purple-50 to-purple-100">
                <h3 className="text-2xl font-bold mb-3">⭐ {t.specializedServiceTitle}</h3>
                <p className="text-lg mb-3">{t.specializedServiceDescription}</p>
                <ul className="list-disc ml-5 space-y-1 mb-3">
                  <li>{t.specializedServiceFeatures}</li>
                  <li>{t.specializedServiceFeatures2}</li>
                  <li>{t.specializedServiceSecurity}</li>
                </ul>
                <p className="text-xl font-bold">{t.price}: <span className="text-green-600">{t.specializedServicePrice}</span></p>
              </div>

              {/* What I need to start Section */}
              <div className="border p-4 rounded-lg shadow-sm bg-gray-50">
                <h3 className="text-2xl font-bold mb-3">{t.whatINeedToStartTitle}</h3>
                <ul className="list-disc ml-5 space-y-1">
                  <li>{t.whatINeedToStart1}</li>
                  <li>{t.whatINeedToStart2}</li>
                  <li>{t.whatINeedToStart3}</li>
                </ul>
                <p className="text-lg font-semibold mt-4">{t.readyToStart}</p>
              </div>
            </div>
          </Section>
        </main>
      </div>
    </>
  );
}