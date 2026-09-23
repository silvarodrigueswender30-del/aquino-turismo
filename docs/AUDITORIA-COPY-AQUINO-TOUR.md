# Auditoria de Copy e Estrutura - Aquino Tour

Data da auditoria: 2026-09-21  
Projeto analisado: `C:\Users\Teste\Downloads\site-Agencia-Aquinotour-Paraty\Site`

## 1. Resumo da arquitetura de conteúdo

- Framework: Next.js App Router, React/TypeScript, Tailwind CSS.
- Rotas públicas encontradas:
  - `/`
  - `/grupos-e-caravanas`
  - `/passeio-de-jipe-em-paraty`
  - `/passeio-de-escuna-em-paraty`
  - `/passeio-de-lancha-em-paraty`
- Observação importante: o briefing cita `/passeio-de-lancha`, `/passeio-de-escuna` e `/passeio-de-jeep-4x4`, mas as rotas implementadas usam os slugs acima, com `em-paraty` e `jipe`.
- Conteúdo textual está distribuído entre:
  - páginas em `src/app/**/page.tsx`;
  - componentes de seção em `src/components/sections/**`;
  - componentes compartilhados em `src/components/sections/tours/**`;
  - configurações globais em `src/lib/site.ts`, `src/lib/whatsapp.ts`;
  - SEO global em `src/app/layout.tsx`;
  - JSON-LD em `src/components/seo/json-ld.tsx` e nas páginas.
- Não há pasta `data`, `content`, `constants` ou arquivo central único de copy. O conteúdo está majoritariamente em JSX e arrays locais.

## 2. Componentes e arquivos compartilhados

| Classificação | Componente/arquivo | Uso | Risco ao alterar |
|---|---|---|---|
| [COMPARTILHADO] | `src/app/layout.tsx` | metadata global, fontes, botão flutuante WhatsApp | Afeta todas as rotas |
| [COMPARTILHADO] | `src/components/sections/navbar.tsx` | navbar dentro de Home e TourHero | Afeta Home, passeios e grupos |
| [COMPARTILHADO] | `src/components/sections/footer-section.tsx` | footer em Home, passeios e grupos | Afeta todas as páginas que importam footer |
| [COMPARTILHADO] | `src/components/ui/floating-whatsapp-button.tsx` | botão flutuante global pelo layout | Afeta todas as rotas |
| [CONFIGURÁVEL] | `src/components/sections/tours/tour-hero.tsx` | hero das páginas de passeio e grupos | Layout compartilhado; copy vem por props |
| [CONFIGURÁVEL] | `tour-highlights.tsx`, `tour-for-whom.tsx`, `tour-faq.tsx`, `tour-related.tsx`, `tour-final-cta.tsx` | blocos das páginas de passeio | Layout compartilhado; copy vem por props/arrays das páginas |
| [COMPARTILHADO] | `src/lib/whatsapp.ts` | número e mensagens pré-preenchidas | Mensagens usadas por CTAs e botão flutuante |
| [COMPARTILHADO] | `src/lib/site.ts` | domínio, nome, Instagram, link Aquino Mar | Afeta SEO, links externos e CTAs de hospedagem |
| [COMPARTILHADO] | `src/components/seo/json-ld.tsx` | helper e schemas globais | Afeta JSON-LD quando importado |

## 3. Mapa de páginas

### HOME

Rota: `/`  
Arquivo: `src/app/page.tsx`

#### Seção 01 - SEO e JSON-LD

Container: metadata da página e schema invisível ao usuário.  
Componente: `Home`, `JsonLd`  
Arquivo: `src/app/page.tsx` linhas aproximadas 21-143  
Origem: objetos locais `homeJsonLd` e `metadata`, com `organizationJsonLd`, `websiteJsonLd` importados.

Copy atual:
- SEO title: "Passeios em Paraty: Jipe, Escuna e Lancha"
- SEO description: "Passeios de jipe, escuna e lancha em Paraty com atendimento local. Consulte opções para turistas, famílias, grupos, excursões e agências."
- OpenGraph title: "Passeios em Paraty: Jipe, Escuna e Lancha | Aquino Tour"
- OpenGraph description: "Conheça opções de passeio de jipe, escuna e lancha em Paraty com atendimento local da Aquino Tour."
- Twitter title: "Passeios em Paraty: Jipe, Escuna e Lancha | Aquino Tour"
- Twitter description: "Passeios em Paraty para turistas, famílias, grupos, excursões e agências."
- JSON-LD Service: "Passeios em Paraty"; serviceType "Passeios de jipe, escuna, lancha e turismo receptivo"; description sobre passeios e receptivo.
- JSON-LD FAQ: 8 perguntas, espelhando a FAQ visual da Home.

#### Seção 02 - Navbar

Container: navegação fixa no topo.  
Componente: `AquinoNavbar`  
Arquivo: `src/components/sections/navbar.tsx` linhas aproximadas 10-112  
Origem: array local `menuItems` e JSX.

Copy atual:
- Menu: "Passeios", "Como funciona", "Grupos & Excursões", "FAQ"
- CTA: "Falar pelo WhatsApp"
- Alt/logo: "Aquino Tour Paraty"
- Aria: "Aquino Tour - Voltar para a Home", "Abrir Menu", "Fechar Menu"

