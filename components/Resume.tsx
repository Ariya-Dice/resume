// components/Resume.tsx
import React, { FC, ReactNode } from 'react';

// کامپوننت کمکی برای نمایش متن‌های bold شده (مثل قبل)
export const BoldText: FC<{ text: string }> = ({ text }) => {
  const parts = text.split(/\*\*(.*?)\*\*/g);
  return (
    <>
      {parts.map((part, i) =>
        i % 2 === 1 ? <strong key={i} className="font-semibold text-gray-900">{part}</strong> : part
      )}
    </>
  );
};

// کامپوننت برای هر بخش از رزومه
interface SectionProps {
  title: string;
  children: ReactNode; // از ReactNode استفاده شد.
}
export const Section: FC<SectionProps> = ({ title, children }) => (
  <section className="mb-8 p-4 border-b border-gray-200 last:border-b-0">
    <h3 className="text-xl font-bold border-b-2 border-indigo-600 pb-1 mb-4 uppercase tracking-wider text-gray-800">
      {title}
    </h3>
    {children}
  </section>
);

// کامپوننت برای هر کارت پروژه
interface ProjectCardProps {
  title: string;
  description: string; // شامل متن bold شده مارک‌داون
  link?: string;
  viewProjectText: string;
}
export const ProjectCard: FC<ProjectCardProps> = ({ title, description, link, viewProjectText }) => (
  <div className="mb-6 pb-4 border-b border-gray-300 last:border-b-0">
    <h4 className="text-lg font-semibold text-indigo-700 mb-1">{title}</h4>
    <p className="text-gray-700 mb-2 leading-relaxed">
      <BoldText text={description} />
    </p>
    {link && (
      <a 
        href={link} 
        target="_blank" 
        rel="noopener noreferrer" 
        className="text-sm text-indigo-600 hover:text-indigo-800 transition-colors duration-150 inline-flex items-center"
      >
        {viewProjectText}
        {/* You can add an icon here for a professional touch, like an arrow or external link icon */}
      </a>
    )}
  </div>
);

// کامپوننت اصلی برای ساختاردهی کل رزومه
export const ResumeContainer: FC<{ children: ReactNode }> = ({ children }) => (
    <div className="max-w-4xl mx-auto bg-white shadow-2xl rounded-lg p-10 mt-10 font-sans">
        {children}
    </div>
);