'use client';

import { useEffect, useRef } from 'react';

export function EasterEggHandler() {
    const clickCountRef = useRef(0);
    const lastClickRef = useRef(0);
    const mouseOverCountRef = useRef<Record<string, number>>({});
    const konamiRef = useRef<string[]>([]);

    useEffect(() => {
        const konamiCode = [
            'ArrowUp',
            'ArrowUp',
            'ArrowDown',
            'ArrowDown',
            'ArrowLeft',
            'ArrowRight',
            'ArrowLeft',
            'ArrowRight',
            'b',
            'a',
        ];

        const handleLogoClick = (e: MouseEvent) => {
            const target = e.target as HTMLElement;
            if (target.getAttribute('data-logo')) {
                const now = Date.now();
                if (now - lastClickRef.current < 500) {
                    clickCountRef.current++;
                } else {
                    clickCountRef.current = 1;
                }
                lastClickRef.current = now;

                if (clickCountRef.current === 3) {
                    const lights = document.querySelectorAll('.twinkle-light');
                    lights.forEach((light) => {
                        light.classList.add('twinkle-fast');
                    });
                    setTimeout(() => {
                        lights.forEach((light) => {
                            light.classList.remove('twinkle-fast');
                        });
                    }, 3000);
                    clickCountRef.current = 0;
                }
            }
        };

        const handleKeyDown = (e: KeyboardEvent) => {
            konamiRef.current.push(e.key);
            konamiRef.current = konamiRef.current.slice(-10);

            const konamiString = konamiRef.current.join(',');
            if (konamiString.includes(konamiCode.join(','))) {
                triggerReindeer();
                konamiRef.current = [];
            }

            const recentKeys = konamiRef.current.slice(-4).join('').toLowerCase();
            if (recentKeys === 'snow') {
                triggerSnowStorm();
                konamiRef.current = [];
            }
        };

        const handleCardHover = (e: MouseEvent) => {
            const card = (e.target as HTMLElement).closest('[data-card-id]');
            if (card) {
                const cardId = card.getAttribute('data-card-id');
                if (cardId) {
                    mouseOverCountRef.current[cardId] = (mouseOverCountRef.current[cardId] || 0) + 1;
                    if (mouseOverCountRef.current[cardId] === 10) {
                        card.classList.add('santa-hat-animation');
                        setTimeout(() => {
                            card.classList.remove('santa-hat-animation');
                            mouseOverCountRef.current[cardId] = 0;
                        }, 3000);
                    }
                }
            }
        };

        const triggerReindeer = () => {
            const reindeer = document.createElement('div');
            reindeer.innerHTML = '🦌';
            reindeer.style.cssText = `
        position: fixed;
        top: 20%;
        left: -50px;
        font-size: 40px;
        z-index: 9999;
        animation: reindeer-fly 4s ease-in-out forwards;
      `;
            document.body.appendChild(reindeer);
            setTimeout(() => reindeer.remove(), 4000);
        };

        const triggerSnowStorm = () => {
            const container = document.querySelector('.snow-container');
            if (container) {
                const fragment = document.createDocumentFragment();
                for (let i = 0; i < 80; i++) {
                    const snowflake = document.createElement('div');
                    snowflake.className = 'snowflake';
                    snowflake.style.cssText = `
            left: ${Math.random() * 100}%;
            animation-delay: ${Math.random() * 2}s;
            animation-duration: ${5 + Math.random() * 3}s;
          `;
                    fragment.appendChild(snowflake);
                }
                container.appendChild(fragment);
            }
        };

        document.addEventListener('click', handleLogoClick);
        document.addEventListener('keydown', handleKeyDown);
        document.addEventListener('mouseover', handleCardHover);

        return () => {
            document.removeEventListener('click', handleLogoClick);
            document.removeEventListener('keydown', handleKeyDown);
            document.removeEventListener('mouseover', handleCardHover);
        };
    }, []);

    return null;
}