Classificação: [COMPARTILHADO]. Alterações impactam Home e todas as páginas que usam `TourHero`.

#### Seção 03 - Hero

Container: hero full-width com imagem de fundo, overlay escuro, texto à esquerda e carrossel visual à direita.  
Componente: `HeroSection`  
Arquivo: `src/components/sections/hero-section.tsx` linhas aproximadas 10-174  
Origem: JSX local, array `carouselCards`, `WHATSAPP_MESSAGES.home`.

Copy atual:
- Eyebrow: "AQUINO TOUR · PARATY"
- H1: "Passeios em Paraty para viver o melhor da cidade"
- Descrição: "Conheça cachoeiras, alambiques, praias e ilhas com passeios de jipe, escuna e lancha e conte com atendimento local para escolher a experiência ideal."
- CTA principal: "Ver passeios"
- CTA secundário: "Falar com a Aquino Tour"
- Bullets: "Atendimento para turistas e famílias"; "Grupos, excursões e agências"; "Experiências por terra e pelo mar"
- Alt hero: "Turistas aproveitando um passeio de barco premium pela Baía de Paraty, com mar azul cristalino"
- Alts carrossel: roteiros Lagoa Azul, Ilha dos Cocos, Cachoeira Pedra Branca, Praia da Lula, Cachoeira do Tobogã, Ilha Comprida, Poço do Tarzan.

Classificação: [LOCAL] para Home, exceto navbar e mensagem WhatsApp.

#### Seção 04 - Marquee institucional

Container: faixa horizontal com frases em movimento logo após o hero.  
Componente: `LogoMarquee`  
Arquivo: `src/components/sections/logo-marquee.tsx` linhas aproximadas 7-18  
Origem: JSX local.

Copy atual:
- "Paraty por quem vive Paraty"
- "Passeios com atendimento local"
- "Cachoeiras, praias e ilhas"
- "Experiências por terra e pelo mar"
- "Turismo receptivo em Paraty"

#### Seção 05 - Números/Stats

Container: grade 2x2/4 colunas em estilo ticket.  
Componente: `StatsCardSection`  
Arquivo: `src/components/ui/stats-card-section.tsx` linhas aproximadas 6-76  
Origem: array local `stats`.

Copy atual:
- "5,0" / "Avaliação no Google" / "Nota no Google"
- "25+" / "Avaliações públicas" / "Relatos de clientes"
- "PARATY" / "Atendimento em Paraty" / "Equipe local"
- "GRUPOS" / "Grupos e excursões" / "Receptivo"

#### Seção 06 - Sobre Nós

Container: bloco editorial com título à esquerda e três colunas de posicionamento.  
Componente: `Stats`  
Arquivo: `src/components/ui/stats-section-with-text.tsx` linhas aproximadas 3-47  
Origem: JSX local e array inline.

Copy atual:
- Badge: "Sobre Nós"
- Título: "Paraty é o nosso ponto de partida."
- Descrição: "Passeios e turismo receptivo com orientação local para turistas, famílias, grupos e agências que querem viver Paraty com mais clareza."
- Cards: "Por terra" / "experiências que conectam natureza, cultura local e região rural"; "Pelo mar" / "praias, ilhas e paisagens da baía de Paraty"; "Receptivo" / "atendimento próximo para planejar passeios individuais e em grupo"

Observação: briefing menciona "Paraty é a nossa casa."; o texto atual é "Paraty é o nosso ponto de partida."

#### Seção 07 - Galeria de destinos

Container: carrossel horizontal full-width sobre imagem de fundo marítima.  
Componente: `GallerySlider`  
Arquivo: `src/components/sections/gallery-slider.tsx` linhas aproximadas 16-145  
Origem: array local `galleryItems`.

Copy atual:
- Cards: "Ilha Comprida" / "Baía de Paraty"; "Ilha dos Cocos" / "Baía de Paraty"; "Lagoa Azul" / "Paraty, RJ"; "Praia da Conceição" / "Paraty, RJ"; "Praia Vermelha" / "Paraty, RJ"; "Saco da Velha" / "Baía de Paraty"
- Alt fundo: "Paisagem marítima na Baía de Paraty"
- Fallback: "Imagem indisponível"
- Botões: aria-label "Anterior", "Próximo"

Observação: comentário interno diz que imagens eram placeholders Unsplash, mas os paths atuais apontam para assets locais.

#### Seção 08 - Experiências/Passeios Aquino Tour

Container: bloco editorial com grid assimétrico de imagens e card de CTA.  
Componente: `FeatureSection`  
Arquivo: `src/components/sections/feature-section.tsx` linhas aproximadas 4-109  
Origem: array local `CARDS` e JSX.

Copy atual:
- Eyebrow: "PASSEIOS AQUINO TOUR"
- Título: "Descubra Paraty por terra e pelo mar"
- Descrição: "A Aquino Tour ajuda você a encontrar o passeio mais adequado para o seu perfil, seja uma experiência de jipe pela região de cachoeiras e alambiques, um passeio de escuna pela baía ou uma saída de lancha para conhecer praias e ilhas."
- Card texto: "Passeios para cada perfil"; "Atendimento local para turistas, famílias, grupos e agências."
- CTA: "Conhecer passeios em Paraty"
- Conteúdo sr-only: "Paraty pelo mar" / "Passeios de escuna pela Baía de Paraty e praias da região"; "Paraty por terra" / "Cachoeiras, alambiques e cultura local"

