// lib/translations.ts

// Define a type for the translation object structure
export type TranslationContent = {
  name: string;
  title: string;
  emailLabel: string;
  email: string;
  phoneLabel: string;
  phone: string;
  githubLabel: string;
  github: string;
  profile: string;
  profileText: string;
  languageProficiency: string;
  englishLevel: string;
  turkishLevel: string;
  skills: string;
  programmingLanguages: string;
  frontend: string;
  backend: string;
  blockchainWeb3: string;
  database: string;
  developmentTools: string;
  otherSkills: string;
  projects: string;
  viewProject: string;
  p1: string;
  p1Desc: string;
  p2: string;
  p2Desc: string;
  p3: string;
  p3Desc: string;
  p4: string;
  p4Desc: string;
  button: string;

  // Web3 Game Development Services
  web3DevServicesTitle: string;
  web3DevServicesOverview: string;
  web3DevServicesDescription: string;
  myServicesInclude: string;
  serviceSmartContract: string;
  serviceFrontend: string;
  serviceWalletIntegration: string;
  serviceBackend: string;
  serviceAdminDashboard: string;
  serviceDeployment: string;
  serviceSourceCode: string;
  developmentPackagesTitle: string;
  packageDescription: string;
  deliveryTime: string;
  revisions: string;
  includes: string;
  price: string; // <-- This is the key that TypeScript was complaining about

  // Starter Package
  starterPackageTitle: string;
  starterPackageTagline: string;
  starterPackagePrice: string;
  starterPackageDelivery: string;
  starterPackageRevisions: string;
  starterPackageIncludes1: string;
  starterPackageIncludes2: string;
  starterPackageIncludes3: string;
  starterPackageIncludes4: string;

  // Professional Package
  professionalPackageTitle: string;
  professionalPackageTagline: string;
  professionalPackagePrice: string;
  professionalPackageDelivery: string;
  professionalPackageRevisions: string;
  professionalPackageIncludes1: string;
  professionalPackageIncludes2: string;
  professionalPackageIncludes3: string;
  professionalPackageIncludes4: string;

  // Ultimate Package
  ultimatePackageTitle: string;
  ultimatePackageTagline: string;
  ultimatePackagePrice: string;
  ultimatePackageDelivery: string;
  ultimatePackageRevisions: string;
  ultimatePackageIncludes1: string;
  ultimatePackageIncludes2: string;
  ultimatePackageIncludes3: string;
  ultimatePackageIncludes4: string;
  ultimatePackageIncludes5: string;
  ultimatePackageIncludes6: string;

  // Specialized Service: Decentralized Payment Gateway
  specializedServiceTitle: string;
  specializedServiceDescription: string;
  specializedServiceFeatures: string;
  specializedServiceFeatures2: string;
  specializedServiceSecurity: string;
  specializedServicePrice: string;

  // What I need to start
  whatINeedToStartTitle: string;
  whatINeedToStart1: string;
  whatINeedToStart2: string;
  whatINeedToStart3: string;
  readyToStart: string;
};

