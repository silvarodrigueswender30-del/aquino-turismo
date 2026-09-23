# Auditoria SEO Técnico — Aquino Tour

## 1. Resumo executivo

**Quantidade de problemas:**
- **Críticos:** 0
- **Altos:** 1 (Uso de `<img>` nativa em vez de `next/image` em componentes chave)
- **Médios:** 3 (Arquivos órfãos pesados em `/public`, Inconsistência na canonicalização relativa vs absoluta, Falta de página 404 customizada)
- **Baixos:** 2 (Atributos alt text contendo "Banner da...", Falta de breadcrumbs JSON-LD na página inicial)

O projeto encontra-se com uma estrutura técnica excepcionalmente robusta, sem bloqueios de indexação e com dados estruturados bem aplicados.

## 2. Indexação

- **noindex:** Nenhum meta noindex ou X-Robots-Tag foi detectado no código para as páginas de passeios ou página principal.
- **robots:** O arquivo estático gerado por `robots.ts` permite livre indexação (`Allow: /`).
- **canonical:** Todas as páginas possuem tag canonical. Identificamos uma inconsistência (MÉDIA prioridade) onde `/passeio-de-lancha-em-paraty` utiliza uma string absoluta interpolada com `SITE_URL`, enquanto `/passeio-de-escuna-em-paraty` e `/passeio-de-jipe-em-paraty` utilizam caminhos relativos (ex: `canonical: "/passeio-de-escuna-em-paraty"`). Embora o Next.js resolva relativos utilizando o `metadataBase` do RootLayout, a melhor prática é padronizar.

## 3. Metadata

- **Titles:** 
  - `Home`: "Passeios em Paraty: Jipe, Escuna e Lancha" (Perfeito)
  - `Lancha`: "Passeio de Lancha em Paraty | Aquino Tour" (Perfeito)
  - `Escuna`: "Passeio de escuna em Paraty | Aquino Tour" (Perfeito)
  - `Jipe`: "Passeio de jipe em Paraty | Aquino Tour" (Perfeito)
  - Nenhum título duplicado, ausente ou excessivamente genérico.
- **Descriptions:** Todas as rotas possuem descrição única, com tamanho entre 130 e 160 caracteres (otimizado).
- **Open Graph / Twitter:** Mapeado globalmente pelo `layout.tsx` e sobreposto de forma inteligente em cada tour com imagens próprias e títulos condizentes.

## 4. Headings

- **H1:** Existe apenas um H1 semântico e descritivo por página. O componente genérico `TourHero` gerencia a distribuição do `<h1>{title}</h1>` e de parágrafos suplementares (eyebrows e descrições).
- **H2 e H3:** Organizados com hierarquia fluida nas seções de FAQ e "Destaques".

## 5. Imagens

- **Alt text:** Existem imagens onde o atributo alt inicia com a palavra `"Banner da..."` (em `feature-section.tsx`). Leitores de tela já indicam tratar-se de uma imagem gráfica, portanto palavras como "foto", "imagem" ou "banner" são redundantes. As demais possuem alts descritivos excelentes (ex: `"Turistas aproveitando um passeio de barco premium..."`).
- **Formato e Peso:** As imagens estáticas no código são carregadas primariamente em `.avif` ou `.webp`, garantindo alta eficiência. 
- **Arquivos Órfãos:** Identificamos JPEGs extretamente pesados na pasta `public/images/hero-carousel` (como `slide-3.jpeg` e `slide-2.jpeg` de 3.1 MB) que aparentemente não são utilizados nos componentes React atuais (provavelmente de iterações antigas do design).
- **Next/Image:** Constatamos **falha ALTA** de performance no uso da tag nativa `<img src={...} />` na `gallery-slider.tsx`, `islands-section.tsx` e `feature-section.tsx`. Embora as imagens já estejam em AVIF, elas perdem o Lazy Loading nativo agressivo, os SRCSET automáticos gerados pelo Next.js e placeholders de Blur que previnem o Cumulative Layout Shift (CLS).

## 6. Core Web Vitals

- **LCP (Largest Contentful Paint):** Na Home, o LCP primário (imagem do Hero) foi implementado perfeitamente utilizando a tag `<picture>` contendo `fetchPriority="high"` e `decoding="sync"`, o que força a priorização antes mesmo de frameworks JS executarem. O impacto laboratorial é muito positivo.
- **CLS (Cumulative Layout Shift):** A não utilização explícita de `width` e `height` (ou o uso inconsistente do component `<Image>` com propriedade `fill`) pode causar shifts. O carrossel nativo foi pré-calculado com `aspect-[4/3]`, garantindo mitigação do layout shift, o que é um fator positivo de contorno.
- **INP (Interaction to Next Paint):** Nenhuma biblioteca extrema de third-party detectada que possa bloquear a Main Thread.

## 7. Sitemap

O `sitemap.ts` gera dinamicamente URLs para Home, Grupos e Caravanas, Jipe, Escuna e Lancha. 
Ele interage nativamente utilizando a variável centralizada `SITE_URL` vinda de `src/lib/site.ts`. Totalmente em conformidade.

## 8. Robots

Padrão `User-agent: *`, `Allow: /`. A diretiva do sitemap também consome a URL absolutizada perfeitamente.

## 9. Structured Data

Implementação **excelente** dos `JSON-LD`:
- Empregando `TravelAgency` na Home com coordenadas, endereço, horas de funcionamento, telefone e Logo.
- Empregando `Service` e `FAQPage` específicos nos passesios individuais (com Questions e Answers dinâmicas e literais extraídas dos dados da UI).
- Empregando `BreadcrumbList` nas páginas de lancha, escuna e jipe (o que gerará rich snippets no Google Search indicando "Início > Passeio").
Domínio antigo não possui dependência hardcoded, baseando-se 100% no `SITE_URL`.

