# 1. Situação atual

Produção atual: https://aquino-turismo.vercel.app
Framework: Next.js 16.3.0 (App Router)
Branch: main
Configuração de domínio: Vercel (.vercel.app)
Fonte principal de siteUrl: `src/lib/site.ts`


# 2. Referências ao domínio Vercel

Após uma busca profunda por todo o código (buscando por "vercel.app", "aquino-turismo", links estáticos e absolutos), não foram encontradas "hardcodings" arbitrárias (espalhadas ao acaso). A arquitetura do projeto está perfeitamente centralizada.

Tabela:

| Arquivo | Local | URL encontrada | Precisa mudar? | Motivo |
|---|---|---|---|---|
| `src/lib/site.ts` | Linha 1 | `https://aquino-turismo.vercel.app` | SIM | Centraliza a "Base URL" do projeto, determinando todo o SEO técnico (Canonical, JSON-LD, Sitemap, Open Graph). |


# 3. Canonical

As rotas configuram canonical programaticamente via Metadata API do Next.js, utilizando indiretamente ou diretamente a variável `SITE_URL`. 

Listagem das situações:
- `/` → atualmente em `https://aquino-turismo.vercel.app/`
- `/passeio-de-lancha-em-paraty` → atualmente aponta para a Vercel
- `/passeio-de-escuna-em-paraty` → atualmente aponta para a Vercel
- `/passeio-de-jipe-em-paraty` → atualmente aponta para a Vercel
- `/grupos-e-caravanas` → atualmente aponta para a Vercel

**Conclusão**: Excelente estado. Nenhum canonical está ausente ou duplicado. Alterar o `SITE_URL` resolverá 100% das páginas automaticamente.


# 4. Sitemap

Arquivo: `src/app/sitemap.ts`
O sitemap é gerado de maneira dinâmica através das ferramentas nativas do Next.js (MetadataRoute.Sitemap) baseando-se no `SITE_URL`. Todas as URLs públicas principais (Home, Grupos, Escuna, Jipe, Lancha) estão presentes e recebem perfeitamente o domínio atrelado da Vercel no momento. Não existem lixos ou rotas que não deveriam ser indexáveis, nem paths relativos incorretos.


# 5. Robots

Arquivo: `src/app/robots.ts`
Gera o `robots.txt` estático nativamente permitindo indexação total (`Allow: /`). Ele expõe o link absoluto para o Sitemap (atualmente em `https://aquino-turismo.vercel.app/sitemap.xml`). Após a troca da variável global, ele reportará a nova raiz corretamente.


# 6. JSON-LD

Schemas encontrados centralizados em `src/components/seo/json-ld.tsx` e instanciados por rota:
- `TravelAgency` (Organization)
- `WebSite`
- `BreadcrumbList` (por passeio)
- `Service` (por passeio)
- `FAQPage` (por passeio e home)

Nenhum Schema possui a URL da Vercel "hardcoded" de forma solta. O projeto inteiro usa interpolação (ex: `` `${SITE_URL}/#organization` ``). As propriedades `@id`, `url`, e `logo` mudarão simultaneamente.


# 7. Open Graph

O Open Graph (utilizado por WhatsApp, Instagram, Facebook) assim como o Twitter Card, é herdado do `layout.tsx` (`metadataBase: new URL(SITE_URL)`). Isso garante com que URLs relativas passadas para os objetos de imagens como `images: ["/og-image.jpg"]` sejam montadas com o domínio canônico (Vercel atual). Está perfeitamente configurado.


# 8. Variáveis de ambiente

Não há dependência de arquivos `.env` ou variáveis de ambiente para a montagem de domínios ou links, indicando que não existem configurações em painéis de variáveis dentro da Vercel impactando o comportamento de canonicals.


# 9. Vercel

O projeto está conectado ao GitHub, e publicando sempre que a branch `main` sofre atualização. O domínio oficial (.com.br) poderá ser acoplado nativamente na Vercel via "Project > Settings > Domains". Não existem conflitos ou rewrites presentes em `vercel.json` (apenas um `{"name": "aquinotour"}`).


# 10. DNS

A estratégia recomendada quando chegarmos no momento da configuração (NÃO CONFIGURAR AGORA) envolverá acessar o painel do Registro.br e utilizar o serviço de autoridade da Vercel através dos "Apontamentos". A tabela conceitual ficará entre:

- A (Root/Apex) → `76.76.21.21`
- CNAME (www) → `cname.vercel-dns.com`


# 11. WWW / domínio raiz

**Recomendação técnica**: Optar pelo "Domínio Raiz" (sem www, isto é, `https://dominio.com.br`) como canônico oficial. Dentro do painel de Domains da Vercel, o `www` deverá ser inserido e sua configuração deverá ser "Redirect to (dominio.com.br) - Permanent (301)". Isso consolidará todo PageRank na versão limpa e mais curta, impedindo a ramificação de peso SEO no Google.


# 12. Search Console

A criação e verificação da propriedade no GSC deverá ocorrer apenas através do método "Propriedade de Domínio" (validação pelo TXT no DNS / Registro.br), de modo a agregar em uma única visão métricas HTTP, HTTPS, www e root. O Sitemap a ser enviado na plataforma será a URL base + `/sitemap.xml`.


# 13. Riscos encontrados

**CRÍTICO**:
- Adicionar o domínio na Vercel e alterar os apontamentos sem antes atualizar o arquivo `site.ts`. Isso faria com que o novo domínio oficial instruísse ativamente os bots do Google (via `<link rel="canonical">` e Sitemap) de que o domínio da Vercel ainda seria a origem original do conteúdo. O código precisa mudar antes/durante a ativação.

**IMPORTANTE**:
- Assegurar na aba Domains da Vercel que o antigo `aquino-turismo.vercel.app` redirecione de forma permanente (301) para a raiz do novo domínio se não o quisermos como ambiente de staging indexável.


# 14. Arquivos que precisarão ser alterados

Apenas um arquivo precisa sofrer intervenção arquitetônica de configuração:
- `src/lib/site.ts`


# 15. Ordem recomendada para a migração

A transição deve ser orquestrada com precisão de cronograma. Segue a sequência segura:

1. preparar código;
2. alterar base URL;
3. atualizar SEO técnico;
4. rodar build;
5. adicionar domínio à Vercel;
6. receber registros DNS da Vercel;
7. configurar Registro.br;
8. validar domínio;
9. configurar domínio principal;
10. testar HTTPS;
11. testar redirects;
12. testar sitemap;
13. testar robots;
14. testar structured data;
15. configurar Search Console;
16. enviar sitemap;
17. monitorar indexação.
