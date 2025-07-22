// components/Resume.tsx
import React from 'react';

// کامپوننت کمکی برای نمایش متن‌های bold شده
export const BoldText = ({ text }: { text: string }) => {
  const parts = text.split(/\*\*(.*?)\*\*/g);
  return (
    <>
      {parts.map((part, i) =>
        i % 2 === 1 ? <strong key={i}>{part}</strong> : part
      )}
    </>
  );
};

// کامپوننت برای هر بخش از رزومه
interface SectionProps {
  title: string;
  children: React.ReactNode;
}
export const Section = ({ title, children }: SectionProps) => (
  <section className="mb-8">
    <h3 className="section-title">{title}</h3>
    {children}
  </section>
);

// کامپوننت برای هر کارت پروژه
interface ProjectCardProps {
  title: string;
  description: string;
  link?: string;
  viewProjectText: string;
}
export const ProjectCard = ({ title, description, link, viewProjectText }: ProjectCardProps) => (
  <div className="mb-6 pb-4 border-b border-gray-700 last:border-b-0">
    <h4 className="project-title">{title}</h4>
    <p className="project-description">
      <BoldText text={description} />
    </p>
    {link && (
      <a href={link} target="_blank" rel="noopener noreferrer" className="project-link">
        {viewProjectText}
      </a>
    )}
  </div>
);