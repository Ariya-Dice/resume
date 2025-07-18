// app/page.tsx

"use client"; // این همچنان باید یک Client Component باشه به خاطر مدیریت زبان و useState

import { useState, useEffect } from "react";

// You can move this to a separate file like `lib/translations.ts`
const translations = {
    en: {
        name: "Saeed Abdollahiyan",
        title: "Full-Stack & Web3 Developer",
        emailLabel: "Email",
        phoneLabel: "Phone",
        githubLabel: "GitHub",
        profile: "Profile Summary",
        profileText: "A highly motivated self-taught developer with a strong aptitude for innovative solutions, especially in Web3 and cryptocurrency. Proficient in leveraging AI tools to enhance productivity across various programming languages. Possesses a deep understanding of blockchain technology and cryptographic protocols. Quick learner and eager to adapt to new technologies and languages. Eager to contribute to challenging development projects.",
        languageProficiency: "Language Proficiency",
        englishLevel: "**English:** Good proficiency in reading and understanding. Able to communicate effectively for work purposes, utilizing AI tools to enhance speaking capabilities.",
        turkishLevel: "**Turkish:** Good proficiency in reading and understanding. Able to communicate for work purposes, utilizing AI tools to enhance speaking capabilities.",
        skills: "Technical Skills",
        projects: "Selected Projects",
        p1: "DayPay – Decentralized Crypto Payment System",
        p1Desc: "A decentralized payment platform enabling secure, seamless transactions with 20+ top cryptocurrencies (Bitcoin, Ethereum, BNB, Solana, Tron). Operates locally for maximum privacy. Features real-time data fetching from external APIs, QR code generation, and secure WalletConnect integration. Future plans include smart contract-based stablecoin conversion.",
        p2: "Blockchain Snakes and Ladders Game",
        p2Desc: "An on-chain competitive multiplayer game developed on the BNB Testnet using smart contracts. Features a dual-system (app and smart contract) random dice roll for fairness, 'antidote' mechanics, and an NFT-based reward system. Full smart contract management ensures transparent game flow and prize distribution.",
        p3: "Admin Panel Development",
        p3Desc: "Designed and developed a modern React-based dashboard for efficient management of users, requests, and system statistics. Includes robust authentication mechanisms and a scalable architecture for future enhancements.",
        p4: "Confidential Online Service Marketplace",
        p4Desc: "Developed a specialized online service marketplace focused on connecting users with various service providers. This platform includes advanced features such as location-based service matching, secure user verification, and a robust payment system designed for scalability and future blockchain integration.",
        button: "فارسی"
    },
    fa: {
        name: "سعید عبداللهیان",
        title: "توسعه‌دهنده فول‌استک و وب۳",
        emailLabel: "ایمیل",
        phoneLabel: "تلفن",
        githubLabel: "گیت‌هاب",
        profile: "خلاصه‌ی توانمندی‌ها",
        profileText: "یک توسعه‌دهنده خودآموز و با انگیزه بالا با سابقه‌ی اثبات شده در خلق راهکارهای نوآورانه، به‌ویژه در حوزه‌ی Web3 و کریپتوکارنسی. مسلط به استفاده از ابزارهای هوش مصنوعی برای افزایش بهره‌وری و توانایی کار با اکثر زبان‌های برنامه‌نویسی. دارای درک عمیق از فناوری بلاکچین و پروتکل‌های رمزنگاری. یادگیرنده‌ای سریع و مشتاق به وفق‌پذیری با فناوری‌ها و زبان‌های جدید. مشتاق به همکاری در پروژه‌های چالش‌برانگیز توسعه.",
        languageProficiency: "تسلط بر زبان‌ها",
        englishLevel: "**انگلیسی:** تسلط خوب در خواندن و درک مطلب. توانایی برقراری ارتباط موثر برای اهداف کاری، با استفاده از ابزارهای هوش مصنوعی برای بهبود توانایی‌های گفتاری.",
        turkishLevel: "**ترکی استانبولی:** تسلط خوب در خواندن و درک مطلب. توانایی برقراری ارتباط برای اهداف کاری، با استفاده از ابزارهای هوش مصنوعی برای بهبود توانایی‌های گفتاری.",
        skills: "مهارت‌های فنی",
        projects: "پروژه‌های منتخب",
        p1: "DayPay – سیستم پرداخت غیرمتمرکز کریپتو",
        p1Desc: "پلتفرم پرداخت غیرمتمرکز که امکان تراکنش‌های امن و یکپارچه را با استفاده از بیش از 20 ارز دیجیتال برتر فراهم می‌کند. به‌صورت محلی برای حداکثر حریم خصوصی عمل می‌کند. دارای قابلیت دریافت داده لحظه‌ای از APIهای خارجی، تولید کد QR و یکپارچه‌سازی امن WalletConnect. برنامه‌های آتی شامل تبدیل استیبل‌کوین مبتنی بر قرارداد هوشمند است.",
        p2: "بازی مار و پله بلاک‌چینی",
        p2Desc: "یک بازی چندنفره رقابتی On-chain توسعه یافته بر روی BNB Testnet با استفاده از قراردادهای هوشمند. دارای سیستم پرتاب تاس تصادفی دوگانه (اپلیکیشن و قرارداد هوشمند) برای عدالت، مکانیک «پادزهر» و سیستم پاداش مبتنی بر NFT. مدیریت کامل قرارداد هوشمند، جریان شفاف بازی و توزیع جوایز را تضمین می‌کند.",
        p3: "توسعه پنل مدیریت",
        p3Desc: "طراحی و توسعه یک داشبورد مدرن مبتنی بر React برای مدیریت کارآمد کاربران، درخواست‌ها و آمارهای سیستم. شامل مکانیسم‌های احراز هویت قوی و یک معماری مقیاس‌پذیر برای بهبودهای آتی.",
        p4: "بازار خدمات آنلاین",
        p4Desc: "توسعه یک بازار خدمات آنلاین تخصصی با تمرکز بر اتصال کاربران به ارائه‌دهندگان خدمات مختلف. این پلتفرم شامل ویژگی‌های پیشرفته‌ای مانند تطبیق خدمات بر اساس موقعیت مکانی، احراز هویت امن کاربر، و یک سیستم پرداخت قوی طراحی شده برای مقیاس‌پذیری و یکپارچه‌سازی بلاکچین در آینده است.",
        button: "English"
    }
};

