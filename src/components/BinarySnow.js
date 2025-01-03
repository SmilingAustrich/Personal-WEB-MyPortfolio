import React, { useEffect, useRef } from 'react';

export default function BinarySnow() {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');

        // Resize the canvas to its parent container's dimensions
        function resizeCanvas() {
            if (!canvas.parentElement) return;
            canvas.width = canvas.parentElement.offsetWidth;
            canvas.height = canvas.parentElement.offsetHeight;
        }

        window.addEventListener('resize', resizeCanvas);
        resizeCanvas();

        // Configuration
        const NUM_FLAKES = 55;
        const MIN_SPEED = 0.3;
        const MAX_SPEED = 1.3;
        const FLAKE_SIZE = 19;
        const DRIFT_RANGE = 0.3;
        const FLARE_ALPHA = 0.3;

        // Flake class
        class Flake {
            constructor() {
                this.reset();
            }

            reset() {
                this.x = Math.random() * canvas.width;
                this.y = Math.random() * -canvas.height; // start above the visible area
                this.speed =
                    MIN_SPEED + Math.random() * (MAX_SPEED - MIN_SPEED);
                // Random symbol
                this.symbol = Math.random() > 0.5 ? '0' : '1';
                // Random color: black or white
                this.color = Math.random() > 0.5
                    ? `rgba(0, 0, 0, ${FLARE_ALPHA})`
                    : `rgba(255, 255, 255, ${FLARE_ALPHA})`;

                this.drift =
                    Math.random() * DRIFT_RANGE - DRIFT_RANGE / 2;
            }

            update() {
                this.y += this.speed;
                this.x += this.drift;
                if (this.y > canvas.height || this.x < 0 || this.x > canvas.width) {
                    this.reset();
                }
            }

            draw() {
                ctx.fillStyle = this.color;
                ctx.font = `${FLAKE_SIZE}px monospace`;
                ctx.fillText(this.symbol, this.x, this.y);
            }
        }

        // Create the flakes
        const flakes = Array.from({ length: NUM_FLAKES }, () => new Flake());

        let animationFrameId;

        // Animation loop
        function animate() {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            flakes.forEach((flake) => {
                flake.update();
                flake.draw();
            });
            animationFrameId = requestAnimationFrame(animate);
        }

        animate();

        return () => {
            window.removeEventListener('resize', resizeCanvas);
            cancelAnimationFrame(animationFrameId);
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            className="absolute top-0 left-0 w-full h-full pointer-events-none z-50"
        />
    );
}