#### Seção 09 - Pilares

Container: card/ticket grande com três colunas.  
Componente: `FeatureGrid`  
Arquivo: `src/components/ui/feature-grid-enterprise-grade.tsx` linhas aproximadas 11-120  
Origem: array local `pillars`.

Copy atual:
- Faixa: "Como Trabalhamos"
- Título: "O jeito Aquino Tour de receber."
- Pilar 1: "Atendimento local" / "Orientação para escolher experiências de acordo com o perfil, o tempo disponível e o tamanho do grupo."
- Pilar 2: "Paraty por terra e pelo mar" / "Passeios que conectam cachoeiras, alambiques, praias, ilhas e diferentes experiências da região."
- Pilar 3: "Grupos e excursões" / "Atendimento para famílias, excursões, guias, organizadores e agências de turismo."

#### Seção 10 - Praias e ilhas

Container: seção editorial com carrossel/marquee de imagens de rotas.  
Componente: `IslandsSection`  
Arquivo: `src/components/sections/islands-section.tsx` linhas aproximadas 5-91  
Origem: array local `galleryItems`.

Copy atual:
- Eyebrow: "DESCUBRA PARATY"
- Título: "Praias e ilhas para descobrir em Paraty"
- Descrição: "A baía de Paraty reúne diferentes paisagens e paradas que podem fazer parte das experiências marítimas disponíveis na região."
- Textos acessíveis dos cards: "Rota 01 - Baía de Paraty" até "Rota 09 - Baía de Paraty"

#### Seção 11 - Passeios em Paraty

Container: seção com fundo de imagem e grid/carrossel de quatro cards em formato ticket.  
Componente: `ServicesSection`  
Arquivo: `src/components/sections/services-section.tsx` linhas aproximadas 25-275  
Origem: array local `services`; mensagens de WhatsApp por `WHATSAPP_MESSAGES`.

Copy atual:
- Eyebrow: "PASSEIOS EM PARATY"
- Título: "Escolha como você quer conhecer Paraty"
- Descrição: "Passeios de jipe, escuna e lancha, além de atendimento receptivo para grupos e excursões."
- Mobile hint: "Deslize para ver todas as opções"
- Card 001: "Terra, cachoeiras e cultura"; "Passeio de jipe em Paraty"; descrição sobre região rural, natureza, cachoeiras, alambiques e cultura; detalhe "Para quem quer viver Paraty além do centro histórico."; CTA "Conhecer passeio de jipe"; CTA WhatsApp "Tirar dúvidas pelo WhatsApp"
- Card 002: "Baía, ilhas e praias"; "Passeio de escuna em Paraty"; descrição sobre baía, praias, ilhas e momentos em grupo; detalhe "Uma escolha clássica para famílias, casais e grupos."; CTA "Conhecer passeio de escuna"; CTA WhatsApp "Tirar dúvidas pelo WhatsApp"
- Card 003: "Mais liberdade no mar"; "Passeio de lancha em Paraty"; descrição sobre privacidade e flexibilidade; detalhe "Indicado para quem busca uma experiência mais reservada."; CTA "Conhecer passeio de lancha"; CTA WhatsApp "Tirar dúvidas pelo WhatsApp"
- Card 004: "Receptivo em Paraty"; "Passeios para grupos e excursões"; descrição sobre agências, guias, organizadores, caravanas e grupos; detalhe "Apoio local para organizar a viagem com mais clareza."; CTA "Planejar excursão"; CTA WhatsApp "Tirar dúvidas pelo WhatsApp"

#### Seção 12 - Planejamento

Container: bloco de duas colunas, passos à esquerda e grid de imagens à direita.  
Componente: `PricingSection`  
Arquivo: `src/components/sections/pricing-section.tsx` linhas aproximadas 4-119  
Origem: JSX local; `WHATSAPP_MESSAGES.home`.

Copy atual:
- Eyebrow: "PLANEJE SUA EXPERIÊNCIA"
- Título: "Encontre o passeio ideal para sua viagem"
- Descrição: "Valores, horários e disponibilidade variam conforme o serviço, a data e o perfil da viagem. Pelo WhatsApp, a equipe ajuda você a consultar passeio de jipe, escuna, lancha ou atendimento para grupos e excursões."
- Passo 01: "Escolha o passeio" / "Passeio de jipe, passeio de escuna, passeio de lancha ou grupos e excursões."
- Passo 02: "Informe o perfil da viagem" / "Turistas, famílias, pequenos grupos, excursões e agências têm necessidades diferentes."
- Passo 03: "Consulte valores e horários" / "A equipe verifica disponibilidade e condições para a data escolhida."
- CTA: "Consultar valores e horários"
- Alts: "Roteiro de experiência Aquino Tour em Paraty"; "Ticket editorial de passeio e experiência em Paraty"; "Experiência turística receptiva em Paraty"

