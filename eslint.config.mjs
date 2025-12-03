import js from '@eslint/js';
import typescriptEslint from '@typescript-eslint/eslint-plugin';
import typescriptParser from '@typescript-eslint/parser';
import importPlugin from 'eslint-plugin-import';
import unusedImports from 'eslint-plugin-unused-imports';

export default [
    js.configs.recommended,
    {
        ignores: [
            '**/node_modules/**',
            '**/.next/**',
            '**/out/**',
            '**/build/**',
            '**/dist/**',
            '**/public/**',
            '**/*.config.js',
            '**/*.config.mjs',
            '**/coverage/**',
            '**/next-env.d.ts',
        ],
    },
    {
        files: ['**/*.ts', '**/*.tsx', '**/*.js', '**/*.jsx'],
        languageOptions: {
            parser: typescriptParser,
            parserOptions: {
                ecmaVersion: 'latest',
                sourceType: 'module',
                ecmaFeatures: {
                    jsx: true,
                },
            },
            globals: {
                React: 'readonly',
                JSX: 'readonly',
                NodeJS: 'readonly',
                console: 'readonly',
                process: 'readonly',
                window: 'readonly',
                document: 'readonly',
                navigator: 'readonly',
            },
        },
        plugins: {
            '@typescript-eslint': typescriptEslint,
            import: importPlugin,
            'unused-imports': unusedImports,
        },
        settings: {
            'import/resolver': {
                typescript: true,
                node: true,
            },
            'import/parsers': {
                '@typescript-eslint/parser': ['.ts', '.tsx'],
            },
        },
        rules: {
            // TypeScript rules
            '@typescript-eslint/no-unused-vars': 'off', // Usar unused-imports ao invés
            '@typescript-eslint/no-explicit-any': 'warn',

            // Unused imports
            'unused-imports/no-unused-imports': 'error',
            'unused-imports/no-unused-vars': [
                'warn',
                {
                    vars: 'all',
                    varsIgnorePattern: '^_|^ActionTypes$',
                    args: 'after-used',
                    argsIgnorePattern: '^_',
                },
            ],

            // Import organization
            'import/order': [
                'error',
                {
                    groups: [
                        'builtin', // Node.js built-in modules
                        'external', // npm packages
                        'internal', // Aliased modules (@/)
                        'parent', // Parent imports (../)
                        'sibling', // Sibling imports (./)
                        'index', // Index imports (./)
                        'object',
                        'type', // Type imports
                    ],
                    pathGroups: [
                        {
                            pattern: 'react',
                            group: 'builtin',
                            position: 'before',
                        },
                        {
                            pattern: 'next',
                            group: 'builtin',
                            position: 'before',
                        },
                        {
                            pattern: 'next/**',
                            group: 'builtin',
                            position: 'before',
                        },
                        {
                            pattern: '@/**',
                            group: 'internal',
                            position: 'after',
                        },
                    ],
                    pathGroupsExcludedImportTypes: ['react', 'next'],
                    'newlines-between': 'always',
                    alphabetize: {
                        order: 'asc',
                        caseInsensitive: true,
                    },
                },
            ],
            'import/first': 'error',
            'import/newline-after-import': 'error',
            'import/no-duplicates': 'error',
            'import/no-unresolved': 'off', // TypeScript já valida

            // General rules
            'no-console': [
                'warn',
                {
                    allow: ['warn', 'error'],
                },
            ],
            'prefer-const': 'warn',
            'no-var': 'error',
            'no-unused-vars': 'off', // Usar unused-imports ao invés
            'no-undef': 'off', // TypeScript já valida isso
            quotes: [
                'error',
                'single',
                {
                    avoidEscape: true,
                    allowTemplateLiterals: false,
                },
            ],
            'jsx-quotes': ['error', 'prefer-single'],
        },
    },
];
