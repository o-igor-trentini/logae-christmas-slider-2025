# 🎄 Logae Christmas Slider 2025

Uma aplicação web interativa e festiva para celebrar o time da Logae no Natal de 2025. Apresentação em slides com animações suaves, efeitos de neve e easter eggs divertidos.

![Next.js](https://img.shields.io/badge/Next.js-16.0.7-black?style=flat-square&logo=next.js)
![React](https://img.shields.io/badge/React-19.2.0-61DAFB?style=flat-square&logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?style=flat-square&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-4.1.9-38B2AC?style=flat-square&logo=tailwind-css)

## ✨ Funcionalidades

### 🎬 Apresentação de Slides
- **Slides de Colaboradores**: Apresentação individual de cada membro do time com foto, cargo, equipe e descrição personalizada
- **Slides de Estatísticas**: Dados divertidos e curiosidades sobre o ano da empresa (café consumido, deploys, lanches, etc.)

### 🎮 Interatividade
- **Auto-play**: Transição automática a cada 8 segundos
- **Navegação por Teclado**:
  - `←` / `→`: Navegar entre slides
  - `Espaço`: Pausar/retomar auto-play
- **Navegação Visual**: 
  - Botões laterais para avançar/voltar
  - Indicadores de progresso na parte inferior
  - Contador de slides

### 🎨 Efeitos Visuais
- **Animações Suaves**: Transições elegantes entre slides usando Framer Motion
- **Efeito de Neve**: Neve animada caindo pela tela
- **Easter Eggs Flutuantes**: Elementos surpresa que aparecem aleatoriamente (emojis, frases engraçadas e imagens)
- **Tema Dark**: Interface moderna com gradientes verdes da marca Logae
- **Efeitos de Brilho**: Bordas animadas e gradientes nas imagens dos colaboradores

## 🛠️ Tecnologias

- **[Next.js 16](https://nextjs.org/)** - Framework React com App Router
- **[React 19](https://react.dev/)** - Biblioteca para interfaces de usuário
- **[TypeScript](https://www.typescriptlang.org/)** - Tipagem estática
- **[Tailwind CSS 4](https://tailwindcss.com/)** - Framework CSS utilitário
- **[Framer Motion](https://www.framer.com/motion/)** - Biblioteca de animações
- **[react-snowfall](https://github.com/cahilfoley/react-snowfall)** - Efeito de neve
- **[next-themes](https://github.com/pacocoursey/next-themes)** - Gerenciamento de temas

## 🚀 Como Executar

### Pré-requisitos
- Node.js 18+ 
- npm, yarn, pnpm ou bun

### Instalação

```bash
# Clone o repositório
git clone https://github.com/o-igor-trentini/logae-christmas-slider-2025.git

# Entre na pasta do projeto
cd logae-christmas-slider-2025

# Instale as dependências
npm install
```

### Desenvolvimento

```bash
# Inicie o servidor de desenvolvimento
npm run dev

# Acesse http://localhost:3000
```

### Build para Produção

```bash
# Gerar build otimizado
npm run build

# Executar versão de produção
npm start
```

## 📂 Estrutura do Projeto

```
├── app/                                # App Router do Next.js
│   ├── globals.css                     # Estilos globais
│   ├── layout.tsx                      # Layout raiz
│   └── page.tsx                        # Página principal
├── components/                         # Componentes React
│   ├── effects/                        # Efeitos visuais
│   │   ├── easter-egg-handler.tsx      # Gerenciador de easter eggs
│   │   ├── easter-egg-item.tsx         # Item individual de easter egg
│   │   ├── floating-easter-eggs.tsx    # Easter eggs flutuantes
│   │   └── snow-effect.tsx             # Efeito de neve
│   ├── navigation/                     # Componentes de navegação
│   │   ├── slide-controls.tsx          # Controles de navegação
│   │   └── slide-navigation.tsx        # Indicadores de slides
│   ├── slides/                         # Tipos de slides
│   │   ├── collaborator-slide.tsx      # Slide de colaborador
│   │   ├── firefighters-slide.tsx      # Slide de bombeiros
│   │   └── statistic-slide.tsx         # Slide de estatística
│   ├── animated-counter.tsx            # Contador animado
│   ├── content-renderer.tsx            # Renderizador de conteúdo
│   └── theme-provider.tsx              # Provider de tema
├── lib/                                # Utilitários e constantes
│   ├── constants/                      # Dados estáticos
│   │   ├── collaborators.ts            # Lista de colaboradores
│   │   ├── easter-eggs.ts              # Lista de easter eggs
│   │   └── statistics.ts               # Estatísticas
│   └── utils/                          # Funções utilitárias
│       ├── easter-egg-generator.ts     # Gerador de easter eggs
│       └── slide-generator.ts          # Gerador de slides
├── public/                             # Arquivos estáticos
│   ├── collaborators/                  # Fotos dos colaboradores
│   └── easter-eggs/                    # Imagens de easter eggs
└── package.json                        # Dependências e scripts
```

## 🎨 Personalização

### Adicionar Colaboradores

Edite `lib/constants/collaborators.ts`:

```typescript
{
    photo: './collaborators/nome.jpeg',
    name: 'Nome do Colaborador',
    role: 'Cargo',
    team: 'Nome da Equipe',
    description: 'Descrição curta',
    fullDescription: 'Descrição completa e criativa'
}
```

### Adicionar Estatísticas

Edite `lib/constants/statistics.ts`:

```typescript
{
    id: 'stat-x',
    title: 'Título',
    value: '999',
    unit: 'unidade',
    description: 'Descrição',
    emoji: '🎯',
    color: 'from-blue-600 to-blue-400',
    bgGradient: 'from-blue-900 to-blue-700'
}
```

### Adicionar Easter Eggs

Edite `lib/constants/easter-eggs.ts`:

```typescript
// Emoji
{ type: 'emoji', content: '🎄' }

// Frase
{ type: 'frase', content: 'Texto divertido!' }

// Imagem
{ type: 'image', content: './easter-eggs/imagem.png' }
```

### Configurar Gerador de Slides

Em `app/page.tsx`, ajuste as configurações:

```typescript
generateSlides({
    collaboratorsPerStatistic: 2,  // Colaboradores antes de cada estatística
    includeFirefighters: true,     // Incluir slide de bombeiros
    shuffleCollaborators: false,   // Embaralhar colaboradores
    shuffleStatistics: false       // Embaralhar estatísticas
})
```

## 🎯 Scripts Disponíveis

```bash
npm run dev        # Desenvolvimento
npm run build      # Build para produção
npm start          # Executar build
npm run lint       # Verificar código
npm run lint:fix   # Corrigir problemas automaticamente
```

## 🎄 Controles de Teclado

- **Seta Esquerda (←)**: Slide anterior
- **Seta Direita (→)**: Próximo slide
- **Espaço**: Pausar/Retomar apresentação automática

## 🌟 Easter Eggs

O projeto inclui easter eggs que aparecem aleatoriamente durante a apresentação:
- **Emojis festivos**: 🎄 🎅 🦌 ❄️ ⛄ 🎁
- **Frases engraçadas**: Piadas internas do time
- **Imagens surpresa**: Memes e fotos divertidas do time

## 📝 Licença

Este é um projeto privado da Logae para celebração interna de fim de ano.

## 👥 Créditos

Desenvolvido com ❤️ para o time da Logae - Natal 2025

---

**Feliz Natal! 🎄✨**