#### Seção 13 - Grupos na Home

Container: card/ticket escuro com faixa superior e CTAs.  
Componente: `GroupsHomeSection`  
Arquivo: `src/components/sections/groups-home-section.tsx` linhas aproximadas 7-112  
Origem: JSX local; `WHATSAPP_MESSAGES.grupos`; `AQUINO_MAR_GROUPS_URL`.

Copy atual:
- Faixa: "Grupos e Excursões"
- Título: "Está organizando uma excursão para Paraty?"
- Descrição: "A Aquino Tour oferece atendimento receptivo para agências de turismo, guias, organizadores e grupos que desejam incluir passeios de jipe, escuna ou lancha em sua programação."
- Apoio: "Para grupos que também precisam de hospedagem, a Aquino Tour trabalha em integração comercial com a Pousada Aquino Mar."
- CTA WhatsApp: "Solicitar orçamento para grupo"
- CTA interno: "Conhecer atendimento para excursões"
- CTA externo: "Consultar hospedagem para grupos"

#### Seção 14 - Galeria de clientes

Container: carrossel coverflow com fotos de clientes.  
Componente: `ClientGallerySection`  
Arquivo: `src/components/sections/client-gallery-section.tsx` linhas aproximadas 16-112  
Origem: array local `baseImages` e JSX.

Copy atual:
- Eyebrow: "PARATY EM MOVIMENTO"
- Título: "Momentos que fazem parte da viagem."
- Descrição: "Mar, natureza e encontros que ajudam a contar a experiência de estar em Paraty."
- Alts: família, casal, hóspedes, grupo, lazer, família explorando Paraty, registros de visitantes, momentos especiais, fim de tarde em família.

#### Seção 15 - Depoimentos

Container: três cards estilo ticket com avaliações do Google.  
Componente: `AnimatedTestimonialsBasic`, `TestimonialCard`  
Arquivo: `src/components/ui/animated-testimonials.tsx` linhas aproximadas 33-168  
Origem: array local `aquinoTestimonials`.

Copy atual:
- Eyebrow: "AVALIAÇÕES NO GOOGLE"
- Título: "Quem conhece, recomenda."
- Descrição: "Experiências compartilhadas por quem já contou com a Aquino Tour em Paraty."
- Depoimentos: Sara Helen Miranda, Claudia Naideg, Giuliana Moraes; todos source "Avaliação no Google" e rating 5.

Observação: os dois primeiros depoimentos também aparecem na página de grupos.

#### Seção 16 - Localização

Container: seção com informações em card à esquerda e mapa incorporado à direita.  
Componente: `LocationSection`  
Arquivo: `src/components/sections/location-section.tsx` linhas aproximadas 7-119  
Origem: JSX local; `WHATSAPP_MESSAGES.home`.

Copy atual:
- Eyebrow: "COMO CHEGAR · LOCALIZAÇÃO"
- Título: "Nosso ponto de atendimento em Paraty"
- Descrição: "Estamos localizados no bairro Caborê, a poucos minutos do Centro Histórico e do cais de embarque dos passeios marítimos."
- Card endereço: "Endereço de Atendimento"; "Rua Guapuruvu, 371 — Caborê"; "Paraty - RJ, CEP 23970-000"
- Card horário: "Horário de Atendimento"; "Segunda a Domingo: 08:00 às 20:00"; "Suporte e reservas via WhatsApp durante todo o dia."
- Card contato: "Contato & WhatsApp"; "+55 (24) 99909-6384"
- CTA mapa: "Abrir rota no Google Maps"
- Iframe title: "Localização Aquino Tour Paraty — Caborê"

#### Seção 17 - FAQ Home

Container: FAQ accordion centralizado.  
Componente: `FaqSection`  
Arquivo: `src/components/sections/faq-section.tsx` linhas aproximadas 8-158  
Origem: array local `faqs`.

Copy atual:
- Eyebrow: "DÚVIDAS FREQUENTES"
- Título: "Antes de embarcar."
- Descrição: "Informações essenciais para planejar sua experiência em Paraty."
- Perguntas: 8 perguntas listadas na seção de FAQ/SEO.

#### Seção 18 - Footer

Container: rodapé escuro com colunas de marca, navegação, experiências e redes sociais.  
Componente: `FooterSection`  
Arquivo: `src/components/sections/footer-section.tsx` linhas aproximadas 11-135  
Origem: JSX local; `INSTAGRAM_URL`; `WHATSAPP_MESSAGES.home`.

Copy atual:
- Alt logo: "Aquino Tour Paraty"
- Descrição: "Passeios e turismo receptivo em Paraty."
- Endereço: "R. Guapuruvu, 371 - Caborê, Paraty - RJ, 23970-000"
- Telefone: "+55 (24) 99909-6384"
- Coluna "Navegação": "Passeios"; "Como funciona"; "Grupos & Excursões"; "Perguntas Frequentes"
- Coluna "Experiências": "Passeio de Jipe"; "Passeio de Escuna"; "Passeio de Lancha"; "Grupos & Excursões"
- Redes: "Redes Sociais"; "@aquinotourparaty"
- Legal: "© {ano} Aquino Tour Paraty. Todos os direitos reservados."; "Desenvolvido por Off-Data"; "R. Guapuruvu, 371 - Caborê, Paraty - RJ"

