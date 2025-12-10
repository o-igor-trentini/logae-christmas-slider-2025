import { fixupConfigRules, fixupPluginRules } from '@eslint/compat';
import js from '@eslint/js';
import { FlatCompat } from '@eslint/eslintrc';
import typescriptEslint from '@typescript-eslint/eslint-plugin';
import tsParser from '@typescript-eslint/parser';
import importPlugin from 'eslint-plugin-import';
import prettier from 'eslint-plugin-prettier';
import unusedImports from 'eslint-plugin-unused-imports';
import globals from 'globals';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const compat = new FlatCompat({
    baseDirectory: __dirname,
    recommendedConfig: js.configs.recommended,
    allConfig: js.configs.all,
});

export default [
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
            '.prettierrc.cjs',
        ],
    },
    ...fixupConfigRules(
        compat.extends('eslint:recommended', 'plugin:@typescript-eslint/recommended', 'plugin:prettier/recommended'),
    ),
    {
        files: ['**/*.ts', '**/*.tsx', '**/*.js', '**/*.jsx'],
        plugins: {
            '@typescript-eslint': fixupPluginRules(typescriptEslint),
            prettier: fixupPluginRules(prettier),
            import: fixupPluginRules(importPlugin),
            'unused-imports': unusedImports,
        },
        languageOptions: {
            globals: {
                ...globals.browser,
                ...globals.node,
            },
            parser: tsParser,
            ecmaVersion: 'latest',
            sourceType: 'module',
            parserOptions: {
                ecmaFeatures: {
                    jsx: true,
                },
            },
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
            // Prettier
            'prettier/prettier': 'error',

            // TypeScript rules
            '@typescript-eslint/no-unused-vars': 'off', // Usar unused-imports ao invés
            '@typescript-eslint/no-explicit-any': 'warn',
            '@typescript-eslint/explicit-module-boundary-types': 'off',

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
            'no-else-return': 'error',
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
            'no-multiple-empty-lines': ['error', { max: 1, maxEOF: 0, maxBOF: 0 }],
            'no-trailing-spaces': 'error',
            'eol-last': ['error', 'always'],
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
