'use client';

import { motion } from 'framer-motion';

import { AnimatedCounter } from '@/components/ui/animated-counter';

interface ContentRendererProps {
    content: string | number;
    className?: string;
    prefix?: string;
    duration?: number;
}

export function ContentRenderer({ content, className = '', prefix, duration = 2 }: ContentRendererProps) {
    const contentStr = String(content);

    const isNumeric = /^\d+[\d.,]*$/.test(contentStr);
    const hasPrefix = prefix || /^[^\d]*/.exec(contentStr)?.[0];
    const numericPart = contentStr.replace(/[^\d.,]/g, '');
    const extractedPrefix = prefix || /^[^\d]*/.exec(contentStr)?.[0] || '';

    // Extrai sufixo (texto após os números)
    const suffixMatch = /[\d.,]+([^\d.,]+)$/.exec(contentStr);
    const extractedSuffix = suffixMatch?.[1] || '';

    if (isNumeric || (hasPrefix && numericPart) || extractedSuffix) {
        // Renderiza número com animação de contador, prefixo e sufixo
        const numValue = numericPart.replace(/\D/g, '');

        return (
            <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className={className}
            >
                {extractedPrefix && <span className={className}>{extractedPrefix}</span>}
                <AnimatedCounter value={numValue} className={className} duration={duration} />
                {extractedSuffix && <span className={className}>{extractedSuffix}</span>}
            </motion.div>
        );
    }

    // Renderiza texto com animação discreta
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className={className}
        >
            {contentStr}
        </motion.div>
    );
}