## 4. Páginas de passeio

As páginas de passeio seguem a mesma estrutura visual:

1. `TourHero` full-width com imagem de fundo.
2. Breadcrumb visual.
3. Seção editorial introdutória.
4. `TourHighlights` com quatro diferenciais.
5. `TourForWhom` com público indicado.
6. `TourFaq`.
7. `TourRelated`.
8. `TourFinalCta`.
9. `FooterSection`.

Os componentes são compartilhados, mas a copy é configurável via props e arrays locais em cada `page.tsx`.

### Passeio de Lancha

Rota real: `/passeio-de-lancha-em-paraty`  
Arquivo: `src/app/passeio-de-lancha-em-paraty/page.tsx`

- SEO title: "Passeio de lancha em Paraty | Aquino Tour"
- SEO description: "Explore praias e ilhas de forma mais reservada e flexível. Opção indicada para famílias e pequenos grupos que visitam Paraty."
- Canonical: "/passeio-de-lancha-em-paraty"
- OpenGraph alt: "Passeio de lancha em Paraty"
- JSON-LD: BreadcrumbList, Service "Passeio de Lancha em Paraty", FAQPage gerada de `faqs`.

Hero:
- Eyebrow: "PASSEIO DE LANCHA"
- H1: "Explore a baía em uma experiência mais reservada"
- Descrição: "Navegue pelo mar de Paraty com mais flexibilidade. Uma opção excelente para famílias e pequenos grupos que desejam otimizar o tempo e personalizar seu roteiro pelas praias e ilhas."
- CTA: "Consultar lanchas via WhatsApp"
- Alt: "Passeio de lancha em Paraty"

Breadcrumb:
- "Início" > "Passeio de Lancha em Paraty"

Editorial:
- Título: "Descubra os cartões-postais da região no seu ritmo"
- Parágrafo 1: "O passeio de lancha em Paraty oferece uma dinâmica diferente para conhecer o litoral..."
- Parágrafo 2: "Trata-se de uma experiência mais reservada..."

Destaques:
- Eyebrow: "O QUE ESPERAR"
- Título: "Destaques da experiência"
- Cards: "Agilidade"; "Roteiro adaptável"; "Otimização de tempo"; "Experiência reservada"

Para quem:
- Eyebrow: "PERFIL DO PASSEIO"
- Título: "Para quem é o passeio de lancha?"
- Descrição: "Esta é a opção ideal para visitantes que priorizam conforto, dinâmica personalizada e otimização do tempo..."
- Públicos: famílias e pequenos grupos; experiência reservada; casais; turistas que desejam flexibilidade.

FAQ:
- "O roteiro do passeio de lancha é flexível?"
- "Quantas pessoas cabem na lancha?"
- "O passeio inclui alimentação?"
- "Qual o horário de saída?"

Relacionados:
- "Passeio de Escuna"; "Passeio de Jipe"; "Grupos e Excursões"

CTA final:
- Eyebrow: "RESERVE SEU PASSEIO"
- Título: "Fale com a equipe da Aquino Tour"
- Body: "Consulte embarcações disponíveis, valores e planeje o roteiro de lancha ideal para a sua data."
- CTA: "Consultar pelo WhatsApp"

### Passeio de Escuna

Rota real: `/passeio-de-escuna-em-paraty`  
Arquivo: `src/app/passeio-de-escuna-em-paraty/page.tsx`

- SEO title: "Passeio de escuna em Paraty | Aquino Tour"
- SEO description: "Passeio de escuna em Paraty: navegue pela baía com paradas em praias e ilhas paradisíacas. Consulte horários e garanta sua vaga pelo WhatsApp."
- Canonical: "/passeio-de-escuna-em-paraty"
- OpenGraph alt: "Passeio de escuna em Paraty"
- JSON-LD: BreadcrumbList, Service "Passeio de Escuna em Paraty", FAQPage gerada de `faqs`.

Hero:
- Eyebrow: "PASSEIO DE ESCUNA"
- H1: "Navegue pelas belezas da Baía de Paraty"
- Descrição: "Aproveite o mar calmo da região em um passeio coletivo com paradas para banho, contemplação e momentos de lazer em praias e ilhas paradisíacas."
- CTA: "Consultar passeio via WhatsApp"
- Alt: "Passeio de escuna na baía de Paraty"

Breadcrumb:
- "Início" > "Passeio de Escuna em Paraty"

Editorial:
- Título: "A experiência mais tradicional do litoral sul"
- Parágrafo 1: "O passeio de escuna é uma das atividades mais procuradas..."
- Parágrafo 2: "Durante o passeio, os passageiros podem desfrutar da estrutura da embarcação..."

Destaques:
- "Paradas para banho"; "Estrutura a bordo"; "Passeio Coletivo"; "Paisagens"

Para quem:
- Título: "Para quem é o passeio de escuna?"
- Descrição: "A escuna é uma opção versátil, oferecendo excelente custo-benefício..."
- Públicos: primeira visita; famílias com crianças e idosos; grupos e excursões; visitantes buscando bar/restaurante.