// A helper component to parse simple markdown like **bold**
const BoldText = ({ text }: { text: string }) => {
    const parts = text.split(/\*\*(.*?)\*\*/g);
    return (
        <>
            {parts.map((part, i) =>
                i % 2 === 1 ? <strong key={i}>{part}</strong> : part
            )}
        </>
    );
};


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

    return (
        <div className="max-w-4xl mx-auto resume-container rounded-lg p-6 md:p-10">
            <div className="flex flex-col md:flex-row justify-between items-center mb-8">
                <div className={`text-center mb-4 md:mb-0 ${lang === 'fa' ? 'md:text-right' : 'md:text-left'}`}>
                    <h1 className="text-4xl font-extrabold mb-2">{t.name}</h1>
                    <h2 className="text-xl font-semibold">{t.title}</h2>
                </div>
                <div className={`text-center ${lang === 'fa' ? 'md:text-left' : 'md:text-right'}`}>
                    <button onClick={toggleLang} className="lang-toggle-button px-4 py-2 rounded-md border hover:opacity-80 transition-opacity">
                        {t.button}
                    </button>
                    <p className="mt-2">{t.emailLabel}: <a href="mailto:abdollahiyansaeed@gmail.com" className="project-link">abdollahiyansaeed@gmail.com</a></p>
                    <p>{t.phoneLabel}: <a href="tel:+989368013251" className="project-link ltr" style={{ unicodeBidi: 'isolate', direction: 'ltr', display: 'inline-block' }}>+98 936 801 3251</a></p>
                    <p>{t.githubLabel}: <a href="https://github.com/Ariya-Dice" target="_blank" rel="noopener noreferrer" className="project-link">Ariya-Dice</a></p>
                </div>
            </div>

            <section className="mb-8">
                <h3 className="section-title">{t.profile}</h3>
                <p className="text-lg">
                    <BoldText text={t.profileText} />
                </p>
            </section>

            <section className="mb-8">
                <h3 className="section-title">{t.languageProficiency}</h3>
                <ul className="list-disc pl-5">
                    <li><BoldText text={t.englishLevel} /></li>
                    <li><BoldText text={t.turkishLevel} /></li>
                </ul>
            </section>

            <section className="mb-8">
                <h3 className="section-title">{t.skills}</h3>
                <div className="skill-list">
                    <span className="skill-tag">JavaScript</span>
                    <span className="skill-tag">TypeScript</span>
                    <span className="skill-tag">React.js</span>
                    <span className="skill-tag">Next.js</span>
                    <span className="skill-tag">Web3</span>
                    <span className="skill-tag">Solidity</span>
                    <span className="skill-tag">Blockchain (Ethereum, BSC, Solana, Tron, Bitcoin)</span>
                    <span className="skill-tag">AI in Development</span>
                </div>
            </section>

            <section>
                <h3 className="section-title">{t.projects}</h3>

                <div className="mb-6 pb-4 border-b border-gray-200 last:border-b-0">
                    <h4 className="project-title">{t.p1}</h4>
                    <p className="project-description"><BoldText text={t.p1Desc} /></p>
                    <a href="https://daypay.vercel.app/" target="_blank" rel="noopener noreferrer" className="project-link">View Project &rarr;</a>
                </div>

                <div className="mb-6 pb-4 border-b border-gray-200 last:border-b-0">
                    <h4 className="project-title">{t.p2}</h4>
                    <p className="project-description"><BoldText text={t.p2Desc} /></p>
                </div>

                <div className="mb-6 pb-4 border-b border-gray-200 last:border-b-0">
                    <h4 className="project-title">{t.p3}</h4>
                    <p className="project-description"><BoldText text={t.p3Desc} /></p>
                </div>

                <div className="mb-6 pb-4 border-b border-gray-200 last:border-b-0">
                    <h4 className="project-title">{t.p4}</h4>
                    <p className="project-description"><BoldText text={t.p4Desc} /></p>
                </div>
            </section>
        </div>
    );
}