## 10. Links internos

Rastreabilidade fluida através dos componentes de navegação:
- Navbar apontando para IDs de seção.
- `TourRelated` fazendo interlinkagem perfeita entre as rotas filhas.
Não há URLs absolutas hardcoded referenciando vercel.app nos componentes visuais ou Next `Link`.

## 11. Links quebrados

- **Link quebrado interno:** 0 detectados.
- **Asset inexistente:** 0 detectados referenciados nos componentes React lidos.
- **Link externo:** WhatsApp perfeitamente funcional chamando o utilitário dinâmico.

## 12. URLs / Slugs

A arquitetura das rotas segue kebab-case limpo, em minúsculas, sem acentos ou parâmetros desnecessários (`/passeio-de-escuna-em-paraty`). Não houve inconsistência de trailing slash identificada.

## 13. Redirects

Não há correntes de redirecionamento em `next.config.ts`.
A documentação pré-avaliação do novo domínio indica que futuramente configuraremos o `www` para direcionar à raiz. 

## 14. Mobile

A arquitetura CSS Tailwind foi construída via Mobile-First com classes `sm:`, `md:`, `lg:`.

## 15. Semântica e acessibilidade

Estrutura HTML riquíssima utilizando `<header>`, `<nav>`, `<main>`, `<section>`, `<footer>`. Atributos SR-Only (`sr-only`) aplicados em carrosséis visuais para garantir que a arte seja contextualizada a leitores de tela sem duplicar visualmente o texto.

## 16. Performance

Não há scripts redundantes de grande porte impactando a Main Thread de maneira injustificável.

## 17. JavaScript

Múltiplos componentes renderizados como `"use client"`, essencial para manter estado em carrosséis e hidratações animadas (Framer Motion). Contudo, todas as páginas mãe (`page.tsx`) funcionam no ecossistema Server Component estático do App Router do Next.js 16.

## 18. Analytics / scripts externos

Não foi encontrado nenhum script invasivo GTM, GA4 ou Pixel inserido de forma ineficiente no momento. Quando precisarem ser injetados, recomenda-se o `@next/third-parties/google`.

## 19. Domínio

Tudo dependerá estritamente da troca do valor em um único arquivo:
- **`src/lib/site.ts`** -> `export const SITE_URL = "https://DOMINIO-NOVO.com.br"`

## 20. Search Console

Checklist futuro a realizar:
[ ] Adicionar Propriedade de Domínio (DNS-based) via Registro.br.
[ ] Fazer upload do sitemap.xml da raiz canônica.

## 21. SEO Off-page

Nenhuma ação imposta via código resolve backlinks externos. Após a nova URL estar live na Vercel e o Search Console rastrear a canonical, buscar eventuais listagens da marca no TripAdvisor, Insta, e outros catálogos para alinhar ao `domínio.com.br`.

## 22. Arquivos envolvidos

**Problema 1 (ALTO): Uso de `<img>` ao invés de `<Image>` da Next.**
- Arquivos: `gallery-slider.tsx`, `islands-section.tsx`, `feature-section.tsx`
- Correção: Converter para import nativo do pacote "next/image".

**Problema 2 (MÉDIO): Arquivos pesados esquecidos em `/public`**
- Arquivos: `public/images/hero-carousel/slide-3.jpeg` etc.
- Correção: Limpeza geral após aprovação comercial.

**Problema 3 (MÉDIO): Canonicalização relativa inconsistente**
- Arquivos: `passeio-de-escuna-em-paraty/page.tsx`
- Correção: Alterar `/passeio-de-escuna-em-paraty` para absoluta via `` `${SITE_URL}/passeio...` ``.

## 23. Matriz de prioridade

| Prioridade | Problema | Página | Arquivo | Impacto | Dificuldade | Risco |
|---|---|---|---|---|---|---|
| ALTO | Uso de `<img/>` nativa | Múltiplas | `gallery-slider`, `islands-section`, `feature-section` | LCP / Image Optimization | Fácil | Baixo |
| MÉDIO | Inconsistência de Canonical | Passeios de Escuna e Jipe | `src/app/passeio-de-*/page.tsx` | Indexação de Edge Cases | Fácil | Baixo |
| MÉDIO | Arquivos JPEGs pesados abandonados | Repositório | `public/images/hero-carousel/*` | Inchaço de Build | Fácil | Baixo |
| BAIXO | Alt text redundante ("Banner...") | Home | `src/components/sections/feature-section.tsx` | Acessibilidade Auditiva | Fácil | Baixo |
| BAIXO | Página 404 Estática (Default) | Inexistentes | - | UX | Fácil | Baixo |

## 24. Plano de implementação

**FASE 1 — Problemas críticos de indexação**
(Não se aplica, site livre de impeditivos técnicos)

**FASE 2 — Imagens e performance**
- Alterar as tags em carrosséis visuais e apagar mídias em desuso.

**FASE 3 — Metadata e estrutura**
- Refinar os textos de ALT dos features.
- Uniformizar a injeção do prefixo `SITE_URL` nos canonicals remanescentes.

**FASE 4 — Schema e Links**
(Em estado impecável, sem ações exigidas)

**FASE 5 — Domínio e canonicalização**
- Iniciar na Vercel a recepção do novo .com.br;
- Refletir o `SITE_URL` em `site.ts`.

**FASE 6 — Search Console**
- Propriedade de Domínio; Monitoramento final.