export const translations: { en: TranslationContent; fa: TranslationContent } = {
  en: {
    // ... (Your existing English translations here)
    name: "Saeed Abdollahiyan",
    title: "Full-Stack & Web3 Developer",
    emailLabel: "Email",
    email: "abdollahiyansaeed@gmail.com",
    phoneLabel: "Phone",
    phone: "+989368013251",
    githubLabel: "GitHub",
    github: "Ariya-Dice",
    profile: "Profile Summary",
    profileText: "A highly motivated self-taught developer with a strong aptitude for innovative solutions, especially in Web3 and cryptocurrency. Proficient in leveraging AI tools to enhance productivity across various programming languages. Possesses a deep understanding of blockchain technology and cryptographic protocols on networks like Ethereum, Binance Smart Chain, Solana, Tron, and Bitcoin. A quick learner and highly adaptable to new technologies and languages. Experienced in developing full-stack applications using React.js, Next.js, Node.js, and NestJS. Eager to collaborate on challenging development projects and provide efficient, logical solutions.",
    languageProficiency: "Language Proficiency",
    englishLevel: "**English:** Good proficiency in reading and understanding. Able to communicate effectively for work purposes, utilizing AI tools to enhance speaking capabilities.",
    turkishLevel: "**Turkish:** Good proficiency in reading and understanding. Able to communicate for work purposes, utilizing AI tools to enhance speaking capabilities.",
    skills: "Technical Skills",
    programmingLanguages: "**Programming Languages:** JavaScript (ES6+), TypeScript, Solidity",
    frontend: "**Frontend:** React.js, Next.js, Tailwind CSS, Radix UI, HTML, CSS, Vite",
    backend: "**Backend:** Node.js, NestJS, Express.js",
    blockchainWeb3: "**Blockchain & Web3:** Smart Contract Development (Ethereum, BSC, Solana), Cryptocurrency Wallet Integration (WalletConnect, MetaMask), Ethers.js and Web3Modal, DeFi & NFT Concepts",
    database: "**Databases:** PostgreSQL (TypeORM), MongoDB",
    developmentTools: "**Development Tools:** Git, GitHub, Remix, Hardhat, Truffle, Vercel",
    otherSkills: "**Other Skills:** RESTful API Design & Development, Scalable Application Development, AI Tools in Development, Problem Solving, Rapid Learning",
    projects: "Selected Projects",
    viewProject: "View Project →",
    p1: "DayPay – Decentralized Crypto Payment System",
    p1Desc: "A decentralized payment platform enabling secure, seamless transactions with 20+ top cryptocurrencies. Features real-time data fetching from external APIs, QR code generation, and WalletConnect integration.",
    p2: "Blockchain Snakes and Ladders Game",
    p2Desc: "An on-chain competitive multiplayer game developed on the BNB Testnet using smart contracts. Features a dual random dice roll system, 'antidote' mechanics, and an NFT-based reward system.",
    p3: "Admin Panel Development",
    p3Desc: "Designed and developed a modern React-based dashboard for managing users, requests, and system statistics, with NestJS on the backend.",
    p4: "Online Service Marketplace",
    p4Desc: "Developed an online service marketplace with features like location-based service matching, user authentication, and a payment system, designed for scalability and blockchain integration.",
    button: "فارسی",

    // Web3 Game Development Services
    web3DevServicesTitle: "Web3 Game & DApp Development Services",
    web3DevServicesOverview: "Transform your idea into a live Web3 game or decentralized application (DApp). I build **secure, engaging, and scalable on-chain experiences** for your community.",
    web3DevServicesDescription: "Leveraging expertise in Solidity, React/Next.js, and NestJS, I deliver high-quality, gas-optimized smart contracts connected to a modern, integrated user interface. Your project will feature seamless crypto wallet integration (MetaMask, WalletConnect), deployment on your preferred EVM-compatible network, and complete source code with transparent documentation.",
    myServicesInclude: "My services include:",
    serviceSmartContract: "Secure, gas-optimized **Smart Contracts** written in Solidity.",
    serviceFrontend: "Modern, responsive **Frontend** using React.js or Next.js.",
    serviceWalletIntegration: "Seamless **Wallet Integration** (MetaMask, WalletConnect, and more).",
    serviceBackend: "Scalable **Backend API** (Node.js/NestJS) for complex logic (in Professional & Ultimate packages).",
    serviceAdminDashboard: "User-friendly **Admin Dashboard** for management and monitoring.",
    serviceDeployment: "Full **Testnet Deployment** and optional Mainnet support.",
    serviceSourceCode: "Complete **Source Code** and post-delivery guidance.",
    developmentPackagesTitle: "My Development Packages:",
    packageDescription: "I offer three packages tailored to your project's needs, from a simple MVP to a complete application.",
    deliveryTime: "Delivery Time",
    revisions: "Revisions",
    includes: "Includes:",
    price: "Price", // <--- Make sure this is directly here

    // Starter Package
    starterPackageTitle: "Starter (MVP)",
    starterPackageTagline: "Ideal for testing an idea or launching a simple on-chain game.",
    starterPackagePrice: "$450",
    starterPackageDelivery: "7-10 Days",
    starterPackageRevisions: "2",
    starterPackageIncludes1: "Custom smart contract (for core game logic).",
    starterPackageIncludes2: "Simple Web3 frontend (1-3 pages).",
    starterPackageIncludes3: "Wallet connection.",
    starterPackageIncludes4: "Testnet deployment.",

    // Professional Package
    professionalPackageTitle: "Professional (DApp)",
    professionalPackageTagline: "Most popular choice for building a full, powerful application.",
    professionalPackagePrice: "$850",
    professionalPackageDelivery: "14-20 Days",
    professionalPackageRevisions: "3",
    professionalPackageIncludes1: "All Starter package items +",
    professionalPackageIncludes2: "Node.js/NestJS backend for off-chain logic.",
    professionalPackageIncludes3: "Database integration (PostgreSQL or MongoDB).",
    professionalPackageIncludes4: "Basic admin dashboard (for users/data overview).",

    // Ultimate Package
    ultimatePackageTitle: "Ultimate (On-Chain)",
    ultimatePackageTagline: "For large projects requiring advanced features and full support.",
    ultimatePackagePrice: "Starting from $1500",
    ultimatePackageDelivery: "25+ Days (depending on project)",
    ultimatePackageRevisions: "4",
    ultimatePackageIncludes1: "All Professional package items +",
    ultimatePackageIncludes2: "Advanced smart contract features (e.g., token reward system, NFT mechanisms).",
    ultimatePackageIncludes3: "Custom, high-quality UI/UX design.",
    ultimatePackageIncludes4: "Advanced admin panel with analytics.",
    ultimatePackageIncludes5: "Full Mainnet deployment and support.",
    ultimatePackageIncludes6: "Comprehensive technical documentation.",

    // Specialized Service: Decentralized Payment Gateway
    specializedServiceTitle: "Specialized Service: Decentralized Payment Gateway",
    specializedServiceDescription: "Need to accept crypto payments on your current website or app? I can implement a secure, multi-chain payment solution for you.",
    specializedServiceFeatures: "Accept payments with 20+ top cryptocurrencies (BTC, ETH, BNB, SOL, etc.).",
    specializedServiceFeatures2: "Instant price conversion, QR code generation, WalletConnect integration.",
    specializedServiceSecurity: "Fully decentralized, runs on the user's device for maximum privacy.",
    specializedServicePrice: "Starting from $400 (depending on complexity).",

    // What I need to start
    whatINeedToStartTitle: "What I need from you to start?",
    whatINeedToStart1: "A clear description of your game idea or desired mechanics.",
    whatINeedToStart2: "Your target blockchain (e.g., BSC, Polygon, Arbitrum).",
    whatINeedToStart3: "Design preferences or branding files (optional).",
    readyToStart: "Ready to start? Message me to discuss your project!",
  },
  fa: {
    // ... (Your existing Persian translations here)
    name: "سعید عبداللهیان",
    title: "توسعه‌دهنده فول‌استک و Web3",
    emailLabel: "ایمیل",
    email: "abdollahiyansaeed@gmail.com",
    phoneLabel: "تلفن",
    phone: "+989368013251",
    githubLabel: "گیت‌هاب",
    github: "Ariya-Dice",
    profile: "خلاصه‌ی توانمندی‌ها",
    profileText: "یک توسعه‌دهنده خودآموز با انگیزه و توانایی بالا در ارائه راهکارهای نوآورانه، به‌ویژه در حوزه‌ی Web3 و کریپتوکارنسی. مسلط به استفاده از ابزارهای هوش مصنوعی برای افزایش بهره‌وری در فرآیند توسعه و دارای مهارت در زبان‌های برنامه‌نویسی مختلف. دارای درک عمیق از فناوری بلاکچین و پروتکل‌های رمزنگاری در شبکه‌هایی نظیر اتریوم، بایننس اسمارت چین، سولانا، ترون و بیت‌کوین. یادگیرنده‌ای سریع و توانمند در انطباق با فناوری‌ها و زبان‌های جدید. دارای تجربه در توسعه برنامه‌های کاربردی فول‌استک با استفاده از React.js، Next.js، Node.js و NestJS. علاقه‌مند به همکاری در پروژه‌های توسعه‌ای چالش‌برانگیز و ارائه راهکارهای کارآمد و منطقی.",
    languageProficiency: "تسلط بر زبان‌ها",
    englishLevel: "**انگلیسی:** تسلط خوب در خواندن و درک مطلب. توانایی برقراری ارتباط موثر برای اهداف کاری، با استفاده از ابزارهای هوش مصنوعی برای بهبود توانایی‌های گفتاری.",
    turkishLevel: "**ترکی استانبولی:** تسلط خوب در خواندن و درک مطلب. توانایی برقراری ارتباط برای اهداف کاری، با استفاده از ابزارهای هوش مصنوعی برای بهبود توانایی‌های گفتاری.",
    skills: "مهارت‌های فنی",
    programmingLanguages: "**زبان‌های برنامه‌نویسی:** JavaScript (ES6+), TypeScript, Solidity",
    frontend: "**فرانت‌اند:** React.js, Next.js, Tailwind CSS, Radix UI, HTML, CSS, Vite",
    backend: "**بک‌اند:** Node.js, NestJS, Express.js",
    blockchainWeb3: "**بلاکچین و Web3:** توسعه قراردادهای هوشمند (Ethereum, BSC, Solana), یکپارچه‌سازی با کیف پول‌های رمزارزی (WalletConnect, MetaMask), کار با Ethers.js و Web3Modal, آشنایی با مفاهیم DeFi و NFT",
    database: "**پایگاه داده:** PostgreSQL (TypeORM), MongoDB",
    developmentTools: "**ابزارهای توسعه:** Git, GitHub, Remix, Hardhat, Truffle, Vercel",
    otherSkills: "**سایر مهارت‌ها:** طراحی و توسعه APIهای RESTful, توسعه برنامه‌های کاربردی مقیاس‌پذیر, استفاده از ابزارهای هوش مصنوعی در توسعه, حل مسئله, یادگیری سریع",
    projects: "پروژه‌های منتخب",
    viewProject: "مشاهده پروژه →",
    p1: "DayPay – سیستم پرداخت غیرمتمرکز کریپتو",
    p1Desc: "پلتفرم پرداخت غیرمتمرکزی که امکان تراکنش‌های امن و یکپارچه را با استفاده از بیش از 20 ارز دیجیتال برتر فراهم می‌کند. دارای قابلیت دریافت داده لحظه‌ای از APIهای خارجی، تولید کد QR و یکپارچه‌سازی WalletConnect.",
    p2: "بازی مار و پله بلاک‌چینی",
    p2Desc: "بازی چندنفره رقابتی On-chain توسعه یافته بر روی BNB Testnet با استفاده از قراردادهای هوشمند. دارای سیستم پرتاب تاس تصادفی دوگانه، مکانیک «پادزهر» و سیستم پاداش مبتنی بر NFT.",
    p3: "پنل مدیریت",
    p3Desc: "طراحی و توسعه یک داشبورد مدیریت مدرن مبتنی بر React برای مدیریت کاربران، درخواست‌ها و آمارهای سیستم با استفاده از NestJS در بک‌اند.",
    p4: "بازار خدمات آنلاین",
    p4Desc: "توسعه یک بازار خدمات آنلاین با ویژگی‌هایی مانند تطبیق خدمات بر اساس موقعیت مکانی، احراز هویت کاربر و سیستم پرداخت با طراحی برای مقیاس‌پذیری و ادغام با فناوری بلاکچین.",
    button: "English",

    // Web3 Game Development Services
    web3DevServicesTitle: "خدمات توسعه بازی و اپلیکیشن غیرمتمرکز (Web3)",
    web3DevServicesOverview: "ایده خود را به یک بازی Web3 قابل بازی یا یک اپلیکیشن غیرمتمرکز (DApp) تبدیل کنید. من تجربیات **آن‌چین (on-chain) امن، جذاب و مقیاس‌پذیر** را برای جامعه شما می‌سازم.",
    web3DevServicesDescription: "با تخصص در Solidity، React/Next.js و NestJS، قراردادهای هوشمند باکیفیت و بهینه‌شده از نظر هزینه گس (gas) را به یک رابط کاربری مدرن و یکپارچه متصل می‌کنم. پروژه شما با کیف پول‌های کریپتو مانند MetaMask و WalletConnect یکپارچه شده و روی شبکه سازگار با EVM دلخواه شما مستقر می‌شود. سورس کد کامل و مستندات شفاف نیز همراه پروژه ارائه خواهد شد.",
    myServicesInclude: "خدمات من شامل موارد زیر است:",
    serviceSmartContract: "قرارداد هوشمند امن و بهینه‌شده با Solidity.",
    serviceFrontend: "فرانت‌اند مدرن و واکنش‌گرا (Responsive) با استفاده از React.js یا Next.js.",
    serviceWalletIntegration: "یکپارچه‌سازی کامل با کیف پول (MetaMask، WalletConnect و موارد دیگر).",
    serviceBackend: "API بک‌اند مقیاس‌پذیر (Node.js/NestJS) برای منطق‌های پیچیده (در پکیج‌های حرفه‌ای و نهایی).",
    serviceAdminDashboard: "داشبورد ادمین کاربرپسند برای مدیریت و نظارت.",
    serviceDeployment: "استقرار کامل روی شبکه آزمایشی (Testnet) و پشتیبانی از شبکه اصلی (Mainnet) به صورت اختیاری.",
    serviceSourceCode: "ارائه سورس کد کامل و راهنمایی پس از تحویل.",
    developmentPackagesTitle: "پکیج‌های توسعه من:",
    packageDescription: "من سه پکیج متناسب با نیازهای پروژه شما ارائه می‌دهم؛ از یک MVP ساده تا یک اپلیکیشن کامل.",
    deliveryTime: "زمان تحویل",
    revisions: "تعداد بازبینی",
    includes: "شامل:",
    price: "قیمت", // <--- Make sure this is directly here

    // Starter Package
    starterPackageTitle: "بسته شروع (Starter MVP)",
    starterPackageTagline: "ایده‌آل برای تست یک ایده یا راه‌اندازی یک بازی آن‌چین ساده.",
    starterPackagePrice: "۴۵۰ دلار",
    starterPackageDelivery: "۷-۱۰ روز",
    starterPackageRevisions: "۲",
    starterPackageIncludes1: "قرارداد هوشمند سفارشی (برای منطق اصلی بازی).",
    starterPackageIncludes2: "فرانت‌اند ساده Web3 (۱ تا ۳ صفحه).",
    starterPackageIncludes3: "اتصال به کیف پول.",
    starterPackageIncludes4: "استقرار روی Testnet.",

    // Professional Package
    professionalPackageTitle: "بسته حرفه‌ای (Professional DApp)",
    professionalPackageTagline: "محبوب‌ترین انتخاب برای ساخت یک اپلیکیشن کامل و قدرتمند.",
    professionalPackagePrice: "۸۵۰ دلار",
    professionalPackageDelivery: "۱۴-۲۰ روز",
    professionalPackageRevisions: "۳",
    professionalPackageIncludes1: "تمام موارد بسته شروع +",
    professionalPackageIncludes2: "بک‌اند Node.js/NestJS برای منطق‌های آف‌چین.",
    professionalPackageIncludes3: "یکپارچه‌سازی با دیتابیس (PostgreSQL یا MongoDB).",
    professionalPackageIncludes4: "داشبورد ادمین پایه (برای مشاهده کلی کاربران/داده‌ها).",

    // Ultimate Package
    ultimatePackageTitle: "بسته نهایی (Ultimate On-Chain)",
    ultimatePackageTagline: "برای پروژه‌های بزرگ که نیازمند ویژگی‌های پیشرفته و پشتیبانی کامل هستند.",
    ultimatePackagePrice: "شروع از ۱۵۰۰ دلار",
    ultimatePackageDelivery: "۲۵+ روز (بسته به پروژه)",
    ultimatePackageRevisions: "۴",
    ultimatePackageIncludes1: "تمام موارد بسته حرفه‌ای +",
    ultimatePackageIncludes2: "ویژگی‌های پیشرفته قرارداد هوشمند (مانند سیستم پاداش توکن، مکانیزم‌های NFT).",
    ultimatePackageIncludes3: "طراحی رابط کاربری (UI/UX) سفارشی و باکیفیت.",
    ultimatePackageIncludes4: "پنل ادمین پیشرفته به همراه سیستم تحلیل آمار.",
    ultimatePackageIncludes5: "استقرار کامل روی شبکه اصلی (Mainnet) و پشتیبانی.",
    ultimatePackageIncludes6: "مستندات فنی کامل.",

    // Specialized Service: Decentralized Payment Gateway
    specializedServiceTitle: "سرویس تخصصی: درگاه پرداخت غیرمتمرکز",
    specializedServiceDescription: "آیا نیاز دارید که در وب‌سایت یا اپلیکیشن فعلی خود پرداخت‌های کریپتو را بپذیرید؟ من می‌توانم یک راهکار پرداخت امن و چند-زنجیره‌ای برای شما پیاده‌سازی کنم.",
    specializedServiceFeatures: "پذیرش پرداخت با بیش از ۲۰ ارز دیجیتال برتر (BTC, ETH, BNB, SOL و ...).",
    specializedServiceFeatures2: "تبدیل آنی قیمت، ساخت QR کد، یکپارچه‌سازی با WalletConnect.",
    specializedServiceSecurity: "کاملاً غیرمتمرکز است و برای حداکثر حریم خصوصی، روی دستگاه کاربر اجرا می‌شود.",
    specializedServicePrice: "شروع از ۴۰۰ دلار (بسته به پیچیدگی پروژه شما).",

    // What I need to start
    whatINeedToStartTitle: "برای شروع به چه اطلاعاتی از شما نیاز دارم؟",
    whatINeedToStart1: "توضیح شفافی از ایده بازی یا مکانیزم‌های مورد نظر شما.",
    whatINeedToStart2: "بلاکچین هدف شما (مثلاً BSC، Polygon، Arbitrum).",
    whatINeedToStart3: "ترجیحات طراحی یا فایل‌های مربوط به برند شما (اختیاری).",
    readyToStart: "آماده شروع هستید؟ به من پیام بدهید تا در مورد پروژه شما صحبت کنیم!",
  }
};