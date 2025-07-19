import React, { useRef, useEffect, useState } from 'react';

interface GridDistortionProps {
    gridSize?: number;
    distortionRadius?: number;
    distortionStrength?: number;
    animationSpeed?: number;
    gridColor?: string;
    backgroundColor?: string;
    opacity?: number;
    interactive?: boolean;
    autoAnimate?: boolean;
}

const GridDistortion: React.FC<GridDistortionProps> = ({
    gridSize = 40,
    distortionRadius = 100,
    distortionStrength = 30,
    animationSpeed = 0.02,
    gridColor = 'rgba(255, 255, 255, 0.1)',
    backgroundColor = 'transparent',
    opacity = 1,
    interactive = true,
    autoAnimate = true
}) => {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const animationRef = useRef<number | null>(null);
    const mouseRef = useRef({ x: 0, y: 0 });
    const timeRef = useRef(0);
    const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        const updateDimensions = () => {
            const rect = canvas.getBoundingClientRect();
            const dpr = window.devicePixelRatio || 1;

            canvas.width = rect.width * dpr;
            canvas.height = rect.height * dpr;

            ctx.scale(dpr, dpr);

            setDimensions({ width: rect.width, height: rect.height });
        };

        updateDimensions();
        window.addEventListener('resize', updateDimensions);

        const handleMouseMove = (e: MouseEvent) => {
            if (!interactive) return;
            const rect = canvas.getBoundingClientRect();
            mouseRef.current = {
                x: e.clientX - rect.left,
                y: e.clientY - rect.top
            };
        };

        if (interactive) {
            canvas.addEventListener('mousemove', handleMouseMove);
        }

        const drawGrid = () => {
            ctx.clearRect(0, 0, dimensions.width, dimensions.height);

            // Set background
            if (backgroundColor !== 'transparent') {
                ctx.fillStyle = backgroundColor;
                ctx.fillRect(0, 0, dimensions.width, dimensions.height);
            }

            ctx.strokeStyle = gridColor;
            ctx.lineWidth = 1;
            ctx.globalAlpha = opacity;

            const cols = Math.ceil(dimensions.width / gridSize) + 1;
            const rows = Math.ceil(dimensions.height / gridSize) + 1;

            // Draw vertical lines
            for (let i = 0; i < cols; i++) {
                ctx.beginPath();
                for (let j = 0; j < rows; j++) {
                    const x = i * gridSize;
                    const y = j * gridSize;

                    let distortedX = x;
                    let distortedY = y;

                    if (interactive || autoAnimate) {
                        const mouseX = interactive ? mouseRef.current.x : dimensions.width / 2 + Math.sin(timeRef.current * 0.5) * 200;
                        const mouseY = interactive ? mouseRef.current.y : dimensions.height / 2 + Math.cos(timeRef.current * 0.3) * 150;

                        const distance = Math.sqrt((x - mouseX) ** 2 + (y - mouseY) ** 2);

                        if (distance < distortionRadius) {
                            const distortionFactor = (1 - distance / distortionRadius) * distortionStrength;
                            const angle = Math.atan2(y - mouseY, x - mouseX);

                            distortedX += Math.cos(angle) * distortionFactor;
                            distortedY += Math.sin(angle) * distortionFactor;

                            // Add some wave distortion for more organic feel
                            if (autoAnimate) {
                                distortedX += Math.sin(timeRef.current + y * 0.01) * 5;
                                distortedY += Math.cos(timeRef.current + x * 0.01) * 5;
                            }
                        }
                    }

                    if (j === 0) {
                        ctx.moveTo(distortedX, distortedY);
                    } else {
                        ctx.lineTo(distortedX, distortedY);
                    }
                }
                ctx.stroke();
            }

            // Draw horizontal lines
            for (let j = 0; j < rows; j++) {
                ctx.beginPath();
                for (let i = 0; i < cols; i++) {
                    const x = i * gridSize;
                    const y = j * gridSize;

                    let distortedX = x;
                    let distortedY = y;

                    if (interactive || autoAnimate) {
                        const mouseX = interactive ? mouseRef.current.x : dimensions.width / 2 + Math.sin(timeRef.current * 0.5) * 200;
                        const mouseY = interactive ? mouseRef.current.y : dimensions.height / 2 + Math.cos(timeRef.current * 0.3) * 150;

                        const distance = Math.sqrt((x - mouseX) ** 2 + (y - mouseY) ** 2);

                        if (distance < distortionRadius) {
                            const distortionFactor = (1 - distance / distortionRadius) * distortionStrength;
                            const angle = Math.atan2(y - mouseY, x - mouseX);

                            distortedX += Math.cos(angle) * distortionFactor;
                            distortedY += Math.sin(angle) * distortionFactor;

                            // Add some wave distortion for more organic feel
                            if (autoAnimate) {
                                distortedX += Math.sin(timeRef.current + y * 0.01) * 5;
                                distortedY += Math.cos(timeRef.current + x * 0.01) * 5;
                            }
                        }
                    }

                    if (i === 0) {
                        ctx.moveTo(distortedX, distortedY);
                    } else {
                        ctx.lineTo(distortedX, distortedY);
                    }
                }
                ctx.stroke();
            }
        };

        const animate = () => {
            timeRef.current += animationSpeed;
            drawGrid();
            animationRef.current = requestAnimationFrame(animate);
        };

        animate();

        return () => {
            window.removeEventListener('resize', updateDimensions);
            if (interactive) {
                canvas.removeEventListener('mousemove', handleMouseMove);
            }
            if (animationRef.current) {
                cancelAnimationFrame(animationRef.current);
            }
        };
    }, [dimensions.width, dimensions.height, gridSize, distortionRadius, distortionStrength, animationSpeed, gridColor, backgroundColor, opacity, interactive, autoAnimate]);

    return (
        <canvas
            ref={canvasRef}
            className="absolute inset-0 w-full h-full pointer-events-none"
            style={{
                width: '100%',
                height: '100%',
                zIndex: -1
            }}
        />
    );
};

export default GridDistortion;