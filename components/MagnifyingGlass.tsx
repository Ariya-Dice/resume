// components/MagnifyingGlass.tsx

"use client";

import React, { useEffect, useRef, useState } from 'react';
import ReactDOM from 'react-dom'; // Import ReactDOM for portal

interface MagnifyingGlassProps {
    children: React.ReactNode;
}

const MagnifyingGlass: React.FC<MagnifyingGlassProps> = ({ children }) => {
    const lensRef = useRef<HTMLDivElement>(null);
    const backgroundContainerRef = useRef<HTMLDivElement>(null); // Ref برای کانتینر محتوای اصلی رزومه
    const [isMounted, setIsMounted] = useState(false); // State برای مطمئن شدن از اینکه DOM mount شده است

    useEffect(() => {
        setIsMounted(true); // وقتی کامپوننت mount شد، state را true کن
    }, []);

    useEffect(() => {
        const lens = lensRef.current;
        const backgroundContainer = backgroundContainerRef.current; // کانتینر اصلی رزومه

        if (!lens || !backgroundContainer) return;

        const varValue = (name: string): number => {
            return parseFloat(getComputedStyle(document.documentElement).getPropertyValue(name));
        };

        const handleMouseMove = (e: MouseEvent) => {
            // Check if the mouse is over the background container
            const backgroundRect = backgroundContainer.getBoundingClientRect();
            const isMouseOverBackground = (
                e.clientX >= backgroundRect.left &&
                e.clientX <= backgroundRect.right &&
                e.clientY >= backgroundRect.top &&
                e.clientY <= backgroundRect.bottom
            );

            if (isMouseOverBackground) {
                // Make the lens visible and interactive when mouse is over the background
                if (!lens.classList.contains('active')) {
                    lens.classList.add('active');
                }

                // Update lens position (fixed to viewport)
                lens.style.left = e.clientX + 'px';
                lens.style.top = e.clientY + 'px';

                const zoom = varValue('--zoom-level');
                const lensWidth = varValue('--lens-width');
                const lensHeight = varValue('--lens-height');

                // Calculate mouse position relative to the document
                const mouseX = e.pageX;
                const mouseY = e.pageY;

                // Calculate the mouse position relative to the *background content's* top-left corner
                // This accounts for both background's position and current scroll
                const relativeMouseX = mouseX - (backgroundRect.left + window.scrollX);
                const relativeMouseY = mouseY - (backgroundRect.top + window.scrollY);

                // Calculate the new position for lensContent (the zoomed content inside the lens)
                // We want the point (relativeMouseX, relativeMouseY) on the zoomed content
                // to appear at the center of the lens (lensWidth / 2, lensHeight / 2)
                const contentX = -(relativeMouseX * zoom) + (lensWidth / 2);
                const contentY = -(relativeMouseY * zoom) + (lensHeight / 2);

                // Apply these calculated positions to the inner content of the lens
                // We target the first child of the lens which is the .lens-content
                const innerLensContent = lens.querySelector('.lens-content') as HTMLElement;
                if (innerLensContent) {
                    innerLensContent.style.left = contentX + 'px';
                    innerLensContent.style.top = contentY + 'px';
                }
            } else {
                // Hide the lens when mouse leaves the background container
                lens.classList.remove('active');
            }
        };

        // Add event listener to the window for global mouse tracking
        window.addEventListener('mousemove', handleMouseMove);

        // Clean up event listeners on component unmount
        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
        };
    }, []); // Empty dependency array means this runs once on mount

    // Render the blurred background content
    // Render the magnifying glass using a Portal to ensure it's on top of everything
    return (
        <>
            <div className="resume-background-blurred" ref={backgroundContainerRef}>
                {children}
            </div>

            {isMounted && ReactDOM.createPortal(
                <div id="magnifying-lens-root"> {/* This div is the actual lens */}
                    <div className="magnifying-lens" ref={lensRef}>
                        <div className="lens-content">
                            {children} {/* Render children again for the magnified view */}
                        </div>
                    </div>
                </div>,
                document.body // Attach the portal to the body
            )}
        </>
    );
};

export default MagnifyingGlass;