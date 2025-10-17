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
  twitterLabel: string;
  twitter: string;
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
  p1Link: string;
  p1Desc: string;
  p2: string;
  p2Link: string;
  p2Desc: string;
  p3: string;
  p3Link: string;
  p3Desc: string;
  p4: string;
  p4Link: string;
  p4Desc: string;
  p5: string;
  p5Link: string;
  p5Desc: string;
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

  // Starter Package
  starterPackageTitle: string;
  // New: Add starterPackagePrice
  starterPackagePrice: string;
  starterPackageTagline: string;
  starterPackageRevisions: string;
  starterPackageIncludes1: string;
  starterPackageIncludes2: string;
  starterPackageIncludes3: string;
  starterPackageIncludes4: string;

  // Professional Package
  professionalPackageTitle: string;
  // New: Add professionalPackagePrice
  professionalPackagePrice: string;
  professionalPackageTagline: string;
  professionalPackageRevisions: string;
  professionalPackageIncludes1: string;
  professionalPackageIncludes2: string;
  professionalPackageIncludes3: string;
  professionalPackageIncludes4: string;

  // Specialized Service: Decentralized Payment Gateway
  specializedServiceTitle: string;
  specializedServiceDescription: string;
  specializedServiceFeatures: string;
  specializedServiceFeatures2: string;
  specializedServiceSecurity: string;

  // What I need to start
  whatINeedToStartTitle: string;
  whatINeedToStart1: string;
  whatINeedToStart2: string;
  whatINeedToStart3: string;
  readyToStart: string;
};