FAQ:
- "Quanto tempo dura o passeio de escuna?"
- "Quais são as paradas do passeio de escuna?"
- "O passeio inclui alimentação?"
- "O passeio é indicado para crianças?"

Relacionados:
- "Passeio de Lancha"; "Passeio de Jipe"; "Grupos e Excursões"

CTA final:
- Body: "Consulte valores, horários e a programação das escunas disponíveis para a data da sua viagem."
- CTA: "Consultar pelo WhatsApp"

### Passeio de Jipe

Rota real: `/passeio-de-jipe-em-paraty`  
Arquivo: `src/app/passeio-de-jipe-em-paraty/page.tsx`

- SEO title: "Passeio de jipe em Paraty | Aquino Tour"
- SEO description: "Passeio de jipe em Paraty: conheça cachoeiras, alambiques e a Mata Atlântica em um roteiro rural inesquecível. Reserve seu lugar pelo WhatsApp."
- Canonical: "/passeio-de-jipe-em-paraty"
- OpenGraph alt: "Passeio de jipe em Paraty"
- JSON-LD: BreadcrumbList, Service "Passeio de Jipe em Paraty", FAQPage gerada de `faqs`.

Hero:
- Eyebrow: "PASSEIO DE JIPE"
- H1: "Paraty por terra: natureza, cachoeiras e cultura local"
- Descrição: "Uma imersão na região rural de Paraty. Conheça as principais cachoeiras, visite alambiques tradicionais e viva uma experiência em contato com a Mata Atlântica."
- CTA: "Consultar passeio via WhatsApp"
- Alt: "Praia e vegetação da Mata Atlântica em Paraty"

Breadcrumb:
- "Início" > "Passeio de Jipe em Paraty"

Editorial:
- Título: "Descubra os encantos do interior de Paraty"
- Parágrafo 1: "O passeio de jipe é a escolha ideal para quem quer explorar Paraty além do mar..."
- Parágrafo 2: "Durante o trajeto, você terá a oportunidade de visitar os tradicionais alambiques..."

Destaques:
- "Região Rural"; "Cachoeiras"; "Alambiques"; "Parada em restaurante"

Para quem:
- Título: "Para quem é o passeio de jipe?"
- Descrição: "Esta experiência é procurada por visitantes que desejam conhecer a parte histórica e natural do interior da cidade..."
- Públicos: casais e amigos; famílias; apreciadores de cultura local e alambiques; ecoturismo.

FAQ:
- "O que esperar do roteiro do passeio de jipe?"
- "O passeio de jipe inclui alimentação?"
- "Crianças podem fazer o passeio de jipe?"
- "O passeio acontece com chuva?"

Relacionados:
- "Passeio de Escuna"; "Passeio de Lancha"; "Grupos e Excursões"

CTA final:
- Body: "Consulte valores, horários e disponibilidade do passeio de jipe para a data da sua viagem."
- CTA: "Consultar pelo WhatsApp"

## 5. Grupos e Caravanas

Rota: `/grupos-e-caravanas`  
Arquivo: `src/app/grupos-e-caravanas/page.tsx`

### SEO e schema

- SEO title: "Turismo Receptivo para Grupos em Paraty"
- SEO description: "Passeios e atendimento receptivo para grupos e excursões em Paraty. Consulte jipe, escuna, lancha e hospedagem para agências, guias e caravanas."
- Canonical: `https://aquino-turismo.vercel.app/grupos-e-caravanas`
- OpenGraph title: "Turismo Receptivo para Grupos em Paraty | Aquino Tour"
- OpenGraph description: "Atendimento para grupos, excursões, agências e guias que desejam organizar passeios em Paraty."
- JSON-LD: Service "Turismo receptivo para grupos em Paraty"; FAQPage com 9 perguntas; BreadcrumbList "Início" > "Grupos e Excursões".

### Seções

Hero:
- Componente: `GruposHeroSection` + `TourHero`
- Arquivo: `src/components/sections/groups/grupos-hero-section.tsx`
- Container: hero full-width com imagem de fundo.
- Copy: eyebrow "GRUPOS · EXCURSÕES · AGÊNCIAS"; H1 "Turismo receptivo em Paraty para grupos e excursões"; descrição sobre organizar jipe, escuna, lancha e hospedagem; CTAs "Solicitar proposta para grupo" e "Consultar hospedagem".

Autoridade:
- Componente: `GruposAutoridadeSection`
- Container: bloco editorial em duas colunas.
- Copy: eyebrow "PARATY PARA GRUPOS"; título "Sua agência traz o grupo. Nós ajudamos a organizar a experiência em Paraty."; descrição sobre fornecedores confiáveis; pilares "Atendimento para grupos", "Experiências em Paraty", "Organização local", "Integração com hospedagem".

Como funciona:
- Componente: `GruposComoFuncionaSection`
- Container: bloco em grid de cinco passos.
- Copy: eyebrow "COMO FUNCIONA"; título "Como organizamos a experiência do seu grupo"; passos "Envie os dados da excursão", "Analisamos as opções", "Preparamos a proposta", "Alinhamos a operação", "O grupo chega a Paraty".

