import React, { useEffect } from 'react';
import './CursorEffect.css'; // Import the CSS file

const CursorEffect = () => {
    useEffect(() => {
        // Main cursor element
        const cursor = document.createElement('div');
        cursor.classList.add('custom-cursor');
        document.body.appendChild(cursor);

        // Create trail elements
        const trailCount = 5; // Number of trailing elements
        const trails = Array.from({ length: trailCount }).map(() => {
            const trail = document.createElement('div');
            trail.classList.add('cursor-trail');
            document.body.appendChild(trail);
            return trail;
        });

        // Mouse and cursor position tracking
        let mouseX = 0, mouseY = 0;
        const trailPositions = Array(trailCount).fill({ x: 0, y: 0 });

        const moveCursor = (e) => {
            mouseX = e.clientX;
            mouseY = e.clientY;
        };

        const updateTrail = () => {
            // Update the cursor position
            cursor.style.left = `${mouseX}px`;
            cursor.style.top = `${mouseY}px`;

            // Update trailing elements
            trailPositions.pop();
            trailPositions.unshift({ x: mouseX, y: mouseY });

            trails.forEach((trail, index) => {
                const { x, y } = trailPositions[index];
                trail.style.left = `${x}px`;
                trail.style.top = `${y}px`;
                trail.style.opacity = `${(trailCount - index) / trailCount}`;
            });

            requestAnimationFrame(updateTrail);
        };

        document.addEventListener('mousemove', moveCursor);
        updateTrail();

        return () => {
            document.removeEventListener('mousemove', moveCursor);
            document.body.removeChild(cursor);
            trails.forEach(trail => document.body.removeChild(trail));
        };
    }, []);

    return null; // No visible JSX for this component
};

export default CursorEffect;
