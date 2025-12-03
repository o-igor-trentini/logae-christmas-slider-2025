# ESLint Configuration

Este projeto usa ESLint v9 com configuração flat config para garantir qualidade e consistência do código.

## 📦 Pacotes Instalados

- `eslint` - Linter JavaScript/TypeScript
- `@typescript-eslint/eslint-plugin` - Regras ESLint para TypeScript
- `@typescript-eslint/parser` - Parser TypeScript para ESLint
- `eslint-config-next` - Configuração ESLint para Next.js
- `eslint-plugin-import` - Regras para validação e organização de imports
- `eslint-plugin-unused-imports` - Remove imports não utilizados automaticamente
- `@eslint/eslintrc` - Utilitário para compatibilidade
- `@eslint/js` - Configurações base do ESLint

## 🔧 Configuração

O arquivo de configuração está em `eslint.config.mjs` usando o novo formato flat config do ESLint v9.

### Regras Principais

#### Import Organization 🎯
- **`import/order`**: Organiza imports em grupos ordenados:
  1. **Built-in**: Módulos Node.js nativos
  2. **External**: Pacotes npm (react, next, etc)
  3. **Internal**: Módulos com alias (@/)
  4. **Parent**: Imports de diretórios pai (../)
  5. **Sibling**: Imports do mesmo diretório (./)
  6. **Index**: Imports de index
  7. **Type**: Type imports
  
- **`import/first`**: Imports devem estar no topo do arquivo
- **`import/newline-after-import`**: Linha em branco após imports
- **`import/no-duplicates`**: Remove imports duplicados
- **`unused-imports/no-unused-imports`**: Remove imports não utilizados automaticamente

#### TypeScript
- `@typescript-eslint/no-explicit-any`: Aviso para uso de `any`
- `unused-imports/no-unused-vars`: Aviso para variáveis não utilizadas (permite `_` prefix e `ActionTypes`)

#### Gerais
- `no-console`: Aviso para uso de console (permite `console.warn` e `console.error`)
- `prefer-const`: Aviso para usar `const` quando possível
- `no-var`: Erro para uso de `var`
- `quotes`: Força uso de aspas simples ('') exceto quando necessário escapar
- `jsx-quotes`: Força uso de aspas simples em JSX

### Arquivos Ignorados

- `node_modules/`
- `.next/`
- `out/`
- `build/`
- `dist/`
- `public/`
- `*.config.js`
- `*.config.mjs`
- `coverage/`

## 🚀 Comandos

### Verificar código
```bash
npm run lint
```

### Corrigir automaticamente (incluindo organizar imports)
```bash
npm run lint:fix
```

### Organizar apenas imports
```bash
npm run format:imports
```

### Executar diretamente com npx
```bash
npx eslint .
npx eslint . --fix
```

## ✅ Status Atual

**Todos os arquivos passam no ESLint sem erros ou warnings! 🎉**

## 📝 Notas

1. **ESLint v9**: Este projeto usa a versão mais recente do ESLint com flat config format
2. **TypeScript First**: Prioriza validação TypeScript sobre ESLint quando há overlap
3. **Next.js Ready**: Configurado para funcionar perfeitamente com Next.js 16
4. **Auto-fix Imports**: Os imports são organizados automaticamente ao executar `npm run lint:fix`
5. **Import Order**: Imports organizados por tipo (builtin → external → internal → local)
6. **Unused Imports**: Imports não utilizados são removidos automaticamente

## 🔍 Verificação de Qualidade

O ESLint é executado automaticamente durante:
- Desenvolvimento local (via editor)
- Builds de produção (opcional)
- CI/CD pipelines (recomendado)

## 🛠️ Personalização

Para adicionar novas regras, edite o arquivo `eslint.config.mjs`:

```javascript
rules: {
  // Sua nova regra aqui
  'nome-da-regra': 'error',
}
```

## 📚 Recursos

- [ESLint Documentation](https://eslint.org/docs/latest/)
- [TypeScript ESLint](https://typescript-eslint.io/)
- [Next.js ESLint](https://nextjs.org/docs/app/building-your-application/configuring/eslint)