Experiências:
- Componente: `GruposExperienciasSection`
- Container: grid de cards com imagem.
- Copy: eyebrow "EXPERIÊNCIAS PARA GRUPOS"; título "Experiências que podem entrar na programação do grupo"; cards "Passeio de Jipe", "Passeio de Escuna", "Passeio de Lancha", "Hospedagem", "Roteiro integrado".

Para quem:
- Componente: `GruposParaQuemSection`
- Container: seção escura com grid de perfis.
- Copy: eyebrow "PARA QUEM ORGANIZA"; título "Atendimento para diferentes perfis de grupo"; perfis "Agências de turismo", "Guias e organizadores", "Excursões e caravanas", "Grupos religiosos", "Terceira idade", "Empresas e equipes", "Famílias e amigos".

Aquino Mar:
- Componente: `GruposAquinoMarSection`
- Container: duas colunas, texto e card comparativo.
- Copy: eyebrow "TURISMO + HOSPEDAGEM"; título "Hospedagem para grupos na Pousada Aquino Mar"; CTA "Conhecer opções de hospedagem para grupos na Pousada Aquino Mar"; cards "AQUINO TOUR" e "POUSADA AQUINO MAR".

Planejamento B2B:
- Componente: `GruposBeneficiosSection`
- Container: grid de seis informações necessárias.
- Copy: eyebrow "PLANEJAMENTO B2B"; título "O que precisamos saber sobre sua excursão"; itens "Cidade e estado de origem", "Datas de chegada e saída", "Quantidade de passageiros", "Serviços de interesse", "Perfil do grupo", "Responsável pelo contato".

Prova social:
- Componente: `GruposProvaSection`
- Container: dois cards de avaliações.
- Copy: eyebrow "AVALIAÇÕES NO GOOGLE"; título "Quem conhece, recomenda."; depoimentos de Sara Helen Miranda e Claudia Naideg.

FAQ:
- Componente: `GruposFaqSection`
- Container: accordion em duas colunas.
- Copy: eyebrow "PERGUNTAS FREQUENTES"; título "Dúvidas sobre grupos e excursões em Paraty."; 9 perguntas no array `gruposFaqs`.

CTA final:
- Componente: `GruposCtaSection`
- Container: seção escura centralizada com dois CTAs.
- Copy: eyebrow "PLANEJE SEU GRUPO"; título "Vamos organizar a experiência do seu grupo em Paraty?"; descrição "Envie as informações da excursão..."; CTAs "Solicitar orçamento pelo WhatsApp" e "Consultar hospedagem".

Footer:
- Componente: `FooterSection`, compartilhado.

## 6. WhatsApp e CTAs

Arquivo principal: `src/lib/whatsapp.ts`

Número: `5524999096384`

Mensagens:
- `home`: "Olá! Vim pelo site da Aquino Tour e gostaria de informações sobre passeios em Paraty."
- `jeep`: "Olá! Vim pelo site da Aquino Tour e gostaria de informações sobre o passeio de jipe em Paraty."
- `escuna`: "Olá! Vim pelo site da Aquino Tour e gostaria de informações sobre o passeio de escuna em Paraty."
- `lancha`: "Olá! Vim pelo site da Aquino Tour e gostaria de informações sobre o passeio de lancha em Paraty."
- `grupos`: "Olá! Vim pela página de Grupos e Excursões da Aquino Tour e gostaria de solicitar uma proposta para meu grupo em Paraty."

Função:
- `getWhatsappUrl(message, web = false)` retorna `wa.me` no padrão mobile e `web.whatsapp.com/send` quando `web=true`.

CTAs principais por rota:
- Home: navbar "Falar pelo WhatsApp"; hero "Falar com a Aquino Tour"; planejamento "Consultar valores e horários"; footer telefone; localização telefone; botão flutuante.
- Jipe: hero "Consultar passeio via WhatsApp"; final "Consultar pelo WhatsApp"; botão flutuante usa mensagem `jeep`.
- Escuna: hero "Consultar passeio via WhatsApp"; final "Consultar pelo WhatsApp"; botão flutuante usa mensagem `escuna`.
- Lancha: hero "Consultar lanchas via WhatsApp"; final "Consultar pelo WhatsApp"; botão flutuante usa mensagem `lancha`.
- Grupos: hero "Solicitar proposta para grupo"; Home grupos "Solicitar orçamento para grupo"; CTA final "Solicitar orçamento pelo WhatsApp"; botão flutuante usa mensagem `grupos`.

Botão flutuante:
- Arquivo: `src/components/ui/floating-whatsapp-button.tsx`
- Balão: "Ficou com alguma dúvida? Fale com a Aquino Tour pelo WhatsApp."
- Aria: "Fale conosco pelo WhatsApp"; "Fechar mensagem"
- Classificação: [COMPARTILHADO], mas mensagem é selecionada por pathname.

## 7. FAQs