export const translations: { en: TranslationContent; fa: TranslationContent } = {
  en: {
    name: "Saeed Abdollahiyan",
    title: "Full-Stack & Web3 Developer",
    emailLabel: "Email",
    email: "abdollahiyansaeed@gmail.com",
    phoneLabel: "Phone",
    phone: "+989368013251",
    githubLabel: "GitHub",
    github: "Ariya-Dice",
    twitterLabel: "X (Twitter)",
    twitter: "https://x.com/AriyaDice",
    profile: "Resume Summary",
    profileText: "I’m a self-taught software engineer.\n\nFor over 20 years, I’ve been fascinated by how software works — and occasionally, by its inefficiencies.\n\nEvery time I used a program and encountered bugs, inefficiencies, or opportunities for improvement, I couldn’t stop thinking about corrective solutions.\n\nThis relentless curiosity led me to learn programming, explore emerging technologies, and create solutions that are smoother, smarter, and more user-centric.\n\nFor me, software engineering goes beyond writing code; it’s an art for enhancing user experiences.\n\nDynamic self-taught developer focused on innovative Web3 and cryptocurrency solutions. Leveraging AI tools to optimize development workflows across diverse programming languages. Deep knowledge in blockchain technologies and cryptographic protocols on platforms such as Ethereum, Binance Smart Chain, Solana, Tron, and Bitcoin. Quick learner with high adaptability to emerging technologies. Proven track record in building scalable full-stack applications with React.js, Next.js, Node.js, and NestJS. Committed to delivering efficient solutions and eager for complex development challenges.",
    languageProficiency: "Language Proficiency",
    englishLevel: "**English:** Advanced skills in reading and comprehension. Proficiency in professional communication, enhanced by AI-based language tools for optimal verbal interactions.",
    turkishLevel: "**Turkish:** Advanced skills in reading and comprehension. Proficiency in professional communication, enhanced by AI-based language tools for optimal verbal interactions.",
    skills: "Technical Skills",
    programmingLanguages: "**Programming Languages:** JavaScript (ES6+), TypeScript, Solidity",
    frontend: "**Frontend:** React.js, Next.js, Tailwind CSS, Radix UI, HTML, CSS, Vite",
    backend: "**Backend:** Node.js, NestJS, Express.js",
    blockchainWeb3: "**Blockchain & Web3:** Smart Contract Development (Ethereum, BSC, Solana), Cryptocurrency Wallet Integration (WalletConnect, MetaMask), Ethers.js and Web3Modal, DeFi & NFT Protocols",
    database: "**Databases:** PostgreSQL (TypeORM), MongoDB",
    developmentTools: "**Development Tools:** Git, GitHub, Remix, Hardhat, Truffle, Vercel",
    otherSkills: "**Other Skills:** RESTful API Design & Development, Scalable Application Architecture, AI-Enhanced Development Practices, Advanced Problem Solving, Rapid Technology Adoption",
    projects: "Selected Projects",
    viewProject: "View Project →",
    p1: "DayPay – Decentralized Crypto Payment System",
    p1Link: "https://daypay.vercel.app/",
    p1Desc: "A powerful decentralized payment platform that supports secure and frictionless transactions with over 20 top cryptocurrencies. Includes real-time data retrieval from APIs, QR code generation, and WalletConnect integration for a superior user experience.",
    p2: "Blockchain Snakes and Ladders Game",
    p2Link: "https://snake-and-ladder-next.vercel.app/",
    p2Desc: "Innovative on-chain multiplayer game on BNB Testnet, using Solidity smart contracts. Includes dual random dice roll mechanics, antidote features, and an NFT reward ecosystem for engaging gameplay.",
    p3: "Admin Panel",
    p3Link: "",
    p3Desc: "Comprehensive React-based dashboard for user management, request processing, and system analytics, supported by NestJS API for seamless operations.",
    p4: "Online Service Marketplace",
    p4Link: "",
    p4Desc: "Scalable online marketplace platform with geolocation-based service matching, secure user authentication, and integrated payment processing, optimized for future blockchain upgrades.",
    p5: "DeviceBound Wallet",
    p5Link: "https://deviceboundwallet.vercel.app/",
    p5Desc: "A device-bound crypto wallet demo using passkeys (WebAuthn) for secure, device-tied sessions and a local-first UX.",
    button: "فارسی",

    // Web3 Game Development Services
    web3DevServicesTitle: "Web3 Game and Decentralized App Development Services",
    web3DevServicesOverview: "Elevate your idea to a production-ready Web3 game or decentralized app (DApp). I design **secure and scalable on-chain experiences** to attract and grow your community.",
    web3DevServicesDescription: "Building on proficiency in Solidity, React/Next.js, and NestJS, I create gas-optimized smart contracts integrated with intuitive user interfaces. Projects include cryptocurrency wallet connections (MetaMask, WalletConnect), deployment on EVM-compatible chains, and full source code delivery with detailed documentation for transparency and easy maintenance.",
    myServicesInclude: "Core services include:",
    serviceSmartContract: "Audited and gas-optimized smart contracts in Solidity.",
    serviceFrontend: "Visual and responsive frontend with React.js or Next.js.",
    serviceWalletIntegration: "Seamless wallet integration, including MetaMask, WalletConnect, and more.",
    serviceBackend: "Powerful backend API (Node.js/NestJS) for hybrid on-chain/off-chain functionalities (in professional and ultimate levels).",
    serviceAdminDashboard: "Visual admin dashboard for monitoring and control.",
    serviceDeployment: "Comprehensive deployment on Testnet with Mainnet readiness.",
    serviceSourceCode: "Full source code delivery and ongoing support guidance.",
    developmentPackagesTitle: "Custom Development Packages",
    packageDescription: "Flexible packages designed to match your project's scope.",

    // Starter Package
    starterPackageTitle: "Starter (MVP)",
    // New property added
    starterPackagePrice: "", 
    starterPackageTagline: "Ideal for validating concepts or deploying lightweight on-chain prototypes.",
    starterPackageRevisions: "2",
    starterPackageIncludes1: "Custom smart contract for core game logic.",
    starterPackageIncludes2: "Streamlined Web3 frontend (1-3 main pages).",
    starterPackageIncludes3: "Secure wallet connection.",
    starterPackageIncludes4: "Testnet deployment and initial testing.",

    // Professional Package
    professionalPackageTitle: "Professional (DApp)",
    // New property added
    professionalPackagePrice: "",
    professionalPackageTagline: "Optimized for building comprehensive, feature-rich applications.",
    professionalPackageRevisions: "3",
    professionalPackageIncludes1: "Everything in Starter +",
    professionalPackageIncludes2: "Node.js/NestJS backend for hybrid on-chain/off-chain functionalities.",
    professionalPackageIncludes3: "Database integration (PostgreSQL or MongoDB).",
    professionalPackageIncludes4: "Essential admin dashboard for user and data management.",

    // Specialized Service: Decentralized Payment Gateway
    specializedServiceTitle: "Specialized Service: Decentralized Payment Gateway",
    specializedServiceDescription: "Integrate cryptocurrency payments into your existing website or app with a secure, multi-chain solution.",
    specializedServiceFeatures: "Support for over 20 top cryptocurrencies (BTC, ETH, BNB, SOL, etc.).",
    specializedServiceFeatures2: "Real-time price conversion, QR code generation, and WalletConnect compatibility.",
    specializedServiceSecurity: "Fully decentralized execution on the user's device to prioritize privacy and security.",

    // What I need to start
    whatINeedToStartTitle: "Project Kickoff Requirements",
    whatINeedToStart1: "Detailed overview of your game concept or key mechanics.",
    whatINeedToStart2: "Preferred blockchain network (e.g., BSC, Polygon, Arbitrum).",
    whatINeedToStart3: "Design guidelines or branding assets (optional).",
    readyToStart: "Ready to launch? Let's connect to get acquainted with your vision!",
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
    twitterLabel: "X (توییتر)",
    twitter: "https://x.com/AriyaDice",
    profile: "خلاصه‌ی رزومه",
    profileText: "من یک مهندس نرم‌افزار خودآموخته هستم.\n\nبیش از ۲۰ سال است که مجذوب چگونگی عملکرد نرم‌افزار — و گاه ناکارآمدی‌های آن — بوده‌ام.\n\nهر بار که از یک برنامه استفاده می‌کردم و با باگ‌ها، ناکارآمدی‌ها یا فرصت‌های بهبود روبه‌رو می‌شدم، نمی‌توانستم از فکر کردن به راه‌حل‌های اصلاحی دست بکشم.\n\nاین کنجکاوی بی‌وقفه، مرا به یادگیری برنامه‌نویسی، کاوش فناوری‌های نوین و خلق راه‌حل‌هایی سوق داد که روان‌تر، هوشمندتر و کاربرمحورتر باشند.\n\nبرای من، مهندسی نرم‌افزار فراتر از نگارش کد است؛ آن، هنری برای ارتقای تجربیات کاربران است.\n\nتوسعه‌دهنده پویا و خودآموخته با تمرکز بر راهکارهای نوآورانه Web3 و رمزارزها. بهره‌برداری از ابزارهای هوش مصنوعی برای بهینه‌سازی فرآیندهای توسعه در زبان‌های برنامه‌نویسی گوناگون. دانش عمیق از فناوری‌های بلاکچین و پروتکل‌های رمزنگاری بر پلتفرم‌هایی نظیر اتریوم، بایننس اسمارت چین، سولانا، ترون و بیت‌کوین. یادگیرنده‌ای سریع با انطباق‌پذیری بالا نسبت به فناوری‌های نوظهور. سابقه‌ای درخشان در توسعه برنامه‌های فول‌استک مقیاس‌پذیر با استفاده از React.js، Next.js، Node.js و NestJS. متعهد به ارائه راهکارهای کارآمد و مشتاق چالش‌های پیچیده توسعه‌ای.",
    languageProficiency: "تسلط بر زبان‌ها",
    englishLevel: "**انگلیسی:** مهارت‌های پیشرفته در خواندن و درک مطلب. تسلط در ارتباطات حرفه‌ای، تقویت‌شده با ابزارهای زبانی مبتنی بر هوش مصنوعی برای تعاملات کلامی بهینه.",
    turkishLevel: "**ترکی استانبولی:** مهارت‌های پیشرفته در خواندن و درک مطلب. تسلط در ارتباطات حرفه‌ای، تقویت‌شده با ابزارهای زبانی مبتنی بر هوش مصنوعی برای تعاملات کلامی بهینه.",
    skills: "مهارت‌های فنی",
    programmingLanguages: "**زبان‌های برنامه‌نویسی:** JavaScript (ES6+), TypeScript, Solidity",
    frontend: "**فرانت‌اند:** React.js, Next.js, Tailwind CSS, Radix UI, HTML, CSS, Vite",
    backend: "**بک‌اند:** Node.js, NestJS, Express.js",
    blockchainWeb3: "**بلاکچین و Web3:** توسعه قراردادهای هوشمند (Ethereum, BSC, Solana), یکپارچه‌سازی با کیف پول‌های رمزارزی (WalletConnect, MetaMask), کار با Ethers.js و Web3Modal, پروتکل‌های DeFi و NFT",
    database: "**پایگاه داده:** PostgreSQL (TypeORM), MongoDB",
    developmentTools: "**ابزارهای توسعه:** Git, GitHub, Remix, Hardhat, Truffle, Vercel",
    otherSkills: "**سایر مهارت‌ها:** طراحی و توسعه APIهای RESTful, معماری برنامه‌های کاربردی مقیاس‌پذیر, شیوه‌های توسعه تقویت‌شده با هوش مصنوعی, حل مسائل پیشرفته, پذیرش سریع فناوری‌ها",
    projects: "پروژه‌های منتخب",
    viewProject: "مشاهده پروژه →",
    p1: "DayPay – سیستم پرداخت غیرمتمرکز کریپتو",
    p1Link: "https://daypay.vercel.app/",
    p1Desc: "پلتفرم پرداخت غیرمتمرکز قدرتمند که تراکنش‌های امن و بدون اصطکاک را با بیش از ۲۰ رمزارز برتر پشتیبانی می‌کند. شامل دریافت داده‌های لحظه‌ای از APIها، تولید کد QR و یکپارچه‌سازی WalletConnect برای تجربه کاربری برتر.",
    p2: "بازی مار و پله بلاک‌چینی",
    p2Link: "https://snake-and-ladder-next.vercel.app/",
    p2Desc: "بازی چندنفره نوآورانه آن‌چین بر روی BNB Testnet، با استفاده از قراردادهای هوشمند Solidity. شامل مکانیک‌های پرتاب تاس تصادفی دوگانه، ویژگی‌های پادزهر و اکوسیستم پاداش NFT برای گیم‌پلی جذاب.",
    p3: "پنل مدیریت",
    p3Link: "",
    p3Desc: "داشبورد جامع مبتنی بر React برای مدیریت کاربران، پردازش درخواست‌ها و تحلیل‌های سیستم، پشتیبانی‌شده توسط API NestJS برای عملیات یکپارچه.",
    p4: "بازار خدمات آنلاین",
    p4Link: "",
    p4Desc: "پلتفرم بازار آنلاین مقیاس‌پذیر با تطبیق خدمات بر اساس موقعیت جغرافیایی، احراز هویت امن کاربران و پردازش پرداخت‌های یکپارچه، بهینه‌شده برای ارتقاهای آینده بلاکچین.",
    p5: "DeviceBound Wallet",
    p5Link: "https://deviceboundwallet.vercel.app/",
    p5Desc: "دموی کیف‌پول وابسته‌به‌دستگاه با استفاده از پس‌کی (WebAuthn) برای نشست‌های ایمن و تجربه کاربری محلی.",
    button: "English",

    // Web3 Game Development Services
    web3DevServicesTitle: "خدمات توسعه بازی و اپلیکیشن غیرمتمرکز (Web3)",
    web3DevServicesOverview: "ایده خود را به یک بازی Web3 آماده تولید یا اپلیکیشن غیرمتمرکز (DApp) ارتقا دهید. من تجربیات **آن‌چین امن و مقیاس‌پذیر** را برای جذب و رشد جامعه شما طراحی می‌کنم.",
    web3DevServicesDescription: "با تکیه بر تسلط بر Solidity، React/Next.js و NestJS، قراردادهای هوشمند بهینه‌شده از نظر گس را با رابط‌های کاربری بصری و یکپارچه می‌سازم. پروژه‌ها شامل اتصال کیف پول‌های رمزارز (MetaMask، WalletConnect)، استقرار بر روی زنجیره‌های سازگار با EVM و تحویل کامل سورس کد با مستندات دقیق برای شفافیت و نگهداری آسان است.",
    myServicesInclude: "خدمات اصلی شامل موارد زیر است:",
    serviceSmartContract: "قراردادهای هوشمند حسابرسی‌شده و بهینه‌شده با Solidity.",
    serviceFrontend: "فرانت‌اند بصری و واکنش‌گرا با React.js یا Next.js.",
    serviceWalletIntegration: "یکپارچه‌سازی بی‌تلاش با کیف پول، شامل MetaMask، WalletConnect و بیشتر.",
    serviceBackend: "API بک‌اند قدرتمند (Node.js/NestJS) برای عملکردهای ترکیبی آن‌چین/آف‌چین (در سطوح حرفه‌ای و نهایی).",
    serviceAdminDashboard: "داشبورد ادمین بصری برای نظارت و کنترل.",
    serviceDeployment: "استقرار جامع روی Testnet با آمادگی برای Mainnet.",
    serviceSourceCode: "تحویل کامل سورس کد و راهنمایی پشتیبانی مداوم.",
    developmentPackagesTitle: "پکیج‌های توسعه سفارشی",
    packageDescription: "پکیج‌های انعطاف‌پذیر طراحی‌شده برای همخوانی با دامنه پروژه شما.",

    // Starter Package
    starterPackageTitle: "بسته شروع (Starter MVP)",
    // New property added
    starterPackagePrice: "",
    starterPackageTagline: "ایده‌آل برای اعتبارسنجی مفاهیم یا استقرار پروتوتایپ‌های سبک آن‌چین.",
    starterPackageRevisions: "۲",
    starterPackageIncludes1: "قرارداد هوشمند سفارشی برای منطق پایه بازی.",
    starterPackageIncludes2: "فرانت‌اند Web3 ساده‌شده (۱-۳ صفحه اصلی).",
    starterPackageIncludes3: "اتصال امن به کیف پول.",
    starterPackageIncludes4: "استقرار روی Testnet و تست‌های اولیه.",

    // Professional Package
    professionalPackageTitle: "بسته حرفه‌ای (Professional DApp)",
    // New property added
    professionalPackagePrice: "",
    professionalPackageTagline: "بهینه برای ساخت اپلیکیشن‌های جامع و غنی از ویژگی.",
    professionalPackageRevisions: "۳",
    professionalPackageIncludes1: "همه موارد بسته شروع +",
    professionalPackageIncludes2: "بک‌اند Node.js/NestJS برای عملکردهای ترکیبی آن‌چین/آف‌چین.",
    professionalPackageIncludes3: "یکپارچه‌سازی با دیتابیس (PostgreSQL یا MongoDB).",
    professionalPackageIncludes4: "داشبورد ادمین ضروری برای مدیریت کاربران و داده‌ها.",

    // Specialized Service: Decentralized Payment Gateway
    specializedServiceTitle: "سرویس تخصصی: درگاه پرداخت غیرمتمرکز",
    specializedServiceDescription: "پرداخت‌های رمزارز را به وب‌سایت یا اپلیکیشن موجود خود با راهکاری امن و چندزنجیره‌ای ادغام کنید.",
    specializedServiceFeatures: "پشتیبانی از بیش از ۲۰ رمزارز برتر (BTC, ETH, BNB, SOL و غیره).",
    specializedServiceFeatures2: "تبدیل قیمت لحظه‌ای، تولید کد QR و سازگاری با WalletConnect.",
    specializedServiceSecurity: "اجرای کاملاً غیرمتمرکز روی دستگاه کاربر برای اولویت‌بندی حریم خصوصی و امنیت.",

    // What I need to start
    whatINeedToStartTitle: "الزامات شروع پروژه",
    whatINeedToStart1: "بررسی دقیق مفهوم بازی یا مکانیزم‌های کلیدی شما.",
    whatINeedToStart2: "شبکه بلاکچین مورد نظر (مانند BSC، Polygon، Arbitrum).",
    whatINeedToStart3: "راهنماهای طراحی یا دارایی‌های برند (اختیاری).",
    readyToStart: "آماده راه‌اندازی هستید؟ بیایید برای آشنایی با دیدگاه شما ارتباط برقرار کنیم!",
  }
};