- Home visual: `src/components/sections/faq-section.tsx`; 8 perguntas.
- Home schema: `src/app/page.tsx`; 8 perguntas semelhantes às visuais.
- Lancha: `src/app/passeio-de-lancha-em-paraty/page.tsx`; array `faqs` com 4 perguntas; também alimenta schema FAQPage.
- Escuna: `src/app/passeio-de-escuna-em-paraty/page.tsx`; array `faqs` com 4 perguntas; também alimenta schema FAQPage.
- Jipe: `src/app/passeio-de-jipe-em-paraty/page.tsx`; array `faqs` com 4 perguntas; também alimenta schema FAQPage.
- Grupos visual: `src/components/sections/groups/grupos-faq-section.tsx`; export `gruposFaqs` com 9 perguntas.
- Grupos schema: `src/app/grupos-e-caravanas/page.tsx`; FAQPage duplicada manualmente com 9 perguntas.

Ponto de atenção: FAQ visual e FAQ Schema de grupos são duplicadas em arquivos diferentes. Alterar uma sem a outra pode gerar inconsistência.

## 8. SEO, metadata, schema, sitemap e robots

Global:
- `src/app/layout.tsx`: metadataBase, title default/template, description, robots, canonical global, favicon, OpenGraph, Twitter.
- `src/components/seo/json-ld.tsx`: helper `JsonLd`, `organizationJsonLd` e `websiteJsonLd`.
- `src/lib/site.ts`: `SITE_URL`, `SITE_NAME`, `INSTAGRAM_URL`, `AQUINO_MAR_GROUPS_URL`.

Sitemap:
- Arquivo: `src/app/sitemap.ts`
- Rotas listadas: `/`, `/grupos-e-caravanas`, `/passeio-de-jipe-em-paraty`, `/passeio-de-escuna-em-paraty`, `/passeio-de-lancha-em-paraty`.

Robots:
- Arquivo: `src/app/robots.ts`
- `allow: "/"`; sitemap `${SITE_URL}/sitemap.xml`.

Schemas:
- Organização: `TravelAgency` com telefone, endereço, geo, horário 08:00-20:00, descrição.
- Website: `WebSite`.
- Home: Service + FAQPage.
- Passeios: BreadcrumbList + Service + FAQPage.
- Grupos: Service + FAQPage + BreadcrumbList.

Alt text relevante:
- Home hero, cards de rotas, galeria, experiências, localização/mapa iframe.
- Páginas de passeio possuem alt no hero e cards relacionados.
- Grupos possui alts nos cards de experiências.

## 9. Pontos de efeito em múltiplas páginas

- Alterar `src/lib/whatsapp.ts` afeta CTAs, footer, navbar, localização, botão flutuante e serviços.
- Alterar `TourHero` muda layout/comportamento do hero de lancha, escuna, jipe e grupos.
- Alterar componentes de `src/components/sections/tours/` afeta todas as páginas de passeio que usam esses blocos.
- Alterar `FooterSection` ou `AquinoNavbar` afeta múltiplas rotas.
- Alterar `src/lib/site.ts` afeta canonical/URL/schema/links globais.
- Alterar `organizationJsonLd` afeta a Home, pois ela importa esse schema global.
- Alterar depoimentos exige atenção: Home usa `AnimatedTestimonialsBasic`; grupos usa `GruposProvaSection`, com duplicação parcial dos mesmos depoimentos.
- FAQ visual e FAQ Schema podem estar duplicados; verificar sempre os dois pontos.

## 10. Observações de inconsistência ou atenção

- Slugs citados no briefing não batem com os slugs implementados. O projeto usa `/passeio-de-lancha-em-paraty`, `/passeio-de-escuna-em-paraty` e `/passeio-de-jipe-em-paraty`.
- O briefing cita "Jeep 4x4"; a copy atual usa "jipe" e "Passeio de Jipe".
- O briefing cita "Paraty é a nossa casa."; a copy atual da Home é "Paraty é o nosso ponto de partida."
- Algumas perguntas de FAQ existem tanto em componente visual quanto em schema, sem fonte única centralizada.
- `GallerySlider` contém comentário TODO sobre placeholders, embora os assets atuais estejam locais.
- Alguns textos têm variações de grafia/capitalização, por exemplo "Passeio Coletivo" com C maiúsculo em destaque de escuna.
- A página de grupos usa "Grupos e Excursões" no breadcrumb JSON-LD, enquanto a rota e o briefing falam em "Grupos e Caravanas".
- A Home tem seção `PricingSection`, mas o conteúdo é de planejamento/consulta, não precificação explícita.

## 11. Resumo operacional para próxima etapa

- Para alterar copy da Home: revisar `src/components/sections/*.tsx`, `src/components/ui/stats-*.tsx`, `src/components/ui/feature-grid-enterprise-grade.tsx`, `src/components/ui/animated-testimonials.tsx`, `src/app/page.tsx`.
- Para alterar copy de passeios: revisar o `page.tsx` específico e, se necessário, os componentes compartilhados em `src/components/sections/tours/`.
- Para alterar WhatsApp: revisar primeiro `src/lib/whatsapp.ts`, depois CTAs locais.
- Para alterar SEO/schema: revisar `src/app/layout.tsx`, `src/app/page.tsx`, `src/app/**/page.tsx`, `src/components/seo/json-ld.tsx`, `src/app/sitemap.ts`.
- Para alterar grupos: revisar `src/app/grupos-e-caravanas/page.tsx` e `src/components/sections/groups/*.tsx`.
